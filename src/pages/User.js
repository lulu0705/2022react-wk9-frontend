import { Layout, Row, Col, Card } from "antd";
import { useState } from "react";
import AppHeader from "../components/Header";
// import ProductList from "../components/ProductList";
import AppFooter from "../components/Footer";
// import products from "../json/products.json";
import cards from "../json/card.json";
import NavBar from "../components/NavBar";
// import HamMenu from "../components/HamMenu";
import { useCards } from '../react-query';
import { useParams } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function User(){
    const [open, setopen] = useState(false);


    const { categoryName } = useParams();
    const url = categoryName || "";
    const { data, isLoading } = useUser(url);
    const users = data?.data || [];


    return(
        <Layout className="container main-layout">
        <NavBar open = {open} />
        <Layout>
        {/* <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        /> */}
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                {/* <ProductList products={products}/> */}
                {/* <ProductList cards={cards}/> */}

                <Row gutter={[32, 32]}>

                {/* <Col lg={{ span:8, offset:2 }} > A65179 opacity: 0.4*/}
                {/* <Col lg={{ span:14, offset:2 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}> */}
                <Col lg={{ span:20, offset:2 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}>


                <div className="product-info-detail">
                <h2 className="title product-category">
                {users.username}
                </h2>
                {/* <img 
                alt={card.title} 
                className="product-image" 
                src={card.image} 
                />  */}
                <h1 className="name product-name">
                By {users.email}
                </h1>  
                <p className="description product-description">
                {users.is_admin}
                </p>

                <div className="product-icon">
                {/* <FavoriteBorderIcon className="icon" fontSize="medium" />
                <ChatBubbleOutlineIcon className="icon"/> */}

                <div className="product-iconNumber">
                {/* <p className="number">{card.like_point}</p>
                <p className="number">{card.comment_point}</p>
                <p className="number">owner_id={card.owner_id}</p> */}
                </div>
                </div>



                </div>
                </Col>



                {/* <Col lg={{ span:12 }}> b5aec4*/}

                {/* 右邊資訊欄
                <Col lg={{ span:6, offset:1  }} style={{backgroundColor:'#F5F5F8',borderRadius:10}}>


                <div className="">
                <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
                <p className="product-comment">
                {card.content}<b>...</b>
                </p>

                <div className="card-more">
                <p className="card-link"><b><u>More</u></b></p>
                </div>

                <h1 className="product-name card-more" style={{fontWeight: 'bold',color:'#75759F'}}>
                By {card.author}
                </h1>  

                </div>
                <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
                </Col> */}









                {/* {persons.map(person => (
                <Col 
                key={person.id} 
                >
                <div className="product-info-detail">
                <p className="product-description description">
                {person.comment}...
                </p>

                <div className="card-more">
                <p className="card-link"><b><u>More</u></b></p>
                </div>

                <h1 className="product-name product-name-large card-more">
                By {person.name}
                </h1>  
                </div>
                </Col>
                ))} */}



                {/* {persons.map(person => (
                <div className="product-info-detail">
                <p className="product-name product-description description">
                {person.name}
                </p>

                <h1 className="description">
                {person.resume}
                </h1>  
                </div>
                ))} */}






                </Row>


            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default User;