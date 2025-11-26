const container = document.querySelectorAll('.container');
const expenses = document.querySelectorAll('.expenses');
const bars = document.querySelectorAll('.bars');

fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        const days = document.querySelectorAll('.day');

        // for displaying days
        days.forEach((element, index) => {
            element.textContent = data[index].day;
        });

        // for displaying expenses
        expenses.forEach((element, index) => {
            element.textContent = data[index].amount;
        });
    })
    .catch(error => console.error('Error', error));

// for opacity    
container.forEach((cont, index) => {
    cont.addEventListener('mouseover', () => {
        expenses[index].style.opacity = 1;
        bars[index].style.opacity = 0.75;
    });

    cont.addEventListener('mouseout', () => {
        expenses[index].style.opacity = 0;
        bars[index].style.opacity = 1;
    });
});s