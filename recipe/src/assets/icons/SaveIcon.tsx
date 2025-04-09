interface SaveIconProps {
    className?: string;
    onClick?: () => void;
}

export const SaveIcon = ({ className, onClick }: SaveIconProps) => (
    <svg className={` text-black ${className}`} fill="currentColor" viewBox="0 0 24 24" onClick={onClick}>
    <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />

  </svg>
);

