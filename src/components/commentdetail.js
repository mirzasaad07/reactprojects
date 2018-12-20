import React, { Component } from 'react';

const CommentDetail = (props) => {
    return ( 
        <div>
             <div className='row'>
             
             <div className='comment'>
                 <a href="/">
                     <img alt='avatar' src ={props.avator} />
                 </a>
             </div>
             <div className='content'>
                 <a href='/'><h3>{props.name}</h3></a>
                 <h5>{props.text}</h5>
            </div>
             <span>{props.time}</span>

         </div>
        </div>
     );
}
 
export default CommentDetail;