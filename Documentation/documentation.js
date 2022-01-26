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


fetch("../component/alert/alert.html")
.then(res => res.text())
.then(html => document.getElementById("alerts-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/avatar/avatar.html")
.then(res => res.text())
.then(html => document.getElementById("avatar-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/badge/badge.html")
.then(res => res.text())
.then(html => document.getElementById("badge-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/button/button.html")
.then(res => res.text())
.then(html => document.getElementById("button-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/card/card.html")
.then(res => res.text())
.then(html => document.getElementById("cards-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/form/form.html")
.then(res => res.text())
.then(html => document.getElementById("form-container").innerHTML = html)
.catch(err => console.log(err));

fetch("../component/image/image.html")
.then(res => res.text())
.then(html => document.getElementById("responsive-image-ctn").innerHTML = html)
.catch(err => console.log(err));




