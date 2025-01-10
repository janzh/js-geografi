class CustomInput extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <style>
                input {
                    background-color: blue;
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                }
            </style>
            <input>Click Me!</input>
        `;
    }
}

customElements.define('custom-input', CustomInput);
