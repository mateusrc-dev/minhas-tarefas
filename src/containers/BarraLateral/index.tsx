import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
          type="text"
          placeholder="Buscar"
        />
        <S.Filtros>
          <FiltroCard contador={3} legenda="pendentes" />
          <FiltroCard contador={4} legenda="concluídas" ativo />
          <FiltroCard contador={2} legenda="urgentes" />
          <FiltroCard contador={2} legenda="importantes" />
          <FiltroCard contador={3} legenda="normal" />
          <FiltroCard contador={7} legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
