function timer() {
    let deadLine = '2020-08-23';

    function getTime(end) {
        let t = Date.parse(end) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    function setTime(id, end) {
        let timer = document.getElementById(id),
            second = timer.querySelector('.seconds'),
            minute = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            interval = setInterval(updateTimer, 1000);

        function updateTimer() {
            let t = getTime(end);

            if (t.seconds < 10) {
                second.textContent = '0' + t.seconds;
            } else if (t.minutes < 10) {
                minute.textContent = '0' + t.minutes;
            } else if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                second.textContent = t.seconds;
                minute.textContent = t.minutes;
                hours.textContent = t.hours;
            }

            if (t.total <= 0 || t.seconds < 0 || t.minutes < 0) {
                second.textContent = '00';
                minute.textContent = '00';
                hours.textContent = '00';
                clearInterval(interval);
            }
        }
    }

    setTime('timer', deadLine);
}

module.exports = timer;