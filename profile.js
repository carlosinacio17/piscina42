// Função para carregar dados do perfil
function loadProfileData() {
    // Simulação de dados da BD - substitua por chamada real à sua API
    const userData = {
       nome: "Daniel Ambrosio",
            email: "dkka2005@gmail.com",
            cargo: "Estudante",
            telefone: "(11) 98765-4321",
            dataRegisto: "2023-05-15",
            localizacao: "luanda, sapu",
            avatar: "dk.jpg",
            estatisticas: {
                jogosCompletos: 12,
                aulasConcluidas: 8,
                sessoes: 5
        }
    };
    
    // Formatar data
    const joinDate = new Date(userData.dataRegisto);
    const options = { year: 'numeric', month: 'short' };
    const formattedDate = joinDate.toLocaleDateString('pt-PT', options);
    
    // Preencher os dados na página
    document.getElementById('user-avatar').src = userData.avatar;
    document.getElementById('user-name').textContent = userData.nome;
    document.getElementById('user-role').textContent = userData.cargo;
    document.getElementById('user-email').textContent = userData.email;
    document.getElementById('user-phone').textContent = userData.telefone;
    document.getElementById('user-join-date').textContent = `Membro desde ${formattedDate}`;
    document.getElementById('user-location').textContent = userData.localizacao;
    
    // Preencher estatísticas
    document.getElementById('jogos-completos').textContent = userData.estatisticas.jogosCompletos;
    document.getElementById('aulas-concluidas').textContent = userData.estatisticas.aulasConcluidas;
    document.getElementById('sessoes').textContent = userData.estatisticas.sessoes;
}

// Função para mostrar um conteúdo específico e esconder os outros
function showContent(contentId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    // Mostra o conteúdo selecionado
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.classList.remove('hidden');
        contentToShow.classList.add('active');
    }
}

// Configura os listeners para os links da sidebar
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-content');
            if (contentId) {
                showContent(contentId);
            }
        });
    });
}

// Carrega o perfil quando a página estiver pronta
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    loadProfileData();
    
    // Mostra as aulas por padrão
    showContent('aulas-content');
});