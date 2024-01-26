function Aluno(matricula,nome,nota1,nota2,nota3) {
    this.matricula = matricula;
    this.nome = nome;
    this.nota1 = Number(nota1);
    this.nota2 = Number(nota2);
    this.nota3 = Number(nota3);
    this.media = ((this.nota1+this.nota2+this.nota3)/3).toFixed(2); 
 } 
 let alunos = [];
 criaTabela();

 function criaTabela () {
    var tabela = document.createElement('table');
    tabela.id = "tabela";
    tabela.classList.add('table');
    document.getElementById('conteudo').appendChild(tabela);
 }

 function criaCabecalho () {
     let cabecalho = document.createElement('tr');
     let th1 = document.createElement('th');
     th1.textContent = "Matricula";
     let th2 = document.createElement('th');
     th2.textContent = "Nome";
     let th3 = document.createElement('th');
     th3.textContent = "Nota1";
     let th4 = document.createElement('th');
     th4.textContent = "Nota2";
     let th5 = document.createElement('th');
     th5.textContent = "Nota3";
     let th6 = document.createElement('th');
     th6.textContent = "Média";
     cabecalho.appendChild(th1);
     cabecalho.appendChild(th2);
     cabecalho.appendChild(th3);
     cabecalho.appendChild(th4);
     cabecalho.appendChild(th5);
     cabecalho.appendChild(th6);
     tabela.appendChild(cabecalho);
 }
 
 function cadastroAluno(){
   let matricula = document.getElementById('matricula');
   let nome = document.getElementById('nome');
   let nota1 = document.getElementById('nota1'); 
   let nota2 = document.getElementById('nota2'); 
   let nota3 = document.getElementById('nota3');
   if (matricula.value == "" || nome.value == "" || nota1.value == "" || nota2.value == "" || nota3.value == "") {
      alert ("Preencha todos os campos");
   } else {
      let aluno = new Aluno(matricula.value,nome.value,nota1.value,nota2.value,nota3.value);
      alunos.push(aluno);
      console.table(alunos);
      
      matricula.value = "";
      nome.value = "";
      nota1.value = "";
      nota2.value = "";
      nota3.value = "";
    }
  }
  function exibir() {
      
      tabela.innerHTML = "";
     if (alunos.length > 0) {
        criaCabecalho();
     }
     for (var i=0;i<alunos.length;i++) {
        let linha = document.createElement('tr');
        let elem_matricula = document.createElement('td');
        elem_matricula.textContent = alunos[i].matricula;
        let elem_nome = document.createElement('td');
        elem_nome.textContent = alunos[i].nome;
        let elem_nota1 = document.createElement('td');
        elem_nota1.textContent = alunos[i].nota1;
        let elem_nota2 = document.createElement('td');
        elem_nota2.textContent = alunos[i].nota2;
        let elem_nota3 = document.createElement('td');
        elem_nota3.textContent = alunos[i].nota3;
        let elem_media = document.createElement('td');
        elem_media.textContent = alunos[i].media;
        linha.appendChild(elem_matricula);
        linha.appendChild(elem_nome);
        linha.appendChild(elem_nota1);
        linha.appendChild(elem_nota2);
        linha.appendChild(elem_nota3);
        linha.appendChild(elem_media);
        tabela.appendChild(linha);
     }
  }
  function excluirAluno() {
      let nome = prompt("Digite o nome do aluno");
      let index = -1;
      for (let i=0;i<alunos.length;i++) {
         if (alunos[i].nome.toLowerCase() === nome.toLowerCase() ) {
            index = i;
            break;
         } 
      }
      if (index != -1){
         alunos.splice(index,1);
         exibir();    
      }else {
          alert("Aluno não encontrado");
      }
  } 
   