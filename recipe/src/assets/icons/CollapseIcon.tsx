interface CollapseIconProps {
    className?: string;
}
const CollapseIcon = ({ className }: CollapseIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M19 13H5v-2h14v2zm0-6H5v2h14V7zm0 12H5v-2h14v2z" />
</svg>
    );
};
export default CollapseIcon;