import './AddBook.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function AddBook(){



  

    const[getBook,setBook]=useState({
    
      bookname:'',
      bookdesc:'',
      bookauthor:'',
      noofbooks:''
    });
  
    const navigate = useNavigate();
  



    const onChangeHandler=(event)=>{
      setBook({
        ...getBook,[event.target.name]:event.target.value
      })
    }




    const onAddHandler=(event)=>{
      event.preventDefault();
      if(getBook.bookname && getBook.bookdesc && getBook.bookauthor && getBook.noofbooks){
          axios.post('http://localhost:3000/library',{
            bookname:getBook.bookname,
            bookdesc:getBook.bookdesc,
            bookauthor:getBook.bookauthor,
            noofbooks:getBook.noofbooks
          }).then(()=>{
            navigate('/dashboard');
          }).catch(()=>{
             alert("error");
          })
        // if(sessionStorage.getItem('expenseDetails')){ 
        //   let details = JSON.parse(sessionStorage.getItem('expenseDetails'));
        //   console.log(typeof details);
        //   expenseDetails.push(...details);
        //   expenseDetails.push({...getExpense});
        //   sessionStorage.setItem("expenseDetails",JSON.stringify(expenseDetails));
        // }
        // else{
        //   expenseDetails.push({...getExpense});
        //   sessionStorage.setItem("expenseDetails",JSON.stringify(expenseDetails));
        // }
        
      }
      else{
        alert("Please add some data");
      }
    }
  











    return(<div>


                  
                  <div class="container">
              <div class="row">
                <div class="col-4">
                </div>
                <div class="col-4">
                  <form>        
                      <div>
                        <h1>Add Book</h1>
                        </div>
                      <div class="form-group">
                        <label>Book Name:</label>
                        <input type="text" class="form-control" name="bookname" value={getBook.bookname}  onChange={onChangeHandler}/>
                      </div>

                      <div class="form-group">
                        <label>Book Desc:</label>
                        <input type="text" class="form-control" name="bookdesc" value={getBook.bookdesc} onChange={onChangeHandler}/>
                      </div>
                      <div class="form-group">
                        <label>Author Name</label>
                        <input type="text" class="form-control" name="bookauthor" value={getBook.bookauthor} onChange={onChangeHandler}/>
                      </div>
                      <div class="form-group">
                        <label>No of Books Available</label>
                        <input type="text" class="form-control" name="noofbooks"  value={getBook.noofbooks}  onChange={onChangeHandler}/>
                      </div>
                      <button onClick={onAddHandler} type="button" class="btn btn-warning">Add Book</button>
                    </form>
              </div>
                <div class="col-4">
                   
              </div>
              </div>
     
          </div>
    </div>)

    }

export default AddBook;
