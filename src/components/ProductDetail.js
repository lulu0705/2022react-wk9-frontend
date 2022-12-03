import { Row, Col, Card } from "antd";
import { useState } from "react";
import { Select } from 'antd';
import { Link,createRoot } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
const { Option } = Select


// const CustomTabBarButtonA = ({ card }) => (

//       <>
      
//         {/* <span onClick={setopen(!open)} className=""> */}
//            右邊資訊欄
//           <Col lg={{ span:6, offset:1  }} style={{backgroundColor:'#F5F5F8',borderRadius:10}}>

//           {card.liker.map(carditem => (

          
//             <div className="">
//               <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
//               <h1 className="product-name card-more" style={{fontWeight: 'bold',color:'#75759F'}}>
//                 By {carditem.person_name}
//               </h1>  

//               <p className="product-comment">
//                 {carditem.resume}<b>...</b>
//               </p>

//             </div>
//           ))}
//           <hr className="footer-line" style={{width: '100%' , opacity:0.4}}/>
//           </Col>












//         {/* </span> */}
      
//    </> 

// );

function ProductDetail({ card }) {
  // const [qty, setQty] = useState(card.countInStock > 0 ? 1 : 0);
  const [likeopen, setLikeopen] = useState(false);
  const [commentopen, setCommentopen] = useState(false);


  function CallComment(card) {
    // alert('Hello!'+card.title);
    return (
      <>
      {commentopen ? (
          <Col lg={{ span:6, offset:1  }} style={{backgroundColor:'#F5F5F8',borderRadius:10}}>
          <p className="" style={{fontWeight: 'bold',color:'#3e3f97',fontSize:'x-large',textAlign:'center',marginTop:10,marginBottom:-2}}>- ̗̀      Comments      ̖́-</p>

          {card.commentby.map(carditem => (
            <div className="">
              <hr className="comment-line" style={{width: '100%' , opacity:0.4}}/>
              <p className="product-comment">
                {carditem.comment}
              </p>

              <div className="more">
                  {/* <Link className="card-link"><b><u>More</u></b></Link> */}
                  <Link className="card-link"> 
                        <b><u>More</u></b>
                    </Link>
              </div>

              <h1 className="product-name more" style={{fontWeight: 'bold',color:'#75759F'}}>
                  By {carditem.person_name}
              </h1>  
              
            </div>
          ))}
          <hr className="comment-line" style={{width: '100%' , opacity:0.4}}/>
          </Col>
      ):(
        <span>
        </span>
      )}
   </>
  )
  }








  function CallLike(card) {
    // alert('Hello!'+card.title);
    return (
      <>
      {likeopen ? (
          <>
          <Col lg={{ span:6, offset:1  }} style={{backgroundColor:'#F5F5F8',borderRadius:10}}>
          <p className="" style={{fontWeight: 'bold',color:'#3e3f97',fontSize:'x-large',textAlign:'center',marginTop:10,marginBottom:-20}}>꒰   Likes   ꒱</p>

          {card.liker.map(carditem => (
            <div className="">
              <hr className="line" style={{width: '100%' , opacity:0.4}}/>
              <h1 className="" style={{fontWeight: 'bold',color:'#75759F',backgroundColor:'#EBD6D6',width:50,textAlign:'center'}}>
                {carditem.person_name}
              </h1>  

              <p className="person-data">
                <b>簡歷：</b>{carditem.resume}
              </p>

            </div>
          ))}
          <hr className="line" style={{width: '100%' , opacity:0.4}}/>
          </Col>
          </>
      ):(
        <span>
        </span>
      )}
   </>
  )
  }




    return (
    <Row gutter={[32, 32]}>

      {/* <Col lg={{ span:8, offset:2 }} > A65179 opacity: 0.4*/}
      <Col lg={{ span:12, offset:3 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}>
      {/* <Col lg={{ span:20, offset:2 }} style={{backgroundColor:'#8C6875',borderRadius:10,opacity:0.6}}> */}


      <div className="product-info-detail">
        <h2 className="title product-category">
            {card.title}
        </h2>
        {/* <img 
          alt={card.title} 
          className="product-image" 
          src={card.image} 
        />  */}
        <h1 className="name product-name">
            By {card.author}
        </h1>  
        <p className="description product-description">
            {card.description}
        </p>
          {/* <div class="font-icon-wrapper" onClick={() => {alert("This works on every component!");}}>
          <FavoriteBorderIcon className="icon" />   onClick={() => SayHello(card)}
        </div> */}


        <div className="product-icon">
          {/* <FavoriteBorderIcon fontSize="medium" onClick={() => setLikeopen(!likeopen)} */}
          <FavoriteBorderIcon fontSize="medium" onClick={() => { setLikeopen(!likeopen); setCommentopen(false);}}
            className={
              likeopen === false ? "icon" : ["icon", "iconhover"]} 
          />

          {/* <ChatBubbleOutlineIcon  onClick={() => setCommentopen(!commentopen)} */}
          <ChatBubbleOutlineIcon  onClick={() => { setLikeopen(false); setCommentopen(!commentopen);}}
            className={
              commentopen === false ? "icon" : ["icon", "iconhover"]}
          />


          <div className="product-iconNumber">
          
            <p className="number">{card.like_point}</p>
            <p className="number">{card.comment_point}</p>
            {/* <p className="number">{card.commentby.length}</p> */}

            {/* <p className="">owner_id={card.liker[1].resume}</p> */}

            {/* {card.liker?.map(carditem => (
            <div 
              key={card.id} >
              <p className="">{carditem.resume}</p>
            </div>
          ))} */}

          </div>


        </div>



      </div>
      </Col>
      <CallLike {...card}/>
      <CallComment {...card}/>
      {/* <CustomTabBarButtonA {...card}/> */}


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
    );
}

export default ProductDetail;