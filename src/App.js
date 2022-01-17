import Nav from './Nav';
import List from './List';

function App() {
  return (
    <div>
      {Nav()}
      <ul className='row align-center flugs-content1 between container'>
        {List()}
      </ul>
    </div>
  )
}

export default App;
