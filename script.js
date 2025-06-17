document.querySelector('h1').addEventListener('click', function() {
    
    const currentColor = this.style.color;
    if (currentColor === 'red') {
        this.style.color = '#3f51b5'; 
    } else {
        this.style.color = 'red';
    }
});
document.getElementById("milan-section").addEventListener("click", function () {
  this.style.backgroundColor = "#ccffcc";
});
