import Head from 'next/head'
import CounterNumber from '../component/counter'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Visitor Counter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <CounterNumber />
        </h1>
      </main>
    </div>
  )
}
