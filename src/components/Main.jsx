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
          {nome}
      
        <button>Cadastrar</button>
        
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
       
        <button>Cadastrar</button>
        {telefone}

        
        <button>Salvar</button>
        <br></br>
        <br></br>
      <label htmlFor="lista">Lista de contatos</label>
        <input
            type=""
            name=""
            id=""
            value={listaContatos}
            onChange={(event) => setlistaContatos(event.target.value)}
          />
      </form>
    </main>
  );
}
