document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = document.querySelector('.buttons');

    buttons.addEventListener('click', onButtonClick);

    function onButtonClick(event) {
        const buttonValue = event.target.textContent;
        const currentDisplay = display.textContent;

        if (buttonValue === 'C') {
            display.textContent = '0';
        } else if (buttonValue === '=') {
            try {
                display.textContent = eval(currentDisplay);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (buttonValue === 'Join Me') {
            window.open('https://naseem755.github.io/resume/', '_blank');
        } else {
            display.textContent =
                currentDisplay === '0' ? buttonValue : currentDisplay + buttonValue;
        }
    }
});
