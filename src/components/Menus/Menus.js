import React , {Component} from 'react'
import './Menus.css'
export class Menus extends Component {
    render(){
        return(
            <div className="container-fluid ">
                 
                        <p style={{fontSize:'1.2em', fontWeight:'600'}}>Bismillah Outlet</p>                        
            <div></div>     
            <div className="container menupal">
          {/*first line*/}
            <div className="flex-container flex-container10">
                <div className="flex-item item10"><b>Menu</b></div>
                <div className="flex-item item20"><button type="button" class="grad">Create</button></div>
               </div>
           {/*table*/}  
               <div className="table-responsive-md ">
                   <table class="table table10 menutab">
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
                              <td className="offline">Offline &ensp; <button style={{outline:"none",border:"1.5px solid #ff8000",borderRadius:"10%",padding:"3px"}}>Publish</button></td>
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