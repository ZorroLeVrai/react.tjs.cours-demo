import { useState } from "react";

export default function ListGroupItem(props) {
  const { text } = props;
  const [highlighted, setHighlighted] = useState(false);
  const handleClick = () => setHighlighted(!highlighted);
  let classNameContent = "list-group-item";
  if (highlighted) {
    classNameContent += " active";
  }
  
  return (
    <li className={classNameContent} onClick={handleClick}>
      {text}
    </li>
  );
}
