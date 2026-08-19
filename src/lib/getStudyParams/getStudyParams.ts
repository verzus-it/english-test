import {StudyParamsT, StudyFormT} from '@components/types';

const studyForms:StudyFormT[] = ['online', 'offline'];

const getQueryParam = (name:string):string => {
    const match = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);

    return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : '';
};

/**
 * Филиал и форма обучения, которые пользователь выбирает на сайте перед началом теста.
 * Приходят в GET-параметрах ссылки на тест и уходят на бэк вместе с результатами.
 */
export const getStudyParams = ():StudyParamsT => {
    const params:StudyParamsT = {};

    const filialID = parseInt(getQueryParam('filialID'), 10);
    const studyForm = getQueryParam('studyForm') as StudyFormT;

    if (filialID > 0) params.filialID = filialID;
    if (studyForms.indexOf(studyForm) !== -1) params.studyForm = studyForm;

    return params;
};
