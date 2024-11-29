import Funcionario from './classes/Funcionario';

const listaFuncionarios: Funcionario[] = [];

const funcionario: Funcionario = new Funcionario("monica couto", "desenvolvedora", 100); // crio um objeto do tipo Funcionario

listaFuncionarios.push(funcionario); // adiciono o objeto a lista de funcionários

funcionario.registrarHoras(8 , listaFuncionarios,"monica couto"); // registro as horas trabalhadas

console.log(listaFuncionarios); // imprimo a lista de funcionários

funcionario.setHorasTrabalhadas([8]); // seto as horas trabalhadas

console.log(funcionario.getDetalhes()); // chamo o método getDeatalhes que retorna as informações do funcionário