import type { InputProps } from '../types/type.props';

const Input = ({id, name, onChange, value}: InputProps) => {
  const inputStyle = 'text-[#CDD5E0] text-base bg-transparent outline-none w-full'; 
  return (
    <label htmlFor={id} className='w-full'>
      <input className={inputStyle} type="text" id={id} name={name} onChange={onChange} value={value} placeholder='Enter a username' />
    </label>
  )
}

export default Input
