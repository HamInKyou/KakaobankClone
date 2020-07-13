const navlist = document.getElementsByClassName('nav-list')[0].children;
const drawer = document.getElementsByClassName('drawer').item(0);
const drawer_introduce = document.getElementById('introduce');
const drawer_guide = document.getElementById('guide');
const drawer_help = document.getElementById('help');
console.log(navlist);
console.log(drawer);

drawer.addEventListener("mouseover", (e) => {
    drawer.style.display = "flex";
});
drawer.addEventListener("mouseleave", (e) => {
    drawer.style.display = "none";
});

function hover(i) {
    drawer.style.display = "flex";
    switch(i){
        case 0:
            drawer_introduce.style.display = "flex";
            drawer_guide.style.display = "none";
            drawer_help.style.display = "none"
            break;
        case 1:
            drawer_introduce.style.display = "none";
            drawer_guide.style.display = "flex";
            drawer_help.style.display = "none"
            break;
        case 2:
            drawer_introduce.style.display = "none";
            drawer_guide.style.display = "none";
            drawer_help.style.display = "flex"
            break;
    }
}

for(let i = 0 ; i < 3; i++){
    navlist[i].addEventListener("mouseover", (e) => {
        hover(i);
    });
    navlist[i].addEventListener("mouseleave", (e) => {
        drawer.style.display = "none";
    });
}
