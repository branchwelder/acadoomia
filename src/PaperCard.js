import Tag from "./Tag";
import { useState } from "react";

function PaperCard({ title, authors, abstract, tags }) {
  let [expanded, setExpanded] = useState(false);

  return (
    <div className='card'>
      <div className='tagContainer'>
        {tags.map((tag) => {
          return <Tag tagText={tag} />;
        })}
      </div>
      <div>
        <b>{title}</b>
      </div>
      <div className='authorList'>
        <i>
          {authors.map((author) => {
            return `${author.name}, `;
          })}
        </i>
      </div>
      <div>
        <span>
          <b>Abstract</b>
        </span>
        <span className='toggleAbstract' onClick={() => setExpanded(!expanded)}>
          <i>{expanded ? "hide" : "show"}</i>
        </span>
      </div>
      {expanded ? abstract : ""}
    </div>
  );
}

export default PaperCard;
