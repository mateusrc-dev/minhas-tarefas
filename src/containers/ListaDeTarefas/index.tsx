import Tarefa from '../../components/Tarefa'
import * as S from './style'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar typescript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANT,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANT,
    status: enums.Status.PENDENTE
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
