const countdown = document.querySelector('.countdown');
const targetTime = new Date();
targetTime.setSeconds(targetTime.getSeconds() + 10);
setInterval( () => {
    const timeLeft = targetTime.getSeconds() - new Date().getSeconds()
    if (timeLeft > 0){
        countdown.innerText = timeLeft;
    } else {
        document.querySelector('bode').hidden = true;
    }
    } , 1000
)

