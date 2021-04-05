import { Card, Col, Row } from "antd";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./product.css";
import { addItem } from "../actions/action"; //import action type from action to dispatch action type on click

const ProductCard = () => {
  const items = useSelector((state) => state.items); //import useSelector to get state from store
  const dispatch = useDispatch(); //import useDispatch to dispatch action type with payload to action type
  

  return (
    <div className="site-card-wrapper , productcard">
      <Row gutter={16}>
        {items.map((item) => {
          return (
            <Col key={item.id} span={8}>
              <Card className="card" title={item.title} bordered={false}>
                <img src={item.img} />
                <div>price: {item.price}</div>
                
                <span>description: {item.desc}</span>
                <div className="buybtn">
                  <Button
                    className="primary"
                    type="primary"
                    value={item.id}
                    onClick={(e) => dispatch(addItem(item.id))}
                  >
                    buy now
                  </Button>
                  <Button type="dashed">Dashed</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ProductCard;
