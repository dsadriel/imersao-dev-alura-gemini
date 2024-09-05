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
