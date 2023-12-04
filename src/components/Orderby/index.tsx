// Orderby.tsx
import * as S from './styles'

interface OrderbyProps {
  handleOrderBy: (criteria: string) => void
}

const Orderby: React.FC<OrderbyProps> = ({ handleOrderBy }) => (
  <S.OrderBy>
    <div>ORDENAR POR</div>
    <select onChange={(e) => handleOrderBy(e.target.value)}>
      <option value="price">Preço</option>
      <option value="name">Nome</option>
    </select>
  </S.OrderBy>
)

export default Orderby
