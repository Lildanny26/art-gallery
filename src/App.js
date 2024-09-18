import './App.css';

import {useState, useEffect} from 'react'
import Gallery from './Components/Gallery';
import ButtonBar from './Components/ButtonBar';

function App() {

let [artId, setArtId] = useState(12720)
let [data, setData] = useState({})

  // Changed the Title/Tab data
  useEffect(() => {
    document.title = "Welcome to ArtWorld"
  // Fetching the data from API
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  // passing to ButtonBar
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

  return (
    <div className="App">
      <header className="App-header">
       <h1>ArtWorld</h1>
       <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
       <ButtonBar handleIterate={handleIterate}/>
      </header>
    </div>
  );
}

export default App;