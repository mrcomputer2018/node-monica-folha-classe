/* Descrição

Crie uma classe Funcionario que tenha as propriedades id, nome, cargo, taxaHoraria e horasTrabalhadas. Implemente um construtor para inicializar essas propriedades. A classe 
também deve ter métodos para registrar horas trabalhadas e calcular o salário mensal.

Objetivo:

    Criar a classe Funcionario com as propriedades e o construtor.

    Adicionar métodos registrarHoras e calcularSalarioMensal à classe. 
*/
import { v4 } from 'uuid';

export default class Funcionario {
    private id: string;
    private nome: string;
    private cargo: string;
    private taxaHoraria: number;
    private horasTrabalhadas: number[] | null;

    constructor(nome: string, cargo: string, taxaHoraria: number) {
        this.id = v4();
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = null;
    }

    //Getters
    getTaxaHoraria(): number {
        return this.taxaHoraria;
    }

    // Setters
    setHorasTrabalhadas(horasTrabalhadas: number[]) {
        this.horasTrabalhadas = horasTrabalhadas;
    }

    //Metodos
   /*  Descrição

    Descrição:
    Refatore a função adicionarFuncionario para utilizar a classe Funcionario. 
    Ao invés de criar um objeto literal, instancie a classe Funcionario e adicione a 
    instância à lista de funcionários.

    Objetivo:

    Substituir a criação de objetos literais pela instância da classe Funcionario.

    Garantir que a lista de funcionários seja atualizada com objetos do tipo Funcionario. */

    adicionarFuncionario() {

    }

    registrarHoras(horaTrabalhada: number) {
        this.horasTrabalhadas?.push(horaTrabalhada);
    }

    calcularSalarioMensal(): number{
        let horaTotal = 0;

        this.horasTrabalhadas?.forEach(hora => {
            horaTotal = horaTotal + hora;
        })

        return horaTotal ? horaTotal * this.taxaHoraria : 0
    }

    getDetalhes(): string {
        return `\nNome: ${this.nome}` +
        `\nCargo: ${this.cargo}` +
        `\nhoras trabalhadas: ${this.horasTrabalhadas}` +
        `\nSalário: ${this.calcularSalarioMensal()}`;
    }
}