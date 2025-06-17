
document.querySelector('h1').addEventListener('click', function() {
    alert('Header clicked!');
});

document.querySelector(".project_m").addEventListener('click', function() {
    document.querySelector(".project_m").classList.toggle("active");
});