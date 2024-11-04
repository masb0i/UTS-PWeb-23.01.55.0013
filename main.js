document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>Tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-75", "mx-auto", "d-block");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    document.querySelector(".btnBeli").href = "products.html";
  });
});

// Ambil elemen tombol dan modal
const triggerOrderModal = document.getElementById("triggerOrderModal");
const orderSuccessModal = document.getElementById("orderSuccessModal");
const closeOrderModalButton = document.getElementById("closeOrderModalButton");

// Menampilkan modal saat tombol diklik
triggerOrderModal.addEventListener("click", function () {
  orderSuccessModal.style.display = "flex";
});

// Menutup modal saat tombol "Tutup" diklik
closeOrderModalButton.addEventListener("click", function () {
  orderSuccessModal.style.display = "none";
});

// Menutup modal saat mengklik di luar area modal
window.addEventListener("click", function (event) {
  if (event.target === orderSuccessModal) {
    orderSuccessModal.style.display = "none";
  }
});
