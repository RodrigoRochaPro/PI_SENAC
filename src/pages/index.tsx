import Image from 'next/image'
import Layout from '../components/template/Layout'
import DHL from '../../public/logo-dhl-256.png'
import SHELL from '../../public/logo-shell-256.png'
import IPIRANGA from '../../public/logo-ipiranga-256.png'
import BR from '../../public/PostoBR.jpg'
export default function Home() {
  return (
    <Layout titulo="FuelSeachTool" subtitulo="Encontre os melhores postos de combustível perto de você!">
      <div className='flex w-16 md:w-32 lg:w-48'>
        <Image
          src={DHL}
          alt="Logo"
        />
        <Image
          src={SHELL}
          alt="Logo"
        />
        <Image
          src={IPIRANGA}
          alt="Logo"
        />
        <Image
          src={BR}
          alt="Logo"
        />
      </div>
    </Layout>
  )
}
