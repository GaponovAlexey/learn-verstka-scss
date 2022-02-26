const HomePage = () => {
  return (
    <div className='wrapper'>
      <div className='main'>
        <div classNam='sale'>
          <div className='sale-description'>Зимняя распродажа</div>
          <div className='sale-title'>СКИДКИ ДО 90%</div>
          <button className='sale-button'>СМОТРЕТЬ МОДЕЛИ</button>
        </div>
        <div className='box'>
          <img src='/bot.png' alt='bot' />
          <div className='box-price'>
            <strike className='box-price-old'>9900</strike>
            <p className='box-price-new'>1900</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
