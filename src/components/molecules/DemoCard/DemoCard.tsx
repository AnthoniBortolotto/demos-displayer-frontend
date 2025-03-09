import "./DemoCard.css";

interface DemoCardProps {
  title: string;
  buttonText: string;
  onClick: () => void;
}

function DemoCard({ buttonText, onClick, title }: DemoCardProps) {
  return (
    <div className="card">
      <h2 className="pb-4">{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}

export default DemoCard;
