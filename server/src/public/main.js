import updateCitiesList from './template-literals/index.js';
import setUpWebSocket from './websocket/ws.js';

const FAKE_DELAY = 300;

async function init() {

    // Simulate some network delay
    setTimeout(async () => {
        const result = await fetch('/api/cities');
        const cities = await result.json();
        updateCitiesList(cities);
    }, FAKE_DELAY);

    setUpWebSocket();
}

init();
