document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetSectionId = this.getAttribute('data-section');
        
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.getElementById(targetSectionId).classList.add('active');
    });
});
