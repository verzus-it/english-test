import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {Router} from '@modules/router';
import {store} from 'store';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import {Preloader} from '@components/modules/common/preloader';
import {CustomDragLayer} from '@modules/tasks/dragAndDropWord/parts/stage/parts';

// HTML5Backend не работает на тач-устройствах (нативный drag&drop не вызывается
// при касании), поэтому на телефонах/планшетах используем TouchBackend.
const isTouchDevice = typeof window !== 'undefined' &&
    (('ontouchstart' in window) || navigator.maxTouchPoints > 0);

const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;
const dndOptions = isTouchDevice ? {enableMouseEvents: true, ignoreContextMenu: true} : undefined;

export const App = () =>
    <Provider store={store}>
        <Suspense fallback={<Preloader/>}>
            <DndProvider backend={dndBackend} options={dndOptions}>
                <Router/>
                {isTouchDevice && <CustomDragLayer/>}
            </DndProvider>
        </Suspense>
    </Provider>;
