import CartWidget from '../cartwidget/cartwidget'
import './navbar.css'

const Navbar = ( {handleCategoria} ) => {

    const cambiarCategoria = (categoria) => {
        handleCategoria('categoria')
    }

    return (
        <div className= 'navbar'>
            <h1 onClick={() => cambiarCategoria ('todos')}>MATE A MATE</h1>
            <p onClick={() => cambiarCategoria ('electronics')}>MATES</p>
            <p onClick={() => cambiarCategoria ('jewelery')}>TERMOS</p>
            <CartWidget />
        </div>
    )
}

export default Navbar