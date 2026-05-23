import styles from '../styles/home.module.css'
import homeImg from '../assets/images/image-home.svg'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <section className={styles.homeSection}>
      <div>Home</div>
      <Link to={'/example'}>
        Example
      </Link>
      {/* <picture>
        <img src={homeImg} alt="Me" />
      </picture> */}
    </section>
  )
}
