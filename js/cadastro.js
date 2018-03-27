'use strict';
// Importando a class CalcRepository
import CalcRepository from '../js/calc-repository.js';
import Calculadora from '../js/calculadora.js'

class Cadastro{
    
    constructor(){
        this.repository = new CalcRepository;
    }

    leitura(){
        //Lendo
        let campoId = document.getElementById("id");
        let valorId = campoId.value;

        let campoP= document.getElementById("camisaP");
        let valorP = campoP.value;

        let campoM = document.getElementById("camisaM");
        let valorM =  campoM.value;

        let campoG = document.getElementById("camisaG");
        let valorG = campoG.value;

        //objeto
        let roupa = {};

        roupa.id = valorId;
        roupa.camisap= valorP;
        roupa.camisam= valorM;
        roupa.camisag= valorG;
            
        return  roupa;
    }

    salvar(){
        //leitura
        let roupa =  this.leitura();
        
        //salvando
        this.repository.salvar(roupa);

        //limpar
        this.limparForm();

        //gerando lista na tela
       this.atualizarLista();
    }

    limparForm(){
        let campoId = document.getElementById("id");
        campoId.value = "";

        let campoP= document.getElementById("camisaP");
        campoP.value="";

        let campoM = document.getElementById("camisaM");
        campoM.value="";

        let campoG = document.getElementById("camisaG");
        campoG.value="";
    }

    excluir(valorId){
      if (window.confirm('Confirma exclusão?')){
       this.repository.excluir(valorId);
       this. atualizarLista();
       this.limparForm();
      }
    }

    editar (valorId){
        let roup = this.repository.buscarPorId(valorId);

        let campoId = document.getElementById("id");
        campoId.value = roup.id;

        let campoP = document.getElementById("camisaP");
        campoP.value = roup.camisap;

        let campoM = document.getElementById("camisaM");
        campoM.value = roup.camisam;

        let campoG = document.getElementById("camisaG");
        campoG.value = roup.camisag;
    }

    atualizarLista(){
        let table  = document.getElementById("tbroup");
        let arrCamisas = this.repository.geral();
    
        const str = 
        `<table>
            <thead>
                <td> P </td>
                <td> M </td>
                <td> G </td>
                <td> Valor Total R$ </td>
                <td> Ação</td>
            </thead>

            <tbody>
            ${arrCamisas.map(function (roup, index) {
                return `<tr> 
                    <td> ${roup.camisap} </td>
                    <td> ${roup.camisam} </td>
                    <td> ${roup.camisag} </td>
                    <td> R$ ${cad.calcula(index)},00 </td>
                    <td> 
                        <button onroupck='cad.excluir(${roup.id})'>Excluir</button>
                        <button onroupck='cad.editar(${roup.id})'>Editar</button>
                    </td>
                </tr>`

             }).join('')
            }
               
            
            </tbody>
        </table>`;
       
        table.innerHTML= str;
        
    }
    
}

var cad = new Cadastro();

export default Cadastro;
