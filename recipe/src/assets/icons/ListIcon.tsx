interface ListIconProps {
    className?: string;
}
const ListIcon = ({ className }: ListIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
</svg>
    );
};
export default ListIcon;