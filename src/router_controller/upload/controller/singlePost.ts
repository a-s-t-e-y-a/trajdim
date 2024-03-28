import { Authenticate } from "interface/reqInterface";

import { Request, Response } from "express";



export const getUploads = async (
    req: Authenticate,
    res: Response
): Promise<any> => {
    try {
        if (!req.fileUrl) {
            return res.status(404).json({
                mesagge: "Error occured",
            })
        }
        res.status(200).json({
            message: "Photo uploaded successfully",
            data: req.fileUrl,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};
