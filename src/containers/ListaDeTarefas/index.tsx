import Tarefa from '../../components/Tarefa'
import * as S from './style'

const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        <ul>
          {tarefas.map((item) => (
            <li key={item.titulo}>
              <Tarefa
                descricao={item.descricao}
                prioridade={item.prioridade}
                status={item.status}
                titulo={item.titulo}
              />
            </li>
          ))}
        </ul>
      </p>
    </S.Container>
  )
}

export default ListaDeTarefas
