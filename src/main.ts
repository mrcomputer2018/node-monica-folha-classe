import Funcionario from './classes/Funcionario';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let listaFuncionarios: Funcionario[] = [];

while(true) { 
    const opcao = prompt("Digite 1 para adicionar funcionário ou 9 para sair");

    if(opcao === "1") {
        const nome = prompt("Digite o nome do funcionário");
        const cargo = prompt("Digite o cargo do funcionário");
        const taxaHoraria = parseInt(prompt("Digite a taxa horária do funcionário"));

        const funcionario = new Funcionario(nome, cargo, taxaHoraria);
        listaFuncionarios.push(funcionario);
    } 
    else if(opcao === "2") {
        listaFuncionarios.forEach(funcionario => {
            console.log(funcionario.getDetalhes());
        });
    }
    else if(opcao === "9") {
        process.exit();
    } else {
        console.log("Opção inválida");
    }

}
/* 
    // registro as horas trabalhadas
    const funcionarioHoraRegistrada = funcionario.registrarHoras(8 , listaFuncionarios, "monica couto");

    listaFuncionarios = listaFuncionarios.map(funcionario => { 
        if(funcionario.getNome() === "juca mattos") {
            return funcionarioHoraRegistrada;
        } else {
            return funcionario;
        }
    }).filter(funcionario => funcionario !== null) as Funcionario[];

    funcionario.registrarHoras(8, listaFuncionarios, "monica couto");

    console.log("Lista de Funcionarios" + listaFuncionarios); // imprimo a lista de funcionários

    console.log(">>> GetDetalhes: " + funcionario.getDetalhes()); // chamo o método getDeatalhes que retorna as informações do funcionário */