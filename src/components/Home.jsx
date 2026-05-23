import styles from '../styles/home.module.css'
import homeImg from '../assets/images/image-home.svg'

export const Home = () => {
  return (
    <section className={styles.homeSection}>
      <div>Home</div>
      <picture>
        <img src={homeImg} alt="Me" />
      </picture>
    </section>
  )
}
