class Address extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>
		.address {
			font-family: var(--common-font);
			padding: 20px;
		}
		</style>
		<div class="address">
		<slot name="title"></slot>
		<slot name="cityName"></slot>
		</div>
		`;
	}
}

customElements.define('my-address', Address);