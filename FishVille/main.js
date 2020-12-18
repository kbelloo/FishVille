

let overlay = document.getElementById("overlay");
let openModal = document.getElementById('open-modal');
let closeModal = document.getElementById('close-modal');
let orderButton = document.getElementById('order-button');


overlay.style.display = "none";

openModal.addEventListener("click", function(e){
   
    if($("input[type=text]").val() !== "") {
        
        overlay.style.display = "block";
        e.preventDefault();
        orderButton.style.display = "none";
        
    }  
});

closeModal.addEventListener("click", function(e){
    
    overlay.style.display = "none";
    e.preventDefault();
    orderButton.style.display = "block";
})


document.getElementById("inputBox").addEventListener("click", function(){
    
    if($(".input").val() !== "") {
        
        alert("Your message has been received. We will be in touch soon");
    }
})



