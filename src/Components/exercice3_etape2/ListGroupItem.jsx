import { useState } from "react";

export default function ListGroupItem(props) {
  const { text } = props;
  const [highlighted, setHighlighted] = useState(false);
  const classNameContent = highlighted ? "list-group-item active" : "list-group-item";
  return (
    <li className={classNameContent} onClick={() => setHighlighted(!highlighted)}>
      {text}
    </li>
  );
}
