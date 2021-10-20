import './App.css'
import { Tile } from './components/Tile'
function App() {
  return (
    <div id='app'>
      <Tile
        img='https://cdn.vox-cdn.com/thumbor/d1OhyRkDvFdftKk63CcDAsZVzzQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10235609/pepperoni.jpeg'
        title='Pepperoni Pizza'
        cont='Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.'
        cal={265}
        dat='12/10/31'
        temp='53.8 °C'
        now='23.90'
        pre='29.90'
      />
      <Tile
        img='https://static.toiimg.com/thumb/71330969.cms?width=1200&height=900'
        title='Tortellini'
        cont='Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.'
        cal={270}
        dat='18/4/41'
        temp='42.4 °C'
        now='17.90'
        pre='22.90'
      />
      <Tile
        img='https://www.foodnetwork.com/content/dam/images/food/video/9/93/936/9365/9365700.jpg'
        title='Strawberry Cake'
        cont='Three layer strawberry dessert is not onlu beautiful looking, but also delicious! Perfect dessert for spring and summer.'
        cal={346}
        dat='6/14/49'
        temp='13.9 °C'
        now='13.90'
        pre='18.90'
      />
    </div>
  )
}

export default App
