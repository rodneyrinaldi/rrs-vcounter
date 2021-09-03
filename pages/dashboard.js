import Head from 'next/head'
import { connectToDatabase } from '../config/mongodb'

import styles from '../styles/index.module.css'

export default function Dashboard({ data }) {
  const collection = JSON.parse(data)

  return (
    <div className={styles.containerPage}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>rrs.net.br</title>
        <meta name="description" content="rodneyrinaldi services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard Counter</h1>
        {
          collection.map(e => (
            <>
              <div className={styles.line}>
                {e.service} : <span>{e.sequence}</span>
              </div>
            </>)
          )
        }
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db, client } = await connectToDatabase()
  const data = await db.collection('visitorcounter-col')
    .find().toArray()

  return {
    props: {
      data: JSON.stringify(data)
    },
  }
}

