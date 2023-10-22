// event listener for page load
document.addEventListener('DOMContentLoaded', function() {
  const uploadForm = document.getElementById('upload-form');
  uploadForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the default form behavior
    const formData = new FormData(this); // create a form to collect data
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
// handle the response and show a success message
        if (data.success) {
          const successMessage = document.createElement('div');
          successMessage.className = 'alert alert-success';
          successMessage.textContent = 'Product uploaded successfully';
          this.appendChild(successMessage);

// clear the form
          this.reset();
        }
      })
      .catch(error => {
        console.error('Error uploading product:', error);
      });
  });

// input drag + drop 
  const inputField = document.getElementById('input-file-preview');
  const imagePreview = document.getElementById('image-preview');

  inputField.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      imagePreview.innerHTML = `Selected file: ${fileName}`;
    }
  });

  const dropZone = document.getElementById('upload-form');
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');

    if (e.dataTransfer.files.length > 0) {
      const fileName = e.dataTransfer.files[0].name;
      inputField.files = e.dataTransfer.files;
      imagePreview.innerHTML = `Selected file: ${fileName}`;
    }
  });

  // sorting
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort');
  const grid = document.querySelector('.gridone');
  const items = Array.from(document.querySelectorAll('.item'));

  // update the grid based on filter
  function updateGrid() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => item.querySelector('h2').textContent.toLowerCase().includes(searchValue));

    if (sortSelect.value === 'recent') {
      filteredItems.sort((a, b) =>
        getDateFromImageURL(b.querySelector('img').getAttribute('src')) - getDateFromImageURL(a.querySelector('img').getAttribute('src'))
      );
    }

    grid.innerHTML = '';
    filteredItems.forEach(item => grid.appendChild(item));
  }

// extract the date from an image URL
  function getDateFromImageURL(imageUrl) {
    const parts = imageUrl.split('/');
    const datePart = parts[parts.length - 1].substr(0, 8); 
    const year = parseInt(datePart.substr(0, 4));
    const month = parseInt(datePart.substr(4, 2)); 
    const day = parseInt(datePart.substr(6, 2));

    return new Date(year, month, day);
  }

// event listeners for search input and sort
  searchInput.addEventListener('input', updateGrid);
  sortSelect.addEventListener('change', updateGrid);

// initialize
  updateGrid();
});

