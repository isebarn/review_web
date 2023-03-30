import Image from 'next/image'
import { Field, ErrorMessage } from 'formik';


export default function InputField(props) {
  return (
    <div className="mb-3 text-start">
      <label className="form-label">
        {props.label}
      </label>
      <div className="form-icon-container">
        <Field
          type={props.type}
          className="form-control form-icon-input"
          name={props.name}
          placeholder={props.placeholder}
        />
        <Image width={16} height={16} src={props.icon} className="text-900 fs--1 form-icon" />
      </div>
      <ErrorMessage
        name={props.name}
        component="div"
        className='text-900 fs--1 text-danger'
      />
    </div>
  );
}
