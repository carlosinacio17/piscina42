document.addEventListener('DOMContentLoaded', function() {
    // Elementos da Sidebar
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggler = document.querySelector('.sidebar-toggler');
    const menuToggler = document.querySelector('.menu-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    const collapsedSidebarHeight = "56px"

    
    // Área de Conteúdo
    const contentArea = document.querySelector('.content-area');
    const allContents = document.querySelectorAll('.content');
    
    // Mostrar conteúdo inicial (Aulas)
    showContent('aulas-content');

    // Toggle da Sidebar
    sidebarToggler.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Ajusta a posição do botão quando recolhido
        if (sidebar.classList.contains('collapsed')) {
            setTimeout(() => {
                const tooltips = document.querySelectorAll('.nav-tooltip');
                tooltips.forEach(tooltip => tooltip.style.display = 'none');
            }, 400); // Espera a animação terminar
        } else {
            const tooltips = document.querySelectorAll('.nav-tooltip');
            tooltips.forEach(tooltip => tooltip.style.display = '');
        }
    });

    // Navegação entre conteúdos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove a classe active de todos os links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Adiciona a classe active apenas no link clicado
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const contentId = this.getAttribute('data-content');
            showContent(contentId);
            
            // Recolhe a sidebar em dispositivos móveis
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
            }
        });
    });

    // Função para mostrar conteúdo específico
    function showContent(contentId) {
        // Esconde todos os conteúdos
        allContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Mostra o conteúdo selecionado
        const activeContent = document.getElementById(contentId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }

    // Tooltips para sidebar recolhida
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (sidebar.classList.contains('collapsed')) {
                const tooltip = this.querySelector('.nav-tooltip');
                if (tooltip) {
                    tooltip.style.display = 'block';
                    setTimeout(() => {
                        tooltip.style.opacity = '1';
                    }, 10);
                }
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (sidebar.classList.contains('collapsed')) {
                const tooltip = this.querySelector('.nav-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    setTimeout(() => {
                        tooltip.style.display = 'none';
                    }, 300);
                }
            }
        });
    });

    // Responsividade - Toggle para mobile
    function handleResponsive() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
        } else {
            sidebar.classList.remove('collapsed');
        }
    }

    // Verifica no carregamento e em redimensionamentos
    window.addEventListener('load', handleResponsive);
    window.addEventListener('resize', handleResponsive);
});

const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : ``;
    collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
});
