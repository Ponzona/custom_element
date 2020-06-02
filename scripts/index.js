const countries = [
{ code: 'AD', name: 'Andorra' },
{ code: 'AE', name: 'United Arab Emirates' },
{ code: 'AF', name: 'Afghanistan' },
{ code: 'AG', name: 'Antigua and Barbuda' },
{ code: 'AI', name: 'Anguilla' },
{ code: 'AL', name: 'Albania' },
{ code: 'AM', name: 'Armenia' },
{ code: 'AN', name: 'Netherlands Antilles' },
{ code: 'AO', name: 'Angola' },
{ code: 'AQ', name: 'Antarctica' }
];

const ERROR = {
	EMPTY_STRING: `<p>Empty request? R u kidding me, human?</p>`,
	NOT_FOUND: `<p>Country wasn't found. So enjoy this random country!</p>`,
}

const countriesContainer = document.querySelector('.addresses');
const infoBlock = document.querySelector('.info');

const form = document.querySelector('.form');
form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	infoBlock.innerHTML = '';
	const countryName = this.querySelector('input').value.trim();
	if (!countryName.length) {
		infoBlock.innerHTML = ERROR.EMPTY_STRING;
		return;
	}

	const countryData = findCountryData(countryName);
	createElement(countryData);
});

function createElement(data) {
	const element = document.createElement('my-address');
	element.innerHTML = `
	<span slot="title">${data.name} ${data.code}</span>
	<img slot="code" src="https://www.countryflags.io/${data.code}/flat/64.png" />
	`;
	countriesContainer.appendChild(element);
}

function findCountryData(country) {
	const countryDataIndex = countries.findIndex((el) => country === el.name);
	if (countryDataIndex > -1) {
		return countries[countryDataIndex];
	}
	infoBlock.innerHTML = ERROR.NOT_FOUND;
	return countries[Math.floor(countries.length * Math.random())];
}