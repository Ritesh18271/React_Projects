import styles from './Item.module.css'
const Item =({foodItem})=>{
const handleOnClick =(event)=>{
console.log(event);
alert(`${foodItem} is bought.`)
}
return (
  <>
  <li 
  onClick={(event)=>handleOnClick(event)}
  className='list-group-item'>{foodItem}
  <button className={`${styles.button} btn btn-info`}>Buy</button>
  </li>
  </>
)
}
export default Item