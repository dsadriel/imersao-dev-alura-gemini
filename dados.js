var dados = [
    {
        nome: 'Spaghetti ao Alho e Óleo',
        tempoDePreparo: 15,
        extra: '2 porções',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LIFc0Hsd2s7kOPys9hP41iWbcS0wPLD36Q&s',
        link: 'https://www.casaredo.com/blog/2020/11/12/receita-macarrao-alho-oleo-camarao',
        descricao: 'Um clássico da culinária italiana, feito com ingredientes básicos como alho, azeite e macarrão.',
        tags: ['italiana', 'massa', 'rápida', 'vegetariana']
    },
    {
        nome: 'Frango Xadrez',
        tempoDePreparo: 30,
        extra: '4 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/07/frango-xadrez.jpg',
        link: 'https://catracalivre.com.br/receitas/frango-xadrez-rapido-e-delicioso/',
        descricao: 'Receita tradicional chinesa de frango com legumes como pimentão, cebola e amendoim.',
        tags: ['chinesa', 'frango', 'salgada', 'rápida']
    },
    {
        nome: 'Panqueca Americana',
        tempoDePreparo: 20,
        extra: '6 porções',
        imagem: 'https://www.mococa.com.br/wp-content/uploads/2022/03/Panquecas-americanas.jpeg',
        link: 'https://www.mococa.com.br/receita/panquecas-americanas/',
        descricao: 'Panquecas fofas ideais para o café da manhã, servidas com mel ou xarope de bordo.',
        tags: ['doce', 'rápida', 'café da manhã', 'americana']
    },
    {
        nome: 'Lasanha de Berinjela',
        tempoDePreparo: 60,
        extra: '6 porções',
        imagem: 'https://receitasdepesos.com.br/wp-content/uploads/2023/12/como-fazer-lasanha-de-berinjela.jpg',
        link: 'https://receitasdepesos.com.br/como-fazer-uma-deliciosa-lasanha-de-berinjela.html/',
        descricao: 'Uma lasanha vegetariana deliciosa, substituindo a massa por camadas de berinjela grelhada.',
        tags: ['vegetariana', 'italiana', 'forno']
    },
    {
        nome: 'Salada Caesar',
        tempoDePreparo: 10,
        extra: '2 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/11/caeser.jpg',
        link: 'https://catracalivre.com.br/receitas/faca-a-melhor-salada-caeser-da-vida-para-se-refrescar-do-calor/',
        descricao: 'Salada clássica com alface, croutons e molho caesar, perfeita para acompanhar refeições.',
        tags: ['salada', 'rápida', 'entrada']
    },
    {
        nome: 'Brigadeiro Tradicional',
        tempoDePreparo: 20,
        extra: '20 brigadeiros',
        imagem: 'https://www.casaredo.com/blog/wp-content/uploads/2018/01/brigadeiro-e-biscoito.jpg',
        link: 'https://www.casaredo.com/blog/2020/06/03/brigadeiro-veja-a-forma-de-incrementar-sua-receita-com-biscoitos/',
        descricao: 'Doce brasileiro feito com leite condensado, chocolate em pó e granulado.',
        tags: ['brasileira', 'doce', 'festa', 'rápida']
    },
    {
        nome: 'Risoto de Cogumelos',
        tempoDePreparo: 40,
        extra: '4 porções',
        imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2022/02/iStock-472180291.jpg',
        link: 'https://blog.gsuplementos.com.br/risoto-de-cogumelos-frescos/',
        descricao: 'Risoto cremoso feito com cogumelos frescos, arroz arbóreo e vinho branco.',
        tags: ['italiana', 'risoto', 'vegetariana']
    },
    {
        nome: 'Torta de Limão',
        tempoDePreparo: 90,
        extra: '8 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/07/istock-185265004-1-910x635.jpg',
        link: 'https://catracalivre.com.br/receitas/torta-de-limao-refrescante-e-sem-erro-para-adocar-seu-dia/',
        descricao: 'Torta doce com base de biscoito e recheio cremoso de limão, finalizada com merengue.',
        tags: ['doce', 'sobremesa', 'forno']
    },
    {
        nome: 'Estrogonofe de Carne',
        tempoDePreparo: 30,
        extra: '4 porções',
        imagem: 'https://catracalivre.com.br/wp-content/uploads/2023/08/strogonoff-carne.jpg',
        link: 'https://mrcuca.com.br/bora-apextrar-como-fazer-strogonoff-de-carne-simples-e-facil/',
        descricao: 'Clássico estrogonofe de carne com molho cremoso de creme de leite e champignon.',
        tags: ['brasileira', 'carne', 'rápida', 'salgada']
    },
    {
        nome: 'Bolo de Cenoura com Cobertura de Chocolate',
        tempoDePreparo: 60,
        extra: '12 fatias',
        imagem: 'https://www.evino.com.br/blog/wp-content/uploads/2022/08/bolo-de-cenoura-com-cobertura-de-chocolate-960x540.jpg',
        link: 'https://www.evino.com.br/blog/bolo-de-cenoura-com-cobertura-de-chocolate/',
        descricao: 'Bolo fofinho de cenoura coberto com uma calda deliciosa de chocolate.',
        tags: ['doce', 'sobremesa', 'bolo', 'brasileira']
    },
    {
        nome: "Batata Gratinada",
        tempoDePreparo: 45,
        extra: "4 porções",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/batata-gratinada-capa.png",
        link: "https://www.receiteria.com.br/receita/batata-gratinada/",
        descricao: "Fatias de batata cozidas e gratinadas com queijo e creme de leite.",
        tags: ["francesa", "acompanhamento", "forno"]
    },
    {
        nome: "Coxinha de Frango",
        tempoDePreparo: 90,
        extra: "30 unidades",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/coxinha-capa.jpeg",
        link: "https://www.receiteria.com.br/receita/coxinha-de-frango/",
        descricao: "Clássico salgadinho brasileiro feito com massa cozida e recheio de frango desfiado.",
        tags: ["brasileira", "festa", "salgada"]
    },
    {
        nome: "Empadão de Frango",
        tempoDePreparo: 70,
        extra: "8 porções",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/empadao-de-frango.jpeg",
        link: "https://www.receiteria.com.br/receita/empadao-de-frango/",
        descricao: "Empadão com recheio cremoso de frango, perfeito para uma refeição completa.",
        tags: ["brasileira", "frango", "forno"]
    },
    {
        nome: "Bruschetta de Tomate",
        tempoDePreparo: 15,
        extra: "4 porções",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/brusqueta.jpeg",
        link: "https://www.receiteria.com.br/receita/bruschetta-de-tomate/",
        descricao: "Entrada italiana simples com pão torrado, tomate, manjericão e azeite.",
        tags: ["italiana", "entrada", "rápida"]
    },
    {
        nome: "Ratatouille",
        tempoDePreparo: 60,
        extra: "4 porções",
        imagem: "https://cdn.loveandlemons.com/wp-content/uploads/2024/07/ratatouille-recipe.jpg",
        link: "https://www.loveandlemons.com/ratatouille/",
        descricao: "Um prato tradicional francês de vegetais assados, como berinjela, abobrinha e pimentão.",
        tags: ["francesa", "vegetariana", "forno"]
    },
    {
        nome: "Coq au Vin",
        tempoDePreparo: 120,
        extra: "4 porções",
        imagem: "https://www.simplyrecipes.com/thmb/GSdUAtAjWR5iVqNnsaNEY1OgcZU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2005__10__coq-au-vin-horiz-a-1800-sally-244e2d1176de4d808b46df9bbe449862.jpg",
        link: "https://www.simplyrecipes.com/recipes/coq_au_vin/",
        descricao: "Frango cozido lentamente em vinho tinto com cogumelos, cebolas e bacon.",
        tags: ["francesa", "carne", "forno"]
    },
    {
        nome: "Quiche Lorraine",
        tempoDePreparo: 60,
        extra: "6 porções",
        imagem: "https://www.simplyrecipes.com/thmb/ARidzVl2GjKZYxeFqF6gafSGh9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Quiche-Lorraine-LEAD-4-bbc2620b4ce444629038f602b6f1b533.jpg",
        link: "https://www.simplyrecipes.com/recipes/quiche_lorraine/",
        descricao: "Uma quiche clássica com bacon e queijo, ideal para um brunch ou almoço.",
        tags: ["francesa", "forno", "quiche"]
    },
    {
        nome: "Boeuf Bourguignon",
        tempoDePreparo: 150,
        extra: "6 porções",
        imagem: "https://www.simplyrecipes.com/thmb/tOJM_nOnbq-5xbrzTSo6U5xrTDk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Beef-Bourguignon-LEAD-1-1097x1536-39de2ea3410b4999882052f6ae8091f0.jpg",
        link: "https://www.simplyrecipes.com/recipes/beef_bourguignon/",
        descricao: "Carne de boi cozida lentamente em vinho tinto com cogumelos e cenouras.",
        tags: ["francesa", "carne", "forno"]
    },
    {
        nome: "Gâteau au Chocolat",
        tempoDePreparo: 60,
        extra: "8 porções",
        imagem: "https://assets.afcdn.com/recipe/20190529/93102_w600.jpg",
        link: "https://www.marmiton.org/recettes/recette_gateau-au-chocolat-fondant-rapide_166352.aspx#d93102-p3",
        descricao: "Bolo de chocolate francês denso e úmido, ideal para os amantes de chocolate.",
        tags: ["francesa", "sobremesa", "bolo"]
    },
    {
        nome: "Hambúrguer",
        tempoDePreparo: 30,
        extra: "4 porções",
        imagem: "https://www.allrecipes.com/thmb/Hmni1cu_75Co5MsZp2b5rcWN5ms=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg",
        link: "https://www.allrecipes.com/recipe/72657/best-hamburger-ever/",
        descricao: "O clássico hambúrguer americano, feito com carne bovina moída e servido com acompanhamentos a gosto.",
        tags: ["americana", "carne", "rápida"]
    },
    {
        nome: "Macarrão com Queijo",
        tempoDePreparo: 40,
        extra: "4 porções",
        imagem: "https://www.estadao.com.br/resizer/v2/LDVSF7DVRREEBLLHX2SFKWNMIQ.JPG?quality=80&auth=182d4b41301d1de1e34920a810f73e6afff3bfc8fb05fd546eee45f3057380d0&width=768&height=542&smart=true",
        link: "https://www.estadao.com.br/paladar/receita/mac-and-cheese-com-bacon/",
        descricao: "Macarrão cremoso com molho de queijo, um prato reconfortante e popular nos Estados Unidos.",
        tags: ["americana", "massa", "forno"]
    },
    {
        nome: "Costelas ao Barbecue",
        tempoDePreparo: 120,
        extra: "4 porções",
        imagem: "https://www.allrecipes.com/thmb/KVblK6SSqdxweb0IWhCmiN2_xas=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/22469-Barbecue-Ribs-ddmfs-4x3-208-0221b0213517493494a29c1c76a8d1cc.jpg",
        link: "https://www.allrecipes.com/recipe/22469/barbecue-ribs/",
        descricao: "Costelas de porco assadas lentamente com molho barbecue, um prato típico de churrasco americano.",
        tags: ["americana", "carne", "churrasco"]
    },
    {
        nome: "Cheesecake",
        tempoDePreparo: 90,
        extra: "8 porções",
        imagem: "https://static.itdg.com.br/images/640-400/8cc9034a05f6a1b9e3dce878ee2cb39f/344847-original.jpg",
        link: "https://www.tudogostoso.com.br/receita/165141-cheesecake-new-york.html",
        descricao: "Cheesecake clássico com base de biscoito e um recheio cremoso de queijo, ideal para sobremesas.",
        tags: ["americana", "sobremesa", "bolo"]
    },
    {
        nome: "Apple Pie",
        tempoDePreparo: 90,
        extra: "8 porções",
        imagem: "https://www.allrecipes.com/thmb/y4A1u56wlxTpMexUFWXQxNyZz8k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Screen-Shot-2022-01-30-at-8.33.07-PM-9fbdb6fefa41482d8a1dc1f56266d8fb.png",
        link: "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/",
        descricao: "Torta de maçã americana com uma crosta amanteigada e recheio de maçãs temperadas.",
        tags: ["americana", "sobremesa", "torta"]
    },
    {
        nome: "Buffalo Wings",
        tempoDePreparo: 45,
        extra: "4 porções",
        imagem: "https://www.simplyrecipes.com/thmb/79_1Ehdlefh-rIye-eiL8bTUEs4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__01__Buffalo-Wings-LEAD-1-f40d69f4733c4d0cb3bab112549fcbc0.jpg",
        link: "https://www.simplyrecipes.com/recipes/buffalo_wings/",
        descricao: "Asinhas de frango empanadas e fritas, cobertas com molho picante, típicas de festas e eventos esportivos.",
        tags: ["americana", "frango", "aperitivo"]
    },
    {
        nome: "Cornbread",
        tempoDePreparo: 50,
        extra: "8 porções",
        imagem: "https://www.allrecipes.com/thmb/ogdc1HqUZDAJH7iqGHljK7mx7-c=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/17891-golden-sweet-cornbread-ddmfs-beauty-4x3-BG-25990-bcabebac0323419abdf0497ee3383003.jpg",
        link: "https://www.allrecipes.com/recipe/17891/golden-sweet-cornbread/",
        descricao: "Pão de milho americano, com uma textura leve e sabor levemente doce, perfeito para acompanhar pratos de carne.",
        tags: ["americana", "pão", "acompanhamento"]
    },
    {
        nome: "Clam Chowder",
        tempoDePreparo: 60,
        extra: "4 porções",
        imagem: "https://www.simplyrecipes.com/thmb/qwV90RBA9EFIhBfzP0AflBLJCRc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Clam-Chowder-LEAD-02-b22af479f663473b81f56aa93a198ac3.jpg",
        link: "https://www.simplyrecipes.com/recipes/clam_chowder/",
        descricao: "Sopa cremosa de mariscos, típica da culinária da Nova Inglaterra.",
        tags: ["americana", "sopa", "frutos do mar"]
    },
    {
        nome: "Feijoada",
        tempoDePreparo: 180,
        extra: "6 porções",
        imagem: "https://static.itdg.com.br/images/640-400/4183f4a52eadb0d86eed283e54e0020c/355811-original.jpg",
        link: "https://www.tudogostoso.com.br/receita/2998-feijoada.html",
        descricao: "Prato típico brasileiro feito com feijão preto e uma variedade de carnes, servido com arroz, farofa e couve.",
        tags: ["brasileira", "carne", "prato principal"]
    },
    {
        nome: "Pão de Queijo",
        tempoDePreparo: 45,
        extra: "12 porções",
        imagem: "https://i.panelinha.com.br/i1/64-bk-1245-blog-cmc04774-1.webp",
        link: "https://panelinha.com.br/receita/pao-de-queijo",
        descricao: "Pãozinho de queijo brasileiro feito com polvilho e queijo, leve e macio.",
        tags: ["brasileira", "pão", "queijo"]
    },
    {
        nome: "Moqueca",
        tempoDePreparo: 120,
        extra: "4 porções",
        imagem: "https://i.panelinha.com.br/i1/64-bk-7218-lucas-fonseca-04-09-20-2301-moqueca.webp",
        link: "https://panelinha.com.br/receita/moqueca-rapida-de-peixe",
        descricao: "Ensopado de peixe e frutos do mar com leite de coco e dendê, típico da Bahia.",
        tags: ["brasileira", "frutos do mar", "ensopado"]
    },
    {
        nome: "Acarajé",
        tempoDePreparo: 120,
        extra: "10 porções",
        imagem: "https://www.estadao.com.br/resizer/v2/MSJJP6IBPVHYZBXSKRRSTFR444.jpg?quality=80&auth=fc67aecdb506ac40cb4ac9c0e67180da73ec8e1f102f19d9657a3e07a8b99505&width=768&height=542&smart=true",
        link: "https://www.estadao.com.br/paladar/receita/bolinho-de-acaraje/",
        descricao: "Bolinho de feijão-fradinho frito, recheado com vatapá e caruru.",
        tags: ["brasileira", "aperitivo", "frito"]
    },
    {
        nome: "Pastel",
        tempoDePreparo: 45,
        extra: "20 porções",
        imagem: "https://static.itdg.com.br/images/640-400/3c5d540be163a699bbbfd12ce9d44e4a/355014-original.jpg",
        link: "https://www.tudogostoso.com.br/receita/5211-massa-de-pastel.html",
        descricao: "Massa frita recheada com carne, queijo ou outros ingredientes, popular em feiras e lanchonetes.",
        tags: ["brasileira", "aperitivo", "frito"]
    },
    {
        nome: "Caldo Verde",
        tempoDePreparo: 60,
        extra: "4 porções",
        imagem: "https://i.panelinha.com.br/i1/64-bk-2510-caldo-verde.webp",
        link: "https://panelinha.com.br/receita/caldo-verde",
        descricao: "Sopa de batata e couve, geralmente servida com rodelas de chorizo.",
        tags: ["brasileira", "sopa", "vegetariana"]
    },
    {
        nome: "Tapioca",
        tempoDePreparo: 20,
        extra: "4 porções",
        imagem: "https://static.itdg.com.br/images/640-400/9640a1c8dcd573d2bd7fa914cc58bdc1/321880-original.jpg",
        link: "https://www.tudogostoso.com.br/receita/4928-tapioca.html",
        descricao: "Panqueca de tapioca, que pode ser recheada com diversos ingredientes, doce ou salgado.",
        tags: ["brasileira", "café da manhã", "rápida"]
    },
    {
        nome: "Bolinho de Bacalhau",
        tempoDePreparo: 60,
        extra: "20 porções",
        imagem: "https://static.itdg.com.br/images/640-400/a71f4fd47fc37eeb98a662bc69e304be/shutterstock-2005565906.jpg",
        link: "https://www.tudogostoso.com.br/receita/1979-bolinho-de-bacalhau.html",
        descricao: "Bolinho frito feito com bacalhau desfiado e temperos, típico de festas e eventos.",
        tags: ["brasileira", "aperitivo", "frito"]
    }
];


