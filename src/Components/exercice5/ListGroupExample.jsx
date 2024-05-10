import ListGroup from "./ListGroup";

const items = ["New York", "Tokyo", "London", "Paris"];
export default function ListGroupExample() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
