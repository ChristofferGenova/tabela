'use strict';
//Importa class
import cadastro from '../js/cadastro.js';

class Calculadora{
    // Realiza o calculo das camisas
    calcula(i){
        let vP = this.arrCamisas[i].camisap*10;
        let vM = this.arrCamisas[i].camisam*12;
        let vG = this.arrCamisas[i].camisag*15;

        let valortotal = vP+vM+vG;

        return valortotal;
    }

}

export default Calculadora; 