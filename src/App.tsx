import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center m-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>Duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="">
          <img src="/image1.png" alt="" />
        </a>
        <a href="">
          <img src="/image2.png" alt="" />
        </a>
        <a href="">
          <img src="/image3.png" alt="" />
        </a>
        <a href="">
          <img src="/image4.png" alt="" />
        </a>
        <a href="">
          <img src="/image5.png" alt="" />
        </a>
        <a href="">
          <img src="/image6.png" alt="" />
        </a>
        <a href="">
          <img src="/image7.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
