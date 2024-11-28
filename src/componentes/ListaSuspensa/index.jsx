import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    
    return (
        <div className="lista">
            <label>Time</label>
            <select onChange={(event) => props.aoAlterar(event.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value="" disabled selected></option>
                {props.lista.map(item => <option key={item}>{item}</option>
            )}
            
            </select>
        </div>
        
    )
}

export default ListaSuspensa;