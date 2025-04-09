interface LoverIconProps { 
    className?: string;
}
    const LoverIcon = ({ className }: LoverIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm4 0h2v-2h-2v2zm4 0h2v-4h-2v4z" />
  <path d="M12 2l2 2-2 2" /> 
  <path d="M12 2l-2 2 2 2" /> 
</svg>
    )
}   
export default LoverIcon;

