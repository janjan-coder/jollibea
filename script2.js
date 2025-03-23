let btnLogin = document.getElementById("btnLogin");
let btn_LOGOUT=document.getElementById("btn_LOGOUT");

function signup(){
    location.replace("signup.html");
}

$(document).ready(function(){
             $("#btn_order_burger1").click(function(){
        
                    var Order_burger_1 = $("#Order_burger_1").val();
                         Order_burger_1.toString();
                            $("#order_list").append("<p>"+ Order_burger_1.toString() + "pcs burger #1", "</p>");
     })
     $("#btn_order_burger2").click(function(){
        
        var Order_burger_2 = $("#Order_burger_2").val();
        Order_burger_1.toString();
            $("#order_list").append("<p>"+ Order_burger_2.toString() + "pcs burger #2", "</p>");
         })
         $("#btn_order_burger3").click(function(){
        
            var Order_burger_3 = $("#Order_burger_3").val();
            Order_burger_3.toString();
                $("#order_list").append("<p>"+ Order_burger_3.toString() + "pcs burger #3", "</p>");
                if(Order_burger_3.length<1){
                    alert("invalid input");
                 
                }
             })
             //this is the code for the soda order
             $("#btn_order_soda1").click(function(){
        
                var Order_soda_1 = $("#Order_soda_1").val();
                Order_soda_1.toString();
                    $("#order_list").append("<p>"+ Order_soda_1.toString() + "pcs Mountain dew sakto", "</p>");
                 })
                 $("#btn_order_soda2").click(function(){
        
                    var Order_soda_2 = $("#Order_soda_2").val();
                    Order_soda_2.toString();
                        $("#order_list").append("<p>"+ Order_soda_2.toString() + "pcs coke 2l", "</p>");
                     })
                    
                     $("#btn_order_soda3").click(function(){
        
                        var Order_soda_3 = $("#Order_soda_3").val();
                        Order_soda_3.toString();
                            $("#order_list").append("<p>"+ Order_soda_3.toString() + "pcs coke in can", "</p>");
                         })
                         $("#btn_order_confirm").click(function(){
                            let order_confirm=confirm("proceed to payment?");
                            if(order_confirm==true){
                                swal("Order Confirmed", " ", "success");
                          $("#order_list").removeChild();              
                                     }
                            else{
                                swal("Order Cancelled", " ", "error");
                            }
                       
                         });
                         $("#btn_order_clear").click(function(){
                            $("#order_list").empty();
                         });
                        });                      

btnLogin.addEventListener("click",function(){
  let username_txt=username.value;
    let password_txt=passwordtxt.value;

    if(username_txt=="username" && password_txt =="password"){
        swal("Welcome", " ", "success");
        location.replace("mainpage.html");
           
    }
    else if(username_txt==false && password_txt==false){
        swal('text fields must not be empty', " ", "warning");
    }
    else{
        swal('incorrect!', " ", "error");
    }
})
btn_LOGOUT.addEventListener("click", function(){
    
     location.replace("signup.html"); 
    
 })
