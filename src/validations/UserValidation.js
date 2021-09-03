const UserValidation = (values) => {
    const errors = {};
  
    if (!values.name || values.name === "") {
      errors.name = "Name must be filled in";
    }
  
    if (!values.qty || values.qty === "") {
      errors.qty = "Quantity must be filled in";
    }
  
    return errors
  };
  
  export default UserValidation;
  