import jwt from "jsonwebtoken";
const isAuthenaticated = async (req,resizeBy,next) =>
{
    try
    {
        const token = req.cookies.token;
        if(!token)
        {
            return resizeBy.status(401).json({
                message:"User Not authenaticated",
                success:false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    }catch(err)
    {
        console.log(err);
    }
}

export default isAuthenaticated;