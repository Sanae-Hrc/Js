function setTabFocus() {
    console.log("Page loaded, setting tabindex for images.");
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("tabindex", "0");
      console.log(`Tabindex added to image ${i + 1}`);
    }
  }
  
  function upDate(img) {
    const mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = `url(${img.src})`;
    mainImage.textContent = img.alt;
  }
  
  function undo() {
    const mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('img7.jfif')";
    mainImage.textContent = "Porsche photos.";
  }
  
  function handleFocus(img) {
    upDate(img);
  }
  
  function handleBlur() {
    undo();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
    setTabFocus();
    document.querySelectorAll(".preview").forEach((img) => {
      img.addEventListener("mouseover", () => upDate(img));
      img.addEventListener("mouseout", undo);
      img.addEventListener("focus", () => handleFocus(img));
      img.addEventListener("blur", handleBlur);
    });
  });
  