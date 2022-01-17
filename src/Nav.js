import './Nav.css'

export default function () {
  return (
    <section className='countries '>
      <div className="row align-center between container">
        <div className="input-box row align-center">
          <label className='label' for="country"></label>
          <input className="search-input" type="text" id="country" placeholder="Search for a country…" />
        </div>
        <div className="select-btn row align-center between">
          <select name="select-coutries">
            <option value="" disabled selected hidden>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe </option>
          </select>
        </div>
      </div>
    </section>
  )
}
