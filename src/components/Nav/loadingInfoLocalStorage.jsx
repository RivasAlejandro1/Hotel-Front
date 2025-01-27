export default function loadingInfoLocalStorage () {
    const loggedIdUserJSON = localStorage.getItem('loggedIdAppUser')
    const loggedAdminJSON = localStorage.getItem('loggedTypeAppUser')
    const loggedTokenUserJSON = localStorage.getItem('loggedTokenAppUser')
    
    if(loggedIdUserJSON && loggedTokenUserJSON ) {
        const id = JSON.parse(loggedIdUserJSON);
        const admin = JSON.parse(loggedAdminJSON);
        const token = JSON.parse(loggedTokenUserJSON);
        return {id, admin,token}
        
    }else {
        console.log("NO HAY NADA EN EL LOCAL ESTORAGE ")
        return false;
    }
}