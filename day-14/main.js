import "./styles.css";
const rangeInput = document.querySelector('#range-input');
const rootElement = document.documentElement;

rangeInput.value = getComputedStyle(document.body).getPropertyValue("--base-hue");

rangeInput.addEventListener('input', (event) => {
    rangeInput.value = event.target.value;
    rootElement.style.setProperty("--base-hue", event.target.value);
})