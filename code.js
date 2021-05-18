// nav
(function nav(){
    const navUl = document.getElementById("navul"), bars = document.getElementById("bars");
    bars.onclick = ()=>{
        navUl.classList.toggle("activeNav")
    }
})()
// aside
    const aside = document.querySelector("aside"),times = document.querySelector(".fa-times"), bag = document.querySelector(".fa-shopping-bag");
    bag.onclick = ()=>{
        aside.classList.add("activeAside");
        aside.style.display = "block"
    }
    times.onclick = ()=>{
        aside.classList.remove("activeAside")
        setTimeout(_=> aside.style.display = "block" , 3 * 1000)
    }

const sun = document.querySelector("#sun");
sun.onclick = ()=>{
    document.body.classList.toggle("moon");
    if(document.body.classList.contains("moon")){
        document.body.style.setProperty('--white', '#18181d');
        document.body.style.setProperty('--main_color', '#fff');
        document.body.style.setProperty('--main_hover', '#eee');
        document.body.style.setProperty('--white_hover', '#2a2a31b7');
        document.body.style.setProperty("background", '#18181d');
        sun.classList.replace("fa-moon" , "fa-sun")
    }
    else{
        document.body.style.setProperty('--white', '#fff');
        document.body.style.setProperty('--main_color', '#18181d');
        document.body.style.setProperty('--main_hover', '#2a2a31b7');
        document.body.style.setProperty('--white_hover', '#eee');
        document.body.style.setProperty("background", '#fff');
        sun.classList.replace("fa-sun" , "fa-moon")
    }
}