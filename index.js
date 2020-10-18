var clickBtn = document.querySelector(".btn")
var msg = document.querySelector('.message')


function clicked() {

    msg.innerHTML = "Have A Good Day Kagiso! You've Got This!!!!!!!!!!!!"
    setTimeout(function () {
        msg.innerHTML = ""
    }, 4000)
}
clickBtn.addEventListener('click', clicked)
