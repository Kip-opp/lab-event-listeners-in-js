# Event Listeners in JavaScript Lab

This project demonstrates how to use JavaScript event listeners to build an interactive web interface. It covers responding to user actions such as button clicks, keyboard input, and text field changes — which are core patterns in modern DOM manipulation. [web:285]

## Features

- Background color changes on button click, resets on double-click.
- Displays the last key pressed by the user in real time.
- Mirrors typed text to the page as the user inputs it.
- Combines multiple event types for more dynamic interaction.
- Bonus: hover effects and form submission handling.

## Core Functionality

### Button Click
`changeBackgroundColor()` is attached to a click event and updates the page background color. `resetBackgroundColor()` is attached to a double-click event and resets the background to white. [web:285]

### Keyboard Input
`displayKeyPress(event)` listens on the `keydown` event of the `document` and updates a paragraph with the name of the key pressed. The `event.key` property is used to capture the value. [web:285]

### Text Input
`displayUserInput()` is attached to the `input` event of a text field and renders the current value to a paragraph in real time as the user types. [web:285]

### Combined Events
A function that integrates click, keydown, and input events to create multi-trigger interactions and more dynamic page behavior.

## Bonus: Additional Event Handling

```js
// Hover effects
element.addEventListener('mouseover', () => {
  element.style.backgroundColor = 'yellow';
});

element.addEventListener('mouseout', () => {
  element.style.backgroundColor = 'initial';
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // process form data
});
```

## Setup

Install dependencies:

```bash
npm install
```

Open `index.html` in a browser or use Live Server in VS Code to run the project.

Run the test suite:

```bash
npm test
```

## File Structure

```bash
├── index.html
├── index.js
├── style.css
└── tests/
```

## Key Concepts

- `addEventListener(type, callback)` attaches a handler to a DOM element without overwriting existing ones.
- `event.key` returns the specific key pressed from a `KeyboardEvent`.
- The `input` event fires on every keystroke and is ideal for real-time field mirroring.
- `event.preventDefault()` stops default browser behavior like form submission page reload.



## Resources

- [addEventListener() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [KeyboardEvent — MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [Input Event — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [Form Submit Event — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
