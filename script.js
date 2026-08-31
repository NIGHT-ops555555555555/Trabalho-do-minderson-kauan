let chaveAtual = 'diretoria';

const mapaEspacos = {
    diretoria: {
        nome: "Diretoria",
        desc: "Espaço de gestão da escola, responsável pela organização pedagógica e atendimento às famílias.",
        acao: "📋 Você entregou uma proposta de evento acadêmico para aprovação!"
    },
    professores: {
        nome: "Sala dos Professores",
        desc: "Ambiente reservado para planejamento de aulas, reuniões de equipe e momentos de descanso dos docentes.",
        acao: "☕ Você tirou uma dúvida sobre o trabalho diretamente com os professores!"
    },
    basquete: {
        nome: "Arena de Basquete",
        desc: "Espaço adaptado com tabela oficial para treinos, campeonatos e jogos escolares.",
        acao: "🏀 Você acertou uma cesta de três pontos no final do jogo!"
    }
};

function carregarLugar(chave) {
    chaveAtual = chave;
    document.getElementById('nome-espaco').innerText = mapaEspacos[chave].nome;
    document.getElementById('desc-espaco').innerText = mapaEspacos[chave].desc;
    document.getElementById('feedback').innerText = "";
}

function acaoInterativa() {
    document.getElementById('feedback').innerText = mapaEspacos[chaveAtual].acao;
}