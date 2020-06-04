class Address extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
		<style>
		.address {
			font-family: var(--common-font);
			width: 220px;
			background-color: burlywood;
			box-shadow: inset 2px 0 5px 2px rgba(0, 0, 0, 0.4);
			border-radius: 5px;
			padding: 85px 20px 30px;
			margin: 10px;
			position: relative;
		}

		.stamp {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 67px;
			height: 55px;
			padding: 0 7px;
			background: white;
			position: absolute;
			top: 10px;
			right: 10px;
			background: radial-gradient(transparent 0px, transparent 3px, #eee 3px, #eee);
			background-size: 13px 13px;
			background-position: -5px -5px;
			transform: rotate(5deg);
		}

		h3 {
			margin: 0;
		}
		</style>
		<div class="address">
		<h3>Address</h3>
		<slot name="title"></slot>
		<div class="stamp">
		<slot name="code"></slot>
		</div>
		</div>
		`;
	}
}

customElements.define('my-address', Address);