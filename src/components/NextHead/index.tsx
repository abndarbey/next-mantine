import Head from 'next/head'

type NextHeadProps = {
    title: string
    description?: string
}

export default function NextHead(props: NextHeadProps) {
  const title = props.title + ' | ' + 'Nexport'
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Connect, Trade, Track" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
