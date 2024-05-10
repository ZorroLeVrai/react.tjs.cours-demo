import ListGroup from "./ListGroup";

const items = ["New York", "Tokyo", "London", "Paris"];
export default function ListGroupExample() {
  const handleSelectedItem = (item) => console.log(item);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem} />
    </div>
  );
}
