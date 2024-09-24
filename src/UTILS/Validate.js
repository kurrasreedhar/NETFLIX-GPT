
export const CheckValidateData = (email, password,name,signIn) => {
   
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
   const isName= /^[A-Z][a-zA-Z-' ]{1,}$/.test(name);

   if (!isEmailValid) return "Email Id is not valid";
   if (!isPasswordValid) return "Password is not valid";
   if(!signIn && !isName) return "Name is not valid";
 

    return null;
};
