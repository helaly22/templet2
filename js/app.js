const fireworkContainer = document.querySelector('.fireworks-container')
const daysSpan = document.querySelector('#days')
const hoursSpan = document.querySelector('#hours')
const minutesSpan = document.querySelector('#minutes')
const secondsSpan = document.querySelector('#seconds')
const newYear = document.querySelector('#new-year')
const msg = document.querySelector('.msg');

const now = new Date()

newYear.innerHTML = 'koko birthday'

const countToDate = new Date('17 mar 2024').getTime()

const countdown = () => {
    const now = new Date().getTime()

    const distance = countToDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysSpan.innerHTML =formatTime(days);
    hoursSpan.innerHTML =formatTime(hours)
    minutesSpan.innerHTML = formatTime(minutes)
    secondsSpan.innerHTML = formatTime(seconds)

    if (distance < 0) {
        clearInterval(countdownInterval)
        fireworkContainer.classList.add('background')
        msg.classList.add('error')
        msg.innerHTML = `I wish you happy birthday to you.<br>
         Hope this year will be better than the others.<br>
         You are wonderful the way you are.<br>
         Birthday girl <3.<br>
         Sweet 21's.<br>
         Take care of your self,be safe bestie.<br> Wish you all goodluck.<br>your bestfriend be happy girl `;
         fireworks.start()
    } 
        
    
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown()

const countdownInterval = setInterval(countdown, 1000)

const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})
