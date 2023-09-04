function _drawClock() {
    let today = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[today.getMonth()]
    let date = today.getDate()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let year = today.getFullYear()
    let ampm = "AM"
    if (minutes < 10) {
        // @ts-ignore
        minutes = "0" + minutes;
    }
    if (minutes < 1) {
        // @ts-ignore
        minutes = "0" + "0"
    }
    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }
    document.getElementById('clock').innerHTML = `<div>${hours}<span>:</span>${minutes} <span> </span> ${ampm} <span> </span>${month} </span> </span> ${date} <span> </span>${year}</div>`
}

export class ClockController {
    constructor() {
        _drawClock()
        setInterval(_drawClock, 1000)
    }
}
