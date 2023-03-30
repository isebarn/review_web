import Image from 'next/image'

export default function Button(props) {
  return (
    <button type={props.type} className={`${props.className} btn w-100`}>
      <span className="fab fa-facebook text-primary me-2 fs--1"></span>
      {props.icon && <Image width={25} height={25} src={props.icon} className="me-2" />}
      {props.btnTxt}
    </button>
  );
}
