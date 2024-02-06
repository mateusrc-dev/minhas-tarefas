import Tarefa from '../../components/Tarefa'
import * as S from './style'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

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
