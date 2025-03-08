interface FrameCardProps {
  html: string;
}

function FrameCard({ html }: FrameCardProps) {
  return (

    <div className="border-2 border-gray-300 rounded-md overflow-hidden h-full">
      <iframe srcDoc={html} title="frame" />
    </div>
  );
}

export default FrameCard;
