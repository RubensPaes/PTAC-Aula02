import { useState } from "react";
export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  return (
    <main>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name=""
            id=""
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <button>Cadastrar</button>
        {nome}
        <br />
        <br></br>
        <label>
          Telefone:
          <input
            type="tel"
            name=""
            id=""
            onChange={(event) => setTelefone(event.target.value)}
          />
        </label>
        <button>Cadastrar</button>
        {telefone}
      </form>
    </main>
  );
}
