
import { Request, Response, Router } from "express";
import { validate } from "express-validation";
import { getReferencesController, insertReferencesController } from "./data.controller";
import { validationToken } from "../../middlewares/validationtoke.middleware";
import { HttpResponse } from "../../utils/httpresponse.utils";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { insertDataValidationsRferences } from "./data.validations";

const routes = Router();

routes.get(
  "/getreferences",
  validationToken as any,
  async (req: Request, res: Response) => {
    try {
      const response = await getReferencesController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);
routes.post(
  "/insertdatareferences",
  validationToken as any,
  validate(insertDataValidationsRferences,{},{}) as any,
  async (req: Request, res: Response) => {
    try {
      const response = await insertReferencesController(req);
      res.status(response.code).json(response);
    } catch (error) {
      HttpResponse.fail(
        res,
        CodesHttpEnum.internalServerError,
        null,
        (error as any).toString()
      );
    }
  }
);

export default routes;