interface btnProps{
    children: string;
    onClick: () => void;
    color?: 'primary'|'secondary'|'danger';
}

const Button = ({children, onClick, color='primary'}: btnProps) => {
    return (
        <>
        {<button type="button" className={"btn btn-" + color}
        onClick={onClick}>
            {children}
            </button>}
    </>
    );
}

export default Button