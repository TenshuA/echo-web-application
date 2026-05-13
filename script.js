const form = document.querySelector("#echo-form");
const input = document.querySelector("#user-input");
const output = document.querySelector("#echo-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.textContent = input.value;
});
