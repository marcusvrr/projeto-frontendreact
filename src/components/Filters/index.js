import { StyledFilter } from "./styled"


function Filters (props) {
    const onChangeOrdem = (event) => {
        props.setOrdem(event.target.value)
      }

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    const handlePrecoMin = (event)=>{
        props.setValorMinimo(event.target.value)
    }

    const handlePrecoMax = (event)=>{
        props.setValorMaximo(event.target.value)
    }
    return(
        <StyledFilter>
        <h2>Filtrar por:</h2>
        <div>
        <select value={props.ordem} onChange={onChangeOrdem} className="boxcentral-topo-select">
          <option value="">Ordenar por</option>
          <option value="Maior">Preço: do maior para o menor</option>
          <option value="Menor">Preço: do menor para o maior</option>
        </select>
      </div>
        <p>Busca por nome:</p>
        <input type="text" value={props.pesquisa} onChange={handleNomeSearch} placeholder="Produto"/>
        <p>Menor Preço:</p>
        <input type="text" value={props.ValorMinimo} onChange={handlePrecoMin} placeholder="R$ 25.00"/>
        <p>Maior Preço:</p>
        <input type="text" value={props.ValorMaximo} onChange={handlePrecoMax} placeholder="R$ 70.00" />
        </StyledFilter>
    )
}
 export default Filters