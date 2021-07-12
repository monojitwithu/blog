import React, { useEffect, useState } from "react"
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {useHistory,Link} from "react-router-dom"


function Post(){
    const [post,setPost]=useState(null)

     const history=useHistory()
    const userid=history.location.search.split("=")[1];

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?userId="+userid)
        .then((buffer)=>buffer.text())
        .then((stringResponse)=>JSON.parse(stringResponse))
        .then((data)=>setPost(data))
    },[])
    
    

    return(
        <div>
            Post
            <Row style={{display:"flex",justifyContent:"center",margin:"5%"}}> 
            {post&& post.map((post)=>(
                <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  <CardText>{post.body}</CardText>
                  <Link  style={{color:"white"}}to={"/Details?userId="+post.id}><Button color="primary"> Show Details</Button> </Link>
                </Card>
              </Col>


            ))

            }




      
    </Row>
     
    </div>


    )
}

export default Post;