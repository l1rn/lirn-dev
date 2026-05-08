import './Button.scss'
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

function Button({ children, onClick, variant }: ButtonProps) {
    return (
        <>
            <button className={`btn ${variant}`} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default Button;