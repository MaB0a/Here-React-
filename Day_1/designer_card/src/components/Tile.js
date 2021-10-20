import './tile.css'
function Tile({img, title, cont, cal, dat, temp, now, pre }) {
  return (
    <div id='tile' className='tile'>
      <img id='img' src={img}></img>
      <div id='data'>
        <div id='header'>
          <div>{title}</div> <div>circ.</div>
        </div>
        <div id='content'>
          {cont}
        </div>
        <div id='details'>
          <div>{cal} cal</div>
          <div>P/F/C:{dat}</div>
          <div>{temp}</div>
        </div>
      </div>
      <div id='price'>
        <div>
          <div id='pricing'>
            <div id='now'>${now}</div>
            <div id='prev'>${pre}</div>
          </div>
          <button id='order'>ORDER</button>
        </div>
      </div>
    </div>
  )
}

export { Tile }
