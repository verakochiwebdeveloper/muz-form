// Получаем элементы формы и блок для превью изображений
const uploadForm = document.getElementById('upload-form');
const imagePreview = document.getElementById('image-preview');

// Обработчик отправки формы
uploadForm.addEventListener('submit', e => {
  e.preventDefault();
  const imageFiles = e.target.elements['image-files'].files;
  // Создаем объект FormData для отправки файлов на сервер
  const formData = new FormData();
  for (let i = 0; i < imageFiles.length; i++) {
    formData.append('images[]', imageFiles[i]);
  }
  // Отправляем запрос на сервер
  fetch('/upload-images', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Выводим превью изображений на страницу
    data.forEach(image => {
      const img = document.createElement('img');
      img.src = image.url;
      imagePreview.appendChild(img);
    });
  })
  .catch(error => console.error(error));
});
