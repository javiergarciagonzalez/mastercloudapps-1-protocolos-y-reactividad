export default (city, progress = 0) => `
    <li>
        <p>${city}</p>
        <p>Completed: ${progress === 100 ? '✅' : `${progress}%...`}</p>
    </li>
`;
