document.addEventListener('DOMContentLoaded', function() {
    const dedo = document.getElementById('dedo');
    dedo.style.display = "none";
    dedo.style.opacity = 0;

    // Função para rolar para o topo da página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    dedo.addEventListener('click', function() {
        scrollToTop();
    });

    window.addEventListener('scroll', function() {
        const header = document.getElementById('blur-header');
        const scrollY = window.scrollY;
        const minY = 100;

        if (scrollY > minY) {
            header.classList.add('blur');
        } else {
            header.classList.remove('blur');
        }

        if (scrollY === 0) {
            header.style.backgroundColor = "transparent";
        } else {
            header.style.backgroundColor = "#231f2044";
        }

        // Estilo do dedo apontando pra cima
        if (scrollY > 0) {
            dedo.style.display = "flex";
            if (scrollY > minY) {
                dedo.style.opacity = 1;
            } else {
                dedo.style.opacity = 0.5 * (scrollY / minY); // Ajusta a opacidade ao rolar para cima
            }
        } else {
            dedo.style.display = "none";
            dedo.style.opacity = 0;
        }
    });
});