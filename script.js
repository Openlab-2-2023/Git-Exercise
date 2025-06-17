const bojkoButton = document.getElementById('bojkobutton')
const bojkoBackground = document.getElementById('bojkobackground')

document.querySelector('h1').addEventListener('click', function() {
    alert('Header clicked!');
});

bojkoButton.addEventListener('click', function() {
    bojkoBackground.style.backgroundColor = 'blue'

})
