import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <div className='wrapper'>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='pt-6'>{children}</main>
    </div>
  )
}
