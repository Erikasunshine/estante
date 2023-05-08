import styles from "./Lidos.css";
import Menu from "../../Components/Menu/Menu";
import Estante from "../../Components/Estante/Estante";
import CardAvaliacao from "../../Components/CardAvaliacao/CardAvaliacao";
import Header from "../../Components/Header/Header";
function Lidos() {
    return (
        <section className={styles.Lidos}>
        <h1>Lidos</h1>
        </section>
    );

    <div className="Lidos">

      <Header />

      <hr />

      <h2>Minha Estante</h2>

      <div className='principal'>
        <Menu />
        <Estante />
      </div>
      <h2>Ultimas Avaliacoes</h2>
      <div className='principal'>
        <CardAvaliacao titulo="Titulo da Resenha" resenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />

        <CardAvaliacao titulo="Titulo da Resenha" resenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      </div>
    </div>
}

export default Lidos;
