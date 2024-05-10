export default function ListGroupItem(props) {
  const { text } = props;
  const clickHandler = () => console.log(text);
  return (
    <li className="list-group-item" onClick={clickHandler}>
      {text}
    </li>
  );
}
