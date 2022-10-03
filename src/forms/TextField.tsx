import { Field, ErrorMessage } from 'formik';

export default function TextField(props: textFieldProps) {
  return (
    <>
      <Field
        type={props.type}
        name={props.field}
        id={props.field}
        className={props.classes}
        placeholder={props.placeholder}
        required={props.required}
      />
      <label htmlFor={props.field}>{props.displayName}</label>
      <ErrorMessage name={props.field}>
        {(msg) => <div className='input_error'>{msg}</div>}
      </ErrorMessage>
    </>
  );
}

interface textFieldProps {
  field: string;
  displayName: string;
  type: 'text' | 'password' | 'email';
  classes?: string;
  placeholder?: string;
  required?: boolean;
}

TextField.defaultProps = {
  type: 'text',
  classes: 'form-control',
  required: false,
};
