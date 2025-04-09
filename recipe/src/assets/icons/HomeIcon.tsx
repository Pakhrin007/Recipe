interface HomeIconProps {
    className?: string;
}
const HomeIcon = ({ className }: HomeIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M12 2L2 12v8h8v-6h4v6h8v-8l-10-10zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
</svg>
    );
};
export default HomeIcon;
