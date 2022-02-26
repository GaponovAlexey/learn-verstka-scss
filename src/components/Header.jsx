const Headers = () => {
  return (
    <div className='page page-light'>
      <div className='wrapper'>
        <header className='header'>
          <nav>
            <ul className='nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  Для мужчин
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  Для женщин
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  Для детей
                </a>
              </li>
            </ul>
          </nav>
          <img src='./logo.svg' alt='logo' />
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Оплата
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#!'>
                Доставка
              </a>
            </li>
          </ul>
          <div>5</div>
        </header>
      </div>
    </div>
  )
}

export default Headers
