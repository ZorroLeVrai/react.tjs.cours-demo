const items = ['New York', 'Tokyo', 'Londres', 'Paris'];

function ListGroup() {
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;