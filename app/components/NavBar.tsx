import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">RushReceptenApp</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recepten">Recepten</Link>
        </li>
        <li>
          <Link href="/over">Over</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
