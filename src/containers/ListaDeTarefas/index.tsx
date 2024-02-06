import Tarefa from '../../components/Tarefa'
import * as S from './style'

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
        <ul>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
          <li>
            <Tarefa />
          </li>
        </ul>
      </p>
    </S.Container>
  )
}

export default ListaDeTarefas
