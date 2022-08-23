const imagePickerElement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');

const updateImagePreview = () => {
  const { files } = imagePickerElement;
  if (!files || files.length === 0) {
    imagePreviewElement.style.display = 'none';
    return;
  }
  const pickedFile = files[0];

  imagePreviewElement.src = URL.createObjectURL(pickedFile);
};

imagePickerElement.addEventListener('change', updateImagePreview);
