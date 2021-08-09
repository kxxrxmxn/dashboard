import React from 'react';
import { 
    BrowserRouter as Router, 
    Link } from 'react-router-dom';
import User from '../Data/User';

const Home = () => {
    return (
        <>
        <div className="container">
         <ul className="home-category">
             <li><h2>회원 관리</h2> </li>
             <li><h5>총 회원수: 0 </h5> </li>
         </ul>
         <ul className="branch">
            <li><Link to = "/add" className = "add-btn"> 회원 추가 </Link></li>
            <li><h1>튼튼헬스</h1></li>
         </ul>

        <User />
        </div> 
        </>
    )
}




export default Home;
