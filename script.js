function abrirModal(id) {
    event.stopPropagation();
    document.getElementById(id).style.display = "flex";
}

function fecharModal(id) {
    event.stopPropagation();
    document.getElementById(id).style.display = "none";
}

document.querySelectorAll(".modal").forEach(function(modal) {
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
