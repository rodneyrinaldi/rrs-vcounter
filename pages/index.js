import Head from 'next/head'

import styles from '../styles/index.module.css'

export default function Home() {

  return (
    <div className={styles.containerPage}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>vcounter.rrs.net.br</title>
        <meta name="description" content="rodneyrinaldi visitor counter services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Visitor Counter</h1>
      </main>
    </div>
  )
}
