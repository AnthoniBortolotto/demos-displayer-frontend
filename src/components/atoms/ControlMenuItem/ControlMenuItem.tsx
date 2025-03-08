interface ControlMenuItemProps {
  img: string;
  alt: string;
  imgClass?: string;
  onClick: () => void;
}

function ControlMenuItem({
  img,
  onClick,
  imgClass = "",
  alt,
}: ControlMenuItemProps) {
  // generate card with image and onClick event
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg cursor-pointer">
      <img src={img} alt={alt} className={`${imgClass} w-[20px] h-[20px]`} />
    </div>
  );
}

export default ControlMenuItem;
