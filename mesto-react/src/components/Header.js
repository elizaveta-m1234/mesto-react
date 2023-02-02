import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} className="header__logo" alt="Логотип" />
    </header>
  )
}

export default Header