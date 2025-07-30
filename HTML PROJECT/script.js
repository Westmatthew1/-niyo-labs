document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = input.value.trim();
        if (inputValue) {
            output.textContent = `You entered: ${inputValue}`;
        } else {
            output.textContent = 'Please enter a value.';
        }
    });
});
