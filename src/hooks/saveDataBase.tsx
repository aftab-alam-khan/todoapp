import { useEffect } from 'react';
import { saveToFarDistantDatabase } from '../localDataStorage/localDataStorage';

export function useUpdateDataBase(toDoLists: string[], deleteListItem: number[], loading:boolean) {
    useEffect((): any => {
        if (!loading) {
            saveToFarDistantDatabase('our-item-key', toDoLists);
            saveToFarDistantDatabase('delete-item-key', deleteListItem);
        }

    }, [toDoLists, deleteListItem, loading]);
}