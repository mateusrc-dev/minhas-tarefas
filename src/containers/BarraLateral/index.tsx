import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard />
          <FiltroCard ativo />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
