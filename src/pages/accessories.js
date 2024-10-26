import React, { useEffect } from "react";
import { createItems } from "./pages-functions";
import './viewAll.css'
import './viewAll-mobile.css'
import './selectForm.css'
import './infor-screen.css'
import './infor-screen-mobile.css'
import './selectForm-mobile.css'
import { itemList } from '../Landing pages/Items'

function Accessories(){
    
    useEffect(()=>{

var accessoriesArr = itemList.filter((item) =>{return item.picUrl.split('/').indexOf('accessories') !== -1})

createItems(accessoriesArr)

}, [])

    return(
        <>
        
        <div id = 'view-all-screen'>
        </div>

        </>
    )
}

export { Accessories }