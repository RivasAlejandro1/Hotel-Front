
export default function closeSesion(navigate){
        console.log("Se Cerro Sesión")
        window.localStorage.removeItem('loggedIdAppUser');
        window.localStorage.removeItem('loggedTypeAppUser');
        window.localStorage.removeItem('loggedTokenAppUser'); 
        navigate("/") 
}