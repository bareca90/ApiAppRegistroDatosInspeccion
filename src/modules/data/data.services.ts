import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpresponse.utils";
import { DataRepository } from "./data.repository";

export class DataService {
  private dataRepository: DataRepository;

  constructor(dataRepository: DataRepository) {
    this.dataRepository = dataRepository;
  }
  async fetchDataReferences(query: string): Promise<any> {
    try {
      const data = await this.dataRepository.getDataReferences(query);
      return HttpResponse.response(
        CodesHttpEnum.ok,
        data,
        "Datos obtenidos correctamente"
      );
    } catch (error) {
      console.error("Error en DataService fetchDataReferences:", error);
      throw new Error("Error al obtener los datos de referencias");
    }
  }
}
