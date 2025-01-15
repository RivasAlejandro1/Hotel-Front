export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const emailRegexMessage = "El email no es valido";


export  function validateEmail(email){
    if(!emailRegex.test(email)) return("El email no es valido");

    return ""
}
