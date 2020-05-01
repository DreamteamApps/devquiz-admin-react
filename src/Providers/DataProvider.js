import axios from 'axios';

import { baseUrl } from '../General/Constants';

export default () => {
    return {
        getList: (resource, params) => {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;

            const url = `${baseUrl}/admin/${resource}?page=${page}&perPage=${perPage}&sortBy=${field}&sort=${order}`;
            const token = localStorage.getItem('token');
            const auth = { headers: { Authorization: `Bearer ${token}` } };

            return axios.get(url, auth).then(({ data }) => ({
                data: data.data,
                total: data.total,
            }));
        },

        getOne: (resource, params) => {
            const { id } = params;

            const url = `${baseUrl}/admin/${resource}/${id}`;
            const token = localStorage.getItem('token');
            const auth = { headers: { Authorization: `Bearer ${token}` } };

            return axios.get(url, auth).then(({ data }) => ({
                data: data
            }));
        },

        getMany: (resource, params) => {
            const { ids } = params;

            const url = `${baseUrl}/admin/${resource}/list?ids=${ids.join(',')}`;
            const token = localStorage.getItem('token');
            const auth = { headers: { Authorization: `Bearer ${token}` } };

            return axios.get(url, auth).then(({ data }) => ({
                data: data,
            }));
        },

        getManyReference: (resource, params) => Promise.resolve(),

        update: (resource, params) => Promise.resolve(),

        updateMany: (resource, params) => Promise.resolve(),

        create: (resource, params) => {
            const url = `${baseUrl}/admin/${resource}`;
            const token = localStorage.getItem('token');
            const auth = { headers: { Authorization: `Bearer ${token}` } };

            return axios.post(url, params.data, auth).then(({ data }) => ({ data }));
        },

        delete: (resource, params) => {
            const { id } = params;

            const url = `${baseUrl}/admin/${resource}/${id}`;
            const token = localStorage.getItem('token');
            const auth = { headers: { Authorization: `Bearer ${token}` } };

            return axios.delete(url, auth).then(({ data }) => ({
                data: data
            }));
        },

        deleteMany: (resource, params) => Promise.resolve(),
    }
};