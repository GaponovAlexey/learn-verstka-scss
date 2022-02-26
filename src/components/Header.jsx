const Headers = () => {
  return (
    <div className='page page-light'>
      <div className='wrapper'>
        <header className='header'>
          <nav>
            <ul className='nav'>
              <li className='nav-item'>Для мужчин</li>
              <li className='nav-item'>Для женщин</li>
              <li className='nav-item'>Для детей</li>
            </ul>
            <img src='./logo.svg' alt='logo' />
            <ul className='nav'>
              <li className='nav-item'>Оплата</li>
              <li className='nav-item'>Доставка</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Headers
