import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

import styles from "./styles.module.scss"

export function Header() {
  const CurrentDate = format(new Date(), "EEEE, d MMMM", { locale: ptBR })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"></img>

      <p>
        O melhor player de Podcast desenvolvido por
        <a href="https://github.com/LucasRafa13">Lucas Lima</a>
      </p>

      <span>{CurrentDate}</span>
    </header>
  )
}
