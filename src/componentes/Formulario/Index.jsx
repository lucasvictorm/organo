import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"


const Formulario = (props) =>{

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");


    const aoSalvar = (event) => {
        event.preventDefault();
        const colaborador ={
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        }

        props.aoCadastrar(colaborador)

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return(
        <div className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <Input label="Nome" 
                obrigatorio={true} 
                placeholder="Digite seu nome" 
                valor={nome}
                aoAlterar={valor => setNome(valor)}
                />

                <Input label="Cargo" obrigatorio={true}  placeholder="Digite seu cargo" valor={cargo}
                aoAlterar={valor => setCargo(valor)}/>

                <Input label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem}
                aoAlterar={valor => setImagem(valor)}/>

                <ListaSuspensa obrigatorio={true}  lista={props.listaTimes}
                valor={time}
                aoAlterar={valor => setTime(valor)}
                />

                <Botao>
                    Criar card
                </Botao>

            </form>

        </div>

    );
}

export default Formulario;