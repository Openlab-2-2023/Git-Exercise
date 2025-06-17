
document.querySelector('h1').addEventListener('click', function() {
    alert('Header clicked!');
});



const headerTitle = document.querySelector('header h1');

headerTitle.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    headerTitle.style.color = randomColor;
    console.log("Klikol si na meno Džordžo! Farba sa zmenila.");
});


window.addEventListener('DOMContentLoaded', () => {
    console.log("🧙‍♀️ Vitaj na stránke Džordža!");
});