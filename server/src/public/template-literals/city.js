export default (city, progress = 0) => `
    <li class="city-list__item">
        <p>${city}</p>
        <p>Completed: ${progress === 100 ? '✅' : `${progress}%...`}</p>
    </li>
`;
