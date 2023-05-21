import prisma from "../../../config/helper";
import { Request, Response } from "express"
interface AuthenticatedRequest extends Request {
  user?: any;
}
export  const coustmerDelete = async(req:AuthenticatedRequest, res:Response):Promise<any>=>{
 try{
 const data1 = await prisma.coustmer.delete({
      where:{
        id:req.params.id
      }
 })
    res.status(200).json({
      message:"coustmer deleted successfuly",
      data:data1
    })
}catch(error){
  res.status(500).send(error.message)
}
} 
