interface ChevronLeftIconProps {
    className?: string
    width?: number
    height?: number
  }
  
  const ChevronLeftIcon = ({ className, width = 16, height = 16 }: ChevronLeftIconProps) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4.40039L6 8.40039L10 12.4004"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
  export default ChevronLeftIcon
  