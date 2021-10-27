import { useEffect } from 'react';

export function useUpdateTitle(toDoLists: string[], deleteListItem: number[]) {
    useEffect((): any => {

        if (toDoLists.length) {
            if (deleteListItem.length) {
                document.title = `ToDo ${toDoLists.length} (${deleteListItem.length})`;
            } else {
                document.title = `ToDo ${toDoLists.length}`;
            }
        } else {
            document.title = `ToDo`;
        }
    }, [toDoLists, deleteListItem]);
}