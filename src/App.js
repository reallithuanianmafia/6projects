import { useState } from 'react';
import './App.css';

function App() {

  const [ count, setCount ] = useState(0);

  const popUp = () => {
    setCount((prevState) => prevState - 1);
  }

  const pushUp = (prevState) => {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className='main container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <div className="card text-bg-dark mb-3">
          <div className="card-header">Counter App</div>
          <div className="card-body">
            <h5 className="card-title">Count: {count} </h5>
            <p><button className='btn btn-primary' onClick = { () => pushUp() }>Push + </button></p>
            <p><button className='btn btn-danger' onClick = { () => popUp() }>Pop - </button></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
