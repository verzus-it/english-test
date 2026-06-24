import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import classNames from 'classnames';

import styles from './styles.scss';

export interface DragItem {
    word:string;
    // Откуда тащим: индекс ячейки-источника или null, если слово из общего пула.
    fromCell:number | null;
    width?:number;
    height?:number;
}

interface PoolWordProps {
    word:string;
    used:boolean;
}

interface AnswerCellProps {
    value:string | null;
    cellIndex:number;
    onDrop:(item:DragItem, toCell:number) => void;
}

// Слово в нижнем пуле вариантов. Можно перетащить в любую ячейку.
// Когда слово уже расставлено в ячейку — прячем его в пуле.
export const PoolWord = ({word, used}:PoolWordProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'word',
        item: ():DragItem => {
            const rect = ref.current?.getBoundingClientRect();
            return {word, fromCell: null, width: rect?.width, height: rect?.height};
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [word]);

    drag(ref);

    return <div
        ref={ref}
        className={classNames(
            styles.dragWord,
            isDragging && styles.dragWordDragging,
            used && styles.dragWordDropped
        )}
    >{word}</div>;
};

// Ячейка под картинкой. Всегда является зоной сброса (drop),
// а когда заполнена — ещё и источником перетаскивания (drag),
// что позволяет менять расставленные слова местами.
export const AnswerCell = ({value, cellIndex, onDrop}:AnswerCellProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'word',
        canDrop: (item:DragItem) => item.fromCell !== cellIndex,
        drop: (item:DragItem) => onDrop(item, cellIndex),
        collect: (monitor) => ({
            isOver: !!monitor.isOver() && !!monitor.canDrop()
        })
    }), [cellIndex, onDrop]);

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'word',
        canDrag: () => value != null,
        item: ():DragItem => {
            const rect = ref.current?.getBoundingClientRect();
            return {word: value as string, fromCell: cellIndex, width: rect?.width, height: rect?.height};
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [value, cellIndex]);

    drag(drop(ref));

    if (value == null) {
        return <div
            ref={ref}
            className={classNames(
                styles.dropCell,
                isOver && styles.dropCellOver
            )}
        />;
    }

    return <div
        ref={ref}
        className={classNames(
            styles.dragWord,
            isDragging && styles.dragWordDragging,
            isOver && styles.dragWordOver
        )}
    >{value}</div>;
};
