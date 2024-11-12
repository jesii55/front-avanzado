import { useState } from "react"

const useForm = (initialValues)=>{
    const [values, setValuesu8] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const resetForm = () => {
        setValues(initialValues)
    };

    return [values, handleChange, resetForm]
};

export default useForm;