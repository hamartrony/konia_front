import "./button.css";
interface Props {
  func: () => void;
  title: string;
}

export default function Button({ func, title }: Props) {
  return (
    <div>
      <button onClick={func}>{title}</button>
    </div>
  );
}
