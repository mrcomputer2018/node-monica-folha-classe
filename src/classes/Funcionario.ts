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
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, horas trabalhadas: ${this.horasTrabalhadas}, Salário: ${this.calcularSalarioMensal()}`;
    }
}