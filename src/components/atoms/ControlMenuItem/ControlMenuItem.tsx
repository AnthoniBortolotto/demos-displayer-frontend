interface ControlMenuItemProps {
  img: string;
  alt: string;
  imgClass?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

function ControlMenuItem({
  img,
  onClick,
  imgClass = "",
  alt,
  disabled = false,
  loading = false,
}: ControlMenuItemProps) {
  // generate card with image and onClick event
  return (
    <div
      onClick={() => {
        if (!disabled && !loading) onClick();
      }}
      className={`flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <img src={img} alt={alt} className={`${imgClass} w-[20px] h-[20px] ${disabled && "opacity-15"}`} />
    </div>
  );
}

export default ControlMenuItem;
