import React, { useState } from "react";
const Form = () =>{
    let [formData , setFormData] = useState({
        firstNmae:'abcde',
        lastname:'efgh',
        age:24,
        address:'delhi'
    });

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }
}

return(
    <form>
        <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
                Firstname
            </label>
            <input type="text"
            className="form-control" id="firstname" value={formData.firstname}
            onChange={(event)=>{
                setFormData({firstname:event.target.value})
            }} />
        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
            Lastname
            </label>
        </div>
    </form>
)