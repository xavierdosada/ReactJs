import CardtWidget from '../components/CardtWidget'

const Navbar = () => {
  return (
    <div>
        <button className='navBar_button'>Menú</button>
        <button className='navBar_button'>Productos</button>
        <button className='navBar_button'>Sobre Nosotros</button>
        <button className='navBar_button'>Preguntas Frecuentes</button>
        <CardtWidget/> 
    </div>
  )
}

export default Navbar