import { v4 } from 'uuid';

export default class Funcionario {
    private id: string;
    private nome: string;
    private cargo: string;
    private taxaHoraria: number;
    private horasTrabalhadas: number[] | null;

    constructor(nome: string, cargo: string, taxaHoraria: number) {
        this.id = v4().substring(0, 4); // para ter 4 caractyesres
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = [];
    }

    //Getters
    getNome(): string {
        return this.nome;
    }

    getTaxaHoraria(): number {
        return this.taxaHoraria;
    }

    // Setters
    setHorasTrabalhadas(horaTrabalhada: number) {
        if (this.horasTrabalhadas) {
            this.horasTrabalhadas.push(horaTrabalhada);
        }
    }

    //Metodos
    registrarHoras(numHoras: number){
        if (this.id === idFuncionario) {
            this.horasTrabalhadas?.push(numHoras);
            return this;
        } else {
            console.log("Funcionário não encontrado!!!");
            return null;
        }
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