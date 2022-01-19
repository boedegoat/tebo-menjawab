import Image from 'next/image'
import Layout from '../components/Layout'
import UserInput from '../components/UserInput'

export default function Home() {
  return (
    <Layout title='Tebo Menjawab'>
      <header className='text-center'>
        <Image src='/genderuwo.jpg' width={220} height={120} className='rounded-md' />
        <h1 className='text-white font-bold text-2xl sm:text-3xl mt-2'>Tebo Menjawab</h1>
      </header>
      <UserInput />
    </Layout>
  )
}
