// Image upload preview
document.getElementById('profileUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById('profileImage').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Edit section toggle
  function editSection(sectionId) {
    const section = document.getElementById(sectionId);
    const paragraphs = section.querySelectorAll('p');
  
    if (section.dataset.editing === 'true') {
      // Save
      paragraphs.forEach(p => {
        const input = p.querySelector('input');
        if (input) {
          p.innerHTML = `<strong>${input.name}:</strong> ${input.value}`;
        }
      });
      section.dataset.editing = 'false';
    } else {
      // Edit mode
      paragraphs.forEach(p => {
        const key = p.textContent.split(':')[0].trim();
        const value = p.textContent.split(':')[1].trim();
        p.innerHTML = `<strong>${key}:</strong> <input type="text" name="${key}" value="${value}" />`;
      });
      section.dataset.editing = 'true';
    }
  }
