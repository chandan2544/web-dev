// jab v forms k saath deal karo yaad rakho ki submit hone pr form page ko reload 
// kr deta h aur tumhe khayal rkhna ki page reload na ho vrna agar page reload hua 
// to javascript nhi chalegi kyuki javascript chal paye usese pehle hi page reload 
// ho chuka hoga

// var nameInp = document.querySelector("#name")
// var emailInp = document.querySelector("#email")

var input = document.querySelectorAll('input[type="text"]')
var form = document.querySelector("form");
var h4 = document.querySelector("h4")

form.addEventListener("submit",function (e) {
    e.preventDefault();
 
    // console.log(nameInp.value);
    // console.log(emailInp.value);

    // from this way we have to specifically select all the input individually not good thing

    // if (nameInp.value ==='' || emailInp.value ==='') {
    //     h4.textContent="error, some fields are blank";
    //     h4.style.color="red";
    // }else{
    //     h4.textContent="";
    //     h4.style.color="black";
    // }

    // better approach 
    for(var i = 0;i<input.length;i++){
        if (input[i].value === '') {
            h4.textContent="error, some fields are blank";
            h4.style.color="red";
            break;
        }else{
            h4.textContent=""; 
        }
    }
})