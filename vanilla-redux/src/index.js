import { createStore } from 'redux';
const counter = document.querySelector('#counter')
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')

const reducer = (count = 0, action) => {
  switch(action.type)
  {
    case "ADD" : {
      count = count += 1
      return count
    }
    case "MINUS" : {
      count = count -= 1
      return count
    }
    default:
      return count
  } 
}
const store = createStore(reducer);

const onChange = () => {
  counter.innerHTML = store.getState()
}
store.subscribe(onChange)

add.addEventListener('click',()=>store.dispatch({type:"ADD"}))
minus.addEventListener('click',()=>store.dispatch({type:"MINUS"}))