import React from 'react';
import Button from "../Button"
import useForm from "../../hooks/useForm"

function UploadForm() {
    const { values, handleChange, handleSubmit } = useForm(Upload);
   
     function Upload() {
       console.log(values);
     }
   
     return (
       <form className="UploadForm" onSubmit={handleSubmit}>
         <label>
           Naam
           <br />
           <input
           name="name"
           type="text"
           className="input"
           onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
           Gebied
           <br />
           <input
           name="area"
           type="text"
           className="input"
           onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
           Bron
           <br />
           <input
           name="source"
           type="text"
           className="input"
           onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
           Bestandstype
           <br />
           <select 
             name="file_type" 
             onChange={handleChange}
           >
             <option value="csv">csv</option>
             <option value="json">json</option>
             <option value="pdf">pdf</option>
             <option value="kml">kml</option>
             <option value="xlsx">xlsx</option>
           </select>
         </label>
         <br />
         <br />
         <label>
           Link
           <br />
           <input
           name="link"
           type="text"
           className="input"
           onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
           Legenda aanwezig
           <br />
           <select
             name="dictionary"
             onChange={handleChange}
           >
             <option value="True">Ja</option>
             <option value="False">Nee</option>
           </select>
         </label>
         <br />
         <br />
         <label>
           Downloaddatum
           <br />
           <input
           name="date_obtained"
           type="text" 
           className="input"
           onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
           Gecontroleerd op fouten
           <br />
           <select
             onChange={handleChange}
             name="clean"
           >
             <option value="True">Ja</option>
             <option value="False">Nee</option>
           </select>
         </label>
         <br />
         <br />
         <label>
           Tags (scheiden met komma)
           <br />
           <input 
           name="tags"
           type="text"
           className="input"
           onChange={handleChange}/>
         </label>
         <br />
         <br />
         <label>
           Bestand uploaden
           <br />
           <br />
           <input 
           type="file"
           name="file"
           onChange={handleChange}/>
         </label>
         <br />
         <br />
         <Button
         type="submit"
         handleClick={handleSubmit}
         label="Upload"
         />
         <br />
         <br />
       </form>
     )
   }

   export default UploadForm