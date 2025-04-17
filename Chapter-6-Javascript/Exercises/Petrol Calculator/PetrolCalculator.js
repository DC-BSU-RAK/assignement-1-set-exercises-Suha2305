// Runs once the page fully loads
window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculate); // Add click event listener

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        // Add focus effect on input fields
        input.addEventListener("focus", () => {
            input.style.outline = "2px solid #00FF00";
        });
        input.addEventListener("blur", () => {
            input.style.outline = ""; // Remove outline on blur
        });
    });
};

// Function to calculate the total petrol cost
function calculate() {
    const petrolPrice = parseFloat(document.querySelector("#Petrol_Price").value);
    const liters = parseFloat(document.querySelector("#liters").value);

    // Ensure valid inputs
    if (isNaN(petrolPrice) || isNaN(liters) || petrolPrice <= 0 || liters <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate total cost
    const totalCost = petrolPrice * liters;

    // Display result in the paragraph
    document.querySelector("#totalAmount").innerText = `Total Amount: $${totalCost.toFixed(2)}`;
}
