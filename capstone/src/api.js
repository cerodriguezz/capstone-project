import { json } from "react-router";

export async function FetchProducts (){
  return fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())


}

export async function FetchSingleProduct (id) {
   return fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json());

}

export async function NewProduct () {
    return fetch("https://fakestoreapi.com/products", {
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

}

export async function Cart (id) {
return fetch(`https://fakestoreapi.com/carts/user/${id}`)
    .then((res) => res.json())

}

export async function CreateUser (details) {
  return fetch ('https://fakestoreapi.com/users',{
    method:"POST",
    body:JSON.stringify(details)
})
    .then(res=>res.json())

    
}

export async function CreateLogin (details) {
  return fetch('https://fakestoreapi.com/auth/login',{
            method:"POST",
            body:JSON.stringify(details)
        })
            .then(res=>res.json())

}

export async function Delete () {
  return fetch('https://fakestoreapi.com/carts/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            
}