window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrolly > 50) {
      navbar.style.background = 'linear-gradient(to right, #008, #004)';
    } else {
      navbar.style.background = 'linear-gradient(to right, #00f, #008)';
    }
});
    
document.querySelectorAll('#navbar ul li a').forEach(item => {
    item.addEventListener('mouseover', function() {
     this.style.color = '#ffø';
    });
    
    item.addEventListener('mouseout', function() {
     this.style.color = 'white';
    });  
    });