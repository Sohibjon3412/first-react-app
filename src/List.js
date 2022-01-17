import Country from "./Array"
import './List.css'

function List() {
  return (
    Country.map(item => (
      <li className="boxs">
        <div className="flugs-box">
          <img className="flugs" src={item.img} alt="germany-flug-img" width="264" height="160" />
          <div className="flugs-text">
            <h2 class="country-name">{item.name}</h2>
            <p class="population"><span>Population: </span>{item.population}</p>
            <p class="region"><span>Region: </span>{item.region}</p>
            <p class="capital"><span>Capital: </span>{item.capital}</p>
          </div>
        </div>
      </li>
    ))
  )
}
export default List;