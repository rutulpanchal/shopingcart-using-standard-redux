import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './shop.css'
import { Button } from 'antd';
import { decreseAmount, increseAmount, removeItem } from '../actions/action';
const Shop=()=> {

    const incart = useSelector(state => state.addedItems)
    const total = useSelector(state => state.total)
    const dispatch = useDispatch()
    //console.log('inbag', incart)
    return (
        <div>
            <table className="table">
            <tr>
            <th>name</th><th>image</th> <th>quantinty</th> <th>price</th><th></th>
            </tr>
            </table>
            <table>
            {incart.map(item => { return(
                <div key={item.id} className='itemshop'><tr><td><p>{item.title}</p></td> <td><img src={item.img}/></td>
                 <td><p><Button type="primary" shape="circle" value={item.id} onClick={e => dispatch(increseAmount(item.id))}>+</Button> {item.stock} <Button type="primary" shape="circle" value={item.id} onClick={e => dispatch(decreseAmount(item.id))}>-</Button></p></td>
                <td><p>{item.price}$</p></td>
               <td><Button className='primary' type="primary" value={item.id} onClick={e => dispatch(removeItem(item.id))}>remove</Button></td>
                </tr></div>
            )})}
            <p>total:{total} $</p>
            </table>
        </div>
    )
}

export default Shop
