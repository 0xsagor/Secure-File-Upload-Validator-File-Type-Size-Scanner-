function validate() {
  const file = document.getElementById("file").files[0];
  const result = document.getElementById("result");

  if (!file) {
    result.innerText = "No file selected";
    result.style.color = "red";
    return;
  }

  const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
  const maxSize = 2 * 1024 * 1024; // 2 MB

  if (!allowedTypes.includes(file.type)) {
    result.innerText = "Invalid file type";
    result.style.color = "red";
    return;
  }

  if (file.size > maxSize) {
    result.innerText = "File size exceeds 2 MB";
    result.style.color = "red";
    return;
  }

  result.innerText = "File is valid and safe to upload";
  result.style.color = "green";
}
