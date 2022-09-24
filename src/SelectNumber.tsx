export default function SelectNumber(props: SelectNumberProps) {
  const arr = Array(props.maxValue).fill(0);
  return (
    <select
      onChange={(e) => {
        console.log(e.currentTarget.value);
        props.onSelected(parseInt(e.target.value, 10));
      }}
    >
      {arr.map((_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
}

interface SelectNumberProps {
  maxValue: number;
  onSelected(value: number): void;
}
