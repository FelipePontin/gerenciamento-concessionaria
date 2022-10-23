import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header_logo'>
                <div className='header_divisao'></div>
                <span className='header_texto'>Gerenciamento de concessionária</span>
            </div>
            <nav className='header_navegacao'>
                <ul className='header_itens'>
                    <Link to='/'><li className='header_item'>Estoque</li></Link>
                    <li className='header_item'>Clientes</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
