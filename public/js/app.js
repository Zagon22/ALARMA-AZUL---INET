const socket = io();

const report = document.getElementById('report')
const light = document.getElementById('light')

console.log("Reportes: ")

socket.on('data', (ready) => {
    const alarm = `¡ATENCIÓN! CÓDIGO AZUL. SECTOR: ${ready}`

    console.log(alarm)

    msg = new SpeechSynthesisUtterance(alarm)
    speechSynthesis.speak(msg)

    report.textContent = alarm
})