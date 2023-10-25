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
        compareFilenames(b.querySelector('img').getAttribute('src'), a.querySelector('img').getAttribute('src'))
      );
    }
  
    grid.innerHTML = '';
    filteredItems.forEach(item => grid.appendChild(item));
  }
  
// filenames to extract the date and sort
  function compareFilenames(filenameA, filenameB) {
    const dateA = extractDateFromFilename(filenameA);
    const dateB = extractDateFromFilename(filenameB);
    return dateB - dateA;
  }
  
// extract the date from an image filename
  function extractDateFromFilename(filename) {
    const datePart = filename.match(/(\d{8})/);
    if (datePart) {
      const year = parseInt(datePart[1].substr(0, 4));
      const month = parseInt(datePart[1].substr(4, 2));
      const day = parseInt(datePart[1].substr(6, 2));
      return new Date(year, month - 1, day);
    }
    return new Date(0);
  }
 


// event listeners for search + sort
  searchInput.addEventListener('input', updateGrid);
  sortSelect.addEventListener('change', updateGrid);
  
// initialize
  updateGrid();
});
//TEST Code
// Unblur imgs when login button is clicked
// import productData from "../../seeds/products";
// import seedProducts from "../../seeds/products";
// function unblurImage() {
//   // const blurredImg = document.getElementById("myImage");
//   for (var i=0; i<productData.length; i++) {
//     productData[i].style.filter="blur(0)"
//   }
// }

function removeBlur() {
  const remove = document.querySelectorAll('#myImage');
  remove.forEach(element => {
    element.removeAttribute('id')
  })
}
