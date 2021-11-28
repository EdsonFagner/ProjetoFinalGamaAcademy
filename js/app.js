                                            /*Declaração de Variáveis*/
/*************************************************************************************************************/
//Criando variáveis para armazenar posições do vetor curso
let curso1 = cursos[0];
let curso2 = cursos[1];
let curso3 = cursos[2];

//Criando variaves para armazenar valores de data
const dataNew = new Date();
const dateDay = dataNew.getDate();
const dateMonth = dataNew.getMonth();
const dateYear = dataNew.getFullYear();
const dateNow = `Criação: ${dateDay}/${dateMonth}/${dateYear}`;
const dateMod = `Modificação: ${dateDay}/${dateMonth}/${dateYear}`;
const dateModC = "";


//Definindo variáveis fixas para completar parâmetros
const imgDefault = "../images/criptomoedas.jpg";
const listaAulasDefault = "Clique aqui para acessar as aulas.";


//Definindo uma variavel constante para armazenar comando de seleção unica.
const c = (el)=>document.querySelector(el);


                                            /*Funções*/
/*************************************************************************************************************/
                                            /*Função Inicio*/
//Parâmetros que serão inseridos para aplicação das funcionalidades
startPag = (idStart, tituloStart, descricaoStart, imageStart, nomeProfessorStart, listaAulasStart, dateCreateStart, dateModStart) => {
    //Criando variável para armazenar ID
    let containerPrincipal = document.querySelector('#container__principal');
    //Criando elemento em uma variável e adicionando classe a ele
    let div1 = document.createElement('div');
    div1.className = "banner__box";
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div1Box = document.createElement('div');
    div1Box.className = "box__index";
    div1Box.innerHTML = `ID: ${idStart}`;
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div1Title = document.createElement('div');
    div1Title.className = "box__title";
    div1Title.innerHTML = tituloStart;
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div1Desc = document.createElement('div');
    div1Desc.className = "box__description";
    div1Desc.innerHTML = descricaoStart;
    //Criando elemento em uma variável e adicionando classe a ele
    let div1Footer = document.createElement('div');
    div1Footer.className = "box__footer";
    //Criando elemento em uma variável e adicionando classe a ele
    let div1FImage = document.createElement('div');
    div1FImage.className = "footer__image";
    //Criando elemento e modificando conteúdo
    let imgFooter = document.createElement('img');
    imgFooter.src = `${imageStart}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div1FPiece = document.createElement('div');
    div1FPiece.className = "footer__piece";
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div1PNome = document.createElement('div');
    div1PNome.className = "piece__nome";
    div1PNome.innerHTML = `Professor: ${nomeProfessorStart}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div1PAula = document.createElement('div');
    div1PAula.className = "piece__aula";
    //Criando elemento e modificando conteúdo
    let aulaA = document.createElement('a');
    aulaA.innerHTML = listaAulasStart;
    //
    let div1DataCreate = document.createElement('div');
    div1DataCreate.className = "footer__dateCreate"
    div1DataCreate.innerHTML = dateCreateStart;
    //
    let div1DataModify = document.createElement('div');
    div1DataModify.className = "footer__dateModify"
    div1DataModify.innerHTML = dateModStart;
    //Definindo organização dos elementos modificando os filhos
    containerPrincipal.appendChild(div1);
    div1.appendChild(div1Box);
    div1.appendChild(div1Title);
    div1.appendChild(div1Desc);
    div1.appendChild(div1Footer);
    div1Footer.appendChild(div1FImage);
    div1FImage.appendChild(imgFooter);
    div1Footer.appendChild(div1FPiece);
    div1FPiece.appendChild(div1PNome);
    div1FPiece.appendChild(div1PAula);
    div1PAula.appendChild(aulaA);
    div1.appendChild(div1DataCreate);
    div1.appendChild(div1DataModify);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Criar*/
//Parâmetros que serão inseridos para aplicação das funcionalidades
const criarCurso = (idNew, tituloNew, descricaoNew, imagemNew, nomeProfessorNew, listaAulasNew, dateCreateNow, dateModCNew) => {
    //Método para inserir um novo item no array
    cursos.push({
        //Adicionando os valores dos parâmetros informados ao objeto do array
        id: idNew,
        titulo: tituloNew,
        descricao: descricaoNew,
        imagem: imagemNew,
        nomeprofessor: nomeProfessorNew,
        listaaulas: listaAulasNew,
        datacriacao: dateCreateNow,
        datamodificacao: dateModCNew
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Exibir*/
//Parâmetros que serão inseridos para aplicação das funcionalidades
const exibirCurso = (idCurso) => {
    //Criando variável para armazenar ID
    let containerExibir = document.querySelector('#container__exibir2');
    //Criando elemento em uma variável e adicionando classe a ele
    let div2 = document.createElement('div');
    div2.className = "banner__box";
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div2Box = document.createElement('div');
    div2Box.className = "box__index";
    div2Box.innerHTML = `ID: ${cursos[idCurso].id}`;
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div2Title = document.createElement('div');
    div2Title.className = "box__title";
    div2Title.innerHTML = cursos[idCurso].titulo;
    ///Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div2Desc = document.createElement('div');
    div2Desc.className = "box__description";
    div2Desc.innerHTML = cursos[idCurso].descricao;
    //Criando elemento em uma variável e adicionando classe a ele
    let div2Footer = document.createElement('div');
    div2Footer.className = "box__footer";
    //Criando elemento em uma variável e adicionando classe a ele
    let div2FImage = document.createElement('div');
    div2FImage.className = "footer__image";
    //Criando elemento e modificando conteúdo
    let imgFooter2 = document.createElement('img');
    imgFooter2.src = `${cursos[idCurso].imagem}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div2FPiece = document.createElement('div');
    div2FPiece.className = "footer__piece";
    ///Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div2PNome = document.createElement('div');
    div2PNome.className = "piece__nome";
    div2PNome.innerHTML = `Professor: ${cursos[idCurso].nomeprofessor}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div2PAula = document.createElement('div');
    div2PAula.className = "piece__aula";
    //Criando elemento e modificando conteúdo
    let aulaA2 = document.createElement('a');
    aulaA2.innerHTML = cursos[idCurso].listaaulas;
    //
    let div2DataCreate = document.createElement('div');
    div2DataCreate.className = "footer__dateCreate"
    div2DataCreate.innerHTML = cursos[idCurso].datacriacao;
    //
    let div2DataModify = document.createElement('div');
    div2DataModify.className = "footer__dateModify"
    div2DataModify.innerHTML = cursos[idCurso].datamodificacao;
    //Definindo organização dos elementos modificando os filhos
    containerExibir.appendChild(div2);
    div2.appendChild(div2Box);
    div2.appendChild(div2Title);
    div2.appendChild(div2Desc);
    div2.appendChild(div2Footer);
    div2Footer.appendChild(div2FImage);
    div2FImage.appendChild(imgFooter2);
    div2Footer.appendChild(div2FPiece);
    div2FPiece.appendChild(div2PNome);
    div2FPiece.appendChild(div2PAula);
    div2PAula.appendChild(aulaA2);
    div2.appendChild(div2DataCreate);
    div2.appendChild(div2DataModify);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Atualizar*/
//Parâmetros que serão inseridos para aplicação das funcionalidades
const atualizarCurso = (idAtt, tituloAtt, descricaoAtt, imagemAtt, nomeProfessorAtt, listaAulasAtt, dataModAtt) => {
    //Criando variável para armazenar a direferença entre o id e o index
    const idAtualiza = idAtt - 1;
    //Adicionando os valores dos parâmetros informados ao objeto do array
    cursos [idAtualiza] = {
        id: idAtt,
        titulo: tituloAtt,
        descricao: descricaoAtt,
        imagem: imagemAtt,
        nomeprofessor: nomeProfessorAtt,
        listaaulas: listaAulasAtt,
        datacriacao: cursos[idAtualiza].datacriacao,
        datamodificacao: dataModAtt
    };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Deletar*/
//Parâmetro que será inserido para aplicação das funcionalidades
const deletarCurso = (idDel) => {
    //Criando variável para armazenar a direferença entre o id e o index
    const idDelete = idDel - 1;
    //Método que remove um item do array quando informamos a posição e quantos itens desejamos remover
    cursos.splice(idDelete, 1);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Listar*/
//Parâmetro que será inserido para aplicação das funcionalidades
const listarCursos = (idCurso) => {
    //Criando variável para armazenar ID
    let containerListar = document.querySelector('#container__listar2');
    //Criando elemento em uma variável e adicionando classe a ele
    let div3 = document.createElement('div');
    div3.className = "banner__box";
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div3Box = document.createElement('div');
    div3Box.className = "box__index";
    div3Box.innerHTML = `ID: ${cursos[idCurso].id}`;
    ///Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div3Title = document.createElement('div');
    div3Title.className = "box__title";
    div3Title.innerHTML = cursos[idCurso].titulo;
    //Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div3Desc = document.createElement('div');
    div3Desc.className = "box__description";
    div3Desc.innerHTML = cursos[idCurso].descricao;
    //Criando elemento em uma variável e adicionando classe a ele
    let div3Footer = document.createElement('div');
    div3Footer.className = "box__footer";
    //Criando elemento em uma variável e adicionando classe a ele
    let div3FImage = document.createElement('div');
    div3FImage.className = "footer__image";
    //Criando elemento e modificando conteúdo
    let imgFooter3 = document.createElement('img');
    imgFooter3.src = `${cursos[idCurso].imagem}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div3FPiece = document.createElement('div');
    div3FPiece.className = "footer__piece";
    ///Criando elemento em uma variável, adicionando classe e modificando o conteúdo
    let div3PNome = document.createElement('div');
    div3PNome.className = "piece__nome";
    div3PNome.innerHTML = `Professor: ${cursos[idCurso].nomeprofessor}`;
    //Criando elemento em uma variável e adicionando classe a ele
    let div3PAula = document.createElement('div');
    div3PAula.className = "piece__aula";
    //Criando elemento e modificando conteúdo
    let aulaA3 = document.createElement('a');
    aulaA3.innerHTML = cursos[idCurso].listaaulas;
    //
    let div3DataCreate = document.createElement('div');
    div3DataCreate.className = "footer__dateCreate"
    div3DataCreate.innerHTML = cursos[idCurso].datacriacao;
    //
    let div3DataModify = document.createElement('div');
    div3DataModify.className = "footer__dateModify"
    div3DataModify.innerHTML = cursos[idCurso].datamodificacao;
    //Definindo organização dos elementos modificando os filhos
    containerListar.appendChild(div3);
    div3.appendChild(div3Box);
    div3.appendChild(div3Title);
    div3.appendChild(div3Desc);
    div3.appendChild(div3Footer);
    div3Footer.appendChild(div3FImage);
    div3FImage.appendChild(imgFooter3);
    div3Footer.appendChild(div3FPiece);
    div3FPiece.appendChild(div3PNome);
    div3FPiece.appendChild(div3PAula);
    div3PAula.appendChild(aulaA3);
    div3.appendChild(div3DataCreate);
    div3.appendChild(div3DataModify);
};

                                            /*Main*/
/*************************************************************************************************************/
//Chamando funções e passando parametrôs para exibir os cursos cadastrados inicialmente
startPag(curso1.id, curso1.titulo, curso1.descricao, curso1.imagem, curso1.nomeprofessor, curso1.listaaulas, curso1.datacriacao, curso1.datamodificacao);
startPag(curso2.id, curso2.titulo, curso2.descricao, curso2.imagem, curso2.nomeprofessor, curso2.listaaulas, curso2.datacriacao, curso2.datamodificacao);
startPag(curso3.id, curso3.titulo, curso3.descricao, curso3.imagem, curso3.nomeprofessor, curso3.listaaulas, curso3.datacriacao, curso3.datamodificacao);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Função para ao clicar modificar os itens da página modificando as opções de display para INICIO
c('#inicio').addEventListener('click', ()=>{
    c('#container__principal').style.display = "flex";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});
//Função para ao clicar modificar os itens da página modificando as opções de display para CRIAR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#criar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "flex";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});
//Função para ao clicar modificar os itens da página modificando as opções de display para EXIBIR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#exibir').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "flex";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});
//Função para ao clicar modificar os itens da página modificando as opções de display para ATUALIZAR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#atualizar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "flex";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});
//Função para ao clicar modificar os itens da página modificando as opções de display para DELETAR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#deletar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "flex";
    c('#container__listar').style.display = "none";
});
//Função para ao clicar modificar os itens da página modificando as opções de display para LISTAR
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#listar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "flex";
});

                                            /*Criar Curso ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--cri').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let criarIdValue = cursos.length + 1;
    //Declarando varável para armazenar valor do input
    let criarTitleValue = document.getElementById("criar__input__title").value;
    //Declarando varável para armazenar valor do input
    let criarDescriptionValue = document.getElementById("criar__input__description").value;
    //Declarando varável para armazenar valor do input
    let criarNameValue = document.getElementById("criar__input__name").value;
    //Passando parâmetros para a função ser realizada
    criarCurso(criarIdValue, criarTitleValue, criarDescriptionValue, imgDefault, criarNameValue, listaAulasDefault, dateNow, dateModC);
});
                                            /*Exibir Curso ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--exi').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let exibirIdValue = document.getElementById("exibir__input__id").value;
    //Criando variável para armazenamento entre a diferença entre o valor de id convertido e o index
    let exibirIdValue2 = parseInt(exibirIdValue) - 1;
    //Passaando parâmetro para a função ser realizada
    exibirCurso(exibirIdValue2);
});
                                            /*Atualizar Curso*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--atua').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let atualizarIdValue = document.getElementById("atualizar__input__id").value;
    //Declarando varável para armazenar valor do input
    let atualizarTitleValue = document.getElementById("atualizar__input__title").value;
    //Declarando varável para armazenar valor do input
    let atualizarDescriptionValue = document.getElementById("atualizar__input__description").value;
    //Declarando varável para armazenar valor do input
    let atualizarNameValue = document.getElementById("atualizar__input__name").value;
    //Convertendo valor de string para inteiro e passando os parâmetros para função ser realizada
    atualizarCurso(parseInt(atualizarIdValue), atualizarTitleValue, atualizarDescriptionValue, imgDefault, atualizarNameValue, listaAulasDefault, dateMod);
    
});

                                            /*Deletar Curso ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--del').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let deletarValue = document.getElementById("deletar__input__id").value;
    //Passando parâmetro para função ser realizada
    deletarCurso(deletarValue);
});

                                            /*Exibir Cursos ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--lis').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Criando laço de repetição para passar todos os valores dos indices como parâmetro
    for(let x = 0; x < cursos.length; x++){
        //Passando os valores como paâmetro para função ser realizada
        listarCursos(x);
    }
});