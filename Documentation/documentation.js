var hamIcon = document.getElementById("hamburg");
var sidebar = document.getElementById("sidebar-mobile");
var isSideBarVisible = false;

var close = false;

function setAttribute(){
    sidebar.setAttribute("style", "display:block");
    sidebar.setAttribute("style","display:block")
}
hamIcon.addEventListener("click", () => {
   (isSideBarVisible) ? sidebar.setAttribute("style", "display:none") : setAttribute()
    isSideBarVisible = !isSideBarVisible;
});

async function runApp(){

 const files = [
    {
        id:"alerts-container",
        source: fetch("../component/alert/alert.html")
    },
    {
        id:"avatar-container",
        source: fetch("../component/avatar/avatar.html")
    },
    {
        id:"badge-container",
        source: fetch("../component/badge/badge.html")
    },
    {
        id:"button-container",
        source: fetch("../component/button/button.html")
    },
    {
        id:"card-container",
        source: fetch("../component/card/card.html")
    },
    {
        id:"form-container",
        source: fetch("../component/form/form.html")
    },
    {
        id:"responsive-image-ctn",
        source: fetch("../component/image/image.html")
    },
 ]

 const promises = await Promise.allSettled(files.map(e => e.source))

 for(let i = 0; i< promises.length;i++){
     const promise = promises[i]
     if(promise.value.status === 200){
        const component = await promise.value.text();
        document.getElementById(files[i].id).innerHTML = component
     }
 }
}
runApp()