import Tarefa from '../../components/Tarefa'
import * as S from './style'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
        <ul>
          {filtraTarefas().map((item) => (
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
