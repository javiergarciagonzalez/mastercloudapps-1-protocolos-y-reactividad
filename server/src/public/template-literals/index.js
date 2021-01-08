import getCityListItem from './cityListItem.js';
import getCitySelectOption from './citySelectOption.js';
import citiesMockedData  from './citiesMockedData.js';

const CITY_LIST_CLASS = 'city-list';
const CITY_ITEM_CLASS = 'city-list__item';
const CITY_DROPDOWN_CLASS = 'city-dropdown';

function clearHTMLElements(htmlSelectors) {
    htmlSelectors.forEach(el => document.querySelector(`.${el}`).innerHTML = '');
}

function appendCityToList(name, progress) {
    const listNodeElement = document.querySelector(`.${CITY_LIST_CLASS}`);
    const itemNodeElement = document.createElement('li');
    itemNodeElement.classList.add(CITY_ITEM_CLASS);
    itemNodeElement.innerHTML = getCityListItem(name, progress);
    listNodeElement.appendChild(itemNodeElement);
}

function appendCityToSelect(cityName) {
    const selectNodeElement = document.querySelector(`.${CITY_DROPDOWN_CLASS}`);
    const optionEl = document.createElement('option');
    optionEl.innerHTML = getCitySelectOption(cityName);
    selectNodeElement.appendChild(optionEl);
}

export default function updateCitiesList() {
    clearHTMLElements([CITY_LIST_CLASS, CITY_DROPDOWN_CLASS]);
    citiesMockedData.forEach(({name, progress}) => {
        const cb = progress === null ? appendCityToSelect : appendCityToList;
        cb(name, progress);
    });
}
