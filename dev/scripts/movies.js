$(document).ready(function(){var a=$(".filmes"),e=$("<div></div>",{class:"filmes__card"}),o=$("<div></div>",{class:"filmes__item"}),r=$("<div></div>",{class:"filmes__front"}),s=$("<div></div>",{class:"filmes__back"}),i=$("<img/>"),d=$("<p></p>");pedraFilosofal={name:"Harry Potter e a Pedra Filosofal",img:"./images/hp-pedra-filosofal.jpg",description:"Harry Potter (Daniel Radcliff) é um garoto órfão de 10 anos que vive infeliz com seus tios, os Dursley. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente Harry é impedido de ler a carta por seu tio Válter (Richard Griffiths), mas logo ele recebe a visita de Hagrid (Robbie Coltrane), o guarda-caça de Hogwarts, que chega em sua casa para levá-lo até a escola. A partir de então Harry passa a conhecer um mundo mágico que jamais imaginara, vivendo as mais diversas aventuras com seus mais novos amigos, Rony Weasley (Rupert Grint) e Hermione Granger (Emma Watson)."},camaraSecreta={name:"Harry Potter e a Câmara Secreta",img:"./images/hp-camara-secreta.jpg",description:"De férias na casa de seus tios Dursley, Harry Potter (Daniel Radcliffe) recebe a inesperada visita de Dobby, um elfo doméstico, que veio avisá-lo para não retornar à Escola de Magia de Hogwarts, pois lá correrá um grande perigo. Harry não lhe dá ouvidos e decide retornar aos estudos, enfrentando um 2º ano recheado de novidades. Uma delas é a contratação do novo Professor de Defesa Contra as Artes das Trevas, Gilderoy Lockhart (Kenneth Branagh), que é considerado um grande galã e não perde uma oportunidade de fazer marketing pessoal. Porém, o aviso de Dobby se confirma e logo toda Hogwarts está envolvida em um mistério que resulta no aparecimento de alunos petrificados."};i.attr("src",pedraFilosofal.img),d.text(pedraFilosofal.description),e.appendTo(a).append(o),r.append(i).appendTo(o),s.append(d).appendTo(o)});