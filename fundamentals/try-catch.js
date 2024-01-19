const title = `Try-Catch Block Finally.`;
/**
 * try{
 *  some line of code...
 * }catch(error){
 *  console.log(error)
 *  console.log(error.type)
 *  console.log(error.message)
 * }finally{
 *  Final Statement...
 * }
 */

// Whenever we try getting data from API, 
// it gives us promises.AudioParamitmay be fullfilled or not.
// try-catch is used to handle errors.
const userName = "Geet Govind";
try{
    console.log(myname);
    console.log(userName);
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); 
}finally{
    console.log(userName);
}