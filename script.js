// Preview image upload
const upload = document.getElementById("upload");
const canvas = document.getElementById("previewCanvas");
const ctx = canvas.getContext("2d");

upload.addEventListener("change", function () {
  const file = upload.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});
