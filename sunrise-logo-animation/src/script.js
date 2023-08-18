setInterval(function reload(){
    var container = document.getElementById("body");
    var content = container.innerHTML;
    container.innerHTML= content; 
},13000);