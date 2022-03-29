document.getElementById("knowmore").addEventListener('click', () => {
    let ab=document.getElementById("about");
    ab.style.display="none";
    let ed = document.getElementById("education");
    ed.style.display="flex";
});
let f=false,t=true;
document.getElementById("head_cr").addEventListener('click', () => {
    if(f==false)
    {
        document.querySelector(".auction2").style.display="block";
        document.querySelector(".auction1").style.display = "none";
        t=false;
    }
    else if(t!=false)
        {
            document.querySelector(".auction2").style.display = "none";
        }
    f=!f;
});
document.getElementById("head_ed").addEventListener('click', () => {
    if (t == false) {
        document.querySelector(".auction1").style.display = "block";
        document.querySelector(".auction2").style.display = "none";
        f=false;
    }
    else if(f!=false) {
        document.querySelector(".auction1").style.display = "none";
    }
    t = !t;
});
document.getElementById("ab_pre").addEventListener('click',() => {
    let ab = document.getElementById("about");
    ab.style.display = "flex";
    let ed = document.getElementById("education");
    ed.style.display = "none";
});
document.getElementById("experience").addEventListener('click', () => {
    let ab = document.getElementById("skill");
    ab.style.display = "none";
    let ed = document.getElementById("project");
    ed.style.display = "flex";
});
let c=1;
document.getElementById("forward").addEventListener('click',() => {
    document.querySelector(".box"+String(c)).style.display="none";
    if(c+1>3)
    c=0;
    c+=1;
    document.querySelector(".box"+String(c)).style.display="block";
});
document.getElementById("reverse").addEventListener('click', () => {
    document.querySelector(".box" + String(c)).style.display = "none";
    if (c - 1 <1)
        c = 4;
    c -= 1;
    document.querySelector(".box" + String(c)).style.display = "block";
});
document.querySelector(".img1").addEventListener('mouseenter',() => {
    if(window.innerWidth>1100)
    document.querySelector(".info").style.display="flex";
});
document.querySelector(".img1").addEventListener('mouseleave',() => {
    document.querySelector(".info").style.display = "none";
});
document.querySelector(".img2").addEventListener('mouseenter', () => {
    if (window.innerWidth > 1100)
    document.querySelector(".info2").style.display = "flex";
});
document.querySelector(".img2").addEventListener('mouseleave', () => {
    document.querySelector(".info2").style.display = "none";
});
document.getElementById("ed_pre").addEventListener('click', () => {
    let ed = document.getElementById("education");
    ed.style.display = "flex";
    let pr = document.getElementById("skill");
    pr.style.display = "none";
});
document.getElementById("contact").addEventListener('click', () => {
    let ab = document.getElementById("project");
    ab.style.display = "none";
    let ed = document.getElementById("con");
    ed.style.display = "flex";
});
document.getElementById("back").addEventListener('click', () => {
    let ab = document.getElementById("project");
    ab.style.display = "flex";
    let ed = document.getElementById("con");
    ed.style.display = "none";
});
let tog=document.querySelector("#toggle");
document.querySelector(".switch").addEventListener('click', () => {
    if (tog.checked) {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }
    else
        document.querySelector("html").setAttribute("data-theme", "light");
});
document.getElementById("skl").addEventListener('click', () => {
    let ed = document.getElementById("education");
    ed.style.display = "none";
    let sk = document.getElementById("skill");
    sk.style.display = "flex";
});
document.getElementById("sk_pre").addEventListener('click', () => {
    let pr = document.getElementById("project");
    pr.style.display = "none";
    let sk = document.getElementById("skill");
    sk.style.display = "flex";
});
document.querySelector(".img3").addEventListener('mouseenter', () => {
    if (window.innerWidth > 1100)
        document.querySelector(".info3").style.display = "flex";
});
document.querySelector(".img3").addEventListener('mouseleave', () => {
    document.querySelector(".info3").style.display = "none";
});