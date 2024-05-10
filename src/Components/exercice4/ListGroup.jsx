import { useState } from "react";
import ListGroupItem from "./ListGroupItem";

const items = ['New York', 'Tokyo', 'Londres', 'Paris'];

function ListGroup() {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>Aucun élément trouvé</p>}
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