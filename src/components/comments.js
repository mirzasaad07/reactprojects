import React, { Component } from 'react';
import faker from 'faker'
import CommentDetail from './commentdetail';
import ApproveCard from './approve'


class Comments extends Component {
    state = {  }
    render() { 
        return ( 
            <div classNam='container'> 
            
            <ApproveCard>
                <h4 style={{color: 'red'}}>Warning</h4>
               <div>Are you sure to do this?</div>
            </ApproveCard>
            
            <ApproveCard> 
            <CommentDetail
             name= 'saad' 
             time='Yesterday at 7:07PM' 
             text='nice pic'
             avator={faker.image.avatar()}
             /> 
            </ApproveCard>

            <ApproveCard>
                
            <CommentDetail 
            name= 'saim' 
            time='Today at 4:29PM' 
            text='great job'
            avator={faker.image.avatar()}
            /> 
            </ApproveCard>  

            <ApproveCard>
                
            <CommentDetail 
            name= 'asad' 
            time='Today at 9:00AM' 
            text='beautiful'
            avator={faker.image.avatar()}
            />         
            </ApproveCard> 
 
            </div> 
           
            
               
            
         );
    }
}
 
export default Comments;