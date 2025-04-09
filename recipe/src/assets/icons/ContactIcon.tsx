interface ContactIconProps {
    className?: string;
}
const ContactIcon = ({ className }: ContactIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5v-2h14v2zm0-5H5V9h14v4z" />
</svg>
    );
};
export default ContactIcon;
