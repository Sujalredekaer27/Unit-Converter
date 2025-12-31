const inputAmount = document.getElementById('inputAmount');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const resultText = document.getElementById('resultText');

// Conversion factors relative to 1 Meter
const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084
};

function convert() {
    const value = parseFloat(inputAmount.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(value)) {
        resultText.innerText = "Please enter a valid number";
        return;
    }

    // Step 1: Convert input to Meters (Base Unit)
    const valueInMeters = value / conversionRates[from];

    // Step 2: Convert Meters to Target Unit
    const convertedValue = valueInMeters * conversionRates[to];

    // Display result with 4 decimal places
    resultText.innerText = `${value} ${from} = ${convertedValue.toFixed(4)} ${to}`;
}

// Add event listeners so it updates in real-time
inputAmount.addEventListener('input', convert);
fromUnit.addEventListener('change', convert);
toUnit.addEventListener('change', convert);