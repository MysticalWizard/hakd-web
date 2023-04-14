window.onscroll = function() {
    var nav = document.getElementById('nav');
    if ( document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight ) {
        nav.classList.add("nav-alt");
        document.getElementById("nav-logo").hidden = false;
    } else {
        nav.classList.remove("nav-alt");
        document.getElementById("nav-logo").hidden = true;
    }
}