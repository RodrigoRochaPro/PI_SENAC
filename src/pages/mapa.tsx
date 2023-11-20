import Layout from '@/components/template/Layout';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Ajustes() {

  const containerStyle = {
    width: '100%',
    heigth: '100%',
  };

  const center = {
    lat: -23.64452530835869,
    lng: -46.70181562460651
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC7vZ10Uj2pbKDOHHilDrZny4H-3OpcUzo"
  })

  return (
    <Layout titulo='Mapa' subtitulo='Encontre o posto mais perto de voce e com o melhor preço'>
      <div className='h-screen w-full object-cover flex pb-32'>
        {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}>
          </GoogleMap>
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
    </Layout>
  )
}

