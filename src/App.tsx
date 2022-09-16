import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/createAdBanner';

import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>Duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl='/image1.png' title="lol" adsCount={5}/>
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App