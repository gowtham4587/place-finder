//To check the passed value is Empty or not
export function checkEmpty(value){
    return (value === null || value === undefined || value===[] || Object.keys(value).length < 1) ? true :false;    
}