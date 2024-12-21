import { itemList } from '../Landing pages/Items'
import { store } from '../status/store'
import { add, addAmount } from "../status/actions";
import {  addAnItem } from '../userPurchase/user-items'
import $ from 'jquery';

function inforScreen(){

    let itemInfor = $('<div></div>')
    itemInfor.attr('id', 'infor-screen')

    let inforLabel = $('<h1></h1>')
    inforLabel.text('ITEM INFOR')
    inforLabel.appendTo(itemInfor)
    
    let screenPic = $('<img>')
    screenPic.attr('id', 'screen-pic')
    screenPic.attr('src', `${process.env.PUBLIC_URL}/Pics/question mark.jpeg`)
    screenPic.attr('alt', 'item image')
    screenPic.appendTo(itemInfor)

    let priceDisplay = $('<h3></h3>')
    priceDisplay.text('R')
    priceDisplay.attr('id', 'price-display')
    priceDisplay.appendTo(itemInfor)

    let colorLabel = $('<h4></h4>')
    colorLabel.addClass('display-label')
    colorLabel.text('Colors')
    colorLabel.appendTo(itemInfor)

    let colorDisplay = $('<div></div>')
    colorDisplay.attr('id', 'color-display')
    colorDisplay.addClass('size-and-color')
    colorDisplay.appendTo(itemInfor)

    let sizeLabel = $('<h4></h4>')
    sizeLabel.addClass('display-label')
    sizeLabel.text('Sizes')
    sizeLabel.appendTo(itemInfor)

    let sizeDisplay = $('<div></div>')
    sizeDisplay.attr('id', 'size-display')
    sizeDisplay.addClass('size-and-color')
    sizeDisplay.appendTo(itemInfor)
    
    $('#view-all-screen').append(itemInfor)
    hoverElements()
}//end of infor screen

export function createItems(arr){

    inforScreen()

    var pos = Math.floor(Math.random() * arr.length)
        var randomPics = [arr[pos]]
        arr.splice(pos, 1)
        
        while(arr.length !== 0){
            pos = Math.floor(Math.random() * arr.length)
            randomPics.push(arr[pos])
            arr.splice(pos,1)
        
        }//end of while loop
        
        randomPics.forEach((item)=>{
            let container = $('<div></div>')
            container.addClass('item-display')
            container.attr('id', item.id.toString())

            let pic = $('<img>')
            pic.addClass('pic')
            pic.attr('src', item.picUrl)
            pic.attr('alt', 'Item-image')
            
            let priceTag = $('<h1></h1>')
            priceTag.addClass('price-tag')
            priceTag.text('R ' + item.price.toString())

            let cartButton = $('<button></button>')
            cartButton.addClass('cart-button')
            cartButton.text('+Add cart')
        
            cartButton.click((e)=>{
                newCart(e.target)
                $('.cart-button').prop('disabled', true)
            })
            
            cartButton.attr('id', item.id.toString())

        container.append(pic) 
        container.append(priceTag)
        container.append(cartButton)
        $('#view-all-screen').append(container)

        })//end of each loop

}//end of create item function

