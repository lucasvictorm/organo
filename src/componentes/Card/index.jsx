import './Card.css'

const Card = ({nome, cargo, imagem, time}) =>{
    return(
        <div className="card">

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