let img_icon = document.getElementById("img_icon");
let img_icon2 = document.getElementById("img_icon2");
let img_icon3 = document.getElementById("img_icon3");
let img_icon4 = document.getElementById("img_icon4");
let DivMain2 = document.getElementById("DivMain2");
let passwordCreatetxtBox = document.getElementById("passwordCreatetxtBox");
//this section contains the hovering animation for each div

DivMain2.addEventListener("mousedown", function(){
   $("#paragraphMain2").slideToggle("slow");
});
DivMain2.addEventListener("mouseup", function(){
   $("#paragraphMain2").slideUp("slow");
});
img_icon.addEventListener("mouseover", function(){
    img_icon.style.transform ="scale(1.12)";
    img_icon.style.boxShadow ="10px 8px 5px orange";

})
img_icon.addEventListener("mouseout", function(){
    img_icon.style.transform ="scale(1.00)";
    img_icon.style.boxShadow ="10px 8px 5px grey";
})
img_icon2.addEventListener("mouseover", function(){
    img_icon2.style.transform ="scale(1.12)";
    img_icon2.style.boxShadow ="10px 8px 5px orange";
})
img_icon2.addEventListener("mouseout", function(){
    img_icon2.style.transform ="scale(1.00)";
    img_icon2.style.boxShadow ="10px 8px 5px grey";
})
img_icon3.addEventListener("mouseover", function(){
    img_icon3.style.transform ="scale(1.12)";
    img_icon3.style.boxShadow ="10px 8px 5px orange";
})
img_icon3.addEventListener("mouseout", function(){
    img_icon3.style.transform ="scale(1.00)";
    img_icon3.style.boxShadow ="10px 8px 5px grey";
})
img_icon4.addEventListener("mouseover", function(){
    img_icon4.style.transform ="scale(1.12)";
    img_icon4.style.boxShadow ="10px 8px 5px orange";
})
img_icon4.addEventListener("mouseout", function(){
    img_icon4.style.transform ="scale(1.00)";
    img_icon4.style.boxShadow ="10px 8px 5px grey";
})
 const btn_seeMore1 = document.getElementById("btn_seeMore1");
 const btn_seeMore2 = document.getElementById("btn_seeMore2");
 const btn_seeMore3 = document.getElementById("btn_seeMore3");
 const btn_seeMore4 = document.getElementById("btn_seeMore4");
 btn_seeMore1.addEventListener("mousedown", function(){
    btn_seeMore1.style.transform="scale(1.20)"
    btn_seeMore1.style.background="lightblue";
 })
 btn_seeMore1.addEventListener("mouseup", function(){
    btn_seeMore1.style.transform="scale(1.00)"
    btn_seeMore1.style.background="gold";
 })
 btn_seeMore2.addEventListener("mousedown", function(){
    btn_seeMore2.style.transform="scale(1.20)"
    btn_seeMore2.style.background="lightblue";
 })
 btn_seeMore2.addEventListener("mouseup", function(){
    btn_seeMore2.style.transform="scale(1.00)"
    btn_seeMore2.style.background="gold";
 })
 btn_seeMore3.addEventListener("mousedown", function(){
    btn_seeMore3.style.transform="scale(1.20)"
    btn_seeMore3.style.background="lightblue";
 })
 btn_seeMore3.addEventListener("mouseup", function(){
    btn_seeMore3.style.transform="scale(1.00)"
    btn_seeMore3.style.background="gold";
 })
 btn_seeMore4.addEventListener("mousedown", function(){
    btn_seeMore4.style.transform="scale(1.20)"
    btn_seeMore4.style.background="lightblue";
})
 btn_seeMore4.addEventListener("mouseup", function(){
    btn_seeMore4.style.transform="scale(1.00)"
    btn_seeMore4.style.background="gold";
 })
 
 let SearchBar_index=document.getElementById("SearchBar_index");
//this is a  variable for holding the value of the search box
 const btnid_search = document.getElementById("btnid_search");
//clicking this button will get the value of the searchbox
 btnid_search.addEventListener("click", function(){
SearchBar_index.value;
 let alertColor = alert(SearchBar_index.value + " !");

 })
 $(document).ready(function(){
    $("#Description_1").hide();
    $("#Description_2").hide();
    $("#Description_3").hide();
    $("#Description_4").hide();
    $("#Description_5").hide();
    $("#Description_6").hide();
    $("#Description_7").hide();
    $("#Description_8").hide();
    $("#Branches_sub").hide();
  
  $("#paragraphMain2").hide();

 })
 
 $("#btn_seeMore1").on("click", function(){
    $("#Description_1").fadeToggle("slow");
 
 })
 $("#btn_seeMore2").on("click", function(){
   
   $("#Description_2").slideToggle("slow");
 })
 $("#btn_seeMore3").on("click",function(){
   $("#Description_3").slideToggle("slow");
 })
 $("#btn_seeMore4").on("click",function(){
   $("#Description_4").slideToggle("slow");
 })
 $("#btn_seeMore5").on("click",function(){
   $("#Description_5").slideToggle("slow");
 })
 $("#btn_seeMore6").on("click",function(){
   $("#Description_6").slideToggle("slow");
 })
 $("#btn_seeMore7").on("click",function(){
   $("#Description_7").slideToggle("slow");
 })
 $("#btn_seeMore8").on("click",function(){
   $("#Description_8").slideToggle("slow");
 })
$("#createAcct").on("click", function(){
   location.replace("signup copy.html");
})
$("#btnLogin").on("click", function(){
   $("#passwordtxt").value;
   $("#username").value;
   if($("#username"=="username")&& $("#passwordtxt"=="password")){
      alert("Welcome");
      location.replace("mainpage.html");
   }
   else{
      alert("incorrect!");
    
   }
})
passwordCreatetxtBox.on("focus", function(){
   passwordCreatetxtBox.style.boxShadow="10px 8px 5px lightblue";
})

passwordCreatetxtBox.on("blur", function(){
   passwordCreatetxtBox.style.boxShadow="10px 8px 5px grey";
})


 