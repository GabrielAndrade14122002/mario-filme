
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;
function alternarModal(){
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});
const modal = document.querySelector(".modal");
console.log("modal", modal);
const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
});
