// ==========================================
// 1. Change Background Color
// ==========================================
function changeBackgroundColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Set color in exact 'rgb(x, y, z)' format
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// ==========================================
// 2. Reset Background Color
// ==========================================
function resetBackgroundColor() {
    // CHANGES: Explicitly set to "white" to match test expectation
    document.body.style.backgroundColor = "white";
}

// ==========================================
// 3. Display Key Press
// ==========================================
function displayKeyPress(event) {
    const display = document.getElementById('keyPressDisplay');
    if (display) {
        // Use event.key directly
        const key = event ? event.key : '';
        display.textContent = `Key pressed: ${key}`;
    }
}

// ==========================================
// 4. Display User Input
// ==========================================
function displayUserInput() {
    const input = document.getElementById('textInput');
    const display = document.getElementById('textInputDisplay');
    
    if (input && display) {
        display.textContent = `You typed: ${input.value}`;
    }
}

// ==========================================
// 5. Setup Event Listeners
// ==========================================
// The test file calls this function explicitly in beforeEach()
function setupEventListeners() {
    const changeColorBtn = document.getElementById('changeColorButton');
    const resetColorBtn = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    // 1. Click Event
    if (changeColorBtn) {
        // Remove old listener to prevent duplicates (good practice)
        changeColorBtn.removeEventListener('click', changeBackgroundColor);
        changeColorBtn.addEventListener('click', changeBackgroundColor);
    }

    // 2. Double Click Event (Attached to BUTTON, not body, per tests)
    if (resetColorBtn) {
        resetColorBtn.removeEventListener('click', resetBackgroundColor);
        resetColorBtn.addEventListener('click', resetBackgroundColor);
    }

    // 3. Keydown Event (Attached to Document)
    document.removeEventListener('keydown', displayKeyPress);
    document.addEventListener('keydown', displayKeyPress);

    // 4. Input Event
    if (textInput) {
        textInput.removeEventListener('input', displayUserInput);
        textInput.addEventListener('input', displayUserInput);
    }
}

// Initialize listeners when script loads (for manual browser testing)
setupEventListeners();

// ==========================================
// Export for Testing
// ==========================================
if (typeof module !== 'undefined') {
    module.exports = {
        changeBackgroundColor,
        resetBackgroundColor,
        displayKeyPress,
        displayUserInput,
        setupEventListeners
    };
}
