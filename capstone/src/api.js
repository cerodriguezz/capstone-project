import { json } from "react-router";

export async function FetchProducts (){
  return fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())


}

export async function SingleProducts () {
    fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.json())
        .then((json) => console.log(json));
}

export async function NewProduct () {
    fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "Vinyl",
    price: 13.5,
    description: "Jungle",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
}

export async function Carts () {
fetch("https://fakestoreapi.com/carts/user/1")
    .then((res) => res.json())
    .then((json) => console.log(json));

}

export async function Users () {
  fetch ('https://fakestoreapi.com/users',{
    method:"POST",
    body:JSON.stringify(
        {
            email:'John@gmail.com',
            username:'johnd',
            password:'m38rmF$',
            name:{
                firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        }
    )
})
    .then(res=>res.json())
    .then(json=>console.log(json))
    
}
