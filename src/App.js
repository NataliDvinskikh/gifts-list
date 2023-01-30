
import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [gifts,setGifts] = useState(data);

  const removeGift = (id) => {
   let newGifts = gifts.filter(gift => gift.id !== id);
   setGifts(newGifts);
}

  return (
    <div>
      <div className='container'>
        <h1> List of {gifts.length} wishes</h1>
      </div>
      {gifts.map((element => {
        const {id,gift,image} = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id}-{gift}</h2>
            </div>
            <div className='container'>
              <img src ={image} width = "300px" alt="phot"/>
            </div>
            <div className='container'>
              <button onClick={() => removeGift (id)}>REMOVE</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
      <button onClick={()=> setGifts([])}>DELETE ALL</button>
      </div>
    </div>
  );
}


export default App;






// const removeGift = (id) => {
//   // console.log(id) проверяем, что находится по id. Т.е. если мы тут id прописали nClick={() => removeGift (id), то и здесь обязательно const removeGift = (id) =>
//      let newGifts = gifts.filter(gift => gift.id !== id); //id по которому мы кликаем не равно этому id то все поместить в новый массив, т.Е. если у товара 1 id=1, тогда не добавляем в новый массив
//      setGifts(newGifts);
//   }
