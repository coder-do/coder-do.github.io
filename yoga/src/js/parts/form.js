function form() {
    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMsg = document.createElement('div'),
        form2 = document.getElementById('form');

    let msg = {
        loading: 'Загрузка...',
        fail: 'Упс! Произошла ошибка',
        success: 'Спасибо! Скоро мы свяжемся с вами.'
    }

    function sendForm(el) {
        el.addEventListener('submit', function (e) {
            e.preventDefault();
            statusMsg.style.color = 'antiquewhite';
            statusMsg.style.marginTop = '15px';
            el.appendChild(statusMsg);

            let formData = new FormData(el);


            function Post(data) {

                return new Promise(function (resolve, reject) {
                    let req = new XMLHttpRequest();
                    req.open('POST', 'server.php');
                    req.setRequestHeader('Content', 'application/x-www-form-urlencoded');
                    let obj = {};
                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    req.addEventListener('readystatechange', function () {
                        if (req.readyState < 4) {
                            resolve();
                        } else if (req.readyState === 4 && req.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    req.send(JSON.stringify(obj));
                });
            }

            function clear() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            Post(formData)
                .then(() => statusMsg.innerHTML = msg.loading)
                .then(() => statusMsg.innerHTML = msg.success)
                .catch(() => statusMsg.innerHTML = msg.fail)
                .then(() => clear())
        });
    };
    sendForm(form);
    sendForm(form2);
}

module.exports = form;