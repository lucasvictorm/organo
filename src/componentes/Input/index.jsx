import './Input.css';



const Input = (props) => {
    const aoMudar = (event) => {
        props.aoAlterar(event.target.value);
    }
    return (
        <div className='input'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoMudar} type="text" required={props.obrigatorio} id={props.label} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;