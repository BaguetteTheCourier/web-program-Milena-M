let h = document.getElementById("h");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let timeLabel = document.getElementById("time");

let x; // interval variable

function setCity(city) {
    document.body.className = city;
}

function time(city) {
    if (x) clearInterval(x); // clear previous interval
    setCity(city);

    let zone = "";
    let name = "";

    switch (city) {
        case 'LA':
            zone = 'America/Los_Angeles';
            name = 'Los Angeles';
            break;
        case 'NY':
            zone = 'America/New_York';
            name = 'New York';
            break;
        case 'LO':
            zone = 'Europe/London';
            name = 'London';
            break;
        case 'BG':
            zone = 'Europe/Belgrade';
            name = 'Belgrade';
            break;
        case 'BE':
            zone = 'Asia/Shanghai'; // fixed typo here
            name = 'Beijing';
            break;
        case 'TO':
            zone = 'Asia/Tokyo';
            name = 'Tokyo';
            break;
    }

    timeLabel.innerHTML = 'Current time in: ' + name;

    x = setInterval(() => {
        let currentTime = new Date().toLocaleString("en-US", { timeZone: zone });
        let date = new Date(currentTime);

        h.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours();
        min.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
        sec.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    }, 1000); // 1-second interval is sufficient
}

// Add event listeners to buttons
document.querySelectorAll('.beautiful-button').forEach(btn => {
    btn.addEventListener('click', () => time(btn.id));
});
