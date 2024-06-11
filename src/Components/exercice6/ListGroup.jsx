import { useState } from "react";
import ListGroupItem from "./ListGroupItem";

function ListGroup({ items, heading, onSelectItem }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);

  const handleClick = (index, item) => {
    setLastClickedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <ListGroupItem key={index} text={item} highlighted={lastClickedIndex === index}
            onClickHandler={() => handleClick(index, item)}
          />
        ))}
      </ul>
    </>
  );
}
export default ListGroup;