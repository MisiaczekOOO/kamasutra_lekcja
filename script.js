var man_input = document.getElementById("man")
var woman_input = document.getElementById("woman")

var man_output = document.getElementById("man_output");
var woman_output = document.getElementById("woman_output");

let start = document.getElementById("screen_start");
let options = document.getElementById("screen_options");
let count = document.getElementById("screen_counting");
let game = document.getElementById("screen_game");

let count_number = document.getElementById("counting");

let RIN; //randomImageNumber

let round_time_input = document.getElementById("round_time");
let round_count_input = document.getElementById("round_number")
let timer = document.getElementById("timer");
let round_counter = document.getElementById("round");
let round = 0;
let round_time;
let break_time;
let breaktimeinput = document.getElementById("break_time_input");
let max_round_counter = document.getElementById("max-round-counter");

let man_end = document.getElementById("men-end");
let woman_end = document.getElementById("woman-end");

let pause = document.getElementById("pause");

let main_image = document.getElementById("main-image");
let position_name = document.getElementById("position-full-name");

const position_names = [
    "akt równowagi",
    "balansowanie",
    "boczne siodło",
    "całkowita rezygnacja",
    "chłopcy na bok!",
    "czarodziejska góra",
    "czas do domu",
    "delfin",
    "drabina",
    "eletryzujący zjazd",
    "erotyczne V",
    "fotel",
    "galopujący koń",
    "gość",
    "gra w klasy",
    "gwiazda",
    "hotdog",
    "huśtawka",
    "indrani",
    "jazda",
    "kąt prosty",
    "kolumna",
    "koszyk",
    "krucjata",
    "krzesło",
    "kwiat lotosu",
    "L",
    "leniwa dziewczyna",
    "leniwe popołudnie",
    "leniwy chłopiec",
    "limbo",
    "lotos",
    "lubieżne nogi",
    "łuk triumfalny",
    "małpa",
    "miłosny precel",
    "miłosny X",
    "miłosny pająk",
    "miłośnik",
    "morze uniesień",
    "mostek",
    "motyl",
    "na łyżeczki",
    "na pieska",
    "napastnik",
    "napięcie",
    "nie odchodź",
    "nirwana",
    "norweski krzyż",
    "nożyce",
    "numer osiem",
    "od tyłu",
    "picotti",
    "pług",
    "podróż",
    "portugalska galeria",
    "w stylu francuskim",
    "pragnienie ascezy",
    "proste nachylenie",
    "ramię w ramię",
    "rock&roll",
    "rozżarzony trójkąt",
    "rytm",
    "samba bokiem",
    "sfinks",
    "siła grawitacji",
    "skandynawska",
    "skrzyżowane klucze",
    "śmigło",
    "sofa",
    "statek na morzu",
    "super g",
    "supernova",
    "świeca",
    "świeca 2",
    "syrena",
    "szczyty rozkoszy",
    "szept",
    "szerokie otwarcie",
    "taczki",
    "uchwyt",
    "uchwyt 2",
    "uścisk",
    "uwięziony ptak",
    "uwodzenie",
    "w dolinie przyjemności",
    "wodospad",
    "wyzwanie roku",
    "y",
    "żabka",
    "zatoka rozkoszy",
    "zawieszone nożyce",
    "zen",
    "zjeżdzalnia",
    "żyrandol",
    "kłódka",
]

let ending_screen = document.getElementById("ending-container");
let ending_position_title = document.getElementById("ending-position-title");

options.style.display = "none";
count.style.display = "none";
game.style.display = "none";

ending_screen.style.display = "none";

let last_position_image = document.getElementById("last-position-image");



let x = 5;

function take_names() {
    if (man_input.value === "" && woman_input.value === "") {
        alert("Uzupełnij imiona");
    } else if (man_input.value === "") {
        alert("Uzupełnij imię partnera");
    } else if (woman_input.value === "") {
        alert("Uzupełnij imię partnerki");
    } else {
        start.style.display = "none";
        options.style.display = "flex";
        man_output.innerHTML = man_input.value;
        woman_output.innerHTML = woman_input.value;
    }
}

function start_game() {
    count.style.display = "flex";
    options.style.display = "none";
    counting_interval = setInterval(counting_down, 1000);
    //start counting down
}

function counting_down() {
    if (x !== 1) {
        x -= 1;
        count_number.innerHTML = x;
    } else {
        clearInterval(counting_interval);
        console.log("start");
        actual_game();
    }
}

function actual_game() {
    RIN = Math.floor(Math.random() * position_names.length);
    main_image.src = "./positions/" + RIN + ".png";
    position_name.innerHTML = position_names[RIN];
    count.style.display = "none";
    game.style.display = "flex";
    pause.style.display = "none";
    let round_time = round_time_input.value;
    round_counter.innerHTML = "0";
    timer_time = round_time_input.value;
    break_time = breaktimeinput.value;
    timer.innerHTML = timer_time;
    round_time_interval = setInterval(start_timer, 1000);
}

function start_timer() {
    if (timer_time != 1) {
        timer.innerHTML = timer_time - 1;
        timer_time--;
    } else {

        nextRound();
        timer_time = round_time_input.value;
        timer.innerHTML = timer_time;
        round++;
        round_counter.innerHTML = round;
    }
}

let canChange = true;

function nextRound() {
    clearInterval(round_time_interval);

    RIN = Math.floor(Math.random() * position_names.length);
    main_image.src = "./positions/" + RIN + ".png";
    position_name.innerHTML = position_names[RIN];

    break_time_interval = setInterval(przerwa, 1000);

    pause.style.display = "block";
}

function przerwa() {
    if (break_time != 1) {
        break_time--;
        canChange = false;
    } else {
        clearInterval(break_time_interval);
        round_time_interval = setInterval(start_timer, 1000);
        break_time = breaktimeinput.value;
        console.log("koniec przerwy");
        pause.style.display = "none";
        canChange = true;
    }


}




function skip() {
    if (pause.style.display == "none") {
        nextRound();
        timer_time = round_time_input.value;
        timer.innerHTML = timer_time;
    }
}

function earlyPlay() {
    clearInterval(break_time_interval);
    round_time_interval = setInterval(start_timer, 1000);
    break_time = breaktimeinput.value;
    console.log("koniec przerwy");
    pause.style.display = "none";
}


function endGame() {
    game.style.display = "none";
    ending_screen.style.display = "flex";
    last_position_image.src = "./positions/" + RIN + ".png";
    ending_position_title.innerHTML = position_names[RIN];
    max_round_counter.innerHTML = round;
    man_end.innerHTML = man_input.value;
    woman_end.innerHTML = woman_input.value;
    clearInterval(round_time_interval); //to na samym końcu musi być
    clearInterval(break_time_interval); //to na samym końcu musi być
}