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
                <div className="flex-container">
                    <div className="flex-item item1"><b>Edit Menu</b>
                    </div>
                </div>
                <div className="table-responsive-md">
                   <table class="table table1  ">
                        <tbody>
                                <td>
                                   Name:<br></br>
                                  Bismillah Outlet <span class="badge  badge1">Live</span><br></br>
                                  <button type="button" class="btn  but2">Back</button>
                                  <button type="button" class="btn  btn1">Edit</button>
                                </td>
                                <td>Platform:<br></br> FoodParrot
                                </td>
                        </tbody>
                   </table>
                </div>
               <div className="cunt" >
                    <button type="button" class="btn "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg> Search Categories</button>
                    <button type="button" class="btn btn4">Add New Category</button>
               </div>
               <div className="container cat ">
                    <span>Categories(2)</span>
               </div>
               <div className="container box0">
                   <div className="row">
                        <div className="col-md box1">
                          <div className="row">
                            <div className="col-3 imgb">
                                <img className="imgib img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fjunk-food-vector-920678&psig=AOvVaw1jzh0OUMqXSjVbvh2XoJnC&ust=1619681928114000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCOpce3oPACFQAAAAAdAAAAABAO"></img>
                            </div>
                            <div className="col-8 items">
                              <div> Cart1
                              <div className="dot">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                              </div>
                                <div>2 Products</div>
                                <div className="sto">In Stock</div>
                            </div>
                            <div className="col-12 sha">
                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
                                    </svg>Share Category</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md box1">
                        <div className="row">
                            <div className="col-3 imgb">
                                <img className="imgib img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fjunk-food-vector-920678&psig=AOvVaw1jzh0OUMqXSjVbvh2XoJnC&ust=1619681928114000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCOpce3oPACFQAAAAAdAAAAABAO"></img>
                            </div>
                            <div className="col-8 items">
                                <div> Cart2 
                                    <div className="dot">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div>3 Products</div>
                                <div className="sto">In Stock</div>
                            </div>
                            <div className="col-12 sha">
                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
                                    </svg>Share Category</a>
                            </div>
                          </div>
                        </div>
                   </div>
               </div>
                
            
            </div>
        </div>         
        );

        
    }
    
}
export default View