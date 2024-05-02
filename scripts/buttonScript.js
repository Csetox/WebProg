document.addEventListener("DOMContentLoaded", function() {
    const btnHome = document.getElementById('btnBemutatkozas');
    btnHome.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnRoplabda = document.getElementById('btnRoplabda');
    btnRoplabda.addEventListener('click', function() {
        window.location.href = 'roplabda.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnRoplabda = document.getElementById('btnKosarlabda');
    btnRoplabda.addEventListener('click', function() {
        window.location.href = 'kosarlabda.html'; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnRoplabda = document.getElementById('btnDarts');
    btnRoplabda.addEventListener('click', function() {
        window.location.href = 'darts.html'; 
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') { // Tab key
        if (document.activeElement.closest('.navbar')) {
            // If the focus is outside the navbar, show the button
            document.getElementById('jump-to-content').style.display = 'block';
        }
    }
});
  