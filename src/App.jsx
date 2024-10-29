import { useEffect, useState } from "react";
import './globals.css'
export default function App() {
  const [professores, setProfessores] = useState([]);
  const [mostrarTabela, setMostrarTabela] = useState(false);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await fetch("http://localhost:3000/profesores");
        const data = await response.json();
        console.log(data);
        setProfessores(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    buscarDados();
  }, []);

  return (
    <div>
    <h1>Lista de Professores</h1>
    <button onClick={() => setMostrarTabela(!mostrarTabela)}>
      {mostrarTabela ? "Esconder Professores" : "Mostrar Professores"}
    </button>
    {mostrarTabela && (
      <table>
        <thead>
          <tr>
            <th>Chave</th>
        <th>Nome</th>
        <th>Matéria</th>
        <th>DatadeIniicio</th>
        <th>curso</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr key={professor.id}>
            <td>{professor.chave}</td>
          <td>{professor.nomedoprofesor}</td>
          <td>{professor.materia}</td>
          <td>{professor.datadeinicio}</td>
          <td>{professor.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
}
