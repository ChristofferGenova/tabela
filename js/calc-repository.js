'use strict';
class CalcRepository{

    constructor(){
        this.roupas = [];
        this.seqId = 1;
    }

    salvar(roupa){
        if (roupa.id!=undefined && roupa.id!=""){
            //se ja houver, edita
            let arrRoup = this.roupas.filter(function (obj)  {  if (obj.id==roupa.id) return true } );
            arrRoup[0].camisap = roupa.camisap;
            arrRoup[0].camisam = roupa.camisam;
            arrRoup[0].camisag = roupa.camisag;
            
        }else{
            //se nao houver, salva novo
            roupa.id = this.seqId++;
            this.roupas.push(roupa);
        }
    }

    excluir(pId){
        let index = this.roupas.findIndex(  (obj)   =>  obj.id===pId  );            
        this.roupas.splice(index, 1);
    }

    buscarPorId(pId){
        let arr = this.roupas.filter(  (obj)   =>  obj.id===pId  );      
        return arr[0];
    }

    geral(){
        return this.roupas;
    }

}

export default CalcRepository;