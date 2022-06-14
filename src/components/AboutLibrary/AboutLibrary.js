import libraryimage from '../../assests/libraryimage.jpg';
//import './Aboutlibrary.css';
function AboutLibrary(){

    return(<div>
<div className="container"></div>
            <div className="row">
            
                <div className="col" >
                <div><h1><center>Library Management System</center></h1></div>
                <img src={libraryimage} style={{width:"100%",height:"300px"}}  />
                  <div><h4 style={{textAlign:"justify"}}>Online library management project in spring spring and hibernate is 
                      complete solution for all the manual problem that we face during the library
                      management. Mainly there are 2 main actor of the application that going to operate
                      the application <b>1)Admin/ Librarian and 2) User/Students.</b><br/>
                      Book or Digital books is the main module of the library management
                      system. Book are assets that we are storing in the database with some 
                      details like name, author name and version and a PDF format. So admin 
                      can perform crud operation and issued the booked to users</h4></div>
  
                </div>              
              </div> 
      
        </div>)
}
export default AboutLibrary;