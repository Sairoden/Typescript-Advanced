interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
}

function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </p>
  );
}
export default Input;
