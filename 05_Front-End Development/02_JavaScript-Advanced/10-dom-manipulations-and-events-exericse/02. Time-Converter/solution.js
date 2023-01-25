function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    
    buttons.forEach(btn => { btn.addEventListener('click', onClickConvert);
    });
    
    const ratiosToOneDay = {
        'days': 1,
        'hours': 24,
        'minutes': 1440,
        'seconds' : 86400,
    }

    const converter = function (value, units) {
        const toHours = value / ratiosToOneDay[units];
        return {
            days: toHours,
            hours: toHours * ratiosToOneDay.hours,
            minutes: toHours * ratiosToOneDay.minutes,
            seconds: toHours * ratiosToOneDay.seconds,
        }
    }

    function onClickConvert(ev) {
        const targetElement = ev.target.parentNode.querySelector('input[type="text"]');
        let result =  converter(targetElement.value, targetElement.id)
        days.value = result.days,
        hours.value = result.hours,
        minutes.value = result.minutes,
        seconds.value = result.seconds
    }
    

}

