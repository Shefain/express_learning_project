const express = require('express')
const app = express();

const books = [
  {
    id:1,
    name:'Zero to hero in js',
    price: 500
  },
  {
    id:2 ,
    name:'Javascript for dummies',
    price:1000
  },
  {
    id:3,
    name:'Personal Finence',
    price:1500
  }
  ,
  {
    id:4,
    name:'Javascript Definative guide',
    price:2000
  }
]

app.get('/books',(req,res,next) => {

  if (req.query.show == 'all'){
    return res.send(books)
  }
  if(req.query.price == 500){
    const price = books.filter(i => i.price <= 500)
    return res.send(price)
  }


 if(req.query.price == '1000'){
  const result = books.filter((i)=> i.price == 1000)
  return res.send(result)
 }
 return res.send(books)
})

app.post('books',(req,res,next)=>{
  console.log(req.body)
  res.send('hlw')
})



app.listen(4000, ()=>{
  console.log('listining to port 4000')
})
