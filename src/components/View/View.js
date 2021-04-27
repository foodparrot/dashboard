import React , {Component} from 'react'
import './View.css'
export class View extends Component {
    render(){
        return(
            <div className="container-fluid ">
             <div className='row header'>
                        <p>Bismillah Outlet</p>                        
                    </div>
            <div className="container">
          {/*first line*/}
            <div className="flex-container">
                <div className="flex-item item1"><b>Edit Menu</b></div>
            </div>
           {/*table*/}  
               <div className="table-responsive-md">
                   <table class="table table1 .table-borderless ">
                      <tbody>
                          <tr>
                                <td>
                                   Name:<br></br>
                                  Bismillah Outlet <span class="badge bg-success badge1">Live</span><br></br>
                                  <button type="button" class="btn  but2">Back</button>
                                  <button type="button" class="btn  btn1">Edit</button>
                                </td>
                                <td>Platform:<br></br> FoodParrot
                                </td>
                          </tr>
                      </tbody>
                   </table>
               </div>
               <div >
                    <button type="button" class="btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg> Search Categories</button>
                    <button type="button" class="btn btn4">Add New Category</button>
               </div>
               <div className="container cat ">
                    <span>Categories(2)</span>
               </div>
               <div className="container cat">
                    <div class="cart">
                        <table>
                            
                        </table>
                    </div>
               </div>
            </div>
            </div>
         
        );

        
    }
    
}
export default View