// Dados de Panelinha
dados = dados.concat(
    [
        {
          "descricao": "Torta com massa de brownie e recheio cremoso, uma combinação deliciosa.",
          "extra": "12 porções",
          "link": "https://panelinha.com.br/receita/torta-brookie",
          "nome": "Torta brookie",
          "imagem": "https://i.panelinha.com.br/i1/o-4756-ayu6494-2.webp",
          "tags": [
            "doce",
            "sobremesa",
            "chocolate"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Doce brasileiro tradicional, feito com tapioca, leite de coco e coco ralado, perfeito para a Air Fryer.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5744-ayu3743.webp",

          "link": "https://panelinha.com.br/receita/bombocado-na-air-fryer",
          "nome": "Bombocado na Air Fryer da Rita Lobo",
          "tags": [
            "doce",
            "sobremesa",
            "brasileiro",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Blondie com sabor de banana e castanhas, uma combinação irresistível para um café da tarde.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1116-ayu5077.webp",

          "link": "https://panelinha.com.br/receita/blondie-com-banana-e-castanha-de-caju",
          "nome": "Blondie com banana e castanha-de-caju",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 40
        },
        {
          "descricao": "Bolo invertido com abacaxi caramelizado na base, uma explosão de sabor.",
          "extra": "10 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5386-ayu2350.webp",
          "link": "https://panelinha.com.br/receita/bolo-invertido-de-abacaxi",
          "nome": "Bolo invertido de abacaxi",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Bolinho com banana da terra e tapioca, ideal para um lanche rápido e saboroso.",
          "extra": "12 porções",
          "link": "https://panelinha.com.br/receita/bolinho-de-banana-com-tapioca-na-air-fryer",
          "nome": "Bolinho de banana-da-terra com tapioca na Air Fryer da Rita Lobo",
          "imagem": "https://i.panelinha.com.br/i1/o-7088-ayu0793.webp",

          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Sorvete cremoso com o sabor inconfundível da goiabada, uma sobremesa refrescante.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/sorvete-de-iogurte-com-goiabada",
          "nome": "Sorvete de iogurte com goiabada",
          "imagem": "https://i.panelinha.com.br/i1/o-6989-ayu0179.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Rocambole com massa leve e recheio saboroso de laranja, perfeito para um chá da tarde.",
          "extra": "8 porções",
          "link": "https://panelinha.com.br/receita/rocambole-de-laranja",
          "nome": "Rocambole de laranja",
          "imagem": "https://i.panelinha.com.br/i1/o-9431-20240229-131309-01-blog.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 45
        },
        {
          "descricao": "Brownie perfeito para a Air Fryer, rápido e fácil de preparar.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6954-brownie-blog.webp",
          "link": "https://panelinha.com.br/receita/brownie-na-air-fryer-da-rita-lobo",
          "nome": "Brownie na Air Fryer da Rita Lobo",
          "tags": [
            "doce",
            "sobremesa",
            "chocolate"
          ],
          "tempoDePreparo": 25
        },
        {
          "descricao": "Pudim feito com panetone, uma forma deliciosa de aproveitar as sobras.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/pudim-de-panetone-panela-pressao-eletrica",
          "nome": "Pudim de panetone na panela de pressão elétrica",
          "imagem": "https://i.panelinha.com.br/i1/o-5479-blog-pudim-de-panetone.webp",
          "tags": [
            "doce",
            "sobremesa",
            "reaproveitamento"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Raspadinha refrescante feita com abacaxi congelado, ideal para os dias quentes.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/raspadinha-de-abacaxi-congelado",
          "nome": "Raspadinha de abacaxi congelado",
          "imagem": "https://i.panelinha.com.br/i1/o-7983-blog-ayu0420.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Sagu com leite de coco, ideal para um café da tarde.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/sagu-de-coco-na-panela-de-pressao-eletrica",
          "nome": "Sagu de coco na panela de pressão elétrica",
          "imagem": "https://i.panelinha.com.br/i1/o-8416-blog-ayu6050.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Banana assada na Air Fryer, uma opção saudável e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9696-blogayu4347.webp",
          "link": "https://panelinha.com.br/receita/banana-assada-na-air-fryer",
          "nome": "Banana assada na Air Fryer da Rita Lobo",
          "tags": [
            "sobremesa",
            "saudável",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Pavê com camadas de panetone e pêssego, uma sobremesa irresistível.",
          "extra": "8 porções",
          "link": "https://panelinha.com.br/receita/pavetone-com-pessego",
          "nome": "Pavetone com pêssego",
          "imagem": "https://i.panelinha.com.br/i1/o-3353-blog-cmc04826.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Calda doce e saborosa, perfeita para acompanhar diversas sobremesas.",
          "extra": "2 porções",
          "link": "https://panelinha.com.br/receita/calda-de-manga-e-maracuja",
          "nome": "Calda de manga e maracujá",
          "imagem": "https://i.panelinha.com.br/i1/o-3274-blog-ayu4507.webp",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Figos em calda, uma sobremesa clássica e deliciosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8580-blog-ayu2048.webp",
          "link": "https://panelinha.com.br/receita/figo-em-calda-na-panela-de-pressao-eletrica",
          "nome": "Figo em calda na panela de pressão elétrica",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Broa com um recheio cremoso de café, ideal para o café da manhã ou lanche.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4578-blog-ayu0487-1.webp",
          "link": "https://panelinha.com.br/receita/broa-recheada-com-creme-de-cafe",
          "nome": "Broa recheada com creme de café",
          "tags": [
            "pão",
            "café da manhã",
            "fácil"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Creme versátil, ideal para recheios, coberturas e acompanhamentos.",
          "extra": "2 porções",
          "link": "https://panelinha.com.br/receita/creme-de-confeiteiro",
          "nome": "Creme de confeiteiro",
          "imagem": "https://i.panelinha.com.br/i1/o-9225-blog-mg-3981-1.webp",
          "tags": [
            "base para doces",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Brownie com um toque de café, uma combinação perfeita para os amantes de chocolate.",
          "extra": "8 porções",
          "link": "https://panelinha.com.br/receita/brownie-de-chocolate-com-cafe",
          "nome": "Brownie de chocolate com café",
          "imagem": "https://i.panelinha.com.br/i1/o-4502-blog-ayu2290.webp",
          "tags": [
            "doce",
            "sobremesa",
            "chocolate"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Pudim cremoso e saboroso, fácil de preparar na panela de pressão elétrica.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/pudim-de-leite-panela-pressao-eletrica",
          "nome": "Pudim de leite na panela de pressão elétrica",
          "imagem": "https://i.panelinha.com.br/i1/o-8347-blog-ayu7355-copiar.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Pudim individual, ideal para uma sobremesa rápida e deliciosa.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/minipudim-de-leite",
          "imagem": "https://i.panelinha.com.br/i1/o-4140-blog-ayu7404-copiar.webp",

          "nome": "Minipudim de leite",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Creme delicioso e refrescante, perfeito para os dias quentes.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1736-blog-ayu9904.webp",

          "link": "https://panelinha.com.br/receita/creme-papaia-congelado-com-cassis",
          "nome": "Creme de papaia congelado com licor de cassis",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Crepe fino e macio com recheio de compota de morangos, uma combinação clássica.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9267-blog-ayu9953.webp",

          "link": "https://panelinha.com.br/receita/crepe-com-compota-de-morangos",
          "nome": "Crepe com compota de morangos",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Figos em calda, uma sobremesa tradicional e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2062-blog-ayu1961.webp",

          "link": "https://panelinha.com.br/receita/figo-em-calda-na-pressao",
          "nome": "Figo em calda na pressão",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Abacaxi grelhado com coco ralado, uma sobremesa leve e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1645-blog-ayu0342.webp",

          "link": "https://panelinha.com.br/receita/abacaxi-grelhado-coco",
          "nome": "Abacaxi grelhado com coco",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Bolo de chocolate úmido e saboroso, sem adição de farinha.",
          "extra": "10 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2010-blog-ayu7796.webp",

          "link": "https://panelinha.com.br/receita/bolo-chocolate-sem-farinha",
          "nome": "Bolo de chocolate sem farinha",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 50
        },
        {
          "descricao": "Raspadinha refrescante com mamão e gengibre, ideal para os dias quentes.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9476-granita-de-mamao.webp",

          "link": "https://panelinha.com.br/receita/raspadinha-mamao-gengibre",
          "nome": "Raspadinha de mamão com gengibre",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Brigadeiro com um toque especial de abóbora e especiarias, uma combinação saborosa.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8355-blog-copia-de-cp-2309-comida-21.webp",

          "link": "https://panelinha.com.br/receita/brigadeiro-abobora-especiarias",
          "nome": "Brigadeiro de abóbora com especiarias",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 25
        },
        {
          "descricao": "Doce de massa leve e sabor delicado, ideal para um chá da tarde.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4335-blog-ayu2186.webp",

          "link": "https://panelinha.com.br/receita/papo-de-anjo",
          "nome": "Papo de anjo",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 35
        },
        {
          "descricao": "Bolinho quente de doce de leite perfeito para a Air Fryer, ideal para um lanche.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9846-novo-bolinho-blog.webp",

          "link": "https://panelinha.com.br/receita/bolinho-quente-doce-de-leite-airfryer",
          "nome": "Bolinho quente de doce de leite na Air Fryer da Rita Lobo",
          "tags": [
            "doce",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 15
        },
        {
          "descricao": "Bolo com sabor intenso de amêndoas, coco e uva passa.",
          "extra": "10 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5434-formato-blog-0003-layer-2-1.webp",

          "link": "https://panelinha.com.br/receita/bolo-amendoa-coco-uva",
          "nome": "Bolo de amêndoa com coco e uva",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Bolo cremoso com sabor de milho, perfeito para um café da tarde.",
          "extra": "10 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9419-bolo-de-curau-cremoso.webp",

          "link": "https://panelinha.com.br/receita/bolo-de-curau-cremoso",
          "nome": "Bolo de curau cremoso",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 50
        },
        {
          "descricao": "Pudim feito com mandioca e cumaru, uma sobremesa deliciosa e aromática.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6767-pudim-de-mandioca-com-cumaru.webp",

          "link": "https://panelinha.com.br/receita/pudim-de-mandioca-com-cumaru",
          "nome": "Pudim de mandioca com cumaru (reaproveitamento)",
          "tags": [
            "doce",
            "sobremesa",
            "fácil",
            "reaproveitamento"
          ],
          "tempoDePreparo": 40
        },
        {
          "descricao": "Brigadeiro com um toque especial de abóbora e amêndoas, uma combinação saborosa.",
          "extra": "12 porções",
          "link": "https://panelinha.com.br/receita/brigadeiro-de-abobora-amendoa",
          "nome": "Brigadeiro de abóbora e amêndoas",
          "imagem": "https://i.panelinha.com.br/i1/o-4044-cp-160922-fotokellyfuzaro-9580-blog.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 25
        },
        {
          "descricao": "Pudim cremoso e saboroso na Air Fryer, uma opção rápida e prática.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/pudim-na-airfryer",
          "nome": "Pudim de leite na Air Fryer da Rita Lobo",
          "imagem": "https://i.panelinha.com.br/i1/o-1063-blog-ayu7359-copiar-1.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Panqueca americana com banana da terra, perfeita para um café da manhã.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/panqueca-americana-banana-terra",
          "nome": "Panqueca americana de banana-da-terra",
          "imagem": "https://i.panelinha.com.br/i1/o-6521-panqueca-americana-de-banana-da-terra.webp",

          "tags": [
            "salgado",
            "café da manhã",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Bolo cremoso com chocolate, damasco e nozes, uma combinação irresistível.",
          "extra": "12 porções",
          "link": "https://panelinha.com.br/receita/bolo-cremoso-de-chocolate-com-damasco-e-nozes",
          "nome": "Bolo cremoso de chocolate com damasco e nozes",
          "imagem": "https://i.panelinha.com.br/i1/o-2091-bolo-cremoso-de-chocolate-com-damasco-e-nozes.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Sobremesa indiana cremosa e refrescante com sabor de manga, ideal para os dias quentes.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/kulfi-de-manga",
          "nome": "Kulfi de manga",
          "imagem": "https://i.panelinha.com.br/i1/o-1313-kulfi-1.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Sobremesa com frutas, uma combinação deliciosa e fácil de preparar.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/crumble-de-pera-frutas-vermelhas",
          "nome": "Crumble de pera com frutas vermelhas",
          "imagem": "https://i.panelinha.com.br/i1/o-3226-crumble-1.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 40
        },
        {
          "descricao": "Gelatina com sabor refrescante de laranja, uma sobremesa clássica.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/gelatina-de-laranja",
          "imagem": "https://i.panelinha.com.br/i1/o-6636-gelatina-de-laranja.webp",

          "nome": "Gelatina de laranja",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 10
        },
        {
          "descricao": "Sobremesa rápida e fácil de preparar no micro-ondas.",
          "extra": "2 porções",
          "link": "https://panelinha.com.br/receita/ovos-nevados-micro-ondas",
          "nome": "Ovos nevados no micro-ondas",
          "imagem": "https://i.panelinha.com.br/i1/o-4794-ovos-nevados.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 5
        },
        {
          "descricao": "Galete com recheio de maçã, ideal para um café da tarde.",
          "extra": "4 porções",
          "link": "https://panelinha.com.br/receita/galete-de-maca",
          "imagem": "https://i.panelinha.com.br/i1/o-6677-galete-de-maca.webp",

          "nome": "Galete de maçã",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Brownie com chocolate branco e matcha, uma combinação saborosa e diferente.",
          "extra": "8 porções",
          "link": "https://panelinha.com.br/receita/brownie-chocolate-branco-matcha",
          "nome": "Brownie de chocolate branco com matcha",
          "imagem": "https://i.panelinha.com.br/i1/o-3465-brownie-receita.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Semifredo com doce de leite e café, uma sobremesa cremosa e saborosa.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4676-semifredo-de-doce-de-leite.webp",

          "link": "https://panelinha.com.br/receita/semifredo-doce-de-leite-cafe",
          "nome": "Semifredo de doce de leite com café",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Pavlova com massa crocante e recheio cremoso, perfeita para a Air Fryer.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/pavlova-na-airfryer",
          "nome": "Pavlova na Air Fryer da Rita Lobo",
          "imagem": "https://i.panelinha.com.br/i1/o-8422-receita-pavlova-airfyer.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 30
        },
        {
          "descricao": "Baked Alaska feito com panetone, uma sobremesa diferente e deliciosa.",
          "extra": "6 porções",
          "link": "https://panelinha.com.br/receita/baked-alaska-panetone",
          "nome": "Baked Alaska de Panetone (reaproveitamento)",
          "imagem": "https://i.panelinha.com.br/i1/o-1239-baked-alaska.webp",

          "tags": [
            "doce",
            "sobremesa",
            "reaproveitamento"
          ],
          "tempoDePreparo": 40
        },
        {
          "descricao": "Torta com recheio de pêssego e cobertura de amêndoas, uma combinação clássica.",
          "extra": "10 porções",
          "link": "https://panelinha.com.br/receita/torta-de-pessego-com-amendoas",
          "nome": "Torta de pêssego com amêndoas",
          "imagem": "https://i.panelinha.com.br/i1/o-8107-torta-de-pessego.webp",

          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 60
        },
        {
          "descricao": "Bolo com camadas de sorvete, coco e baba de moça, uma sobremesa refrescante.",
          "extra": "8 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3649-bolo-de-sorvete-com-baba-de-moca.webp",
          "link": "https://panelinha.com.br/receita/bolo-de-sorvete-com-coco-baba-de-moca",
          "nome": "Bolo de sorvete com coco e baba de moça",
          "tags": [
            "doce",
            "sobremesa",
            "fácil"
          ],
          "tempoDePreparo": 20
        },
        {
          "descricao": "Purê cremoso e saboroso, com um toque picante da mostarda.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9620-ayu6482-2.webp",
          "link": "https://panelinha.com.br/receita/pure-de-batata-doce-com-mostarda",
          "nome": "Purê de batata-doce com mostarda",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Discos de batata crocantes por fora e macios por dentro, uma opção deliciosa e fácil.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9248-ayu5601.webp",
          "link": "https://panelinha.com.br/receita/disco-de-batata-crocante",
          "nome": "Disco de batata crocante",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Farofa com talo de couve, uma forma saborosa de reaproveitar o ingrediente.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8812-ayu6392-2.webp",
          "link": "https://panelinha.com.br/receita/farofa-de-talo-de-couve",
          "nome": "Farofa de talo de couve (reaproveitamento)",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Cuscuz com sabor de milho e chuchu, uma combinação leve e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7816-ayu5399.webp",
          "link": "https://panelinha.com.br/receita/cuscuz-de-milho-com-chuchu",
          "nome": "Cuscuz de milho com chuchu",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Panquequinha indiana feita com farinha de arroz e lentilhas, perfeita para um lanche leve.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7648-ayu3628.webp",
          "link": "https://panelinha.com.br/receita/panquequinha-indiana-dosa",
          "nome": "Panquequinha indiana (dosa)",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Arroz com aroma de anis-estrelado, uma opção diferente e deliciosa para acompanhar qualquer prato.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9013-ayu2698.webp",
          "link": "https://panelinha.com.br/receita/arroz-perfumado-com-anis-estrelado",
          "nome": "Arroz perfumado com anis-estrelado",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Ervilha-torta cozida na manteiga, um acompanhamento clássico e saboroso.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3392-ayu2703-1.webp",
          "link": "https://panelinha.com.br/receita/ervilha-torta-na-manteiga-6-porcoes",
          "nome": "Ervilha-torta na manteiga (6 porções)",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Salada refrescante e simples, perfeita para acompanhar pratos mais pesados.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7071-ayu2245-1.webp",
          "link": "https://panelinha.com.br/receita/salada-de-pepino-ao-murro",
          "nome": "Salada de pepino ao murro",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Arroz com sete tipos de cereais e castanhas, uma opção nutritiva e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8652-ayu0224.webp",
          "link": "https://panelinha.com.br/receita/arroz-sete-cereais-com-castanha-de-caju-pressao",
          "nome": "Arroz sete cereais com castanha-de-caju na pressão",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Abóbora caramelizada com mel e cominho, perfeita para a Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8118-ayu1937-3.webp",
          "link": "https://panelinha.com.br/receita/abobora-com-cominho-e-mel-na-air-fryer",
          "nome": "Abóbora com cominho e mel na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Vinagrete com feijão branco e alecrim, uma combinação diferente e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3588-ayu1912-3.webp",
          "link": "https://panelinha.com.br/receita/vinagrete-de-feijao-branco-com-alecrim",
          "nome": "Vinagrete de feijão-branco com alecrim",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Farofa com agrião, uma opção leve e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3885-ayu1896-3.webp",
          "link": "https://panelinha.com.br/receita/farofa-de-agriao",
          "nome": "Farofa de agrião",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Feijão-carioca com um toque especial de tomate e especiarias.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3538-ayu3635-273-1-1.webp",
          "link": "https://panelinha.com.br/receita/feijao-carioca-com-tomate-e-especiarias",
          "nome": "Feijão-carioca com tomate e especiarias",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Salada de chuchu simples e saborosa, perfeita para um acompanhamento leve.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7463-blog-salada-de-chuchu-na-panela-de-pressao-eletrica.webp",
          "link": "https://panelinha.com.br/receita/salada-de-chuchu-na-panela-de-pressao-eletrica",
          "nome": "Salada de chuchu na panela de pressão elétrica",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Lentilha com berinjela defumada, um prato vegetariano saboroso e nutritivo.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4275-blog-ayu6077.webp",
          "link": "https://panelinha.com.br/receita/lentilha-com-berinjela-panela-de-pressao-eletrica",
          "nome": "Lentilha com berinjela defumada na panela de pressão elétrica",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Farofa com cebola, castanhas e figos, uma combinação saborosa e diferente.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5098-blog-ayu1905.webp",
          "link": "https://panelinha.com.br/receita/farofa-de-cebola-castanha-e-figo",
          "nome": "Farofa de cebola, castanha e figo",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Salada refrescante com feijão branco e chuchu, perfeita para um almoço leve.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5543-blog-ayu6111.webp",
          "link": "https://panelinha.com.br/receita/salada-de-feijao-branco-com-chuchu",
          "nome": "Salada de feijão-branco com chuchu",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Salada diferente com arroz, pepino e uva passa, ideal para um acompanhamento leve.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7665-blog-ayu4574.webp",
          "link": "https://panelinha.com.br/receita/salada-de-arroz-com-pepino-e-uva-passa",
          "nome": "Salada de arroz com pepino e uva-passa",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Arroz com um toque especial de passas e limão, um clássico da culinária.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9526-blog-ayu1874.webp",
          "link": "https://panelinha.com.br/receita/arroz-com-passas-e-limao",
          "nome": "Arroz com passas e limão",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Arroz com couve e coco ralado, uma combinação inusitada e deliciosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7465-blog-ayu1896.webp",
          "link": "https://panelinha.com.br/receita/arroz-com-couve-e-coco",
          "nome": "Arroz com couve e coco",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Feijão preto com bacon e cominho, um prato tradicional e saboroso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3903-blog-ayu3531.webp",
          "link": "https://panelinha.com.br/receita/feijao-preto-com-bacon-e-cominho",
          "nome": "Feijão-preto com bacon e cominho",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 45.0
        },
        {
          "descricao": "Tapenade de abobrinha, uma opção saborosa e fácil de preparar.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8808-blog-ayu0269.webp",
          "link": "https://panelinha.com.br/receita/tapenade-de-abobrinha-reaproveitamento",
          "nome": "Tapenade de abobrinha (reaproveitamento)",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Repolho assado na Air Fryer, uma opção rápida e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2925-blog-ayu0350.webp",
          "link": "https://panelinha.com.br/receita/repolho-assado-na-air-fryer",
          "nome": "Repolho assado na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Repolho assado com parmesão, uma opção saborosa e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2618-repolho-assado.webp",
          "link": "https://panelinha.com.br/receita/repolho-assado",
          "nome": "Repolho assado com parmesão",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Vinagrete com chuchu, uma opção leve e refrescante.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6467-vinagrete-de-chuchu.webp",
          "link": "https://panelinha.com.br/receita/vinagrete-de-chuchu",
          "nome": "Vinagrete de chuchu",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Salada de repolho macerado com salsinha, uma opção simples e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3896-1688586112976-blog-ayu9843-1.webp",
          "link": "https://panelinha.com.br/receita/salada-repolho-macerado-salsinha",
          "nome": "Salada de repolho macerado com salsinha",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Medalhões de berinjela com pesto, uma opção saborosa e fácil de preparar na Air Fryer Oven.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3673-1688508506999-blog-ayu5689.webp",
          "link": "https://panelinha.com.br/receita/medalhao-berinjela-pesto-airfryer-oven",
          "nome": "Medalhão de berinjela com pesto na Air Fryer Oven da Rita Lobo",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Caponata com berinjela, tomate, cebola e azeitonas, um prato italiano saboroso e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5677-blog-ayu3138.webp",
          "link": "https://panelinha.com.br/receita/caponata-de-forno",
          "nome": "Caponata de forno",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Espinafre cozido no vapor, uma opção saudável e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7149-blog-chg07613-editar.webp",
          "link": "https://panelinha.com.br/receita/espinafre-cozido-vapor",
          "nome": "Espinafre cozido no vapor",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Homus feito com feijão-fradinho, uma pasta deliciosa e versátil.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6853-blog-ayu3949.webp",
          "link": "https://panelinha.com.br/receita/homus-de-feijao-fradinho",
          "nome": "Homus de feijão-fradinho",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Rabanete grelhado com um toque de azeite e sal, uma opção simples e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8025-blog-chg07615-editar.webp",
          "link": "https://panelinha.com.br/receita/rabanete-grelhado",
          "nome": "Rabanete grelhado",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Cuscuz com ovo pochê, uma combinação saborosa e prática para o micro-ondas.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5672-blog-ayu8453-1.webp",
          "link": "https://panelinha.com.br/receita/cuscuz-com-ovo-poche-micro-ondas",
          "nome": "Cuscuz de milho com ovo pochê de micro-ondas",
          "tags": [
            "salgado",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Polenta cremosa e saborosa com espinafre, um acompanhamento delicioso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2167-blog-ayu6887.webp",
          "link": "https://panelinha.com.br/receita/polenta-mole-espinafre",
          "nome": "Polenta mole com espinafre",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Tomate grelhado com um toque de azeite e sal, uma opção simples e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6171-blog-ayu6673.webp",
          "link": "https://panelinha.com.br/receita/tomate-grelhado",
          "nome": "Tomate grelhado",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Cuscuz de milho no micro-ondas, uma opção rápida e prática.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1039-blog-ayu6640-1.webp",
          "link": "https://panelinha.com.br/receita/cuscuz-milho-de-micro-ondas",
          "nome": "Cuscuz de milho de micro-ondas",
          "tags": [
            "salgado",
            "fácil"
          ],
          "tempoDePreparo": 5.0
        },
        {
          "descricao": "Picles de salsão, uma opção diferente e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5506-blog-ayu1993.webp",
          "link": "https://panelinha.com.br/receita/picles-de-salsao",
          "nome": "Picles de salsão",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Tortilha de milho rápida e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4215-blog-ayu2042.webp",
          "link": "https://panelinha.com.br/receita/tortilha-de-milho-pratica",
          "nome": "Tortilha de milho prática",
          "tags": [
            "salgado",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Batata-doce cozida e amassada, uma opção simples e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9192-blog-ayu1584.webp",
          "link": "https://panelinha.com.br/receita/batata-doce-ao-murro",
          "nome": "Batata-doce ao murro",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Salada refrescante com pepino, hortelã e coentro, perfeita para um acompanhamento leve.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9771-blog-ayu9477.webp",
          "link": "https://panelinha.com.br/receita/salada-pepino-hortela-coentro",
          "nome": "Salada de pepino com hortelã e coentro",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Repolho assado com amendoim, uma combinação inusitada e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7933-blog-ayu0294.webp",
          "link": "https://panelinha.com.br/receita/repolho-assado-com-amendoim",
          "nome": "Repolho assado com amendoim",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Purê de batata com azeite e alho-poró, uma opção cremosa e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5745-blog-ayu0309.webp",
          "link": "https://panelinha.com.br/receita/pure-batata-azeite-alho-poro",
          "nome": "Purê de batata com azeite e alho-poró",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Vinagrete com pimentão, uma opção saborosa e colorida para acompanhar qualquer prato.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2886-blog-ayu0436.webp",
          "link": "https://panelinha.com.br/receita/vinagrete-pimentao",
          "nome": "Vinagrete de pimentão",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Abóbora assada com tomilho, uma opção saborosa e fácil de preparar na Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7912-blog-ayu9916.webp",
          "link": "https://panelinha.com.br/receita/abobora-assada-tomilho-airfryer",
          "nome": "Abóbora assada com tomilho na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Arroz com agrião, uma forma saborosa de reaproveitar o ingrediente.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5340-blog-ayu8483.webp",
          "link": "https://panelinha.com.br/receita/arroz-com-agriao",
          "nome": "Arroz com agrião (reaproveitamento)",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Picles rápido de talo de couve, uma forma simples e saborosa de reaproveitar o ingrediente.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8288-blog-ayu8485.webp",
          "link": "https://panelinha.com.br/receita/picles-rapido-talo-couve",
          "nome": "Picles rápido de talo de couve (reaproveitamento)",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Escarola com um toque de vinagrete, uma opção saborosa e refrescante.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4450-blog-ayu1775.webp",
          "link": "https://panelinha.com.br/receita/escarola-escabeche",
          "nome": "Escarola escabeche",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Tabule com ervas frescas e laranja, uma salada saborosa e refrescante.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2078-formato-blog-0007-layer-9.webp",
          "link": "https://panelinha.com.br/receita/tabule-ervas-laranja",
          "nome": "Tabule de ervas com laranja",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Músculo cozido na panela de pressão com cerveja, um prato saboroso e fácil.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4122-ayu6419-2.webp",
          "link": "https://panelinha.com.br/receita/musculo-com-cerveja-na-pressao",
          "nome": "Músculo com cerveja na pressão",
          "tags": [
            "carne",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 90.0
        },
        {
          "descricao": "Ensopado com mandioca, quiabo e couve, um prato típico brasileiro.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1417-ayu5467.webp",
          "link": "https://panelinha.com.br/receita/ensopado-de-mandioca-com-quiabo-e-couve",
          "nome": "Ensopado de mandioca com quiabo e couve",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Macarrão com berinjela, tomate e nata, um prato italiano saboroso e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2199-nata.webp",
          "link": "https://panelinha.com.br/receita/macarrao-com-berinjela-tomate-e-nata",
          "nome": "Macarrão com berinjela, tomate e nata",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Risoto com legumes e aromas da primavera, perfeito para uma refeição leve e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3529-ayu4669.webp",
          "link": "https://panelinha.com.br/receita/risoto-primavera-na-pressao",
          "nome": "Risoto primavera na pressão",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Macarrão com berinjela, tomate e ricota, uma opção vegetariana saborosa e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7254-ricota.webp",
          "link": "https://panelinha.com.br/receita/macarrao-com-berinjela-tomate-e-ricota",
          "nome": "Macarrão com berinjela, tomate e ricota",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Sopa cremosa e nutritiva com ervilhas e especiarias.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5172-ayu4022.webp",
          "link": "https://panelinha.com.br/receita/sopa-de-ervilha-com-especiarias-na-pressao",
          "nome": "Sopa de ervilha com especiarias na pressão",
          "tags": [
            "salgado",
            "sopa",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Curry de legumes com especiarias indianas, um prato saboroso e aromático.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7219-ayu2806.webp",
          "link": "https://panelinha.com.br/receita/curry-de-legumes",
          "nome": "Curry de legumes",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Curry de peixe com leite de coco e especiarias indianas.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8477-ayu2816.webp",
          "link": "https://panelinha.com.br/receita/curry-de-peixe",
          "nome": "Curry de peixe",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Filé de frango com molho agridoce de mel, perfeito para a Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2057-ayu0982.webp",
          "link": "https://panelinha.com.br/receita/file-de-frango-com-molho-de-mel-na-air-fryer",
          "nome": "Filé de frango com molho de mel na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Salada com arroz, cogumelo e escarola, uma forma saborosa de reaproveitar ingredientes.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2668-ayu1126.webp",
          "link": "https://panelinha.com.br/receita/salada-de-arroz-com-cogumelo-e-escarola",
          "nome": "Salada de arroz com cogumelo e escarola (reaproveitamento)",
          "tags": [
            "salada",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Arroz com cogumelo e tomate, um prato simples e saboroso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2696-ayu1119.webp",
          "link": "https://panelinha.com.br/receita/arroz-de-cogumelo-com-tomate-em-uma-panela-so",
          "nome": "Arroz de cogumelo com tomate em uma panela só",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Moqueca feita com ovos, leite de coco e temperos.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1633-ayu1360.webp",
          "link": "https://panelinha.com.br/receita/moqueca-de-ovo",
          "nome": "Moqueca de ovo",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Coxinha da asa de frango, uma opção saborosa e fácil de preparar na Air Fryer.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6765-ayu1709-3.webp",
          "link": "https://panelinha.com.br/receita/coxinha-da-asa-frango-na-air-fryer",
          "nome": "Coxinha da asa de frango na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Escondidinho com camadas de lentilha, polenta e abóbora, um prato nutritivo e saboroso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4895-ayu0188.webp",
          "link": "https://panelinha.com.br/receita/escondidinho-de-lentilha-e-polenta-com-abobora",
          "nome": "Escondidinho de lentilha e polenta com abóbora",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 50.0
        },
        {
          "descricao": "Escondidinho com camadas de carne, polenta e abóbora, um prato tradicional e saboroso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4609-ayu0194-1.webp",
          "link": "https://panelinha.com.br/receita/escondidinho-de-carne-e-polenta-com-abobora",
          "nome": "Escondidinho de carne e polenta com abóbora",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 50.0
        },
        {
          "descricao": "Enroladinho de frango com queijo, acompanhado de um ensopado de tomate com grão-de-bico, perfeito para a Air Fryer.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8225-20240523-191438-1.webp",
          "link": "https://panelinha.com.br/receita/enroladinho-de-frango-ensopado-grao-de-bico-air-fryer",
          "nome": "Enroladinho de frango com queijo e ensopado de tomate com grão-de-bico na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Abobrinha gratinada com um ensopado de tomate e grão-de-bico, perfeito para a Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6585-20240523-160841-1.webp",
          "link": "https://panelinha.com.br/receita/abobrinha-com-ensopado-grao-de-bico-air-fryer",
          "nome": "Abobrinha gratinada com ensopado de tomate e grão-de-bico na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Hambúrguer de carne feito na Air Fryer, uma opção rápida e prática.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3269-ayu1061.webp",
          "link": "https://panelinha.com.br/receita/hamburguer-na-air-fryer-rita-lobo",
          "nome": "Hambúrguer na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Macarrão com espinafre gratinado, um clássico reconfortante.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4821-ayu1152-blog.webp",
          "link": "https://panelinha.com.br/receita/macarrao-gratinado-com-espinafre",
          "nome": "Macarrão gratinado com espinafre",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Risoto cremoso com queijo brie e damasco, uma combinação sofisticada e deliciosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5156-ayu1114-blog.webp",
          "link": "https://panelinha.com.br/receita/risoto-de-queijo-brie-com-damasco-na-pressao",
          "nome": "Risoto de queijo brie com damasco na pressão",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Sanduíche de atum com queijo derretido, uma opção rápida e saborosa para a Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2713-ayu1126-blog.webp",
          "link": "https://panelinha.com.br/receita/tuna-melt-na-air-fryer",
          "nome": "Tuna melt na Air Fryer da Rita Lobo (sanduíche de atum com queijo)",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Sopa cremosa com couve-flor e queijo azul, uma opção saborosa e diferente.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8010-ayu1038-blog.webp",
          "link": "https://panelinha.com.br/receita/sopa-de-couve-flor-com-queijo-azul",
          "nome": "Sopa de couve-flor com queijo azul",
          "tags": [
            "salgado",
            "sopa",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Moela cozida na panela de pressão com tomate e temperos.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7037-20240320-165847-01-blog.webp",
          "link": "https://panelinha.com.br/receita/moela-com-tomate-na-pressao",
          "nome": "Moela com tomate na pressão",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Rabada cozida na panela de pressão elétrica, um prato tradicional e saboroso.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4395-07-rabada-blog-receita.webp",
          "link": "https://panelinha.com.br/receita/rabada-na-panela-de-pressao-eletrica",
          "nome": "Rabada na panela de pressão elétrica",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 120.0
        },
        {
          "descricao": "Quiche com base de arroz, recheada com abobrinha e queijo de minas, uma forma criativa de reaproveitar ingredientes.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8273-blog-camil-10-02-22-2403.webp",
          "link": "https://panelinha.com.br/receita/quiche-de-arroz-abobrinha-queijo-de-minas",
          "nome": "Quiche de arroz com abobrinha e queijo de minas (reaproveitamento)",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 45.0
        },
        {
          "descricao": "Macarrão com molho de tomate, uma receita clássica e fácil de preparar na panela de pressão elétrica.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3526-blog-ayu6926-editar.webp",
          "link": "https://panelinha.com.br/receita/macarrao-com-tomate-na-panela-de-pressao-eletrica",
          "nome": "Macarrão com molho de tomate na panela de pressão elétrica",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Hambúrguer de faláfel, uma opção vegetariana deliciosa e nutritiva.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1900-blog-camil-04-fev-139.webp",
          "link": "https://panelinha.com.br/receita/hamburguer-de-falafel",
          "nome": "Hambúrguer de faláfel",
          "tags": [
            "salgado",
            "vegetariano",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Bolinho de arroz integral salteado, uma opção leve e saborosa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5051-blog-camil-04-fev-207-1.webp",
          "link": "https://panelinha.com.br/receita/bolinho-de-arroz-integral-salteado",
          "nome": "Bolinho de arroz integral salteado",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Omelete com mandioquinha e cebola, uma opção saborosa e nutritiva para o forno.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1750-blog-ayu0326.webp",
          "link": "https://panelinha.com.br/receita/omelete-de-forno-com-mandioquinha-e-cebola",
          "nome": "Omelete de forno com mandioquinha e cebola",
          "tags": [
            "salgado",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Bisteca com vagem e tomate, uma combinação saborosa e prática para a Air Fryer.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5861-blog-ayu6035.webp",
          "link": "https://panelinha.com.br/receita/bisteca-com-vagem-e-tomate-na-air-fryer",
          "nome": "Bisteca com vagem e tomate na Air Fryer da Rita Lobo",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Torta com bacalhoada desfiada, uma opção deliciosa e fácil de preparar.",
          "extra": "8 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5289-blog-ayu6091.webp",
          "link": "https://panelinha.com.br/receita/torta-de-bacalhoada",
          "nome": "Torta de bacalhoada",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 50.0
        },
        {
          "descricao": "Peru assado com limão e ervas, um clássico saboroso.",
          "extra": "10 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4568-blog-ayu0443.webp",
          "link": "https://panelinha.com.br/receita/peru-com-limao-e-ervas",
          "nome": "Peru com limão e ervas",
          "tags": [
            "carne",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 120.0
        },
        {
          "descricao": "Costelinha assada com páprica e laranja, uma opção saborosa e fácil de preparar.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4409-blog-ayu2727.webp",
          "link": "https://panelinha.com.br/receita/costelinha-assada-com-paprica-laranja",
          "nome": "Costelinha assada com páprica e laranja",
          "tags": [
            "carne",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Abóbora assada com especiarias, um acompanhamento saboroso e saudável.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6515-blog-ayu2797.webp",
          "link": "https://panelinha.com.br/receita/abobora-assada-com-especiarias",
          "nome": "Abóbora assada com especiarias",
          "tags": [
            "salgado",
            "acompanhamento",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Galinhada com frango, arroz, legumes e temperos, uma opção prática e saborosa para a panela de pressão elétrica.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6726-blog-chg07409-editar.webp",
          "link": "https://panelinha.com.br/receita/galinhada-na-panela-de-pressao-eletrica",
          "nome": "Galinhada na panela de pressão elétrica",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Arroz guéri-guéri, uma receita tradicional brasileira com peixe, cúrcuma e ervas.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1223-blog-ayu0170.webp",
          "link": "https://panelinha.com.br/receita/arroz-gueri-gueri",
          "nome": "Arroz guéri-guéri (arroz de peixe com cúrcuma e ervas)",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Bolinho de peixe com batata, uma forma saborosa de reaproveitar sobras.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2469-blog-ayu0157.webp",
          "link": "https://panelinha.com.br/receita/bolinho-de-peixe-com-batata",
          "nome": "Bolinho de peixe com batata (reaproveitamento)",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Peixe grelhado com molho de manteiga e limão, uma combinação clássica e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4303-blog-ayu0196.webp",
          "link": "https://panelinha.com.br/receita/peixe-grelhado-com-molho-manteiga-limao",
          "nome": "Peixe grelhado com molho de manteiga e limão",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Roseta de peixe grelhada, uma opção prática e saborosa.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5967-blog-ayu0177.webp",
          "link": "https://panelinha.com.br/receita/roseta-de-peixe-grelhada",
          "nome": "Roseta de peixe grelhada",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Quiche com recheio de abóbora e brócolis, uma opção vegetariana saborosa.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3179-blog-ayu1754.webp",
          "link": "https://panelinha.com.br/receita/quiche-de-abobora-e-brocolis-assados",
          "nome": "Quiche de abóbora e brócolis assados",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 45.0
        },
        {
          "descricao": "Tortinha americana de frango, uma forma deliciosa de reaproveitar sobras.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4507-blog-ayu8162.webp",
          "link": "https://panelinha.com.br/receita/tortinha-americana-de-frango-reaproveitamento",
          "nome": "Tortinha americana de frango (reaproveitamento)",
          "tags": [
            "salgado",
            "lanche",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Filé de frango marinado com laranja e alecrim, um prato saboroso e aromático.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2181-blog-ayu8182.webp",
          "link": "https://panelinha.com.br/receita/file-de-frango-marinado-com-laranja-e-alecrim",
          "nome": "Filé de frango marinado com laranja e alecrim",
          "tags": [
            "salgado",
            "prato principal",
            "fácil"
          ],
          "tempoDePreparo": 25.0
        },
        {
          "descricao": "Disco de batata crocante com ovo e cogumelos, um clássico reconfortante, perfeito para um almoço ou jantar leve.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6392-ayu5623.webp",
          "link": "https://panelinha.com.br/receita/disco-de-batata-crocante-com-ovo-e-cogumelo",
          "nome": "Disco de batata crocante com ovo e cogumelo",
          "tags": [
            "salgado",
            "acompanhamento",
            "vegetariano",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Muffin de milho com queijo, uma ótima opção para um lanche rápido e saboroso.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2155-muffin-de-milho-airfryer-blog.webp",
          "link": "https://panelinha.com.br/receita/muffin-de-milho-com-queijo",
          "nome": "Muffin de milho com queijo",
          "tags": [
            "salgado",
            "lanche",
            "festas",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Muffin de milho com queijo na Air Fryer Oven, uma receita prática e saborosa.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7255-muffin-de-milho-af-vale-esta-blog.webp",
          "link": "https://panelinha.com.br/receita/muffin-de-milho-com-queijo-na-air-fryer",
          "nome": "Muffin de milho com queijo na Air Fryer Oven da Rita Lobo",
          "tags": [
            "salgado",
            "lanche",
            "festas",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Gougère, um pão de queijo francês, perfeito para acompanhar sopas, saladas ou simplesmente como aperitivo.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2088-ayu1107-blog.webp",
          "link": "https://panelinha.com.br/receita/gougere-pao-de-queijo-frances",
          "nome": "Gougère",
          "tags": [
            "salgado",
            "acompanhamento",
            "aperitivo",
            "prato único"
          ],
          "tempoDePreparo": 45.0
        },
        {
          "descricao": "Torrada crocante com um toque de mel, uma opção simples e saborosa para o café da manhã.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9093-20240419-173655-01-blog.webp",
          "link": "https://panelinha.com.br/receita/torrada-de-mel",
          "nome": "Torrada de mel",
          "tags": [
            "doce",
            "café da manhã",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 5.0
        },
        {
          "descricao": "Pão de leite japonês, conhecido como shokupan, é macio, leve e perfeito para o café da manhã.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4494-20240426-095647-blog.webp",
          "link": "https://panelinha.com.br/receita/pao-de-leite-japones-shokupan",
          "nome": "Pão de leite japonês (shokupan)",
          "tags": [
            "pão",
            "café da manhã",
            "prato único",
            "fácil"
          ],
          "tempoDePreparo": 90.0
        },
        {
          "descricao": "Biscoito amanteigado tradicional, ideal para presentear ou saborear durante as festas de Natal.",
          "extra": "24 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2263-blog-ayu6009.webp",
          "link": "https://panelinha.com.br/receita/biscoito-amanteigado-de-natal",
          "nome": "Biscoito amanteigado de Natal",
          "tags": [
            "doce",
            "natal",
            "fácil",
            "presente"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Pastinha de ricota com melado e alecrim, um aperitivo saboroso e elegante.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2247-blog-ayu1922.webp",
          "link": "https://panelinha.com.br/receita/pastinha-de-ricota-com-melado-e-alecrim",
          "nome": "Pastinha de ricota com melado e alecrim",
          "tags": [
            "salgado",
            "aperitivo",
            "fácil"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Broa de fubá com queijo, um clássico brasileiro para o café da manhã.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9109-blog-ayu0441.webp",
          "link": "https://panelinha.com.br/receita/broa-de-fuba-com-queijo",
          "nome": "Broa de fubá com queijo",
          "tags": [
            "pão",
            "café da manhã",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Broa caxambu com doce de leite, uma combinação perfeita para um lanche.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7985-blog-ayu0440.webp",
          "link": "https://panelinha.com.br/receita/broa-caxambu-com-doce-de-leite",
          "nome": "Broa caxambu com doce de leite",
          "tags": [
            "pão",
            "lanche",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Broa caxambu, um pão de milho tradicional e saboroso.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6618-blog-ayu0436-1.webp",
          "link": "https://panelinha.com.br/receita/broa-caxambu",
          "nome": "Broa caxambu",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Pão de queijo em tamanho menor, ideal para servir em coquetéis e eventos.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-3076-blog-ayu2859.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-coquetel",
          "nome": "Pão de queijo coquetel",
          "tags": [
            "pão",
            "festas",
            "fácil",
            "prato único",
            "aperitivo"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Pão de queijo recheado com goiabada, uma combinação clássica e deliciosa.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2491-blog-ayu2860.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-recheado-com-goiabada",
          "nome": "Pão de queijo recheado com goiabada",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Pão de queijo feito no liquidificador, uma receita prática e rápida.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9262-blog-ayu0306.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-de-liquidificador",
          "nome": "Pão de queijo de liquidificador",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Pão de queijo em tamanho maior, ideal para um lanche ou café da manhã.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2558-blog-ayu2836-1.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-grande",
          "nome": "Pão de queijo grande",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 40.0
        },
        {
          "descricao": "Pão de queijo assado na chapa e servido com requeijão, uma delícia para um café da manhã.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6772-blog-ayu2864.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-na-chapa-com-requeijao",
          "nome": "Pão de queijo na chapa com requeijão",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Tostex com pão de queijo, uma combinação saborosa e prática para um lanche rápido.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5971-blog-ayu2894.webp",
          "link": "https://panelinha.com.br/receita/tostex-de-pao-de-queijo",
          "nome": "Tostex de pão de queijo",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Bolo com iogurte e limão, um clássico leve e refrescante.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6367-blog-ayu9094.webp",
          "link": "https://panelinha.com.br/receita/bolo-de-iogurte-com-limao",
          "nome": "Bolo de iogurte com limão",
          "tags": [
            "doce",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Torrada integral com goiabada e requeijão, um café da manhã nutritivo e delicioso.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8215-blog-ayu5829.webp",
          "link": "https://panelinha.com.br/receita/torrada-de-pao-integral-goiabada-requeijao",
          "nome": "Torrada de pão integral com goiabada e requeijão",
          "tags": [
            "café da manhã",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 5.0
        },
        {
          "descricao": "Tostex com pão integral e queijo, uma opção rápida e saborosa para um lanche.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2907-blog-ayu5820.webp",
          "link": "https://panelinha.com.br/receita/tostex-de-pao-integral-com-queijo",
          "nome": "Tostex de pão integral com queijo",
          "tags": [
            "lanche",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Strata, uma torta de pão com tomate e queijo, perfeita para um brunch ou almoço.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9331-blog-ayu5815-editar.webp",
          "link": "https://panelinha.com.br/receita/strata-torta-de-pao-tomate-queijo",
          "nome": "Strata, torta de pão com tomate e queijo (reaproveitamento)",
          "tags": [
            "salgado",
            "brunch",
            "almoço",
            "prato único",
            "fácil"
          ],
          "tempoDePreparo": 45.0
        },
        {
          "descricao": "Rabanada de pão integral, uma opção mais saudável para a sobremesa.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7545-blog-ayu5787.webp",
          "link": "https://panelinha.com.br/receita/rabanada-de-pao-integral-reaproveitamento",
          "nome": "Rabanada de pão de fôrma integral (reaproveitamento)",
          "tags": [
            "doce",
            "sobremesa",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Pão 100% integral, perfeito para acompanhar refeições ou para um lanche.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5103-blog-ayu6207-editado.webp",
          "link": "https://panelinha.com.br/receita/pao-de-forma-integral",
          "nome": "Pão de fôrma 100% integral",
          "tags": [
            "pão",
            "fácil",
            "prato único",
            "saudável"
          ],
          "tempoDePreparo": 90.0
        },
        {
          "descricao": "Ovo cozido na Air Fryer, uma opção prática e rápida para um café da manhã.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1091-blog-ayu0360.webp",
          "link": "https://panelinha.com.br/receita/ovo-cozido-na-air-fryer",
          "nome": "Ovo cozido na Air Fryer da Rita Lobo",
          "tags": [
            "café da manhã",
            "fácil",
            "prato único",
            "saudável"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Ovo pochê no micro-ondas, uma opção rápida e prática para um café da manhã.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1709-blog-ayu6869.webp",
          "link": "https://panelinha.com.br/receita/ovo-poche-de-micro-ondas",
          "nome": "Ovo pochê de micro-ondas",
          "tags": [
            "café da manhã",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 5.0
        },
        {
          "descricao": "Tartine de abacate com coentro, uma opção saudável e saborosa para um café da manhã ou lanche.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-8797-blog-ayu2602.webp",
          "link": "https://panelinha.com.br/receita/tartine-avocado-com-coentro",
          "nome": "Tartine de avocado com coentro",
          "tags": [
            "salgado",
            "café da manhã",
            "lanche",
            "fácil",
            "prato único",
            "vegetariano"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Pão multigrãos com textura crocante e sabor intenso.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7569-blog-ayu2560.webp",
          "link": "https://panelinha.com.br/receita/pao-multigraos",
          "nome": "Pão multigrãos",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 90.0
        },
        {
          "descricao": "Manteiga ghee, um tipo de manteiga clarificada, ideal para cozinhar e para usar em receitas doces e salgadas.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1194-blog-ayu1959.webp",
          "link": "https://panelinha.com.br/receita/manteiga-ghee",
          "nome": "Manteiga ghee",
          "tags": [
            "fácil",
            "ingrediente"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Banana-da-terra grelhada com um toque de canela, uma opção saborosa e nutritiva.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5813-ayu1226.webp",
          "link": "https://panelinha.com.br/receita/banana-da-terra-grelhada",
          "nome": "Banana-da-terra grelhada",
          "tags": [
            "fácil",
            "prato único",
            "vegetariano"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Manteiga doce com um toque especial de sabor, perfeita para acompanhar torradas, pães e bolos.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1080-manteiga-doce-perfumada-receita.webp",
          "link": "https://panelinha.com.br/receita/manteiga-doce-perfumada",
          "nome": "Manteiga doce perfumada",
          "tags": [
            "fácil",
            "doce"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Granola crocante e saborosa feita na Air Fryer.",
          "extra": "6 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-6087-granola-airfryer-receita.webp",
          "link": "https://panelinha.com.br/receita/granola-na-aifryer",
          "nome": "Granola na Air Fryer da Rita Lobo",
          "tags": [
            "café da manhã",
            "fácil",
            "saudável",
            "prato único"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Pão de leite feito na Air Fryer, uma opção rápida e prática.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2714-novo-pao-blog.webp",
          "link": "https://panelinha.com.br/receita/pao-de-leite-na-airfryer",
          "nome": "Pão de leite na Air Fryer da Rita Lobo",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Pão de leite com um toque especial de noz-moscada, perfeito para o café da manhã.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5965-pao-de-leite-com-noz-moscada.webp",
          "link": "https://panelinha.com.br/receita/pao-leite-com-noz-moscada",
          "nome": "Pão de leite com noz-moscada",
          "tags": [
            "pão",
            "café da manhã",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 60.0
        },
        {
          "descricao": "Mingau com painço, leite de coco e amendoim, uma opção nutritiva e saborosa para um café da manhã.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-2073-mingau-de-painco-com-amendoim-leite-de-coco-e-especiarias.webp",
          "link": "https://panelinha.com.br/receita/mingau-de-painco-leite-de-coco-amendoim",
          "nome": "Mingau de painço, leite de coco e amendoim",
          "tags": [
            "café da manhã",
            "fácil",
            "prato único",
            "vegetariano",
            "saudável"
          ],
          "tempoDePreparo": 15.0
        },
        {
          "descricao": "Bolinho de chuva de Gana, uma sobremesa tradicional e saborosa.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-1041-bolinho-de-chuva-de-gana.webp",
          "link": "https://panelinha.com.br/receita/bolinho-de-chuva-gana",
          "nome": "Bolinho de chuva de Gana (puff-puff)",
          "tags": [
            "doce",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Shortbread, biscoitos amanteigados perfeitos para acompanhar o café da tarde.",
          "extra": "24 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4805-shortbread.webp",
          "link": "https://panelinha.com.br/receita/shortbread",
          "nome": "Shortbread (biscoitos amanteigados)",
          "tags": [
            "doce",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 30.0
        },
        {
          "descricao": "Café turco, uma bebida tradicional com sabor intenso.",
          "extra": "2 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-7073-cafe-turco.webp",
          "link": "https://panelinha.com.br/receita/cafe-turco-4",
          "nome": "Café turco",
          "tags": [
            "bebida",
            "café",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 10.0
        },
        {
          "descricao": "Pão de queijo feito na Air Fryer, uma opção rápida e prática para um café da manhã ou lanche.",
          "extra": "4 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-4230-pao-de-queijo-airfryer.webp",
          "link": "https://panelinha.com.br/receita/pao-de-queijo-airfryer",
          "nome": "Pão de queijo na Air Fryer da Rita Lobo",
          "tags": [
            "pão",
            "café da manhã",
            "lanche",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 20.0
        },
        {
          "descricao": "Fermento natural, também conhecido como levain, é a base para pães caseiros com sabor único.",
          "extra": "1 porção",
          "imagem": "https://i.panelinha.com.br/i1/o-7226-fermento-natural.webp",
          "link": "https://panelinha.com.br/receita/fermento-natural-levain",
          "nome": "Fermento Natural (Levain)",
          "tags": [
            "pão",
            "fácil",
            "ingrediente",
            "caseiro"
          ],
          "tempoDePreparo": 120.0
        },
        {
          "descricao": "Pão integral com fermentação natural, para um café da manhã nutritivo e saboroso.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-9296-pao-integral.webp",
          "link": "https://panelinha.com.br/receita/pao-integral-de-fermentacao-natural",
          "nome": "Pão integral de fermentação natural",
          "tags": [
            "pão",
            "fácil",
            "prato único",
            "saudável"
          ],
          "tempoDePreparo": 180.0
        },
        {
          "descricao": "Pão caseiro com massa leve e saborosa, perfeito para o café da manhã.",
          "extra": "12 porções",
          "imagem": "https://i.panelinha.com.br/i1/o-5198-pao-nosso.webp",
          "link": "https://panelinha.com.br/receita/pao-nosso",
          "nome": "Pão Nosso",
          "tags": [
            "pão",
            "fácil",
            "prato único"
          ],
          "tempoDePreparo": 120.0
        }
      ]
);