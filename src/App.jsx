import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, 
        [name]: type === "checkbox" ? checked : value };
    });
  }

  function submithandler(event)
  {
         event.preventDefault();
         console.log("Finally printing the form data");
         console.log(formData);
  }
  return (
   
    <div className="flex flex-col items-center mt-2">
    <form onSubmit={submithandler}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
        id="firstName"
      />
      <br />
      <br/>

      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
        id="lastName"
      />
      <br />
      <br/>
      <label htmlFor="email">Email</label>
      <br />
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
        id="email"
      />
      <br />
      <br/>

      <label htmlFor="country">Country</label>
      <br />

      <select
        name="country"
        id="country"
        country
        value={formData.country}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
      >
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="uae">UAE</option>
      </select>

      <br />
      <br/>
      <label htmlFor="streetAddress">Street Address</label>
      <br />
      <input
        type="text"
        name="streetAddress"
        placeholder="StreetAddress"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1 "
        id="streetAddress"
      />

      <br />
      <br/>
      <label htmlFor="city">City</label>
      <br />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={changeHandler}
        className="border border-black w-full rounded-md p-1"
        id="city"
      />

      <br />
      <br/>
      <label htmlFor="state">State</label>
      <br />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
        id="state"
      />

      <br />
      <br/>

      <label htmlFor="postalCode">PostalCode</label>
      <br/>
      <input
        type="number"
        name="postalCode"
        placeholder="PostalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className="border border-black  rounded-md w-full p-1"
        id="PostalCode"
      />

      <br />
      <br/>
      <fieldset>
        <legend className="font-semibold ">By Email</legend>
  
        <br/>
        
        <div className="flex">
          <input
            type="checkbox"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={changeHandler}
          />
         
          <div>
          <label htmlFor="comments" className="ml-2 font-semibold ">Comments</label>
          </div>
       </div>

          <div>
            
          <p className="ml-5 font-medium text-gray-600">Get notified when someones posts a comment on a posting</p>
          </div>
         <br/>
         
        <div className="flex">
          <input
            type="checkbox"
            id="candidate"
            name="candidate"
            value={formData.candidate}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidate" className="ml-2 font-semibold">Candidate</label>
           </div>

        </div>

        <div>
        <p className="ml-5 font-medium text-gray-600">Get notified when someones posts a comment on a posting</p>
        </div>
  
        <br/>
        <div className="flex">
          <input
            type="checkbox"
            id="offers"
            name="offers"
            value={formData.offers}
            onChange={changeHandler}
          />
          <label htmlFor="offers" className="ml-2 font-semibold">Offers</label>
         </div>
         
         <div>
         <p className="ml-5 font-medium text-gray-600">Get notified when someones posts a comment on a posting</p>
          </div>
      </fieldset>
      <br/>


      <fieldset>
        <legend className="font-semibold ">Push Notification</legend>
        <p className="font-medium text-gray-600">These are delivered to your mobile phone</p>
        <br/>

       <div className="flex flex-col">



       {/* for radio button value attribute can work */}
       {/* inside htmlFor id should be there */}

       <div className="flex">
       <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
       <label htmlFor="pushEverything" className="ml-3 font-semibold">Everything</label>
       </div>
       


        <div className="flex">
        <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
        <label htmlFor="pushEmail" className="ml-3 font-semibold">Same as Email</label>
        </div>

        <div className="flex">
        <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler} />
        <label htmlFor="pushNothing" className="ml-3 font-semibold">No Push Notification</label>
        </div>
        

      <br/>
       <div>
        <button className=" bg-sky-500/100 text-white p-2 border-none rounded-lg font-medium">Subscribe</button>
       </div>

       </div>
        
      </fieldset>
    </form>
  </div>
    
  );
}

export default App;
