const Heading = () => {
  return (
    <div className='heading'>
      <h2>Best Website builders in the US</h2>
      <hr/>
      <div className='filter-bar'>
        <div className="left">
          <div>
            <img src="/images/body/check-outline.svg" alt="check"/>
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div>
            <img src="/images/body/info.svg" alt="check"/>
            <p>Advertising Disclosure</p>
          </div>
        </div>

        <div className="right">
          <p>Top Relevant</p>
          <img src='/images/body/down.svg' alt='down'/>
        </div>

      </div>
      <hr/>
    </div>
  )
}

export default Heading