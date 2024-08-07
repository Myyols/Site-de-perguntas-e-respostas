const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A maioria das pessoas tem amizades superficiais e poucas investem seu tempo nas redes, em atividades realmente importantes e outras apenas perdem tempo nas redes, não adicionando conhecimentos nem aproveitando tudo oque a tecnologia pode nos proporcionar",
    
        alternativas: [
            {
                texto: "Eu invisto tempo nas redes.",
                afirmacao: "Eu invisto, procurando e pesquisando informações que tenho curiosidade, aprendendo novas coisas",
            },
            {
                texto: "Eu perco meu tempo nas redes",
                afirmacao: "Pesnso que as redes foram criadas apenas para distrações e para passar tempo"
            }
        ]
    },
    {
        enunciado: "Uma pesquisa internacional feita por um site de tecnologia mostrou que os brasileiros são praticamente recordistas em tempo conectado a telas de celulares ou outros eletrônicos. A população fica em média 9 horas e meia por dia.",
        alternativas: [
            {
                texto: "Você fica mais de 9 horas investindo seu tempo nas redes.",
                afirmacao: "Se estou aprendendo e investindo o meu tempo nas redes, é uma boa escolha."
            },
            {
                texto: "Você fica mais de 9 horas nas redes apenas por distração",
                afirmacao: "Fico nas redes mesmo sabendo que não estou ganhando nada com essa ação."
            }
        ]
    },
    {
        enunciado: "As redes sociais têm um impacto significativo na comunicação e conectividade, com benefícios evidentes para a manunteção de relacionamentos, expanção de redes profissionais e acesso a informações. No entanto, é crucial estar ciente dos desafios associados, como a superficialidas das interações e a potencial a propagação de desinformação.",
        alternativas: [
            {
                texto: "Você se da bem com a tecnologia.",
                afirmacao: "Me dou bem com a tecnologia, acho fácil e gosto de mecher nas redes"
            },
            {
                texto: "Você não se dá bem com a tecnologia.",
                afirmacao: "Não me dou bem com a tecnologia acho muito complicado, mas tenho vontade de aprender."
            }
        ]
    },
    


   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
