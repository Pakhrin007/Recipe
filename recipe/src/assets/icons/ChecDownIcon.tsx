interface ChevDownIconProps {
    className?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties; // Add support for the style prop
  }
  
  const ChevDownIcon = ({ className, width, height, style }: ChevDownIconProps) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style} // Apply the style prop to the SVG element
      >
        <path
          d="M12 6.40039L8 10.4004L4 6.40039"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default ChevDownIcon;