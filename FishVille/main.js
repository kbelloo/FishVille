// $('[data-toggle="popover"]').popover(); 
//
//$('#myPopover').popover();


document.getElementById("order-button").addEventListener("click", function(){
    
    if($("input[type=text]").val() !== "") {
        
        alert("your order has been received and is now being processed.");
    }
})

document.getElementById("inputBox").addEventListener("click", function(){
    
    if($(".input").val() !== "") {
        
        alert("Your message has been received. We will be in touch soon");
    }
})



