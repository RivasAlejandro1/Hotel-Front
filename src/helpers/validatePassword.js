export const withoutSpaceRegex = /^[^\s]*$/;
export const withoutSpaceRegexMessage = "La contraseña no puede contener espacios";
export const lengthRegex = /^.{8,50}$/;
export const lengthRegexMessage = "La contraseña debe tener entre 8 a 50 caracteres";
export const containCapitalLetterRegex = /[A-Z]/;
export const containCapitalLetterRegexMessage = "La contraseña debe tener almenos una mayuscula";
export const containNumberRegex = /\d/;
export const containNumberRegexMessage = "La contraseña debe tener almenos un numero";
export const containSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
export const containSpecialCharRegexMessage = "La contraseña debe tener almenos un caracter especial";


export  function validatePassword(password){

    if(!withoutSpaceRegex.test(password)) return(" La contraseña no puede contener espacios");
    if(!lengthRegex.test(password)) return(" La contraseña debe tener entre 8 a 50 caracteres");
    if(!containCapitalLetterRegex.test(password)) return(" La contraseña debe tener almenos una mayuscula");
    if(!containNumberRegex.test(password)) return(" La contraseña debe tener almenos un numero");
    if(!containSpecialCharRegex.test(password)) return(" La contraseña debe tener almenos un caracter especial");

    return true
}