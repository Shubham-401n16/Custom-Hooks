import { useState } from 'react';

const useForm = (callback, initData) => {

  const [formData, setFormData] = useState(initData || {});

  const updateForm = (key, value) => {

   let newFormData = { ...formData };
        newFormData[key] = value;

        setFormData(newFormData);
  };

  const submitForm = (event) => {
    event.preventDefault();
    
    callback(formData);
  }


  return [
    updateForm,
    submitForm,
    formData,
  ];
};

export default useForm;