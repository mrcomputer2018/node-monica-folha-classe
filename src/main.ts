import Funcionario from './classes/Funcionario';

const funcionario: Funcionario = new Funcionario("monica couto", "desenvolvedora", 100); // crio um objeto do tipo Funcionario

funcionario.setHorasTrabalhadas([8]); // seto as horas trabalhadas

funcionario.registrarHoras(8); // registro mais horas trabalhadas

console.log(funcionario.getDetalhes()); // chamo o método getDeatalhes que retorna as informações do funcionário