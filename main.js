var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I am full of energy and vitality and my mind is calm and peaceful."
];

var mantras = [
    "Don't let yesterday take up too much of today.",
    "I love myself.",
    "I am present now.",
    "This too shall pass.",
    "Onward and upward."
];

var receiveMessageBtn = document.querySelector('.receive-message-btn');
var affirmationBtn = document.querySelector('.affirmation-button');
var affirmationBtn2 = document.querySelector('.affirmation-button-2');
var mantraBtn = document.querySelector('.mantra-button');
var mantraBtn2 = document.querySelector('.mantra-button-2');
var message = document.querySelector('.message-box');
var icon = document.querySelector('svg');
var addMessageBtn = document.querySelector('.add-message');
var submitBtn = document.querySelector('.submit');
var textArea = document.querySelector('.message-input');
var form = document.querySelector('.form');
var randomMessage = document.querySelector('.random-message');

receiveMessageBtn.addEventListener('click', displayMessage);

function displayMessage(event) {
    event.preventDefault();
    var randomAffirmIndex = Math.floor(Math.random() * affirmations.length);
    var randomMantraIndex = Math.floor(Math.random() * mantras.length);
    icon.classList.add('hidden');
    addMessageBtn.classList.remove('hidden');
    if (!form.classList.contains('hidden')) {
        form.classList.add('hidden');
    };
    if (affirmationBtn.checked) {
        randomMessage.innerText = affirmations[randomAffirmIndex];
        randomMessage.classList.remove('hidden');
    } else if (mantraBtn.checked) {
        randomMessage.innerText = mantras[randomMantraIndex];
        randomMessage.classList.remove('hidden');
    } else {
        alert("Please select either affirmation or mantra");
        icon.classList.remove('hidden');
    }
};

addMessageBtn.addEventListener('click', displayForm);

function displayForm(event) {
    event.preventDefault();
    form.classList.remove('hidden');
    addMessageBtn.classList.add('hidden');
    icon.classList.add('hidden');
    if (!randomMessage.classList.contains('hidden')) {
        randomMessage.classList.add('hidden');
    };
    if (textArea.value) {
        textArea.value = ' ';
    }
};

submitBtn.addEventListener('click', addMessageToList)

function addMessageToList(event) {
    event.preventDefault();
    form.classList.add('hidden');
    randomMessage.classList.remove('hidden');
    addMessageBtn.classList.remove('hidden');
    if (affirmationBtn2.checked && textArea.value) {
        affirmations.push(textArea.value);
        randomMessage.innerText = affirmations[affirmations.length - 1];
    } else if (mantraBtn2.checked && textArea.value) {
        mantras.push(textArea.value);
        randomMessage.innerText = mantras[mantras.length - 1];
    } else {
        form.classList.remove('hidden');
        addMessageBtn.classList.add('hidden');
        randomMessage.classList.add('hidden');
        alert("Please select either affirmation or mantra, and input message");
    }

};