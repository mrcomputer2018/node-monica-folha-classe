import Funcionario from './classes/Funcionario';

let listaFuncionarios: Funcionario[] = [];

const funcionario: Funcionario = new Funcionario("monica couto", "desenvolvedora", 100); // crio um objeto do tipo Funcionario

listaFuncionarios.push(funcionario); // adiciono o objeto a lista de funcionários

// registro as horas trabalhadas
const funcionarioHoraRegistrada = funcionario.registrarHoras(8 , listaFuncionarios, "monica couto");

listaFuncionarios = listaFuncionarios.map(funcionario => { 
    if(funcionario.getNome() === "monica couto") {
        return funcionarioHoraRegistrada;
    } else {
        return funcionario;
    }
}).filter(funcionario => funcionario !== null) as Funcionario[];

funcionario.registrarHoras(8, listaFuncionarios, "monica couto");

console.log("Lista de Funcionarios" + listaFuncionarios); // imprimo a lista de funcionários

console.log(">>> GetDetalhes: " + funcionario.getDetalhes()); // chamo o método getDeatalhes que retorna as informações do funcionário