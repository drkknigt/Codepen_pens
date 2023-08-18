  const menu = document.querySelector(".menu");
      menu.addEventListener("click", function() {
        document.querySelector(".top").classList.toggle("showw");
        for (let i = 0; i <= 2; i++) {
          document.querySelectorAll(".line")[i].classList.toggle("close");
        }
      });
      document.querySelector(".btn3").addEventListener("click", function() {
        document.querySelector(".btn3").classList.toggle("btn3-up");
        for (let i = 0; i <= 3; i++) {
          document.querySelectorAll(".sub")[i].classList.toggle("up");
        }
      });