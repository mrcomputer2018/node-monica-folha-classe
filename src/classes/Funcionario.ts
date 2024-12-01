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
    getId(): string {
        return this.id;
    }

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
    localizarFuncionarioPorNome(nome: string, listaFuncionarios: Funcionario[]) {
        return listaFuncionarios.find(funcionario => funcionario.getNome() === nome);
    }
    
    localizarFuncionarioPorId(id:string, listaFuncionarios: Funcionario[]) {
        return listaFuncionarios.find(funcionario => funcionario.getId() === id);
    }

    registrarHoras(numHoras: number): void {
        
        this.setHorasTrabalhadas(numHoras);

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