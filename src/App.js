import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

<div className='App'>
  <Person name="ruble" nayka="mousumi"></Person>
  <Person name="bapraz" nayka="popi"></Person>
  <Person name="sakib" nayka="apu"></Person>
  <h5>New components, Yey</h5>
  <Friend movie="shingam" phone="017888"></Friend>
  <Friend movie="bangla" phone="0192222"></Friend>
</div>

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{ props.name}</h1>
      <p>Nayka: { props.nayka}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props)
  return (
    <div className='container'>
      <h1>Name: { props.movie}</h1>
      <p>phone: { props.phone}</p>
    </div>
  );
}

export default App;
