interface ReportIconProps { 
    className?: string;
}
const ReportIcon = ({ className }: ReportIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 6h5v5h-5zm-5 0h5v5h-5z" />
      </svg>    
    )
}   
export default ReportIcon;
