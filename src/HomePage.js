import PaperSearch from "./PaperSearch";
import ReadingList from "./ReadingList";
import { db } from "./setup";
import { useState, useEffect } from "react";
import "./styles/App.css";

function HomePage() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [list, updateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let rl = [];
      const data = await db.getCollection("generals");
      data.forEach((doc) => {
        rl.push(doc.data());
      });
      updateList(rl);
    };
    fetchData();
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

export default HomePage;
