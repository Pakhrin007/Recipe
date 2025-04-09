// src/assets/icons/StarIcon.tsx
interface StarIconProps {
    className?: string;
    onClick?: () => void;
  }
  
  export const StarIcon = ({ className, onClick }: StarIconProps) => (
    <svg
      className={`text-black ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      onClick={onClick}
    >
      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
    </svg>
  );