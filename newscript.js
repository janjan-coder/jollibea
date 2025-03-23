const btn_order_burger1 = document.getElementById("btn_order_burger1");
const btn_order_burger2 = document.getElementById("btn_order_burger2");
const btn_order_burger3 = document.getElementById("btn_order_burger3");
const btn_order_soda1 = document.getElementById("btn_order_soda1");
const btn_order_soda2 = document.getElementById("btn_order_soda2");
const btn_order_soda3 = document.getElementById("btn_order_soda3");

const btn_order = document.getElementsByClassName("btn_order");
let Order_burger_1=document.getElementById("Order_burger_1");
let Order_burger_2=document.getElementById("Order_burger_2");
let Order_burger_3=document.getElementById("Order_burger_3");
let Order_soda_1=document.getElementById("Order_soda_1");
let Order_soda_2=document.getElementById("Order_soda_2");
let Order_soda_3=document.getElementById("Order_soda_3");
let order_list = document.getElementById("order_list");
let passwordtxt= document.getElementById("passwordtxt");
let username= document.getElementById("username");
function signup(){
location.replace("signup.html");
}
btn_order_burger1.addEventListener("click", function(){
  Order_burger_1.value;
  let order=document.createElement("p");
  Order_burger_1.innerHTML = order;
order_list.appendChild(order);
})