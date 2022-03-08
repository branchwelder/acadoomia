import "./styles/App.css";
import PaperSearch from "./PaperSearch";
import ReadingList from "./ReadingList";
import { db } from "./db";
import { useState, useEffect } from "react";

function App() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [list, updateList] = useState([]);

  useEffect(() => {
    // let rl = [];
    // db.getCollection("generals").then((docs) => {
    //   docs.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //     rl.push({ id: doc.id, info: doc.data() });
    //   });
    //   updateList(rl);
    // });
  }, []);

  return (
    <div>
      <div className='projectTitle'>hannah's general exam</div>
      <button onClick={() => setShowSearchModal(true)}>Search for Paper</button>
      <ReadingList list={list} updateList={updateList} />
      {showSearchModal && (
        <PaperSearch
          list={list}
          updateList={updateList}
          setShowSearchModal={setShowSearchModal}
        />
      )}
    </div>
  );
}

export default App;
