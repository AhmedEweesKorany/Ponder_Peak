import { useState } from 'react';

const useFormData = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return [formData, handleChange, resetForm];
};

export default useFormData;
