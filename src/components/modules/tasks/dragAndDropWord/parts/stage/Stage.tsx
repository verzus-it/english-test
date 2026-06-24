import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {setTaskStatus, setTaskDone} from '@reducers/testData/dispatchers';
import {AnswerCell, PoolWord, DragItem} from './parts';
import styles from './styles.scss';

export const Stage = ({task}) => {
    const testData = useSelector((state:any) => state.testData);
    const {subject, test, option, tasksProgress} = testData;
    const words:any[] = task.option[option].words;
    const correctAnswer:string[] = task.option[option].correctAnswer;
    const currentAnswer:(string | null)[] = [...tasksProgress[+task.id - 1].currentAnswer];

    useEffect(() => {
        //Сравниваем результаты
        const isEqual = JSON.stringify(currentAnswer) === JSON.stringify(correctAnswer);
        let score = 0;

        for (let i = 0; i < currentAnswer.length; i++) {
            if (currentAnswer[i] && currentAnswer[i].toLowerCase() === correctAnswer[i].toLowerCase()) ++score;
        }

        if (isEqual) setTaskStatus({key: task.id, status: true, score: score});
        else setTaskStatus({key: task.id, status: false, score: score});
    }, [currentAnswer]);

    // Расстановка/обмен слов. Источник — пул (fromCell === null) или другая ячейка.
    const handleDrop = (item:DragItem, toCell:number) => {
        const next:(string | null)[] = words.map((_, i) => currentAnswer[i] ?? null);

        if (item.fromCell != null) {
            // Перетащили из другой ячейки — меняем содержимое местами.
            if (item.fromCell === toCell) return;
            const displaced = next[toCell];
            next[toCell] = next[item.fromCell];
            next[item.fromCell] = displaced ?? null;
        } else {
            // Перетащили из пула — ставим слово; прежнее слово ячейки уходит обратно в пул.
            next[toCell] = item.word;
        }

        const done = next.length >= words.length && next.every((a) => a != null);
        setTaskDone({key: task.id, done, value: next});
    };

    return <div key={task.id} className={styles.task}>
        <span className={styles.taskNumber}>{task.id}.</span>
        <div className={styles.dropCellsContainer}>
            {words.map((word, index) => {
                return <div key={index} className={styles.dropCellWrapper}>
                    <div className={styles.imgWrapper}>
                        <img
                            src={require(`_assets/img/tasks/${subject}/${test}/${word.img}`)}
                            alt='image'
                            className={styles.image}
                        />
                    </div>
                    <AnswerCell
                        value={currentAnswer[index] ?? null}
                        cellIndex={index}
                        onDrop={handleDrop}
                    />
                </div>;
            })}
        </div>
        <div className={styles.dragWordsContainer}>
            {words.map((word, index) => {
                return <PoolWord
                    key={index}
                    word={word.word}
                    used={currentAnswer.includes(word.word)}
                />;
            })}
        </div>
    </div>;
};
