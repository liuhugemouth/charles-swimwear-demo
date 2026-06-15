const products = [
  {
    id: "CH001",
    type: "bikini",
    name: "粉色唇印比基尼",
    price: 179,
    front: "ch001-front.webp",
    back: "ch001-back.webp",
    sketch: "ch001-sketch.webp",
    note: "甜辣唇印图案，白边收束出干净线条，适合阳光泳池和度假照片。",
  },
  {
    id: "CH002",
    type: "bikini",
    name: "黄色斑马比基尼",
    price: 189,
    front: "ch002-front.webp",
    back: "ch002-back.webp",
    sketch: "ch002-sketch.webp",
    note: "黄色斑马纹带来野性亮度，适合海边、草帽和牛仔短裤外搭。",
  },
  {
    id: "CH003",
    type: "bikini",
    name: "粉黑交融比基尼",
    price: 169,
    front: "ch003-front.webp",
    back: "ch003-back.webp",
    sketch: "ch003-sketch.webp",
    note: "粉黑撞色让视觉更锋利，轻松切换甜美和酷感度假状态。",
  },
  {
    id: "CH004",
    type: "bikini",
    name: "金钱豹73比基尼",
    price: 199,
    front: "ch004-front.webp",
    back: "ch004-back.webp",
    sketch: "ch004-sketch.webp",
    note: "豹纹数字印花是镜头里的主角，适合作为网站主推爆款展示。",
  },
  {
    id: "CH005",
    type: "bikini",
    name: "野性非洲比基尼",
    price: 189,
    front: "ch005-front.webp",
    back: "ch005-back.webp",
    sketch: "ch005-sketch.webp",
    note: "热带动物纹理和暖色调组合，带出更大胆的沙滩度假感。",
  },
  {
    id: "CH006",
    type: "bikini",
    name: "蝶翼之变比基尼",
    price: 179,
    front: "ch006-front.webp",
    back: "ch006-back.webp",
    sketch: "ch006-sketch.webp",
    note: "蝶翼灵感让图案更轻盈，适合 Lookbook 中的柔和夏日镜头。",
  },
  {
    id: "CH007",
    type: "bikini",
    name: "复古波点比基尼 I",
    price: 169,
    front: "ch007-front.webp",
    back: "ch007-back.webp",
    sketch: "ch007-sketch.webp",
    note: "复古波点带一点俏皮，适合做经典款和入门价位展示。",
  },
  {
    id: "CH008",
    type: "bikini",
    name: "复古波点比基尼 II",
    price: 179,
    front: "ch008-front.webp",
    back: "ch008-back.webp",
    sketch: "ch008-sketch.webp",
    note: "更浓的复古假日氛围，适合搭配草编包和浅色外搭。",
  },
  {
    id: "CH009",
    type: "bikini",
    name: "复古波点比基尼 III",
    price: 189,
    front: "ch009-front.webp",
    back: "ch009-back.webp",
    sketch: "ch009-sketch.webp",
    note: "波点系列的第三种节奏，丰富商品墙的系列感和可选性。",
  },
  {
    id: "CH010",
    type: "bikini",
    name: "波西米亚畅享比基尼",
    price: 199,
    front: "ch010-front.webp",
    back: "ch010-back.webp",
    sketch: "ch010-sketch.webp",
    note: "波西米亚印花更自由奔放，适合做旅行、音乐节和海岛场景。",
  },
  {
    id: "CH011",
    type: "bikini",
    name: "牧场诱惑比基尼",
    price: 179,
    front: "ch011-front.webp",
    back: "ch011-back.webp",
    sketch: "ch011-sketch.webp",
    note: "带一点西部牧场感的图案语言，让泳装线更有故事性。",
  },
  {
    id: "CH012",
    type: "bikini",
    name: "蓝色之恋比基尼",
    price: 189,
    front: "ch012-front.webp",
    back: "ch012-back.webp",
    sketch: "ch012-sketch.webp",
    note: "蓝色调清爽干净，是整个系列里最适合海天背景的款式。",
  },
  {
    id: "XL001",
    type: "shorts",
    name: "牛仔短裤 001",
    price: 188,
    front: "xl001-front.webp",
    video: "xl001-360.mp4",
    note: "低腰水洗牛仔短裤，适合做泳装外搭和海边街拍造型。",
  },
  {
    id: "XL002",
    type: "shorts",
    name: "牛仔短裤 002",
    price: 188,
    front: "xl002-front.webp",
    video: "xl002-360.mp4",
    note: "浅蓝水洗和毛边细节，给比基尼造型加一点随性街头感。",
  },
  {
    id: "XL003",
    type: "shorts",
    name: "针织短裤 003",
    price: 188,
    front: "xl003-front.webp",
    video: "xl003-360.mp4",
    note: "紧凑版型和海滩氛围图，适合在 Beach Denim 系列中展示。",
  },
  {
    id: "XL004",
    type: "sun-care",
    name: "夏日防晒霜",
    price: 89,
    front: "xl004-front.webp",
    detail: "xl004-detail.webp",
    video: "xl004-360.mp4",
    note: "轻便随身的海边防晒单品，适合和泳装、短裤一起做度假套装展示。",
  },
];

