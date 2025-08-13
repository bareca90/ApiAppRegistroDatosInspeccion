/*
"reference": 86105,
"client": "Zhuhai jianyuan Supply Chain Service Co, Ltd.                                             ",
"containerNumber": "MARLON                        ",
"loadingArea": "Promarisco",
"releaseStartDate": null,
"releaseStartTime": null,
"releaseFinishDate": null,
"releaseFinishTime": null,
"sampleStartDate": null,
"sampleStartTime": null,
"sampleFinishDate": null,
"sampleFinishTime": null,
"stampedDate": null,
"stampedTime": null,
"releaseTemperature": null,
"sampleTemperature": null,
"stampedTemperature": null
*/

export interface IDataReference {
    reference: number;
    releaseStartDate: string | null;
    releaseStartTime: string | null;
    releaseFinishDate: string | null;
    releaseFinishTime: string | null;
    sampleStartDate: string | null;
    sampleStartTime: string | null;
    sampleFinishDate: string | null;
    sampleFinishTime: string | null;
    stampedDate: string | null;
    stampedTime: string | null;
    releaseTemperature: number | null;
    sampleTemperature: number | null;
    stampedTemperature: number | null;
    user: string;
}
