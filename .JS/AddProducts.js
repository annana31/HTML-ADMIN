// Image Preview Handling for multiple images
const productPhotoInputs = [
    document.getElementById('productPhoto1'),
    document.getElementById('productPhoto2'),
    document.getElementById('productPhoto3')
];
const productPhotoPreviews = [
    document.getElementById('productPhotoPreview1'),
    document.getElementById('productPhotoPreview2'),
    document.getElementById('productPhotoPreview3')
];

productPhotoInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                productPhotoPreviews[index].src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});


// Form submission (Remember to replace with your server-side handling)
document.getElementById('addProductForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('addProductForm'));

    // Here you would use fetch or XMLHttpRequest to send formData to your server.
    // The server-side code would handle saving the data to your database.

    // Placeholder alert - Replace with actual server communication
    fetch('/your-server-endpoint', { // Replace '/your-server-endpoint' with your actual endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle successful submission (e.g., display a success message)
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors (e.g., display an error message)
    });
});