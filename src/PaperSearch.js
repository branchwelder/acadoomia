import { useState } from "react";
import { db } from "./db";
import PaperCard from "./PaperCard";
import "./styles/PaperSearchModal.css";

function PaperSearch({ list, updateList, setShowSearchModal }) {
  const [query, setQuery] = useState("");
  const [searchResults, updateSearchResults] = useState([]);

  async function addItem(item) {
    console.log(item);
    db.send(item);
  }

  function searchForPaper() {
    if (!query) return;
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
        <div className='searchResult'>
          <PaperCard
            title={result.title}
            authors={result.authors}
            abstract={result.abstract}
            key={result.paperId}
            tags={[]}
          />
          <button onClick={() => addItem(result)}>add</button>
        </div>
      );
    });
  }

  return (
    <div
      className='modal-background'
      onClick={() => {
        // setShowSearchModal(false);
      }}>
      <div className='modal-content'>
        <div>
          <input type='text' onChange={(e) => setQuery(e.target.value)}></input>
          <button onClick={searchForPaper}>Lookup</button>
          <button
            onClick={() => {
              setShowSearchModal(false);
            }}>
            Close
          </button>
        </div>
        <div className='cardContainer'>{displaySearchResults()}</div>
      </div>
    </div>
  );
}

export default PaperSearch;
