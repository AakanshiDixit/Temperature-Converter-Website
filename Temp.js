const fahrenheitElem = document.querySelector("#fahrenheit");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  fahrenheitElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToFahrenheit();
});

function convertToFahrenheit() {
  let inputValue = degree.value;

if (tempType.value === "Celsius") {
  const CelsiusToFahrenheit = (inputValue *(9/5))+32;
  fahrenheitElem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;f`;
  } 
    else if (tempType.value === "kelvin") 
    {
      const KelvinToCelsius = (inputValue - 273.15)*(9/5)+32;
      fahrenheitElem.innerHTML = `${KelvinToCelsius} &deg;f`;
  }
}
