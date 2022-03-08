// import { useState } from "react";
import PaperCard from "./PaperCard";

function ReadingList({ list, updateList }) {
  return (
    <div className='readingListContainer'>
      {list.map((item) => {
        return (
          <PaperCard
            title={item.title}
            authors={item.authors}
            abstract={item.abstract}
            key={item.paperId}
            tags={[]}
          />
        );
      })}
    </div>
  );
}

export default ReadingList;