const grid = document.querySelector("#productGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.querySelector("#productModal");
const modalGallery = document.querySelector("#modalGallery");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalPrice = document.querySelector("#modalPrice");
const modalDescription = document.querySelector("#modalDescription");
const modalSizes = document.querySelector("#modalSizes");
const closeModal = document.querySelector(".modal-close");
const toast = document.querySelector("#toast");
const productsWithoutDetailImage = new Set(["CH005"]);
const heroVideos = Array.from(document.querySelectorAll(".hero-video"));
const heroDots = Array.from(document.querySelectorAll(".hero-dot"));
const heroPrev = document.querySelector("[data-hero-prev]");
const heroNext = document.querySelector("[data-hero-next]");
const bgmToggle = document.querySelector(".bgm-toggle");
let currentHero = 0;
let bgmEnabled = false;
let heroTimer;

function imagePath(file) {
  return `./assets/products/${file}`;
}

function videoPath(file) {
  return `./assets/video/${file}`;
}

function categoryLabel(type) {
  const labels = {
    bikini: "Bikini",
    shorts: "Denim Shorts",
    "sun-care": "Sun Care",
  };

  return labels[type] || "Beach Goods";
}

function sizesFor(type) {
  if (type === "bikini") return ["S", "M", "L", "XL"];
  if (type === "shorts") return ["S", "M", "L"];
  return ["SPF 50+", "PA++++", "50ML"];
}

function modalImage(file, alt) {
  return `<img src="${imagePath(file)}" alt="${alt}" />`;
}

function bikiniMedia(product) {
  const productCode = product.id.toLowerCase();
  const media = [
    [product.back, `${product.name} 背面`],
    [`${productCode}-fabric.webp`, `${product.name} 面料`],
  ];

  if (!productsWithoutDetailImage.has(product.id)) {
    media.push([`${productCode}-detail.webp`, `${product.name} 细节图`]);
  }

  return media.filter(([file]) => Boolean(file)).map(([file, alt]) => modalImage(file, alt));
}

function renderProducts(filter = "all") {
  const visible = filter === "all" ? products : products.filter((product) => product.type === filter);
  grid.innerHTML = visible
    .map(
      (product) => `
        <article class="product-card" tabindex="0" data-id="${product.id}">
          <div class="product-media">
            <img class="main-image" src="${imagePath(product.front)}" alt="${product.name}" />
            ${
              product.video
                ? `<video class="hover-image hover-video" src="${videoPath(product.video)}" muted loop playsinline preload="metadata" aria-label="${product.name} 360视角"></video>`
                : `<img class="hover-image" src="${imagePath(product.back || product.front)}" alt="${product.name} 另一视角" />`
            }
          </div>
          <div class="product-info">
            <div class="product-topline">
              <span>${product.id}</span>
              <span>${categoryLabel(product.type)}</span>
            </div>
            <h3>${product.name}</h3>
            <p>¥${product.price} RMB</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function openProduct(product) {
  modalCategory.textContent = categoryLabel(product.type);
  modalTitle.textContent = product.name;
  modalTitle.style.fontSize = "";
  modalPrice.textContent = `¥${product.price} RMB`;
  modalDescription.textContent = product.note;
  modalSizes.innerHTML = sizesFor(product.type).map((size) => `<span>${size}</span>`).join("");
  const media = [modalImage(product.front, `${product.name} 正面`)];
  if (product.video) {
    media.push(
      `<video class="modal-video" src="${videoPath(product.video)}" autoplay muted loop playsinline controls aria-label="${product.name} 360视角"></video>`,
    );
    if (product.detail) {
      media.push(modalImage(product.detail, `${product.name} 产品图`));
    }
  } else {
    media.push(...bikiniMedia(product));
  }
  modalGallery.innerHTML = media.join("");
  modal.showModal();
  window.requestAnimationFrame(fitModalTitle);
}

function fitModalTitle() {
  modalTitle.style.fontSize = "";
  const minimum = 26;
  let size = parseFloat(getComputedStyle(modalTitle).fontSize);
  while (modalTitle.scrollWidth > modalTitle.clientWidth && size > minimum) {
    size -= 2;
    modalTitle.style.fontSize = `${size}px`;
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function playHeroVideo(video) {
  video.preload = "auto";
  video.loop = true;
  video.playsInline = true;
  if (video.readyState < 2) video.load();
  video.muted = !bgmEnabled;
  video.volume = bgmEnabled ? 0.72 : 0;
  const playAttempt = video.play();
  if (playAttempt) {
    playAttempt.catch(() => {
      video.muted = true;
      bgmEnabled = false;
      updateBgmButton();
      video.play().catch(() => {});
    });
  }
}

function updateBgmButton() {
  if (!bgmToggle) return;
  bgmToggle.classList.toggle("is-on", bgmEnabled);
  bgmToggle.textContent = bgmEnabled ? "BGM On" : "BGM Off";
  bgmToggle.setAttribute("aria-pressed", String(bgmEnabled));
  bgmToggle.setAttribute("aria-label", bgmEnabled ? "关闭视频背景音乐" : "打开视频背景音乐");
}

function setHeroSlide(index, restart = true) {
  if (!heroVideos.length) return;
  currentHero = (index + heroVideos.length) % heroVideos.length;
  heroVideos.forEach((video, videoIndex) => {
    const active = videoIndex === currentHero;
    video.classList.toggle("active", active);
    if (active) {
      if (restart) {
        try {
          video.currentTime = 0;
        } catch {}
      }
      playHeroVideo(video);
    } else {
      video.pause();
      video.muted = true;
    }
  });
  heroDots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentHero));
}

function startHeroTimer() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => setHeroSlide(currentHero + 1), 9000);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (!card) return;
  const product = products.find((item) => item.id === card.dataset.id);
  if (product) openProduct(product);
});

grid.addEventListener("mouseover", (event) => {
  const video = event.target.closest(".product-card")?.querySelector(".hover-video");
  if (video) video.play().catch(() => {});
});

grid.addEventListener("mouseout", (event) => {
  const card = event.target.closest(".product-card");
  if (!card || card.contains(event.relatedTarget)) return;
  const video = card.querySelector(".hover-video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".product-card");
  if (!card) return;
  event.preventDefault();
  const product = products.find((item) => item.id === card.dataset.id);
  if (product) openProduct(product);
});

closeModal.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  const modalBox = modal.querySelector(".modal-layout");
  if (!modalBox.contains(event.target) && event.target !== closeModal) {
    modal.close();
  }
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

heroPrev?.addEventListener("click", () => {
  setHeroSlide(currentHero - 1);
  startHeroTimer();
});

heroNext?.addEventListener("click", () => {
  setHeroSlide(currentHero + 1);
  startHeroTimer();
});

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setHeroSlide(Number(dot.dataset.heroSlide));
    startHeroTimer();
  });
});

heroVideos.forEach((video, index) => {
  video.addEventListener("ended", () => {
    if (index === currentHero) {
      setHeroSlide(currentHero + 1);
      startHeroTimer();
    }
  });
});

bgmToggle?.addEventListener("click", () => {
  bgmEnabled = !bgmEnabled;
  updateBgmButton();
  setHeroSlide(currentHero, false);
  showToast(bgmEnabled ? "BGM on" : "BGM off");
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) setHeroSlide(currentHero, false);
});

renderProducts();
updateBgmButton();
setHeroSlide(0, false);
startHeroTimer();
