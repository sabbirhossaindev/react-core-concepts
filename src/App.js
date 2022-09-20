import logo from './logo.svg';
import './App.css';

const singers = [
  {name: 'sabbir', job: 'student'},
  {name: 'nadim', job: 'student'},
  {name: 'nihon', job: 'student'},
  {name: 'Abdullah', job: 'student'},
]

function App() {
  const nayoks = ['Rubel', 'Bapraz', 'Kubel', 'khubel', 'josim', 'salman sa', 'Riyaz', 'Anaowr'];
  return (
    <div className="App">
      {/* dynamic of array */}
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {/* dynamic of object */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      
      {/* <Person name={nayoks[0]} nayka="mousumi"></Person>
      <Person name={nayoks[1]} nayka="popi"></Person>
      <Person name={nayoks[2]} nayka="apu"></Person> */}
      <h5>New components, Yey</h5>
      <Friend movie="shingam" phone="017888"></Friend>
      <Friend movie="bangla" phone="0192222"></Friend>
    </div>
  );
}


function Person(props) {
  // console.log(props);
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
