const CalculateTie =(arr)=>{
    if(arr.every(elem => elem !== null)){
        return true;
    }
    return false;
}
export default CalculateTie