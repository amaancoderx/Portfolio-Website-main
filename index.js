function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

var typed = new Typed(".text-type",{
    strings: ["Graphic Designer","Youtuber","Content Creator","Web Developer" , "Programmer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true
})
const w = window.open() // access the "about:blank" window you've opened
w.document.body.innerHTML = "<h1>You can add HTML something like this</h1>"
// or access other parts to add more JS or CSS
const style = w.document.createElement("link")
link.href = "/path/to.css"
link.rel = "stylesheet"
w.document.head.appendChild(style)
