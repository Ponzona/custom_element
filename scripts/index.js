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

const countriesContainer = document.querySelector('.addresses');
const form = document.querySelector('.form');
form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	const countryName = this.querySelector('input').value.trim();
	const countryData = findCountryData(countryName);
	console.log(countryData.name, countryData.code);
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
	return countries[Math.floor(countries.length * Math.random())];
}