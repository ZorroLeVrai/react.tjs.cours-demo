import ListGroupItem from "./ListGroupItem";

const items = ['New York', 'Tokyo', 'Londres', 'Paris'];

function ListGroup() {
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>Aucun élément trouvé</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <ListGroupItem key={index} text={item} />
        ))}
      </ul>
    </>
  );
}
export default ListGroup;