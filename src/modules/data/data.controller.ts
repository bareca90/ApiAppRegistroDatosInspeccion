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
