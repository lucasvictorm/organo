import './Aviso.css'

const Aviso = ({texto}) => {
    return(
        <div className='aviso'>
            <h2>{texto}</h2>
        </div>
    )
}

export default Aviso