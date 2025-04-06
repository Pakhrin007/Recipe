interface AlertIconProps {
    className?: string;
}

export const AlertIcon = ({ className }: AlertIconProps) => (
    <svg className={` text-gray-600 ${className}`} fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2L1 21h22L12 2zm0 4.5l8.5 15h-17l8.5-15zm0 2.5a1 1 0 00-1 1v5a1 1 0 002 0v-5a1 1 0 00-1-1zm0 9a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
);


