class Address extends HTMLElement {
	constructor() {
		super();
		console.log('This is works!');
	}
}

customElements.define('my-address', Address);