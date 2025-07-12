const galleryImages = document.querySelectorAll(".image-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

const images = Array.from(galleryImages);

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// Navigate Lightbox
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Filter Logic
const filterButtons = document.querySelectorAll(".filters button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".image-item").forEach(item => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
