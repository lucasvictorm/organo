
import Card from "../Card";
import "./Time.css";

const Time = (props) => {

    return(
        props.colaboradores.length > 0 &&
        
        <div className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="cardsBox">
                {props.colaboradores.map(colaborador => <Card nome={colaborador.nome} key={colaborador.nome} imagem={colaborador.imagem} time={colaborador.time} cargo={colaborador.cargo}/>)}
            </div>
           
        </div> 
        
        
    )
    
}

export default Time;