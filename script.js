document.addEventListener('DOMContentLoaded', () => {
    
    const goButton = document.querySelectorAll('button')[0];
    const goInput = document.querySelectorAll('input')[0];
    goButton.addEventListener('click', () => {
        alert('GO button clicked! You typed: ' + goInput.value);
    });

    
    const subButton = document.querySelectorAll('button')[1];
    const subInput = document.querySelectorAll('input')[1];
    subButton.addEventListener('click', () => {
        alert('Subscribed with: ' + subInput.value);
    });
});
