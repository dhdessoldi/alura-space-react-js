import styles from "./Rodape.module.scss";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <ul className={styles.rodape__icones}>
        <li>
          <a href="https://facebook.com">
            <img src={facebook} alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <img src={twitter} alt="Ícone do Twitter" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <img src={instagram} alt="Ícone do Instagram" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Daniel Hermano Dessoldi</p>
    </footer>
  );
}
