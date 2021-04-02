import React from 'react';

import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from './component/ProductCards'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Input, Space } from 'antd';
import { ShoppingCartOutlined,HomeFilled ,ShoppingOutlined } from '@ant-design/icons';
import Shop from './component/shopcart';


const { Header, Content, Footer } = Layout;
const { Search } = Input;


function App() {
const items = useSelector(state => state)
const dispatch = useDispatch()

console.log('redux', items)

  return (
    <div className="App">
       <Router>
      
    
  <Layout className="layout">
    
    <Header>
      <div className="logo" />
      <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        
        <Menu.Item key="1"><Link  to="/home"><HomeFilled className='icon'/></Link></Menu.Item>
        <Menu.Item key="2"><Link  to="/product">Product</Link></Menu.Item>
        <Menu.Item key="3"><Link  to="/profile">Account</Link></Menu.Item>
        
        <Menu.Item key="4"><Search placeholder="input search text"  enterButton /> </Menu.Item>
        <Menu.Item key="5"><Link to="/shop"><ShoppingOutlined className='icon'/></Link></Menu.Item>
      </Menu>
      
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/">Shop</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/cart">My cart</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/cart"><ShoppingCartOutlined /></Link></Breadcrumb.Item>
      </Breadcrumb>
      
      
      <div className="site-layout-content">
      <Route exact path="/home" component={ProductCard} />
      <Route exact path="/shop" component={Shop} />
      </div>
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

    </Router>
    </div>
  );
}

export default App;
