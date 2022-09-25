export default function Button(props: buttonProps) {
  return (
    <button
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
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'lg';
  onClick?: () => void;
}
