import ErrorHandler from "../utils/ErrorHandler.js";

const error=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    
    err.message= err.message || "Internal server error please try again later";

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

export default error;