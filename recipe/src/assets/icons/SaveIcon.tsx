interface SaveIconProps {
    className?: string;
}

export const SaveIcon = ({ className }: SaveIconProps) => (
    <svg className={` text-gray-600 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
  </svg>
);

