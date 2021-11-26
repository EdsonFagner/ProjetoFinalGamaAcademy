let cursos = require('./database');

//console.log(cursos);

const criarCurso = (idnew, titulonew, descricaonew, imagemnew, nomeprofessornew, listaaulasnew) => {
    cursos.push({
        id: idnew,
        titulo: titulonew,
        descricao: descricaonew,
        imagem: imagemnew,
        nomeprofessor: nomeprofessornew,
        listaaulas: listaaulasnew
    });
};

//criarCurso(4, "Algum", "Alguma coisa", "./Alguma imagem", "Edson Fagner", "Aula1");

//let res = cursos;

//console.log(res);

const exibirCurso = (idcurso) => {
    const detalhesCurso = cursos.filter((curso) => curso.id === idcurso);

    //console.table(detalhesCurso);
};
//exibirCurso(3);


const atualizarCurso = (idatt, tituloatt, descricaoatt, imagematt, nomeprofessoratt, listaaulasatt) => {
    const idAtt = idatt - 1;
    cursos [idAtt] = {
        id: idatt,
        titulo: tituloatt,
        descricao: descricaoatt,
        imagem: imagematt,
        nomeprofessor: nomeprofessoratt,
        listaaulas: listaaulasatt
    };
};

//atualizarCurso(1, "Algum", "Alguma coisa", "./Alguma imagem", "Edson Fagner", "Aula1");

//console.table(cursos);

