import updateCitiesList from './template-literals/index.js';
import setUpWebSocket from './websocket/ws.js';

const FAKE_DELAY = 300;

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
