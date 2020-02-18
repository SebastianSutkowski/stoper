const start = document.querySelector('.mainn')
const Time = document.querySelector('.time div')
const reset = document.querySelector('.reset')
let i
let z = 0
let Milis
let Miliss
let Seconds
let Secondss

function rozpoczecie() {
    let funLicz = setInterval(Licz, 10)


    function Licz() {

        if (i == 1) {
            clearInterval(funLicz)

        }
        if (i == 0) {
            z++

            Milis = z % 100
            Seconds = (z - Milis) / 100
            if (Milis < 10) {
                Miliss = "0" + Milis

            } else {
                Miliss = "" + Milis
            }
            if (Seconds < 10) {
                Secondss = "0" + Seconds
            } else {
                Secondss = "" + Seconds
            }
            Time.textContent = `${Secondss}:${Miliss}`

        }
    }
    if (i == 0) {
        start.textContent = "Start"
        i = 1;
        console.log('wylaczam')

    } else {
        start.textContent = "Pauza"
        i = 0;
    }
}
start.addEventListener('click', rozpoczecie)
reset.addEventListener('click', function () {
    z = 0;
    Time.textContent = `00:00`
})