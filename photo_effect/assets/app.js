const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Get image on canvas
const img = new Image();

// Defult
img.src = "assets/color.jpg";
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
};


// Read upload image
const reader = new FileReader();

function uploadImage(e) {
  reader.readAsDataURL(e.target.files[0]);

  reader.onload = () => {
    img.src = reader.result;

    // draw image on canvas
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  };
}

// Grayscale fun
function grayscale() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(image_data);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;
  }
  ctx.putImageData(image_data, 0, 0);
}

// sepia fun
function sepia() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(image_data);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = gray + 95;
    data[i + 1] = gray + 58;
    data[i + 2] = gray;
  }
  ctx.putImageData(image_data, 0, 0);
}

// invert fun
function invert() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(image_data);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i] = 255 - data[i + 1];
    data[i] = 255 - data[i + 2];
  }
  ctx.putImageData(image_data, 0, 0);
}

// RBG fun
function rbg() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(image_data);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    data[i] = red;
    data[i + 1] = blue;
    data[i + 2] = green;
  }
  ctx.putImageData(image_data, 0, 0);
}

// BGR fun
function bgr() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(image_data);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    data[i] = blue;
    data[i + 1] = green;
    data[i + 2] = red;
  }
  ctx.putImageData(image_data, 0, 0);
}

// BGR fun
function grb() {
  // get pixel
  const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = image_data.data;
  for (let i = 0; i < data.length; i += 4) {
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    data[i] = green;
    data[i + 1] = red;
    data[i + 2] = blue;
  }
  ctx.putImageData(image_data, 0, 0);
}
// clear fun
function clear() {
  // get pixel
  if (reader.result) {
    img.src = reader.result;
  } else {
    img.src = "assets/color.jpg";
  }
}

// download 
function download() {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'image.png';
    link.click()
}

//buttons
document.querySelectorAll("button")[0].addEventListener("click", grayscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rbg);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", grb);
document.querySelectorAll("button")[6].addEventListener("click", clear);
document.querySelectorAll("button")[7].addEventListener("click", download);

// When image upload run funtion
const imageupLoader = document.getElementById("upload");
imageupLoader.addEventListener("change", uploadImage);
