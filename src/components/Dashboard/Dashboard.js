import './Dashboard.css';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';


const Dashboard=()=>{

  const[getList,setList] =  useState([]);
  const[getIndex,setIndex]=useState(-1);
  const[getSearch,setSearch]=useState('');



  const[getBook,setBook]=useState({
   
    bookname:'',
    bookdesc:'',
    bookauthor:'',
    noofbooks:''
  
  });

  useEffect(()=>{
              
    axios.get('http://localhost:3000/library').then((response)=>{
        console.log(response.data)
        setList(response.data);
    }).catch((error)=>{
      console.log(error);
    }) 
          // if(JSON.parse(sessionStorage.getItem('expenseDetails')) && JSON.parse(sessionStorage.getItem('expenseDetails')).length>0){
          //    setList(JSON.parse(sessionStorage.getItem('expenseDetails')))
          // }
   },[])

   const onDeleteHandler=(index)=>{
    let expenseDetails = [...getList];
    let id = expenseDetails[index].id;
    axios.delete('http://localhost:3000/library/'+id).then((response)=>{
     expenseDetails.splice(index,1);
     setList(expenseDetails);
    }).catch(()=>{

    })
   // sessionStorage.setItem('expenseDetails',JSON.stringify(expenseDetails));
  }


const onEditHandler=(index)=>{
  setBook({
   // bookid:getList[index].bookid,
    bookname:getList[index].bookname,
    bookdesc:getList[index].bookdesc,
    bookauthor:getList[index].bookauthor,
    
    noofbooks:getList[index].noofbooks
  })
  setIndex(index);
 }

 const onChangeHandler=(event)=>{
  setBook({
    ...getBook,[event.target.name]:event.target.value
  })
}

const onChangeSearchHandler=(event)=>{
  setSearch(event.target.value);
}


const onEditSubmitHandler=(event)=>{
  event.preventDefault();
  let bookDetails =[...getList];
  let id= bookDetails[getIndex].id;
  axios.patch('http://localhost:3000/library/'+id,{
  //bookDetails[getIndex].bookid = getBook.bookid;
  bookname:getBook.bookname,
            bookdesc:getBook.bookdesc,
            bookauthor:getBook.bookauthor,
            noofbooks:getBook.noofbooks
  
}).then(()=>{
  setList(bookDetails);
  bookDetails[getIndex].bookname=getBook.bookname;
  bookDetails[getIndex].bookdesc = getBook.bookdesc;
  bookDetails[getIndex].bookauthor = getBook.bookauthor;
  bookDetails[getIndex].noofbooks = getBook.noofbooks;
}).catch(()=>{

})

  

  // setList( bookDetails);
  // sessionStorage.setItem(' bookDetails',JSON.stringify( bookDetails));
}




const searchFilter=(event)=>{
  event.preventDefault();
  let details = getList.filter((obj)=>{
    return obj.bookname === getSearch; 
  })
  setList(details);
}

const resetFilter=(event)=>{
    event.preventDefault();
    setSearch('');
    if(JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length>0){
      setList(JSON.parse(sessionStorage.getItem('bookDetails')))
   }
}









    return(<div>


<div className="container-fluid">
            <div className="row">
              <div className="col-12">
                  <form>       
                    <div><label > <h1>Search Book</h1></label></div> 
                    <div className="form-group row">
                    <label className="col-4">Book Name</label>
                          <input type="text" value={getSearch} onChange={onChangeSearchHandler} className="form-control" id="bookname" name="searchBookName" placeholder="Enter Book Name"/>
                        
                      
                      <button type="submit" className="btn btn-warning subbutton" onClick={searchFilter}  style={{marginRight: "400px"}}>Search</button>
                      
                      <button   className="btn btn-info"  onClick={resetFilter}>Reset</button>
                    </div>  
                    <button type="submit" className="btn btn-success subbutton" style={{marginRight: "700px",boderBottom:"10px"}}><Link to="/AddBook">Add Book</Link></button>                     
                    
                    </form>
               </div>
                        
                            </div> 

            <div className="row">
                <div className="col-12">
                  <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Book ID</th>
                          <th scope="col">Book Name</th>
                          <th scope="col">Book Description</th>
                          <th scope="col">Author Name</th>
                          <th scope="col">No of Books</th>
                          <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                          
                        </tr>
                      </thead>
                     <tbody>


                     {getList.map((obj,index)=>{
                           return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                           
                            <td>{obj.bookname}</td>
                            <td>{obj.bookdesc}</td>
                            <td>{obj.bookauthor}</td>
                            <td>{obj.noofbooks}</td>
                            <td><i onClick={()=>onEditHandler(index)} data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                            <td><i onClick={()=>onDeleteHandler(index)} className="fa fa-trash" aria-hidden="true"></i></td>
                          </tr>

                           )
                        })

                        }
                        
                        
                 
                 
                

                     </tbody>
                    </table>
                </div>
            </div>
   
        </div>









        <div className="modal fade" id="edit"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
                      <div className="form-group">
                          <label>Book Name</label>
                          <input type="text"  value={getBook.bookname} onChange={onChangeHandler} name="bookname" className="form-control" id="bookname"  placeholder="Enter book name"/>
                        </div>
                        <div className="form-group">
                          <label>Book Description</label>
                          <input  value={getBook.bookdesc} onChange={onChangeHandler} type="text" name="bookdesc" className="form-control" id="bookdesc"  placeholder="Enter book desc"/>
                        </div>
                        
                      <div className="form-group">
                        <label>Author Name</label>
                        <input value={getBook.bookauthor} onChange={onChangeHandler} type="text" name="bookauthor" className="form-control" id="bookauthor" placeholder="Enter book author"/>
                      
                      </div>
                     
                      <div className="form-group">
                        <label>No of Books </label>
                        <input value={getBook.noofbooks} onChange={onChangeHandler} type="text" name="noofbooks" className="form-control" id="noofbooks" placeholder="No of bookd Available"/>
                      
                      </div>
                      <button data-dismiss="modal" onClick={onEditSubmitHandler} type="submit" className="btn btn-success">ADD</button>
                    </form>
        </div>
       
      </div>
    </div>
  </div>










    </div>
    )
}
export default Dashboard;