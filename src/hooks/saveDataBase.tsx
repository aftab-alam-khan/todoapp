import { useEffect } from 'react';
import { saveToFarDistantDatabase } from '../localDataStorage/localDataStorage';

export function useUpdateDataBase(toDoLists: string[], deleteListItem: number[]) {
    useEffect((): any => {
        saveToFarDistantDatabase('our-item-key', toDoLists);
        saveToFarDistantDatabase('delete-item-key', deleteListItem);

    }, [toDoLists, deleteListItem]);
}