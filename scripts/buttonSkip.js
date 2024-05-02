function skipToElement(elementId) {
    var targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element
    }
}
