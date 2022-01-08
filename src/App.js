import './css/App.css';
// import axios from 'axios';

function App() {
	function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
	// const m = axios.get("/hi").then(a => console.log(a))
	// .catch(e => console.log(e))
  return (
    <div className="App">
      <header>
        <h1>{httpGet("/hi")}</h1>
        <h1>{httpGet("/hey")}</h1>
        <h2>Hello</h2>
      </header>
    </div>
  );
}

export default App;
