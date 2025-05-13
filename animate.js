// Animação de digitação - Adaptada para o título do dashboard
function initTypewriter() {
    const typewriterText = "Educação inclusiva ao seu alcance.";
    const typewriterElement = document.querySelector('.main-container h1');
    
    if (!typewriterElement) return;
    
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = typewriterElement.textContent;
        if (!isDeleting) {
            if (index < typewriterText.length) {
                typewriterElement.textContent = typewriterText.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                isDeleting = true;
                setTimeout(typeWriter, 1000);
            }
        } else {
            if (index > 1) {
                typewriterElement.textContent = typewriterText.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, 50);
            } else {
                isDeleting = false;
                setTimeout(typeWriter, 500);
            }
        }
    }

    // Inicia a animação
    typeWriter();
}

// Função para mostrar módulos - Compatível com seu HTML original
function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(module => {
        module.classList.remove('active');
    });
    document.getElementById(moduleId).classList.add('active');
    
    // Adiciona rolagem suave para o topo do módulo
    document.querySelector('.main-container').scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para mostrar vídeos - Compatível com seu HTML original
function showVideo(videoId) {
    document.querySelectorAll('.video-container').forEach(container => {
        container.style.display = container.id === videoId ? 'block' : 'none';
        
        // Pausar vídeos quando escondidos
        const video = container.querySelector('video');
        if (video && container.id !== videoId) {
            video.pause();
        }
    });
}

// Função para animar os elementos ao rolar - Adaptada para o dashboard
function animateOnScroll() {
    const elements = document.querySelectorAll('.module, .menu-item, .chart-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Inicia a animação de digitação
    initTypewriter();
    
    // Configura eventos dos itens do menu
    document.querySelectorAll('.menu-item').forEach(item => {
        const moduleId = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        item.addEventListener('click', () => showModule(moduleId));
    });
    
    // Configura eventos dos links de vídeo
    document.querySelectorAll('[onclick^="showVideo"]').forEach(link => {
        const videoId = link.getAttribute('onclick').match(/'([^']+)'/)[1];
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showVideo(videoId);
        });
    });
    
    // Adiciona listener de scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Inicializa gráficos (se necessário)
    initCharts();
});

// Função para inicializar gráficos - Adaptada para seu HTML
function initCharts() {
    const ctxGeral = document.getElementById('graficoGeral');
    if (ctxGeral) {
        new Chart(ctxGeral.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Matemática', 'Português', 'Ciências', 'História'],
                datasets: [{
                    label: 'Desempenho Geral',
                    data: [85, 78, 92, 88],
                    backgroundColor: 'rgba(255, 90, 95, 0.7)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    const ctxDisciplina = document.getElementById('graficoDisciplina');
    if (ctxDisciplina) {
        new Chart(ctxDisciplina.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                datasets: [{
                    label: 'Progresso em Matemática',
                    data: [65, 72, 80, 85],
                    borderColor: 'rgba(255, 90, 95, 1)',
                    backgroundColor: 'rgba(255, 90, 95, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}
