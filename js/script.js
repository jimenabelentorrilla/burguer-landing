let nav = document.querySelector("#nav");
let prevY = window.scrollY;

window.addEventListener("scroll", function() {
    if (prevY > window.scrollY) {
        nav.classList.remove("off");
    } else {
        nav.classList.add("off");
    }

    if (window.scrollY > 500) {
        nav.classList.add("bg-scroll");
    } else {
        nav.classList.remove("bg-scroll");
    }
    prevY = window.scrollY;
});

let sucConde = document.getElementById("suc-conde");
let sucSuperi = document.getElementById("suc-superi");
let sucCabildo = document.getElementById("suc-cabildo");

let iframe = document.getElementById("suc-location");
let dir = document.getElementById("suc-dir");


function clickedSuperi() {
    dir.innerText = "Superí 3183, C1430 CABA";
    iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8359.822620084324!2d-58.47564625098185!3d-34.55830448751549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb68f5e07f2b1%3A0xaf062ab251276a05!2sSuper%C3%AD%203183%2C%20C1430%20CABA!5e0!3m2!1ses-419!2sar!4v1676679122127!5m2!1ses-419!2sar" width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

}

sucSuperi.addEventListener("click", clickedSuperi);

function clickedCabildo() {
    dir.innerText = "Av. Cabildo 792, C1426 CABA";
    iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8120.724512692397!2d-58.447176084175425!3d-34.569675734697896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c6b406aaab%3A0xc8c31226eaa848f8!2sCostumbres%20Argentinas!5e0!3m2!1ses-419!2sar!4v1676680265534!5m2!1ses-419!2sar" width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

}
sucCabildo.addEventListener("click", clickedCabildo);

function clickedConde() {
    dir.innerText = "Conde 3446, C1430FHL CABA";
    iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.9010175292988!2d-58.476059291148275!3d-34.556061472179486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb68fe83a9a73%3A0x604ae55887c8501d!2sTaller%20Autos%20Melian!5e0!3m2!1ses-419!2sar!4v1676680478104!5m2!1ses-419!2sar" width="700" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

}
sucConde.addEventListener("click", clickedConde);