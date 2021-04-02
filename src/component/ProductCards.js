import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import './product.css'
import {addItem} from '../actions/action'

const ProductCard=()=>{
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()
    console.log('product', items)
    
return(
  <div className="site-card-wrapper , productcard">
      
    <Row gutter={16}>
    {items.map(item =>  {
        return(
        <Col span={8}>
        <Card className='card' title={item.title} bordered={false} key={item.id}>
          <img src={item.img}/>
          <div>price: {item.price}</div><br/>
          <span>description: {item.desc}</span>
          <div className='buybtn'><Button className='primary' type="primary" value={item.id} onClick={e => dispatch(addItem(item.id))}>buy now</Button><Button type="dashed">
          Dashed
        </Button></div>
        </Card>
      </Col>)})}
        </Row>
        
  </div>
);
}
export default ProductCard;