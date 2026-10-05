function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div className="produto">
      <div className="produto-conteudo">
        <span className={disponivel ? "disponivel" : "indisponivel"}>
          {disponivel ? "Disponível" : "Indisponível"}
        </span>

        <h3>{nome}</h3>

        <p>{descricao}</p>

        <strong>R$ {preco.toFixed(2)}</strong>

        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Produto;

