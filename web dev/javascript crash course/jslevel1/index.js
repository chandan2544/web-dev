// event delegation = jb aap event listener se kai saare different Elements k event ko handle kr sake 
// event listener ko parent pr lagao and unko id,class ya fir tag ke basis pr differentiate karke different tast karao

var parent = document.querySelector("#parent")
parent.addEventListener("click",function(details){
    if (details.target.id==="play") {
        console.log("play song");
    }else if(details.target.id==="pause"){
        console.log("pause song");
    }
})