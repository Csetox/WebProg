// Function to open the lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Add event listener to all elements with class 'open-lightbox'
document.addEventListener('DOMContentLoaded', function() {
    var lightboxTriggers = document.querySelectorAll('.open-lightbox');
    lightboxTriggers.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            openLightbox(); // Open the lightbox
        });
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Function to handle keydown event
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        closeLightbox(); // Close the lightbox when Escape key is pressed
    }
}

// Add event listener to the document for keydown event
document.addEventListener('keydown', handleKeyDown);