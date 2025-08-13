import sql from "mssql";
import dbConfig from "../../config/dbConfig";

export class DataRepository {
  async getDataReferences(query: string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const result = await pool.request().execute(query);
      return result.recordset;
    } catch (error) {
      console.error("Error al obtener datos de referencias:", error);
      throw error;
    }
  }
  async isertDataReferences(query: string,reference: number, releaseStartDate: string | null, releaseStartTime: string | null, releaseFinishDate: string | null, releaseFinishTime: string | null, sampleStartDate: string | null, sampleStartTime: string | null, sampleFinishDate: string | null, sampleFinishTime: string | null, stampedDate: string | null, stampedTime: string | null, releaseTemperature: number | null, sampleTemperature: number | null, stampedTemperature: number | null, user: string): Promise<any> {
    try {
      const pool = await sql.connect(dbConfig);
      const request = pool.request();
      request.input("RgOeNo", sql.Int, reference);
      request.input("RgOeFIniLib", sql.Char, releaseStartDate);
      request.input("RgOeHIniLib", sql.Char, releaseStartTime);
      request.input("RgOeFFinLib", sql.Char, releaseFinishDate);
      request.input("RgOeHFinLib", sql.Char, releaseFinishTime);
      request.input("RgOeFIniMst", sql.Char, sampleStartDate);
      request.input("RgOeHIniMst", sql.Char, sampleStartTime);
      request.input("RgOeFFinMst", sql.Char, sampleFinishDate);
      request.input("RgOeHFinMst", sql.Char, sampleFinishTime);
      request.input("RgOeFecSell", sql.Char, stampedDate);
      request.input("RgOeHraSell", sql.Char, stampedTime);
      request.input("RgOeTempLib", sql.Float, releaseTemperature);
      request.input("RgOeTempMst", sql.Float, sampleTemperature);
      request.input("RgOeTempSell", sql.Float, stampedTemperature);
      request.input("usuario", sql.Char, user);
      const result = await request.execute(query);
      return result.recordset;
    } catch (error) {
      console.error("Error al insertar datos de referencias:", error);
      throw error;
    }
  }
    
}

