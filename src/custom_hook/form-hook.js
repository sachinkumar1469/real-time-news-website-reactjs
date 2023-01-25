import { useState } from "react";



export default function useForm(initialValue = null){
    const [value,setValue] = useState(initialValue);

    const handleChange = (e)=>{
        // console.log("Handle change called with event",e)
        setValue(e.target.value);
    }

    return [value,handleChange];
}