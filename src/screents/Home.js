import React, { useEffect, useState } from "react"

import {Table} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import {Link,useHistory} from "react-router-dom"

function Home(props){
    //  const history=useHistory();
    //  const changePath=(path)=>{
    //      history.push(path)
    //  }

    const[userData,setData]=useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(buffer=>buffer.text())
        .then((stringResponse)=>JSON.parse(stringResponse))
        .then((users)=>setData(users))
        

    },[])

    


    return (
        <div style={{ display:"flex",margin:"10%",justifyContent:"center"}}>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.map(({username,company,id},index)=>(
                 <tr>
                 <th scope="row">{index+1}</th>
                 <td>{username}</td>
                 <td>{company.name}</td>
                 <td><Link to={"/Post?userId="+id}>Posts</Link></td>
                 {/* <td onClick={()=>changePath('/Post')}>Post</td> */}
               </tr>
            ))}
          </tbody>
        </Table>
        </div>
      );
    }




export default Home;