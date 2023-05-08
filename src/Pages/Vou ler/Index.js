import CardAvaliacao from "../../Components/CardAvaliacao";
import Header from "../../Components/Header/Header";
import styles from "../Lidos/Lidos";
function Vouler() {
    return (
        <>
        <Header/>
        <CardAvaliacao>
            <section className={styles.Vouler}>
                <h1>Vou ler</h1>
                </section>
        </CardAvaliacao>
        </>
    );
}

export default Vouler;