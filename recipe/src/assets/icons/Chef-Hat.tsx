interface ChefHatProps {    
    className?: string;
}
const ChefHat = ({ className }: ChefHatProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C8.13 2 5 5.13 5 9v6c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V9c0-3.87-3.13-7-7-7zm0 12c-1.66 0-3-1.34-3-3V9c0-1.66 1.34-3 3-3s3 1.34 3 3v4c0 1.66-1.34 3-3 3z" />
      </svg>
    )
}       
export default ChefHat;
