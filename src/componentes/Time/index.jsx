
import Card from "../Card";
import "./Time.css";

const Time = (props) => {

    return(
        props.colaboradores.length > 0 &&
        
        <div className='time' style={{backgroundColor: props.corSecundaria, '--cor-principal': props.corPrimaria}}>
            <h3>{props.nome}</h3>
            <div className="cardsBox">
                {props.colaboradores.map(colaborador => <Card cor={props.corPrimaria} nome={colaborador.nome} key={colaborador.nome} imagem={colaborador.imagem} time={colaborador.time} cargo={colaborador.cargo}/>)}
            </div>
           
        </div> 
        
        
    )
    
}

export default Time;