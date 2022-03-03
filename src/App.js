import "./App.css";
import PaperCard from "./PaperCard";
import { db } from "./db";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  async function addPaper() {
    db.send({ authors: "asdf" });
  }

  function searchForPaper() {
    fetch(
      `https://api.semanticscholar.org/graph/v1/paper/search?query=${query}&fields=url,authors,abstract,title`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateSearchResults(data.data);
      });
  }

  function displaySearchResults() {
    return searchResults.map((result) => {
      return (
        <PaperCard
          title={result.title}
          authors={result.authors}
          abstract={result.abstract}
          key={result.paperId}
          tags={[]}
        />
      );
    });
  }

  return (
    <div>
      <div className='projectTitle'>hannah's general exam</div>
      <div className='cardContainer'></div>
      <button onClick={addPaper}>add</button>
      <div>
        <input type='text' onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={searchForPaper}>Lookup</button>
      </div>
      <div className='cardContainer'>{displaySearchResults()}</div>
    </div>
  );
}

export default App;
