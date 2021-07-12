import React, { useEffect, useState } from "react"
import { useLocation ,Link} from "react-router-dom";

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const Details=()=>{
    const [data,setData]=useState(null)
    const [comments,setComments]=useState(null)

    const location=useLocation();
    const postId=location.search.split("=")[1];
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
        .then((buffer)=>buffer.text())
        .then((stringResponse)=>JSON.parse(stringResponse))
        .then((data)=>setData(data))
    },[])
    const commentClickHandler=()=>{
        fetch("https://jsonplaceholder.typicode.com/comments?postId="+postId)
        .then((buffer)=>buffer.text())
        .then((stringResponse)=>JSON.parse(stringResponse))
        .then((data)=>setComments(data))
    }
    

    return(<div>
        
            <Row style={{display:"flex",justifyContent:"center",margin:"5%"}}> 
            {data&&(
                <Col sm="6">
                <Card body>
                  <CardTitle tag="h5">{data.title}</CardTitle>
                  <CardText>{data.body}</CardText>
                  <Button color="primary" onClick={commentClickHandler}> Show Comments</Button> 
                </Card>
              </Col>


            

            )}
            {
                comments&&comments.map((comment)=>(
                    <Card body>
                        <CardTitle>{comment.email}</CardTitle>
                        <CardText>{comment.body}</CardText>

                    </Card>
                ))
            }




      
    </Row>
    </div>

    )
}


export default Details;