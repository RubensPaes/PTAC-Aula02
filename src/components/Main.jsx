import { useState } from "react";
export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState(0);
  const [listaContatos, setlistaContatos] = useState([]);
  const registrar = (event) => {
    event.preventDefault();
   alert("deu certo!")
   setlistaContatos([...listaContatos, {
    nomeSalvo: nome,
    telefoneSalvo: telefone
   }])
  };
  console.table(listaContatos);
  const excluir = (event) => {
           
  }
  return (
    <main>
     
      <form action="" onSubmit={registrar}>
        <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name=""
            id=""
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
     
        
        <br />
        <br></br>
        <label htmlFor="telefone">
          Telefone:
          </label>
          <input
            type="tel"
            name=""
            id=""
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />

        
        <button>Salvar</button>
        <br></br>
        <br></br>
    
      </form>
     

      {listaContatos.map((contato, index)=> <div key={index}>
        <p>
          {contato.nomeSalvo}
        </p>
        <p>
          {contato.telefoneSalvo}
        </p>
      </div>)}
    </main>
  );
}
