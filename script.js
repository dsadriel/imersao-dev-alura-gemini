
function minutosParaTexto(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    let texto = '';

    if (horas > 0) texto += `${horas} hora${horas > 1 ? 's' : ''}`;

    if (minutosRestantes > 0) {
        if (horas > 0) texto += ' e';
        texto += ` ${minutosRestantes} minuto${minutosRestantes > 1 ? 's' : ''}`;
    }

    return texto;
}

function itemParaHTML(item) {
    return `
        <div class="item-resultado">
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="detalhes">
                <h2>${item.nome}</h2>
                <div class="tags">
                    ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <p class="info">${minutosParaTexto(item.tempoDePreparo)} | ${item.extra} | Fonte: ${item.link.split('/')[2].replace('www.', '')}</p>
                <p class="descricao">${item.descricao}</p>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver receita</a>
            </div>
        </div>`;
}

const slides = document.querySelectorAll('.imagens-capa img');
let slideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function buscarReceitas() {
    const termo = document.querySelector('#busca').value.toLowerCase();
    const filtro = document.querySelector('#filtro').value;
    const elementoResultado = document.querySelector('#resultados');

    let resultado = [];

    if (termo === '') {
        elementoResultado.innerHTML =
            '<p style="text-align:center; font-weight:bold;">Por favor, digite um termo para buscar.</p>';
        
        return;
    }


    // Filtra os dados de acordo com o termo e o filtro selecionado
    if (filtro === 'nome') {
        resultado = dados.filter(item => item.nome.toLowerCase().includes(termo));
    } else if (filtro === 'categoria') {
        resultado = dados.filter(item => item.tags.some(tag => tag.toLowerCase().includes(termo)));
    } else {
        const tempo = parseInt(termo);
        resultado = dados.filter(item => item.tempoDePreparo <= tempo);
    }

    // Exibe os resultados na página
    if (resultado.length === 0) {
        elementoResultado.innerHTML = '<p style="text-align:center">Nenhum resultado encontrado. O que tal pergunta para a <a href="https://gemini.google.com/app" target="_blank"><img class="inline" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1280px-Google_Gemini_logo.svg.png"><a>?</p>';
    } else {
        elementoResultado.innerHTML = resultado.map(itemParaHTML).join('');
    }

    document.querySelector('header').style.height = 'auto';
}


function receitasAleatorias(qtde, texto) {
    let receitasAleatorias = [];
    let indiceAleatorio;
    
    if(typeof qtde != 'number') qtde = 3;

    if (qtde === undefined) qtde = 3;
    if (texto === undefined) texto = 'Que tal experimentar essas receitas?';
    
    // Limita a quantidade de receitas aleatórias ao tamanho do array
    if(qtde > dados.length) qtde = dados.length;
    
    for (let i = 0; i < qtde; i++) {
        indiceAleatorio = Math.floor(Math.random() * dados.length);
            if(receitasAleatorias.includes(dados[indiceAleatorio])) i--;
        else
            receitasAleatorias.push(dados[indiceAleatorio]);
    }

    document.querySelector('#resultados').innerHTML = `
        <p>${texto}</p>
        ${receitasAleatorias.map(itemParaHTML).join('')}`;

}



document.getElementById('buscar').addEventListener('click', buscarReceitas);
document.getElementById('estou-com-sorte').addEventListener('click', receitasAleatorias);
document.getElementById('busca').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') buscarReceitas();
});

// Mostrar o primeiro slide no início
showSlide(slideIndex);

// Alterar os slides automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);

// Exibir receitas aleatórias ao carregar a página
receitasAleatorias(1, 'Que tal experimentar essa receita?');