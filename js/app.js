                                            /*Declaração de Variáveis*/
/*************************************************************************************************************/
//Criando variáveis para armazenar posições do vetor curso
curso1 = cursos[0];
curso2 = cursos[1];
curso3 = cursos[2];

//Definindo variáveis fixas para completar parâmetros
const imgDefault = "../images/criptomoedas.jpg";
const listaAulasDefault = "Clique aqui para acessar as aulas.";


//Definindo uma variavel constante para armazenar comando de seleção unica.
const c = (el)=>document.querySelector(el);


                                            /*Funções*/
/*************************************************************************************************************/
                                            /*Função Inicio*/
startPag = (idStart, tituloStart, descricaoStart, imageStart, nomeProfessorStart, listaAulasStart) => {

    let containerPrincipal = document.querySelector('#container__principal');

    let div1 = document.createElement('div');
    div1.className = "banner__box";

    let div1Box = document.createElement('div');
    div1Box.className = "box__index";
    div1Box.innerHTML = idStart;

    let div1Title = document.createElement('div');
    div1Title.className = "box__title";
    div1Title.innerHTML = tituloStart;

    let div1Desc = document.createElement('div');
    div1Desc.className = "box__description";
    div1Desc.innerHTML = descricaoStart;


    let div1Footer = document.createElement('div');
    div1Footer.className = "box__footer";

    let div1FImage = document.createElement('div');
    div1FImage.className = "footer__image";

    let imgFooter = document.createElement('img');
    imgFooter.src = `${imageStart}`;

    let div1FPiece = document.createElement('div');
    div1FPiece.className = "footer__piece";


    let div1PNome = document.createElement('div');
    div1PNome.className = "piece__nome";
    div1PNome.innerHTML = `Professor: ${nomeProfessorStart}`;


    let div1PAula = document.createElement('div');
    div1PAula.className = "piece__aula";
    //div1PAula.innerHTML = listaAulasStart;

    let aulaA = document.createElement('a');
    aulaA.innerHTML = listaAulasStart;


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
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Criar*/
const criarCurso = (idNew, tituloNew, descricaoNew, imagemNew, nomeProfessorNew, listaAulasNew) => {
    cursos.push({
        id: idNew,
        titulo: tituloNew,
        descricao: descricaoNew,
        imagem: imagemNew,
        nomeprofessor: nomeProfessorNew,
        listaaulas: listaAulasNew
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Exibir*/
const exibirCurso = (idCurso) => {
    //const detalhesCurso = cursos.filter(curso => curso.id == idCurso);
    //
    let containerExibir = document.querySelector('#container__exibir2');
    //
    let div2 = document.createElement('div');
    div2.className = "banner__box";
    //
    let div2Box = document.createElement('div');
    div2Box.className = "box__index";
    div2Box.innerHTML = cursos[idCurso].id;
    //
    let div2Title = document.createElement('div');
    div2Title.className = "box__title";
    div2Title.innerHTML = cursos[idCurso].titulo;
    //
    let div2Desc = document.createElement('div');
    div2Desc.className = "box__description";
    div2Desc.innerHTML = cursos[idCurso].descricao;
    //
    let div2Footer = document.createElement('div');
    div2Footer.className = "box__footer";
    //
    let div2FImage = document.createElement('div');
    div2FImage.className = "footer__image";
    //
    let imgFooter2 = document.createElement('img');
    imgFooter2.src = `${cursos[idCurso].imagem}`;
    //
    let div2FPiece = document.createElement('div');
    div2FPiece.className = "footer__piece";
    //
    let div2PNome = document.createElement('div');
    div2PNome.className = "piece__nome";
    div2PNome.innerHTML = `Professor: ${cursos[idCurso].nomeprofessor}`;
    //
    let div2PAula = document.createElement('div');
    div2PAula.className = "piece__aula";
    //
    let aulaA2 = document.createElement('a');
    aulaA2.innerHTML = cursos[idCurso].listaaulas;
    //
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
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Atualizar*/
const atualizarCurso = (idAtt, tituloAtt, descricaoAtt, imagemAtt, nomeProfessorAtt, listaAulasAtt) => {
    const idAtualiza = idAtt - 1;
    cursos [idAtualiza] = {
        id: idAtt,
        titulo: tituloAtt,
        descricao: descricaoAtt,
        imagem: imagemAtt,
        nomeprofessor: nomeProfessorAtt,
        listaaulas: listaAulasAtt
    };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            /*Função Deletar*/
const deletarCurso = (idDel) => {
    const idDelete = idDel - 1;
    cursos.splice(idDelete, 1);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const listarCursos = (idCurso) => {
    //const detalhesCurso = cursos.filter(curso => curso.id == idCurso);
    //
    let containerListar = document.querySelector('#container__listar2');
    //
    let div3 = document.createElement('div');
    div3.className = "banner__box";
    //
    let div3Box = document.createElement('div');
    div3Box.className = "box__index";
    div3Box.innerHTML = cursos[idCurso].id;
    //
    let div3Title = document.createElement('div');
    div3Title.className = "box__title";
    div3Title.innerHTML = cursos[idCurso].titulo;
    //
    let div3Desc = document.createElement('div');
    div3Desc.className = "box__description";
    div3Desc.innerHTML = cursos[idCurso].descricao;
    //
    let div3Footer = document.createElement('div');
    div3Footer.className = "box__footer";
    //
    let div3FImage = document.createElement('div');
    div3FImage.className = "footer__image";
    //
    let imgFooter3 = document.createElement('img');
    imgFooter3.src = `${cursos[idCurso].imagem}`;
    //
    let div3FPiece = document.createElement('div');
    div3FPiece.className = "footer__piece";
    //
    let div3PNome = document.createElement('div');
    div3PNome.className = "piece__nome";
    div3PNome.innerHTML = `Professor: ${cursos[idCurso].nomeprofessor}`;
    //
    let div3PAula = document.createElement('div');
    div3PAula.className = "piece__aula";
    //
    let aulaA3 = document.createElement('a');
    aulaA3.innerHTML = cursos[idCurso].listaaulas;
    //
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
};

                                            /*Main*/
/*************************************************************************************************************/
//Chamando função para exibir os cursos cadastrados inicialmente

startPag(curso1.id, curso1.titulo, curso1.descricao, curso1.imagem, curso1.nomeprofessor, curso1.listaaulas);

startPag(curso2.id, curso2.titulo, curso2.descricao, curso2.imagem, curso2.nomeprofessor, curso2.listaaulas);

startPag(curso3.id, curso3.titulo, curso3.descricao, curso3.imagem, curso3.nomeprofessor, curso3.listaaulas);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#inicio').addEventListener('click', ()=>{
    c('#container__principal').style.display = "flex";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#criar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "flex";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#exibir').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "flex";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#atualizar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "flex";
    c('#container__deletar').style.display = "none";
    c('#container__listar').style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#deletar').addEventListener('click', ()=>{
    c('#container__principal').style.display = "none";
    c('#container__criar').style.display = "none";
    c('#container__exibir').style.display = "none";
    c('#container__atualizar').style.display = "none";
    c('#container__deletar').style.display = "flex";
    c('#container__listar').style.display = "none";
});

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
    //
    criarCurso(criarIdValue, criarTitleValue, criarDescriptionValue, imgDefault, criarNameValue, listaAulasDefault);
    console.log(cursos);
});
                                            /*Exibir Curso ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--exi').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let exibirIdValue = document.getElementById("exibir__input__id").value;
    //
    let exibirIdValue2 = parseInt(exibirIdValue) - 1;
    //
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
    //Convertendo valor de string para inteiro
    atualizarCurso(parseInt(atualizarIdValue), atualizarTitleValue, atualizarDescriptionValue, imgDefault, atualizarNameValue, listaAulasDefault);
    console.log(cursos);
    
});

                                            /*Deletar Curso ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--del').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    let deletarValue = document.getElementById("deletar__input__id").value;
    //
    deletarCurso(deletarValue);
    console.log(cursos);
});

                                            /*Exibir Cursos ao Clicar*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
c('#btn--lis').addEventListener('click', (e)=>{
    //Excluindo a ação predefinida da tag com preventDefault();
    e.preventDefault();
    //Declarando varável para armazenar valor do input
    for(let x = 0; x < cursos.length; x++){
        listarCursos(x);
    }
    console.log(cursos);
});