import { useState } from "react";
import ListGroupItem from "./ListGroupItem";

function ListGroup({ items, heading }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);

  return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 && <p>No item found</p>}
    <ul className="list-group">
      {items.map((item, index) => (
        <ListGroupItem key={index} text={item} highlighted={lastClickedIndex === index}
          onClickHandler={() => setLastClickedIndex(index)} />
      ))}
    </ul>
  </>
  );
}
export default ListGroup;