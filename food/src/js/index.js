window.addEventListener('DOMContentLoaded', function () {

    const tab = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        menu = require('./modules/menu'),
        form = require('./modules/form'),
        slider = require('./modules/slider');


    form();
    menu();
    tab();
    slider();
    modal();
    timer();
});