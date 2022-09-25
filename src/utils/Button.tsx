export default function Button(props: buttonProps) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`btn btn-${props.color} ${
        props.size ? `btn-${props.size}` : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'lg';
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
}

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  disabled: false,
};
