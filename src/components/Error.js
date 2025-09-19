import { useRouteError } from "react-router-dom";   //give extra error features for eroor handling to see in console panel.


const Error=()=>{
    const err=useRouteError();   
console.log(err);
    return(
        <div className="err">
            <h1>{err.status} {err.statusText}</h1>
            <h1>Error something went wrong</h1>
        </div>
    );
};
export default Error;