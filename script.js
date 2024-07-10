
<script>
  const uploadBtn = document.getElementById('upload-btn');
  const fileInput = document.getElementById('file-input');
  const downloadBtn = document.getElementById('download-btn');

  uploadBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      if (file.type === 'image/jpeg') {
        convertToPNG(file);
      } else {
        alert('Please select a JPG file.');
      }
    }
  });

  function convertToPNG(jpgFile) {
    const reader = new FileReader();
    reader.readAsDataURL(jpgFile);
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function (blob) {
          const url = URL.createObjectURL(blob);
          downloadBtn.href = url;
          downloadBtn.style.display = 'inline-block';
        }, 'image/png');
      };
    };
  }
</script>
