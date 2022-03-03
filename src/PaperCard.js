import Tag from "./Tag";

function PaperCard() {
  return (
    <div className='card'>
      <div className='tagContainer'>
        <Tag tagText='craft' />
        <Tag tagText='engineering interactive systems' />
      </div>
      <div>
        <b>
          Tools, Tricks, and Hacks: Exploring Novel Digital Fabrication
          Workflows on #PlotterTwitter
        </b>
      </div>
      <div className='authorList'>
        <i>Hannah Twigg-Smith, Jasper Tran O'Leary, Nadya Peek</i>
      </div>
      <div>
        This is the abstract blah blah Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  );
}

export default PaperCard;
