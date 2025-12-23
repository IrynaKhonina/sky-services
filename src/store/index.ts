import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice';
import { servicesApi } from '../api/servicesApi';

export const store = configureStore({
    reducer: {
        services: servicesReducer,
        [servicesApi.reducerPath]: servicesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(servicesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;