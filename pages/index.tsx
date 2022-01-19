import Layout from '../components/Layout'
import UserInput from '../components/UserInput'

export default function Home() {
  return (
    <Layout title='Tebo Menjawab'>
      <header className='text-center flex items-center space-x-4 justify-center'>
        <h1 className='text-white font-bold text-2xl sm:text-3xl mt-10'>Tebo Menjawab</h1>
      </header>
      <UserInput />
    </Layout>
  )
}
