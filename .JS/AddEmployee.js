const employeePhotoPreview = document.getElementById('employeePhotoPreview');
const employeePhotoInput = document.getElementById('employeePhoto');
const birthdayInput = document.getElementById('birthday');
const ageInput = document.getElementById('age');

employeePhotoInput.addEventListener('change', () => {
    const file = employeePhotoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            employeePhotoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

birthdayInput.addEventListener('change', () => {
    const birthday = new Date(birthdayInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    ageInput.value = age;
});

document.getElementById('employeeForm').addEventListener('submit', (event) => {
    const ageValue = ageInput.value;
    if (!ageValue) {
        event.preventDefault();
        alert('Please enter a birthday to calculate age.');
        return;
    }

    const formData = new FormData(document.getElementById('employeeForm'));

    // Here you would typically use fetch or XMLHttpRequest to send the FormData to your server.
    // The server-side code would then handle saving the data to your database.

    alert('Form data submitted. Implement server-side handling.');
});