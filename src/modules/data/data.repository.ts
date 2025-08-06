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
}
