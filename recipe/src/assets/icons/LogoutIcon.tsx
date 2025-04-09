interface LogoutIconProps {
    className?: string;
}
const LogoutIcon = ({ className }: LogoutIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M16 17v-3h-5v-4h5V7l5 5-5 5zm-8-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
</svg>
    );
};
export default LogoutIcon;