function newCart(val){

    var color = 'Not selected!';
    var size = 'Not selected!'

    let crrId = Number(val.id)
    let objItem = itemList.find(item => item.id === crrId)

    let arr = objItem.picUrl.split('/')
    let typeOfItem= arr[arr.length - 2]

    ///setting of colors
    if(objItem.colors.length === 1){color = objItem.colors[0]}
    //done settinf colors

    let selectForm = $('<div></div>')
    selectForm.attr('id', 'select-form')
   
    let picPriceSection = $('<section></section>')
    picPriceSection.attr('id', 'price-image')
    picPriceSection.appendTo(selectForm)

    let pic = $('<img>')
    pic.attr('id', 'item-pic')
    pic.attr('src', objItem.picUrl)
    pic.appendTo(picPriceSection)

    let iteminfor = $('<div></div>')
    iteminfor.attr('id', 'infor-tag')
    iteminfor.appendTo(picPriceSection)

    let priceTag = $('<h1></h1>')
    priceTag.attr('id', 'priceTag')
    priceTag.addClass('tags')
    priceTag.text('Price: R ' + objItem.price)

    let selectedColor = $('<h1></h1>')
    selectedColor.attr('id', 'colorTag')
    selectedColor.addClass('tags')
    selectedColor.text('Color: ' + color)
    selectedColor.appendTo(iteminfor)

    let selctedSize = $('<h1></h1>')
    selctedSize.attr('id', 'sizeTag')
    selctedSize.addClass('tags')
    selctedSize.text('Size: '+ size)
    
    selctedSize.appendTo(iteminfor)
    iteminfor.append(priceTag, selectedColor, selctedSize)

    let clrSection = $('<section></section>')
    clrSection.attr('id', 'color-selection')
    clrSection.addClass('select-sections')
    clrSection.appendTo(selectForm)

    if(objItem.colors.length > 1) {

    objItem.colors.forEach((item)=>{

        let colorBtn = $('<button></button>')
        colorBtn.addClass('color-btn')
        colorBtn.attr('value', item)
        colorBtn.text(item) 
        colorBtn.click((e)=>{
            selectedColor.text('Color: ' + e.target.value)
        })
        colorBtn.appendTo(clrSection)

    })//end of each loop

}//end of statement

else{selectedColor.text('Color: ' + objItem.colors[0])}

    let sizeSection = $('<section></section>')
    sizeSection.attr('id', 'size-selection')
    sizeSection.addClass('select-sections')
    
    sizeSection.appendTo(selectForm)

    if(typeOfItem === 't-shirt'  || typeOfItem === 'jeans' ){
        let sizesArr = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

        sizesArr.forEach((item)=>{

            let sizeBtn = $('<button></button')
            sizeBtn.addClass('size-btn')
            sizeBtn.attr('value', item)
            sizeBtn.text(item)
            sizeBtn.click((e)=>{
                selctedSize.text('Size: ' + e.target.value)
            })

            sizeBtn.appendTo(sizeSection)

        })//end of each loop

    }//end of if

    else if(typeOfItem === 'shoes'){
        let shoeSizes = ['Not selected!','6', '7', '8', '9', '10', '11']
    
        let sizeLabel = $('<label></label>')
        sizeLabel.attr('id', 'size-label')
        sizeLabel.text('Enter size')
        
        let sizeOption = $('<select></select>')
        sizeOption.attr('id', 'size-dropdown')
        sizeOption.change(()=>{selctedSize.text('Size: '+ sizeOption.val())})
    
            shoeSizes.forEach((item)=>{
                let option = $('<option></option>')
                option.attr('value', item)
                option.text(item)
                option.appendTo(sizeOption)
            })
     
    sizeLabel.appendTo(sizeSection)
    sizeOption.appendTo(sizeSection)

    }//end of if else

    else{selctedSize.text('Size: Unisize')}//end of else 

    let cancelBtn = $('<button></button>')
    cancelBtn.attr('id', 'cancel-btn')
    cancelBtn.addClass('form-btn')
    cancelBtn.text('Cancel')
    cancelBtn.click(()=>{
        
        $('.cart-button').prop('disabled', false)
        emptyEveryThing()
        selectForm.empty().remove()
    })
    cancelBtn.appendTo(selectForm)

    let confirmBtn = $('<button></button>')
    confirmBtn.attr('id', 'confirm-btn')
    confirmBtn.addClass('form-btn')
    confirmBtn.text('Confirm')
    confirmBtn.appendTo(selectForm)
    confirmBtn.click(()=>{

if(selectedColor.text() !== 'Color: Not selected!' && selctedSize.text() !== 'Size: Not selected!'){
    if(store.getState().itemCount < 10){

        let tagPrice = priceTag.text().split(' ')[2]
        store.dispatch(add())
        store.dispatch(addAmount(Number(tagPrice)))
    
        addAnItem({
            picurl: pic.attr('src'),
            color: selectedColor.text(),
            price: tagPrice,
            size: selctedSize.text()
        })  

        $('.cart-button').prop('disabled', false)
        emptyEveryThing()
        selectForm.empty().remove()
    }//end of inner if

    else{alert("Sorry! but you cant order more than 10 items.")}//end of inner else

}//end of if

else{alert('You Have not selected the color or size')}//end of else

    })//end of comfirm func
   
    $('#view-all-screen').append(selectForm)

    function emptyEveryThing(){
        picPriceSection.empty()
        iteminfor.empty()
        sizeSection.empty()
        clrSection.empty()
    }//end of empty
}//new cart funct

function hoverElements(){
    $(document).ready(function(){
        $('.item-display').hover(
            function(){
            let obj = itemList.find((item)=> item.id ===  Number($(this).attr('id')))

            $('#screen-pic').attr('src', obj.picUrl)
            $('#price-display').text('R' + obj.price)
            obj.colors.forEach((color)=>{

        let colorContainer = $('<div></div>')
        colorContainer.addClass('color-container')
        colorContainer.css({
            backgroundColor: color,
        })

        $('#color-display').append(colorContainer)
})//end of each loop

            let shoeArr = [ '6', '7', '8', '9', '10', '11', '12'] 
            let clothArr = ['XS', "S", "M", "L", "XL", "XXL"]

            let arr = obj.picUrl.split('/')
            let clothingType = arr[arr.length - 2]

            if(clothingType === 't-shirt' || clothingType === 'jeans'){

            clothArr.forEach((item)=>{
                let sizeTag = $('<h4></h4>')
                sizeTag.addClass('size-tags')
                sizeTag.text(item)

                sizeTag.appendTo('#size-display')
            })//end of eacj loop

            }//end of if

            else if(clothingType === 'shoes'){
                shoeArr.forEach((item)=>{
                    let sizeTag = $('<h4></h4>')
                    sizeTag.addClass('size-tags')
                    sizeTag.text(item)
    
                    sizeTag.appendTo('#size-display')
                })//end of eacj lo
            }
            else{
                let sizeTag = $('<h4></h4>')
                sizeTag.addClass('size-tags')
                sizeTag.text('Unisze')

                sizeTag.appendTo('#size-display')
            }
    
            },//mouse enter
    
            function(){
                $('#price-display').text('R')
                $('#color-display').empty()
                $('#size-display').empty()
                $('#screen-pic').attr('src', `${process.env.PUBLIC_URL}/Pics/question mark.jpeg`)
            }//mouse out
        )
    })
}

