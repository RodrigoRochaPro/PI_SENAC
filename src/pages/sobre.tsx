import Image from 'next/image'
import Layout from '../components/template/Layout'
import posto from '../../public/imagem_rota.jpg'

export default function Sobre() {
  return (
    <Layout titulo="Sobre a FuelSearchTool" 
      subtitulo="Conheça nossos objetivos e principais perceiros">
      <p> Temos o objetivo de trazer para o consumidor uma melhor experiência no abastecimento, 
        ao apresentar uma comparação direta dos preços na sua região de forma confiável, eficiente e rápida. 
        Adicionalmente, levando em consideração o sucesso de aplicativos no exterior e as dificuldades enfrentadas por aplicativos nativos, 
        a Solução busca trazer melhorias em relação à velocidade de pesquisa, precisão nos preços cadastrados e um campo ideal de feedback dos postos de combustível.</p>
        <div className='hidden md:block md:w-1/2 lg:w-2/3 items-center justify-center'>
        <Image 
                    src= {posto}
                    alt="Imagem da Tela de Autenticação"
                    className="h-full w-full object-cover" />
        </div>
    </Layout>
  )
}
