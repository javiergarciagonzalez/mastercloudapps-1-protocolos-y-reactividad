import { city } from './template-literals/index.js';
import citiesMockedData  from './citiesMockedData.js';

const FAKE_DELAY = 300;
const CITY_LIST_SELECTOR = '.city-list';
const CITY_ITEM_SELECTOR = '.city-list__item';
const CITY_DROPDOWN_SELECTOR = '.city-dropdown';

function updateCitiesList() {
    clearHTMLElements([CITY_LIST_SELECTOR, CITY_DROPDOWN_SELECTOR]);
    citiesMockedData.forEach(({name, progress}) => {
        const cb = progress === null ? appendCityToSelect : appendCityToList;
        cb(name, progress);
    });
}

function clearHTMLElements(htmlSelectors) {
    htmlSelectors.forEach(el => document.querySelector(el).innerHTML = '');
}

function appendCityToList(name, progress) {
    const listNodeElement = document.querySelector(CITY_LIST_SELECTOR);
    const itemNodeElement = document.createElement(CITY_ITEM_SELECTOR);
    itemNodeElement.innerHTML = city(name, progress);
    listNodeElement.appendChild(itemNodeElement);
    listNodeElement.inn
}

function appendCityToSelect(cityName) {
    const selectNodeElement = document.querySelector(CITY_DROPDOWN_SELECTOR);
    const optionNodeElement = document.createElement('option');
    optionNodeElement.value = cityName;
    optionNodeElement.innerText = cityName;
    selectNodeElement.appendChild(optionNodeElement);
}

function wsOnClose(event) {
    if (!event.wasClean) {
        console.log('[close] Connection died');
        return;
    }
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
}

function wsOnOpen(socket) {
    const message = 'WebSocket connection established';
    console.log(message);
    socket.send(message);
}

function setUpWebSocket() {
    const socket = new WebSocket('ws://localhost:8080/');

    socket.onopen =  () => wsOnOpen(socket);
    socket.onmessage =  ({data}) => console.log(`[Message] Data received from server: ${data}`);
    socket.onclose = wsOnClose;
    socket.onerror = error => console.log(`[error] ${error.message}`);
}

async function init() {

    // Simulate some network delay
    setTimeout(() => {
        updateCitiesList();
    }, FAKE_DELAY);

    setUpWebSocket();

    const result = await fetch('/api/eoloplants', { method: 'POST'});
    const parsedResult = await result.json();

    console.log(parsedResult);
}

init();
