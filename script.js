// get the element first

const qrText = document.querySelector("#qrText");
const imgBox = document.querySelector(".img-box");
const qrImage = document.querySelector("#qrImage");
const button = document.querySelector(".btn");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    // it means if inuput box  has value this code will run
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    // if inuput box  has empty value this code will show error or it may shake the input box
  }
}

button.addEventListener("click", generateQR);
