import React , {Component} from 'react'
import './Menus.css'
export class Menus extends Component {
    render(){
        return(
            <div className="container-fluid ">
                 <div className='row header'>
                        <p>Bismillah Outlet</p>                        
                 </div>
            <div className="container">
          {/*first line*/}
            <div className="flex-container flex-container10">
                <div className="flex-item item10"><b>Menu</b></div>
                <div className="flex-item item20"><button type="button" class="btn btn-primary btn-lg btn-create">Create</button></div>
               </div>
           {/*table*/}  
               <div className="table-responsive-md">
                   <table class="table table10">
                      <thead>
                       <tr>
                           <th scope= "col"></th>
                           <th scope= "col">Name</th>
                           <th scope= "col">Business</th>
                           <th scope= "col">Platform</th>
                           <th scope= "col">State</th>
                           <th scope= "col">Actions</th>

                       </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td></td>
                              <td>Special Menu</td>
                              <td></td>
                              <td>FoodParrot</td>
                              <td className="live" >Live</td>
                              <td className="buttons"><a href="../View/View"><button className="btn btn-primary btn-sm view">View</button></a><button className="btn btn-outline-danger btn-sm del">Delete</button></td>
                          </tr>
                          <tr>
                              <td></td>
                              <td>Menu</td>
                              <td></td>
                              <td>FoodParrot</td>
                              <td className="offline">Offline</td>
                              <td className="buttons"><a href="../View/View"><button className="btn btn-primary btn-sm view">View</button></a><button className="btn btn-outline-danger btn-sm del">Delete</button></td>
                          </tr>
                      </tbody>
                   </table>
               </div>

            </div>
            </div>
         
        );

        
    }
    
}
export default Menus