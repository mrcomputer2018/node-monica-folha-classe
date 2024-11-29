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
    adicionarFuncionario() {

    }

    localizarFuncionarioPorNome(nome: string, listaFuncionarios: Funcionario[]): Funcionario | null {
        const funcionario = listaFuncionarios.find(funcionario => funcionario.nome === nome);
        
        if (funcionario) {
            return funcionario;
        } else {
            console.log("Funcionário não encontrado!!!");
            return null;
        }
    }

    registrarHoras(horaTrabalhada: number, listaObjeto: Funcionario[], nome: string): Funcionario | null {
        let funcionarioEncontrado = this.localizarFuncionarioPorNome(nome, listaObjeto);

        console.log(">>> Funcionario Encontrado: " + funcionarioEncontrado?.getDetalhes());

       if(funcionarioEncontrado === null) {
            return null;
       }

        funcionarioEncontrado.setHorasTrabalhadas(horaTrabalhada);

        console.log(">>> Horas Trabalhadas: " + funcionarioEncontrado.horasTrabalhadas);
        console.log(">>> Funcionario Encontrado: " + funcionarioEncontrado.getDetalhes());
        return funcionarioEncontrado;
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