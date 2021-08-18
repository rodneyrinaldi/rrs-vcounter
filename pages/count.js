import Head from 'next/head'
import { useRouter } from 'next/router'
import { connectToDatabase } from '../config/mongodb'

import styles from '../styles/index.module.css'

export default function Home({ sequence }) {
  const router = useRouter()
  const { service } = router.query

  const number = sequence.toString().padStart(6, "0")
  const counter = [number.slice(0, 3), '.', number.slice(3)].join('')

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="Visitor Counter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {counter}
        </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { service } = context.query

  const serviceName = 'oab-rodneyrinaldi'

  const { db, client } = await connectToDatabase()
  const data = await db.collection('visitorcounter-col')
    .findOneAndUpdate(
      { service: serviceName },
      { $inc: { sequence: 1 } }
    )
  const { sequence } = await db.collection('visitorcounter-col')
    .findOne({ 'service': serviceName })

  return {
    props: {
      sequence: '' + sequence
    },
  }
}

