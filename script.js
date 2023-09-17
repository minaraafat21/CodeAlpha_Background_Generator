document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the HTML elements
    const colorInput = document.getElementById('color');      
    const generateButton = document.getElementById('generate'); 
    const outputInput = document.getElementById('output');   
    const copyButton = document.getElementById('copy');      
    const applyButton = document.getElementById('apply');     

    // Event listeners
    generateButton.addEventListener('click', generateRandomColor);
    copyButton.addEventListener('click', copyColorCode);
    applyButton.addEventListener('click', applyBackground);

    // Function to generate a random color
    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
    let randomColor = '#';

    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }
        colorInput.value = randomColor;
        outputInput.value = randomColor;
    }

    // Function to copy the color code to the clipboard
    function copyColorCode() {
        myText = outputInput.value
        navigator.clipboard.writeText(myText); // Copy the text to the clipboard
    }

    // Function to apply the background color
    function applyBackground() {
        const selectedColor = colorInput.value; 
        document.body.style.backgroundColor = selectedColor; // Set the background color of the body
        outputInput.value = selectedColor; // Set the value of the output/input field
    };
});
