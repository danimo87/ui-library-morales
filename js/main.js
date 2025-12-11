/* --- MODAL --- */
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modalContainer");

// Verificamos que los elementos existan antes de asignar eventos
if (openModal && closeModal && modal) {
    openModal.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que la página salte hacia arriba
        modal.classList.add("show");
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove("show");
    });

    // Opcional: Cerrar el modal si haces clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
}

/* --- ACORDEÓN --- */
// Corrección: Usamos ".accordion-header" (guion medio) para coincidir con tu HTML
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {

        // Cerrar todos los demás
        accordionHeaders.forEach(h => {
            if (h !== header) {
                h.classList.remove("active");
                h.nextElementSibling.style.maxHeight = null;
            }
        });

        // Alternar el actual
        header.classList.toggle("active");
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

/* --- NAVBAR RESPONSIVE --- */
const navToggle = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle("show");
    });
}