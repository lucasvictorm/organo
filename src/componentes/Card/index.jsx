import './Card.css'

const Card = ({nome, cargo, imagem, time, cor}) =>{
    return(
        
        <div style={{'--cor-de-fundo': cor}} className="card">

            <div className="cardCabecalho">
                <img src={imagem} alt="Foto" />
            </div>

            <div className="cardRodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>


        </div>
    )  
} 

export default Card