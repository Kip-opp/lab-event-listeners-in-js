// ==========================================
// 1. Change Background Color
// ==========================================
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// ==========================================
// 2. Reset Background Color
// ==========================================
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// ==========================================
// 3. Display Key Press
// ==========================================
function displayKeyPress(event) {
    const display = document.getElementById('keyPressDisplay');
    if (display) {
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
// 5. Save Input to Storage (NEW FEATURE)
// ==========================================
// This function combines 'keydown' (Enter) and input value access
function saveToLocalStorage(event) {
    const input = document.getElementById('textInput');
    
    // Check if the key pressed is "Enter"
    if (event.key === 'Enter' && input) {
        // Save the value to the browser's Local Storage
        localStorage.setItem('mySavedText', input.value);
        
        // Optional: Alert the user or log to console
        console.log(`Saved to storage: ${input.value}`);
        alert(`Saved: "${input.value}"`);
    }
}

// Helper: Restore text when page loads
function loadSavedInput() {
    const input = document.getElementById('textInput');
    const display = document.getElementById('textInputDisplay');
    const savedText = localStorage.getItem('mySavedText');

    if (savedText && input) {
        input.value = savedText;
        // Update the display paragraph to match
        if (display) display.textContent = `You typed: ${savedText}`;
    }
}

// ==========================================
// 6. Setup Event Listeners
// ==========================================
function setupEventListeners() {
    const changeColorBtn = document.getElementById('changeColorButton');
    const resetColorBtn = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    // Load any saved data immediately
    loadSavedInput();

    // 1. Click Event
    if (changeColorBtn) {
        changeColorBtn.removeEventListener('click', changeBackgroundColor);
        changeColorBtn.addEventListener('click', changeBackgroundColor);
    }

    // 2. Double Click Event
    if (resetColorBtn) {
        resetColorBtn.removeEventListener('dblclick', resetBackgroundColor);
        resetColorBtn.addEventListener('dblclick', resetBackgroundColor);
    }

    // 3. Keydown Event (Document level)
    document.removeEventListener('keydown', displayKeyPress);
    document.addEventListener('keydown', displayKeyPress);

    // 4. Input Event & Save Event
    if (textInput) {
        // Real-time mirroring
        textInput.removeEventListener('input', displayUserInput);
        textInput.addEventListener('input', displayUserInput);

        // NEW: Save on Enter (Combines Keydown + Input)
        textInput.removeEventListener('keydown', saveToLocalStorage);
        textInput.addEventListener('keydown', saveToLocalStorage);
    }
}

// Initialize listeners
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
        saveToLocalStorage, // Exported for testing
        setupEventListeners
    };
}
