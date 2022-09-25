export default function Button(props: buttonProps) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  className: string;
  size?: 'sm' | 'lg';
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
}

Button.defaultProps = {
  className: 'btn btn-primary',
  type: 'button',
  disabled: false,
};
