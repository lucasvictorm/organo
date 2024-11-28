
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';
import Aviso from './componentes/Aviso';
import Rodape from './componentes/Rodape';

function App() {
  

  const times = [
    {nome: "Programação",
      cor_primaria: "#57C278",
      cor_secundaria:"#D9F7E9"
    },
    {nome: "Front End",
      cor_primaria: "#82CFFA",
      cor_secundaria:"#E8F8FF"
    },
    {nome: "Data Science",
      cor_primaria: "#A6D157",
      cor_secundaria:"#F0F8E2"
    },
    {nome: "DevOps",
      cor_primaria: "#E06B69",
      cor_secundaria:"#FDE7E8"
    },
    {nome: "UX e Design",
      cor_primaria: "#DB6EBF",
      cor_secundaria:"#FAE9F5"
    },
    {nome: "Mobile",
      cor_primaria: "#FFBA05",
      cor_secundaria:"#FFF5D9"
    },
    {nome: "Inovação e Gestão",
      cor_primaria: "#FF8A29",
      cor_secundaria:"#FFEEDF"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    
  }


  return (
    
    <div className="App">
      <Banner/>
      
      <Formulario aoCadastrar={colaborador => aoColaboradorCadastrado(colaborador)} listaTimes={times.map(time => time.nome)}/>
      
      {
      colaboradores.length > 0 ?
      
      times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.cor_primaria} corSecundaria={time.cor_secundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)
      : <Aviso texto='Sem colaboradores'/>
      }
        
      
      <Rodape/>

    </div>
  );
}

export default App;
