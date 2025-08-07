import '../styles/Backdrop.css';

interface BackdropProps {
  onClick: () => void;
  isOpen: boolean;
}

export function Backdrop({ onClick, isOpen }: BackdropProps) {
  return isOpen ? (
    <div 
      className="backdrop-overlay"
      onClick={(e) => {
        if(e.target === e.currentTarget) {
          onClick();
        }
      }}
    />
  ) : null;
}