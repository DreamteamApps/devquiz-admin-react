import React, { useEffect } from 'react';
import SocketIO from 'socket.io-client';

import { useDispatch } from 'react-redux';
import { setStatisticsAction } from '../Reducers/Statistics';

import { baseUrl } from '../General/Constants';

export let SocketClient;

const SocketEventsEnum = {
    STATISTICS_UPDATE: 'statistics-update'
}

export const SocketProvider = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        connect();

        return () => {
            disconnect();
        }
    }, []);

    const connect = () => {
        SocketClient = SocketIO(baseUrl);

        SocketClient.emit('statistics-client-connect');

        initializeListeners();
    }

    const disconnect = () => {
        SocketClient.disconnect();
    }

    const initializeListeners = () => {
        SocketClient.on(SocketEventsEnum.STATISTICS_UPDATE, (statistics) => dispatch(setStatisticsAction(statistics)));
    }

    return <></>;
}