


export default function navigateAndScrollTo (navigate, path, id)  { 
        navigate(path);
        console.log("hola")
        setTimeout(() => { 
            const element = document.getElementById(id);
                if (element) { element.scrollIntoView({ behavior: 'smooth' });
            } 
        }, 100);

        return (
            <></>
        )
}
