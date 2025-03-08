import "./DemoCard.css";

interface DemoCardProps {
  title: string;
  buttonText: string;
  onClick: () => void;
}

function DemoCard({ buttonText, onClick, title }: DemoCardProps) {
  return (
    <div className="card" onClick={onClick}>
      <h2 className="">{title}</h2>
      <button className="">{buttonText}</button>
    </div>
  );
}

export default DemoCard;
