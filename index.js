const express = require('express');

const app = express();


const orders = [
    {
        customer:"Saif Marwan",
        address:{
            latitude:33.3266,
            longitude:44.3761
        },
        items:[
            {
                name:"Milk",
                count:1,
                price:1.5,
                total:1.5
            }
        ],
        total:1.5,
        discount:0,
        totalAfterDiscount:1.5
    },
    {
        customer:"Adel Ahmed",
        address:{
            latitude:33.3266,
            longitude:44.3761
        },
        items:[
            {
                name:"Eggs",
                count:30,
                price:0.20,
                total:6
            }
        ],
        total:6,
        discount:20,
        totalAfterDiscount:4.8
    }
  ];



  app.get('/', (req, res) => {
    res.json({ orders: orders});
  });

app.listen(3000, () => {})