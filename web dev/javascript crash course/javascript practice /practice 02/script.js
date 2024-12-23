var rocket = document.querySelector(".img1");

var city = document.querySelector(".img2");

var btn = document.querySelector("button");

btn.addEventListener("click",function () {
      var src1 = rocket.src;
      var src2 = city.src;

      rocket.src = src2;
      city.src = src1;
})
