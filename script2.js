let btnLogin = document.getElementById("btnLogin");
const btn_LOGOUT = document.getElementById("btn_LOGOUT");
let btnDescription = document.getElementById("btnDescription");
let username = document.getElementById("username");
let passwordtxt = document.getElementById("passwordtxt");

function signup() {
    location.replace("signup.html");
}

$(document).ready(function () {
    // Burger 1 order
    $("#btn_order_burger1").click(function () {
        let Order_burger_1 = $("#Order_burger_1").val();
        if (Order_burger_1 !== "0") {
            $("#order_list").append(`<p>${Order_burger_1} pcs burger #1</p>`);
        }
    });

    $("#clear_order_burger1").click(function () {
        $("#Order_burger_1").val("");
    });

    // Burger 2 order
    $("#btn_order_burger2").click(function () {
        let Order_burger_2 = $("#Order_burger_2").val();
        if (Order_burger_2 !== "0") {
            $("#order_list").append(`<p>${Order_burger_2} pcs burger #2</p>`);
        }
    });

    // Burger 3 order with validation
    $("#btn_order_burger3").click(function () {
        let Order_burger_3 = $("#Order_burger_3").val();
        if (Order_burger_3 === "0" || isNaN(Order_burger_3)) {
            alert("Invalid input");
        } else {
            $("#order_list").append(`<p>${Order_burger_3} pcs burger #3</p>`);
        }
    });

    // Soda 1 order
    $("#btn_order_soda1").click(function () {
        let Order_soda_1 = $("#Order_soda_1").val();
        if (Order_soda_1 !== "0") {
            $("#order_list").append(`<p>${Order_soda_1} pcs Mountain Dew Sakto</p>`);
        }
    });

    // Soda 2 order
    $("#btn_order_soda2").click(function () {
        let Order_soda_2 = $("#Order_soda_2").val();
        if (Order_soda_2 !== "0") {
            $("#order_list").append(`<p>${Order_soda_2} pcs Coke 2L</p>`);
        }
    });

    // Soda 3 order
    $("#btn_order_soda3").click(function () {
        let Order_soda_3 = $("#Order_soda_3").val();
        if (Order_soda_3 !== "0") {
            $("#order_list").append(`<p>${Order_soda_3} pcs Coke in Can</p>`);
        }
    });

    // Confirm order
    $("#btn_order_confirm").click(function () {
        let order_confirm = confirm("Proceed to payment?");
        if (order_confirm) {
            swal("Order Confirmed", "", "success");
            $("#order_list").empty(); // Clear the order list
        } else {
            swal("Order Cancelled", "", "error");
        }
    });

    // Clear all orders
    $("#btn_order_clear").click(function () {
        $("#order_list").empty();
    });
});

// LOGIN button logic
btnLogin.addEventListener("click", function () {
    let username_txt = username.value;
    let password_txt = passwordtxt.value;

    if (username_txt === "" || password_txt === "") {
        swal("Text fields must not be empty", "", "warning");
    } else if (username_txt === "username" && password_txt === "password") {
        swal("Welcome", "", "success");
        location.replace("mainpage.html");
    } else {
        swal("Incorrect!", "", "error");
    }
});


// Button hover effect
btnDescription.addEventListener("mouseover", function () {
    btnDescription.style.transform = "scale(1.1)";
});
document.querySelectorAll("[scaletext]").forEach(function (element) {
    element.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    });
    element.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});
