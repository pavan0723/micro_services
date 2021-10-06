(function () {
    window.addEventListener("load", function () {
        setTimeout(function () {
            var logo = document.getElementsByClassName('link'); //For Changing The Link On The Logo Image
            logo[0].href = "https://www.rjcollege.edu.in/";
            logo[0].target = "_blank";
            logo[0].children[0].alt = "Implemeting Swagger";
            logo[0].children[0].src = "https://i1.wp.com/www.rjcollege.edu.in/wp-content/uploads/2020/03/rjcollege-logo-new-1.png?w=374&ssl=1"; //For Changing The Logo Image

            /*var bodyBG = document.body.style.backgroundColor = "#fffdf1";*/
            var bodyBG = document.getElementById("swagger-ui").style.backgroundColor = "#fffdf1";
            /*var navbar = document.getElementsByClassName("swagger-ui").style.backgroundColor = "#fffdf1";*/
            var navbar = document.getElementsByClassName("swagger-ui")[0];
            navbar.getElementsByClassName("topbar")[0].style.backgroundColor = "#fde384";
        });
    });
})();