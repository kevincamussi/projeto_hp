$(document).ready(function () {
    const movies = [
        {
            name: "Harry Potter e a Pedra Filosofal",
            img: "./images/hp-pedra-filosofal.jpg",
            description: "Harry Potter (Daniel Radcliff) é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter (Richard Griffiths), mas logo ele recebe a visita de Hagrid (Robbie Coltrane), o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley (Rupert Grint) e Hermione Granger (Emma Watson)."
        },
        {
            name: "Harry Potter e a Câmara Secreta",
            img: "./images/hp-camara-secreta.jpg",
            description: "De férias na casa de seus tios Dursley, Harry Potter (Daniel Radcliffe) recebe a inesperada visita de Dobby, um elfo doméstico, que veio avisá-lo para não retornar à Escola de Magia de Hogwarts, pois lá correrá um grande perigo. Harry não lhe dá ouvidos e decide retornar aos estudos, enfrentando um 2º ano recheado de novidades. Uma delas é a contratação do novo Professor de Defesa Contra as Artes das Trevas, Gilderoy Lockhart (Kenneth Branagh), que é considerado um grande galã e não perde uma oportunidade de fazer marketing pessoal. Porém, o aviso de Dobby se confirma e logo toda Hogwarts está envolvida em um mistério que resulta no aparecimento de alunos petrificados."
        },
        {
            name: 'Harry Potter e Prisioneiro De Azkaban',
            img: "./images/hp-prisioneiro-de-azkaban.jpg",
            description: 'O 3º ano de ensino na Escola de Magia e Bruxaria de Hogwarts se aproxima. Porém um grande perigo ronda a escola: o assassino Sirius Black (Gary Oldman) fugiu da prisão de Azkaban, considerada até então como à prova de fugas. Para proteger a escola são enviados os Dementadores, estranhos seres que sugam a energia vital de quem se aproxima deles, que tanto podem defender a escola como piorar ainda mais a situação.'
        },
        {
            name: 'Harry Potter e o Calice de Fogo',
            img: "./images/hp-e-o-calice-de-fogo.jpg",
            description: 'Em seu 4º ano na Escola de Magia e Bruxaria de Hogwards, Harry Potter (Daniel Radcliffe) é misteriosamente selecionado para participar do Torneio Tribruxo, uma competição internacional em que precisará enfrentar alunos mais velhos e experientes de Hogwards e também de outras escolas de magia. Além disso a aparição da marca negra de Voldemort (Ralph Fiennes) ao término da Copa do Mundo de Quadribol põe a comunidade de bruxos em pânico, já que sinaliza que o temido bruxo está prestes a retornar.'
        },
        {
            name: 'Harry Potter e a Ordem Da Fenix',
            img: './images/hp-ordem-da-fenix.jpg',
            description: 'Harry Potter (Daniel Radcliffe) retorna à Escola de Magia e Bruxaria de Hogwarts, para cursar o 5º ano letivo. Logo ele descobre que boa parte da comunidade bruxa foi levada a acreditar que o retorno de Voldemort (Ralph Fiennes) foi uma mentira inventada por Harry, o que põe sua credibilidade em dúvida. Além disto, o Ministro da Magia Cornélio Fudge (Robert Hardy) impõe à escola a presença de Dolores Umbridge (Imelda Staunton), que torna-se a nova professora de Defesa Contra as Artes das Trevas. Acontece que as aulas de Umbridge, apesar de aprovadas pelo ministério, abrangem apenas temas amenos, deixando os alunos despreparados para os perigos dos dias atuais. Incentivado por seus amigos Rony (Rupert Grint) e Hermione (Emma Watson), Harry decide encontrar-se em segredo com um grupo de estudantes, visando a prática de magia. O grupo se autodenomina como a “Armada de Dumbledore”, mas logo passa a ser vista como uma ameaça ao próprio Ministério da Magia.'
        },
        {
            name: 'Harry Potter e o Enigma do principe',
            img: './images/hp-enigma-do-principe.jpg',
            description: 'Lorde Voldemort (Ralph Fiennes) é uma ameaça real, tanto para o mundo dos bruxos quanto o dos trouxas. Harry Potter (Daniel Radcliffe) suspeita que o perigo esteja dentro da Escola de Artes e Bruxaria de Hogwarts, mas Alvo Dumbledore (Michael Gambon) está mais preocupado em prepará-lo para o confronto final com o Lorde das Trevas. Dumbledore convida seu colega Horácio Slughorn (Jim Broadbent) para ser o novo professor de Poções, já que Severo Snape (Alan Rickman) enfim alcançou o sonho de ministrar as aulas de Defesa Contra as Artes das Trevas. Paralelamente Harry começa a ter um interesse cada vez maior por Gina Weasley (Bonnie Wright), irmã de seu melhor amigo Rony (Rupert Grint), que também é alvo de interesse de Dino Thomas (Alfie Enoch).'
        },
        {
            name: 'Harry Potter e as Reliquias da morte parte 1',
            img: './images/hp-reliquias-da-morte1.jpg',
            description: 'Prestes a completar 17 anos, Harry Potter (Daniel Radcliffe) precisa ser transportado da casa dos seus tios, os Dursley, até um local seguro. Lorde Voldemort (Ralph Fiennes) e seus comensais da morte sabem que a transferência está prestes a acontecer e aguardam sua realização para atacar. Para que ela ocorra vários amigos de Harry, como Rony Weasley (Rupert Grint), Hermione Granger (Emma Watson), Remo Lupin (David Thewlis), Hagrid (Robbie Coltrane) e “Olho-Tonto” Moody (Brendan Gleeson), tomam a Poção Polissuco e assumem a forma física de Harry. A intenção é despistar Voldemort sobre quem é o Harry verdadeiro, de forma que ele possa chegar seguro à Toca, casa dos Weasley. A missão é bem sucedida, mas logo a situação se torna ainda mais perigosa. O Ministro da Magia Rufus Scrimgeour (Bill Nighy) é morto e, em seu lugar, assume um dos asseclas de Voldemort. Harry e seus amigos passam a ser caçados impiedosamente, obrigando que ele, Rony e Hermione fujam. Precisando mudar constantemente de lugar, eles elaboram um plano para encontrar e destruir as horcruxes que podem eliminar Voldemort de uma vez por todas.'
        },
        {
            name: 'Harry Potter e as Reliquias da morte parte 2',
            img: './images/hp-reliquias-da-morte2.jpg',
            description: 'Harry Potter (Daniel Radcliffe) e seus amigos Rony Weasley (Rupert Grint) e Hermione Granger (Emma Watson) seguem à procura das horcruxes. O objetivo do trio é encontrá-las e, em seguida, destruí-las, de forma a eliminar lorde Voldemort (Ralph Fiennes) de uma vez por todas. Com a ajuda do duende Grampo (Warwick Davis), eles entram no banco Gringotes de forma a invadir o cofre de Bellatrix Lestrange (Helena Bonham Carter). De lá retornam ao castelo de Hogwarts, onde precisam encontrar mais uma horcrux. Paralelamente, Voldemort prepara o ataque definitivo ao castelo.'
        }
    

    ]

    const filmesContainer = $('.filmes');
    
    movies.forEach(function (filme) {
        const filmesCard = $("<div></div>", { "class": "filmes__card" });
        const filmesItem = $("<div></div>", { "class": "filmes__item" });
        const filmesFront = $("<div></div>", { "class": "filmes__front" });
        const filmesBack = $("<div></div>", { "class": "filmes__back" });
        const image = $("<img/>");
        const description = $('<p></p>');
    
        image.attr({'src':filme.img, 'alt':filme.name, "class": "filmes__imagem"});
        description.text(filme.description);
    
        filmesCard.append(filmesItem).appendTo(filmesContainer);
        filmesFront.append(image).appendTo(filmesItem);
        filmesBack.append(description).appendTo(filmesItem);

    })

})