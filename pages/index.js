import Head from 'next/head'

import styles from '../styles/index.module.css'

export default function Home() {

  return (
    <div className={styles.containerPage}>
      <Head>
        <title>Dashboard Counter</title>
        <meta name="description" content="Visitor Counter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Visitor Counter</h1>
      </main>
    </div>
  )
}
