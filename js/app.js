//cambiar color de nav al dar scroll


/*
    var myNav = document.getElementById('navbarResponsive');
    window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
*/

var map = L.map('mapa').setView([20.7095725, -103.4132148,17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([20.7095725, -103.4132148,17]).addTo(map)
    .bindPopup('Avenida Patria 2085, Zapopan, Jalisco')
    .openPopup();
