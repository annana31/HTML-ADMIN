// Enhanced Image Preview Handling for up to 3 images
for (let i = 1; i <= 3; i++) {
    const input = document.getElementById(`productPhoto${i}`);
    const preview = document.getElementById(`productPhotoPreview${i}`);

    if (input && preview) {
        input.addEventListener('change', () => {
            const file = input.files[0];
            if (file) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        preview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert('File selected in slot ${i} is not an image. Please select an image file.');
                    input.value = ''; // Clear the invalid file
                    preview.src = 'placeholder.jpg'; // Reset preview
                }
            } else {
                preview.src = 'placeholder.jpg';
            }
        });
    }
}

// Form submission with basic validation feedback
document.getElementById('addProductForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('/your-server-endpoint', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Server error');

        const result = await response.json();
        alert('Product added successfully!');
        form.reset();

        // Reset previews after form reset
        for (let i = 1; i <= 3; i++) {
            const preview = document.getElementById(`productPhotoPreview${i}`);
            if (preview) preview.src = 'placeholder.jpg';
        }
    } catch (err) {
        console.error('Submission error:', err);
        alert('Failed to add product. Please try again.');
    }
});
