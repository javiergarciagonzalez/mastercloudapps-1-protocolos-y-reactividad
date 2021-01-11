export default (city, progress = 0, planning) => `
        <p id="${city}">${city}</p>
        <p>Completed: ${progress === 100 ? '✅' : `${progress}%...`}</p>
        <p>${planning ? `Planing: ${planning}` : ''}</p>
`;
