import updateCitiesList from './template-literals/index.js';
import setUpWebSocket from './websocket/ws.js';

const FAKE_DELAY = 1500;

function onSubmit(event) {
    event.preventDefault();
    const city = document.querySelector('select').value;
    fetch('/api/eoloplants', {
        method: 'POST',
        headers: { 'Content-type': 'text/plain'},
        mode: 'no-cors',
        body: JSON.stringify({
            city
        })
    });
}

async function init() {

    // Simulate some network delay
    setTimeout(async () => {
        const result = await fetch('/api/cities');
        const cities = await result.json();
        updateCitiesList(cities);
    }, FAKE_DELAY);

    setUpWebSocket();
    document.querySelector('form').addEventListener('submit', onSubmit);

}

init();
