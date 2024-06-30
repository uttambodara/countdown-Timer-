const endDate = "29 june 2024 10:00 AM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;

}

clock()
setInterval {
    () => {
        clock()

    },
    2000
}
