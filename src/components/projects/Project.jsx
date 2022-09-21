import React from 'react'
import "./project.scss"

export default function Project({projectOpen, setProjectOpen}) {
  return (
    <div className={"project "+ (projectOpen && "active") }>
      <div className="wrapper">
        <div className="header">
              Car Rental Application
        </div>
        <div className="content">

          <div className="explanation">
          Rental Car Management System project is a project that provides a connection between the 
company and customer who needs a rental car. This system enables the company to make 
their services available to the customer who wants a rental car and also keep records about 
their services. The car rental system to keep detail records of both the cars and the customers, 
2
the duration they rent car as well as the type of car they rent. As long as, the company can 
provide the demand, contracts will be signed.<br /> 
<strong>The scope of this project:</strong> <br />
1-) Provides user login in addition to admin login and admin panel.<br />
2-) Allows admin to add a new car, manage booking of cars, list the available cars.<br />
3-) Allows admin to rent out the cars.<br />
4-) Allow users to view information of available cars.<br />
5-) Allow users to view most rented cars.<br />
          </div>

          <div className="gallery">
            GALLERY

            <div className="img1">
              <div className="imgcontainer">
                <img  src="images/img1.png" alt="" / >
              </div>
              Class diagram shows every class and methods in the program. Because we are 
creating a Car Rental Program, we created classes like Admin, Person, 
Customer, Car, Contract and other necessary classes. Every class have Getter 
and Setter methods in order to use encapsulation principles, however, our class 
diagram does not include them, in order to prevent a visual mess.
            </div>
            <div className="img2">
            <div className="imgcontainer2">
                <img  src="images/img2.png" alt="" / >
              </div>
              <p>This section shows the admin page of the application. Admin could perform these several activities as shown
              in the class diagram. Such as listing all signed contracts, adding a new car and more.. <br /><br /><br /> 
              IN CONCLUSION.. <br /><br />
              Car rental project had been a good journey for me and my Teammates <a href='https://github.com/mehmettyildizz'>Mehmet Yıldız </a>
              and <a href='https://github.com/ekinuzunbaz'>Ekin Uzunbaz</a> .</p>
            </div>
            <div className="img3"></div>
          </div>
        </div>
      </div>
      </div>
  )
}   
