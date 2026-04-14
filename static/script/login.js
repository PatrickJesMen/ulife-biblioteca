document.addEventListener('DOMContentLoaded', () => {
    // Pegando os elementos do HTML pelo ID
    const campoSenha = document.getElementById('senha');
    const botaoAlternar = document.getElementById('alternar-senha');
    const iconeOlho = document.getElementById('icone-olho');

    // Verificando se os elementos existem na página antes de adicionar o evento
    if (botaoAlternar && campoSenha && iconeOlho) {
        botaoAlternar.addEventListener('click', () => {
            // Verifica o tipo atual e inverte
            const tipoAtual = campoSenha.getAttribute('type');
            const novoTipo = tipoAtual === 'password' ? 'text' : 'password';
            campoSenha.setAttribute('type', novoTipo);
            
            // Alterna a classe do ícone (olho cortado / olho aberto)
            iconeOlho.classList.toggle('fa-eye-slash');
            iconeOlho.classList.toggle('fa-eye');
        });
    }
});