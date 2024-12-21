const itemList = [
    {
    id: 1,
    picUrl : `${process.env.PUBLIC_URL}/Pics/female/jeans/jean1.jpg`,
    colors:  ['black', 'grey', 'blue', 'lightgreen'],
    price: 289.36
    },

    {
    id: 2,
    picUrl :`${process.env.PUBLIC_URL}/Pics/female/jeans/jean2.jpg`,
    colors: ['black', 'gray'],
    price: 301.10
    },

    {
    id: 3,
    picUrl : `${process.env.PUBLIC_URL}/Pics/female/jeans/jean3.jpg`,
    colors: ['skyblue'],
    price: 245.78
    },

    {
    id: 4,    
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/jeans/jean4.jpg`,
    colors: ['blue', 'black','green'],
    price: 267.43
    },

    {
    id: 5,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/shoes/shoe1.jpg`,
    colors: ['black', 'blue', 'pink'],
    price: 243.3
    },

    {
    id: 6,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/shoes/shoe2.jpg`,
    colors: ['red', 'blue', ],
    price: 305.42
    },

    {
    id: 7,
    picUrl:`${process.env.PUBLIC_URL}/Pics/female/shoes/shoe3.jpg`,
    colors: ['red', 'blue'],
    price: 267.23
    },

    {
    id: 8,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/shoes/shoe4.jpg`,
    colors: ['black', 'blue', 'pink', 'white'],
    price: 341.10
    },

    {
    id: 9,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/shoes/shoe5.jpg`,
    colors: ['black', 'brown', 'yellow'],
    price: 243.19
    },

    {
    id: 10,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/t-shirt/shirt1.jpg`,
    colors: ['black', 'blue', 'grey', 'pink'],
    price: 78.27
    },

    {
    id: 11,
     picUrl: `${process.env.PUBLIC_URL}/Pics/female/t-shirt/shirt2.jpg`,
     colors: ['black', 'blue', 'grey'],
    price: 90.10
    },

    {
    id: 12,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/t-shirt/shirt3.jpg`,
    colors: ['black', 'blue'],
    price: 60.50
    },

    {
    id: 13,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/t-shirt/shirt4.jpg`,
    colors: ['black', 'white', 'blue', 'pink'],
    price: 78.34
    },

    {
    id: 14,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/jeans/jean1.jpg`,
    colors: ['black', 'grey', 'blue'],
    price: 310
    },

    {
    id: 15,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/jeans/jean2.jpg`,
    colors: ['cyan', 'lime', 'lightblue'],
    price: 232.34
    },

    {
    id: 16,
    picUrl:"/Pics/male/jeans/jean3.jpg",
    colors: ['blue', 'grey', 'lightgreen'],
    price: 278.10
    },

    {
    id: 17,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/shoes/shoe1.jpg`,
    colors: ['brown', 'purple', 'tan'],
    price: 416.34
    },

    {
    id: 18,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/shoes/shoe2.jpg`,
    colors: ['black', 'brown', 'yellow'],
    price: 389.34
    },

    {
    id: 19,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/shoes/shoe3.jpg`,
    colors: ['black', 'tan'],
    price: 345.67
    },

    {
    id: 20,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/shoes/shoe4.jpg`,
    colors: ['black'],
    price: 450.05
    },

    {
    id: 21,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/shoes/shoe5.jpg`,
    colors: ['black', 'brown', 'tan'],
    price: 341.34
    },

    {
    id: 22,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/shoes/shoe6.jpg`,
    colors: ['black', 'tan'],
    price: 403.20
    },

    {
    id: 23,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/t-shirt/shirt1.jpg`,
    colors: ['black', 'grey', 'blue'],
    price: 178.21
    },

    {
    id: 24,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/t-shirt/shirt2.jpg`,
    colors: ['black', 'white', 'gold'],
    price: 123.45
    },

    {
    id: 25,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/t-shirt/shirt3.jpg`,
    colors: ['grey', 'yellow', 'gray'],
    price: 160.34
    },

    {
    id: 26,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/t-shirt/shirt4.jpg`,
    colors: ['grey', 'black', 'brown'],
    price: 79.89,
    },

    {
    id: 27,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry1.jpg`,
    colors: ['silver'],
    price: 20
    },

    {
    id: 28,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry2.jpg`,
    colors: ['gold'],
    price: 23
    },

    {
    id: 29,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry3.jpg`,
    colors: ['silver'],
    price: 60.34
    },

    {
    id: 30,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry4.jpg`,
    colors: ['silver'],
    price: 47.23
    },

    {
    id: 31,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry5.jpg`,
    colors: ['black'],
    price: 170.10
    },

    {
    id: 32,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry6.jpg`,
    colors: ['gold'],
    price: 45.34
    },

    {
    id: 33,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/accessories/jewelry/jewelry7.jpg`,
    colors: ['black'],
    price: 90
    },

    {
    id: 34,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/watches/watch1.jpg`,
    colors: ['gold'],
    price: 170.14
    },

    {
    id: 35,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/watches/watch2.jpg`,
    colors: ['black', 'blue', 'orange'],
    price: 50
    },

    {
    id: 36,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/accessories/watches/watch3.jpg`,
    colors: ['red','grey','brown'],
    price: 70.34
    },

    {
    id: 37,
    picUrl: `${process.env.PUBLIC_URL}/Pics/male/accessories/watches/watch4.jpg`,
    colors: ['black', 'blue','white'],
    price: 85.14
    },

    {
    id: 38,
    picUrl:`${process.env.PUBLIC_URL}/Pics/male/accessories/watches/watch5.jpg`,
    colors: ['grey'],
    price: 70.99
    },

    {
    id: 39,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/hand bag/handbag1.jpg`,
    colors: ['skyblue', 'white','yellow', 'red'],
    price: 150
    },

    {
    id: 40,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/hand bag/handbag2.jpg`,
    colors: ['black', 'white'],
    price: 123.4
    },

    {
    id: 41,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/hand bag/handbag3.jpg`,
    colors: ['pink', 'white', 'wheat', 'whitesmoke'],
    price: 90.45
    },

    {
    id: 42,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/hand bag/handbag4.jpg`,
    colors: ['black'],
    price: 210.4
    },

    {
    id: 43,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/hand bag/handbag5.jpg`,
    colors: ['brown','yellow'],
    price: 70
    },

    {
    id: 44,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry1.jpg`,
    colors: ['silver'],
    price: 78
    },

    {
    id: 45,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry2.jpg`,
    colors: ['silver'],
    price: 89
    },

    {
    id: 46,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry3.jpg`,
    colors: ['gold'],
    price: 45.49
    },

    {
    id: 47,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry4.jpg`,
    colors: ['silver', 'gold'],
    price: 56.04
    },

    {
    id: 48,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry5.jpg`,
    colors: ['silver'],
    price: 78.43
    },

    {
    id: 49,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/jewelry/jewelry6.jpg`,
    colors: ['silver'],
    price: 89.07
    },

    {
    id: 50,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/watches/watch1.jpg`,
    colors: ['gold', 'grey'],
    price: 89
    },

    {
    id: 51,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/watches/watch2.png`,
    colors: ['gold'],
    price: 67.04
    },

    {
    id: 52,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/watches/watch3.jpg`,
    colors: ['green', 'white'],
    price: 89.6
    },

    {
    id: 53,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/watches/watch4.jpg`,
    colors: ['grey', 'silver'],
    price: 180
    },

    {
    id: 54,
    picUrl: `${process.env.PUBLIC_URL}/Pics/female/accessories/watches/watch5.png`,
    colors: ['gold'],
    price: 45.90
    }
]
export { itemList }