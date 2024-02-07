import Tarefa from '../../components/Tarefa'
import * as S from './style'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <Tarefa
                descricao={item.descricao}
                prioridade={item.prioridade}
                status={item.status}
                titulo={item.titulo}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </p>
    </S.Container>
  )
}

export default ListaDeTarefas
