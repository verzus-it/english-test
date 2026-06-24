import React from 'react';
import {useDragLayer, XYCoord} from 'react-dnd';

import styles from './styles.scss';

const layerStyles:React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 1000,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

const getItemStyles = (offset:XYCoord | null, width?:number, height?:number):React.CSSProperties => {
    if (!offset) return {display: 'none'};

    return {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined
    };
};

// Превью перетаскиваемого слова. Нужно для тач-устройств: TouchBackend,
// в отличие от HTML5Backend, не рисует «призрак» под пальцем.
export const CustomDragLayer = () => {
    const {isDragging, item, offset} = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        offset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    }));

    if (!isDragging || !item || !item.word) return null;

    return <div style={layerStyles}>
        <div style={getItemStyles(offset, item.width, item.height)}>
            <div className={styles.dragWordPreview}>{item.word}</div>
        </div>
    </div>;
};
