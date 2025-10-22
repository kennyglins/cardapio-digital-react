import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

const Cards = ({ numCategoriaSelecionada }) => {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
  const pratos = itensCategoria[numCategoriaSelecionada];

  return (
    <div className="cards">
      {pratos.map((prato) => (
        <Card
          titulo={prato.nome}
          descricao={prato.descricao}
          preco={prato.preco}
          imagem={prato.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
