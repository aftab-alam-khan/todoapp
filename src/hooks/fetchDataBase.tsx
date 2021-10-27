import { fetchFromFarDistantDatabase } from '../localDataStorage/localDataStorage';

type PossibleItemTypes = number[] | string[]

export async function fetchDataBase<item extends PossibleItemTypes>(dataArrayKeys:any): Promise<item[]> {
    const retrieveDatabase = dataArrayKeys.map((dataKey:any) => fetchFromFarDistantDatabase(dataKey))
    return await Promise.all(retrieveDatabase);
}