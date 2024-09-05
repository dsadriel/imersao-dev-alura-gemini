const dados = [
    {
        nome: 'Spaghetti ao Alho e Óleo',
        tempoDePreparo: 15,
        rende: '2 porções',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LIFc0Hsd2s7kOPys9hP41iWbcS0wPLD36Q&s',
        link: 'https://www.casaredo.com/blog/2020/11/12/receita-macarrao-alho-oleo-camarao',
        descricao: 'Um clássico da culinária italiana, feito com ingredientes básicos como alho, azeite e macarrão.',
        tags: ['italiana', 'massa', 'rápida', 'vegetariana']
    },
    {
        nome: 'Frango Xadrez',
        tempoDePreparo: 30,
        rende: '4 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/07/frango-xadrez.jpg',
        link: 'https://catracalivre.com.br/receitas/frango-xadrez-rapido-e-delicioso/',
        descricao: 'Receita tradicional chinesa de frango com legumes como pimentão, cebola e amendoim.',
        tags: ['chinesa', 'frango', 'salgada', 'rápida']
    },
    {
        nome: 'Panqueca Americana',
        tempoDePreparo: 20,
        rende: '6 porções',
        imagem: 'https://www.mococa.com.br/wp-content/uploads/2022/03/Panquecas-americanas.jpeg',
        link: 'https://www.mococa.com.br/receita/panquecas-americanas/',
        descricao: 'Panquecas fofas ideais para o café da manhã, servidas com mel ou xarope de bordo.',
        tags: ['doce', 'rápida', 'café da manhã', 'americana']
    },
    {
        nome: 'Lasanha de Berinjela',
        tempoDePreparo: 60,
        rende: '6 porções',
        imagem: 'https://receitasdepesos.com.br/wp-content/uploads/2023/12/como-fazer-lasanha-de-berinjela.jpg',
        link: 'https://receitasdepesos.com.br/como-fazer-uma-deliciosa-lasanha-de-berinjela.html/',
        descricao: 'Uma lasanha vegetariana deliciosa, substituindo a massa por camadas de berinjela grelhada.',
        tags: ['vegetariana', 'italiana', 'forno']
    },
    {
        nome: 'Salada Caesar',
        tempoDePreparo: 10,
        rende: '2 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/11/caeser.jpg',
        link: 'https://catracalivre.com.br/receitas/faca-a-melhor-salada-caeser-da-vida-para-se-refrescar-do-calor/',
        descricao: 'Salada clássica com alface, croutons e molho caesar, perfeita para acompanhar refeições.',
        tags: ['salada', 'rápida', 'entrada']
    },
    {
        nome: 'Brigadeiro Tradicional',
        tempoDePreparo: 20,
        rende: '20 brigadeiros',
        imagem: 'https://www.casaredo.com/blog/wp-content/uploads/2018/01/brigadeiro-e-biscoito.jpg',
        link: 'https://www.casaredo.com/blog/2020/06/03/brigadeiro-veja-a-forma-de-incrementar-sua-receita-com-biscoitos/',
        descricao: 'Doce brasileiro feito com leite condensado, chocolate em pó e granulado.',
        tags: ['brasileira', 'doce', 'festa', 'rápida']
    },
    {
        nome: 'Risoto de Cogumelos',
        tempoDePreparo: 40,
        rende: '4 porções',
        imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/02/iStock-472180291.jpg',
        link: 'https://blog.gsuplementos.com.br/risoto-de-cogumelos-frescos/',
        descricao: 'Risoto cremoso feito com cogumelos frescos, arroz arbóreo e vinho branco.',
        tags: ['italiana', 'risoto', 'vegetariana']
    },
    {
        nome: 'Torta de Limão',
        tempoDePreparo: 90,
        rende: '8 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/07/istock-185265004-1-910x635.jpg',
        link: 'https://catracalivre.com.br/receitas/torta-de-limao-refrescante-e-sem-erro-para-adocar-seu-dia/',
        descricao: 'Torta doce com base de biscoito e recheio cremoso de limão, finalizada com merengue.',
        tags: ['doce', 'sobremesa', 'forno']
    },
    {
        nome: 'Estrogonofe de Carne',
        tempoDePreparo: 30,
        rende: '4 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/08/strogonoff-carne.jpg',
        link: 'https://mrcuca.com.br/bora-aprender-como-fazer-strogonoff-de-carne-simples-e-facil/',
        descricao: 'Clássico estrogonofe de carne com molho cremoso de creme de leite e champignon.',
        tags: ['brasileira', 'carne', 'rápida', 'salgada']
    },
    {
        nome: 'Bolo de Cenoura com Cobertura de Chocolate',
        tempoDePreparo: 60,
        rende: '12 fatias',
        imagem: 'https://www.evino.com.br/blog/wp-content/uploads/2022/08/bolo-de-cenoura-com-cobertura-de-chocolate-960x540.jpg',
        link: 'https://www.evino.com.br/blog/bolo-de-cenoura-com-cobertura-de-chocolate/',
        descricao: 'Bolo fofinho de cenoura coberto com uma calda deliciosa de chocolate.',
        tags: ['doce', 'sobremesa', 'bolo', 'brasileira']
    }
];