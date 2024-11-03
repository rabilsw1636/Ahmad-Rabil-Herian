function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
