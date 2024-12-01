import Funcionario from './classes/Funcionario';
import promptSync from 'prompt-sync';

const prompt = promptSync();

let listaFuncionarios: Funcionario[] = [];

while(true) { 
    const opcao = prompt("Digite uma opção: 1 - Adicionar Funcionário, \n8 - Listar Funcionários, \n9 - Sair");

    if(opcao === "1") {
        adicionarFuncionario();
    }
    else if(opcao === "2") {
        const idFuncionario: string = prompt("Digite o id do funcionário");
        const horaTrabalhada:number = parseInt(prompt("Digite a quantidade de horas trabalhadas"));

        let funcionarioEncontrado: Funcionario | undefined = listaFuncionarios.find(funcionario => funcionario.getId() === idFuncionario);
        if (funcionarioEncontrado) {
            funcionarioEncontrado.registrarHoras(horaTrabalhada);
        } else {
            console.log("Funcionário não encontrado");
        }
       

    } 
    else if(opcao === "8") {
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

function adicionarFuncionario() {
    const nome = prompt("Digite o nome do funcionário");
    const cargo = prompt("Digite o cargo do funcionário");
    const taxaHoraria = parseInt(prompt("Digite a taxa horária do funcionário"));

    let funcionario = new Funcionario(nome, cargo, taxaHoraria);
    listaFuncionarios.push(funcionario);
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