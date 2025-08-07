import React, { useState } from "react";
import {toast} from "react-hot-toast"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const cities = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad",
  "Multan", "Peshawar", "Quetta", "Hyderabad", "Sialkot",
  "Gujranwala", "Abbottabad", "Bahawalpur", "Sukkur", "Sargodha",
  "Mardan", "Mirpur", "Gilgit", "Skardu"
];

const TripForm = () => {
  const navigate = useNavigate()
 const [formData,setFormData] = useState({
  from:'',
  to:'',
  data:'',
  space:'',
  description:'',
  agree:false 
})
function handleChange(e){
const name = e.target.name;
const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
setFormData({...formData,[name]:value})
} 
const handleSubmit = async (e)=>{
  e.preventDefault();
  if(!formData.agree){
    toast.error("Please agree to terms")
  return;
  }
  try{
     await axios.post("http://localhost:3000/trip",formData)
   toast.success("Trip created successfully")
   setFormData({
    from:'',
    to:'',
    date:'',
    space:'',
    description:'',
    agree:false
   })
   navigate('/user-dashboard')

  }catch(err){
    console.log(err)
  }
}
  return (
    <div className=" flex items-center justify-center px-4 my-10">
      <form onSubmit={handleSubmit} className="rounded-md w-full max-w-4xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
          <div>
            <label className="text-xs text-gray-600">Where Are You Travelling From?</label>
            <select name="from" value={formData.from} onChange={handleChange}
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded pr-10 bg-white">
              <option value="">Select City</option>
              {cities.map((city,i)=>{
return (
  <option value={city} key={i}>{city}</option>
)              })}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-600">Where Are You Travelling To?</label>
            <select name="to" value={formData.to} onChange={handleChange}
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded pr-10 bg-white">
              <option value="">Select City</option>
              {cities.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-600">When Are You Travelling?</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange}
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded bg-white"/>
          </div>

          <div>
            <label className="text-xs text-gray-600">How Much Space Do You Have?</label>
            <input type="text" name="space" value={formData.space} onChange={handleChange}
            placeholder="KG"
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded bg-white" />
          </div>

          <div className="md:col-span-2">
            <label className="text-xs text-gray-600">Would You Like To Tell Us More?</label>
            <textarea name="description" value={formData.description} onChange={handleChange}
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded bg-white" rows="3"
              placeholder="Optional..."></textarea>
          </div>
        </div>

      
        <div className="flex items-start mt-2">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange}
            className="mr-2 mt-1"/>
          <p className="text-sm text-gray-600">
            I agree with the <span className="text-[#0ac6ae] underline">Terms & Conditions</span> and the <span className="text-[#0ac6ae] underline">Privacy Policy</span> of PakCarry.
          </p>
        </div>
<div className="flex justify-center mt-3">
        <button type="submit" 
          className="bg-[#0ac6ae] text-white py-2 px-6 rounded hover:opacity-90 transition">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;
