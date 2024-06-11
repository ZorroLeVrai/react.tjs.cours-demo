import { useState } from "react";
import ListGroupItem from "./ListGroupItem";

const items = ['New York', 'Tokyo', 'Londres', 'Paris'];

function ListGroup() {
  const [lastClickedIndex, setLastClickedIndex] = useState(-1);

  function afficherElementListe(item, index){
    const isHighlighted = lastClickedIndex === index;
    const handleClick = () => setLastClickedIndex(index);

    return (
      <ListGroupItem key={index} text={item} highlighted={isHighlighted}
        onClickHandler={handleClick} />
    );
  };

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>Aucun élément trouvé</p>}
      <ul className="list-group">
        {items.map(afficherElementListe)}
      </ul>
    </>
  );
}

export default ListGroup;