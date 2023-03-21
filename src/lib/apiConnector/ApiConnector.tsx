import axios from 'axios';
import {setCommonData} from '@reducers/commonData/dispatchers';
import config from '../../config';
import i18n from 'i18next';

const buildFormData = (formData, data, parentKey) => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
};

export type RequestData = {
    action:string;
    method?:any
    params?:{
        [key:string]:any;
    };
    postParams?:{
        [key:string]:any;
    };
    isIsolated?:boolean;
};

type RequestF = <T = any>(data:RequestData) => Promise<{ data:T, status:boolean }>;

export class ApiConnector{

    static request:RequestF = async (data) => {

        const defaultParams = {
            appCode: 1
        };

        const method = data.method ?? 'get';
        const url = config.apiHost + data.action;
        const params = data.params ? Object.assign(defaultParams, data.params) : defaultParams;
        const dataParams = method === 'post' ? (data.postParams ? data.postParams : data.params) : {};
        const isIsolated = data.isIsolated ?? false;

        const formData = new FormData();

        buildFormData(formData, dataParams, '');

        const requestBody = {
            method, url, params: {...params, reactApp: 'test'},
            withCredentials: true,
            data: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };

        if (isIsolated) setCommonData({langCode: 'ru'});

        const serverResponse = await axios(requestBody);

        const apiResponse = serverResponse.data;

        if(apiResponse.data?.code == 'redirect') {
            //Спецкод на принудительную переадресацию
            window.location.href = apiResponse.data.redirection?.link;
        }

        if (apiResponse.status && apiResponse.data?.common) {
            //Общие данные сохраняем в Redux всегда, когда они приходят
            setCommonData(apiResponse.data.common);
            if(apiResponse.data?.common?.settings?.langCode){
                await i18n.changeLanguage(apiResponse.data?.common?.settings?.langCode);
            }
        }

        return await apiResponse;
    };
}