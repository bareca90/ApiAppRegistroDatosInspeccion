import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpresponse.utils";
import { DataRepository } from "./data.repository";

export class DataService {
  private dataRepository: DataRepository;

  constructor() {
    this.dataRepository = new DataRepository()  ;
  }
  async fetchDataReferencesServices(query: string): Promise<any> {
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
  async insertDataReferencesServices(
    query: string,
    reference: number,
    releaseStartDate: string | null,
    releaseStartTime: string | null,
    releaseFinishDate: string | null,
    releaseFinishTime: string | null,
    sampleStartDate: string | null,
    sampleStartTime: string | null,
    sampleFinishDate: string | null,
    sampleFinishTime: string | null,
    stampedDate: string | null,
    stampedTime: string | null,
    releaseTemperature: number | null,
    sampleTemperature: number | null,
    stampedTemperature: number | null,
    user : string
  ): Promise<any> {
    try {
      const dataInsertDataReferences = await this.dataRepository.isertDataReferences(
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
        stampedTemperature,
        user
      );
      if (dataInsertDataReferences.codcodmsg == 300) {
        return HttpResponse.response(CodesHttpEnum.notFound, null, "No se encontraron datos para actualizar");
      } else {
        return HttpResponse.response(CodesHttpEnum.ok, dataInsertDataReferences, "Data from DataServices: dataInsertDataReferences");
      }
    } catch (error) {
      console.error("Error en DataService insertDataReferences:", error);
      throw new Error("Error al insertar los datos de referencias");
    }
  }

}
