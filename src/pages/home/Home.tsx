import React from 'react'
import useAuth from '../../hooks/useAuth';
import styles from './home.module.css';

const Home: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <button className={styles.logoutBtn} onClick={handleLogout}>log out</button>
        </nav>
      </header>
      <h1>Home</h1>
    </div>
  )
}

export default Home