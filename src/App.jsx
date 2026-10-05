import "./App.css";

import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from "./components/Produto";

function App() {
  return (
    <div className="app">

      <Titulo />

      <section>
        <h2>Alunos</h2>

        <div className="alunos">
          <Aluno
            nome="Carlos"
            turma="Desenvolvimento de Sistemas"
          />

          <Aluno
            nome="Ana"
            turma="Desenvolvimento de Sistemas"
          />

          <Aluno
            nome="Pedro"
            turma="Desenvolvimento de Sistemas"
          />
        </div>
      </section>

      <section>
        <h2>Notas</h2>

        <div className="notas">
          <Nota
            disciplina="React"
            nota={8.5}
          />

          <Nota
            disciplina="JavaScript"
            nota={9}
          />

          <Nota
            disciplina="HTML e CSS"
            nota={10}
          />
        </div>
      </section>

      <section>
        <h2>Produtos</h2>

        <div className="produtos">

          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse Gamer"
            descricao="Mouse sem fio para jogos"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset"
            descricao="Headset com microfone e som estéreo"
            preco={180}
            disponivel={true}
          />

          <Produto
            nome="Monitor"
            descricao="Monitor Full HD de 24 polegadas"
            preco={850}
            disponivel={false}
          />

        </div>
      </section>

    </div>
  );
}

export default App;

