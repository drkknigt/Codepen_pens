setInterval(function reload(){
    let container = document.getElementById("body");
    let content = container.innerHTML;
    container.innerHTML= content; 
},4000);