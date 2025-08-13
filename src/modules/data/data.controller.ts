import { Request } from "express";
import { DataService } from "./data.services";

export const getReferencesController = async (req: Request) => {
  try {
    const query: string =
      "Sp_App_Registro_Datos_Inspeccion_Consulta_Referencias";
    return new DataService().fetchDataReferencesServices(query);
  } catch (error) {
    console.error("Error en getReferencesController:", error);
    throw new Error(
      "Error en el controlador al obtener los datos de referencias"
    );
  }
};
export const insertReferencesController = async (req: Request) => {
  try {
    const {
      reference,
      releaseStartDate,
      releaseStartTime,
      releaseFinishDate,
      releaseFinishTime,
      sampleStartDate,
      sampleStartTime,
      sampleFinishDate,
      sampleFinishTime,
      stampedDate,
      stampedTime,
      releaseTemperature,
      sampleTemperature,
      stampedTemperature,
    } = req.body;
    const query: string =
      "Sp_App_Registro_Datos_Inspeccion_Insertar_Datos";
    return new DataService().insertDataReferencesServices(
      query,
      reference,
      releaseStartDate,
      releaseStartTime,
      releaseFinishDate,
      releaseFinishTime,
      sampleStartDate,
      sampleStartTime,
      sampleFinishDate,
      sampleFinishTime,
      stampedDate,
      stampedTime,
      releaseTemperature,
      sampleTemperature,
      stampedTemperature
    );
  } catch (error) {
    console.error("Error en insertReferencesController:", error);
    throw new Error(
      "Error en el controlador al insertar los datos de referencias"
    );
  }
};
