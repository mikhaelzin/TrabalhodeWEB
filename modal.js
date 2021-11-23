var Modal=document.getElementById(
    "modal"
)
var btn=document.getElementById(
    "open-modal"
)
var close=document.getElementsByClassName(
    "close"
)[0]

btn.onclick=function(){
    Modal.style.display = "block"
}

close.onclick=function(){
    Modal.style.display = "none"
}

window.onclick=function(event){

    if(
        event.target==Modal
    ){
        Modal.style.display= "none"
    }

}