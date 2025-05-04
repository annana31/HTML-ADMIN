function toggleEdit(elementId) {
    const element = document.getElementById(elementId);
    if (element.contentEditable === 'true') {
        element.contentEditable = 'false';
        element.classList.remove('editable');
        // Here you would typically send the updated value to your server
        // using fetch or XMLHttpRequest.  This is a placeholder.
        console.log("Updated value for " + elementId + ": " + element.textContent);
    } else {
        element.contentEditable = 'true';
        element.classList.add('editable');
    }
}