import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Service } from '../types';
import {MOCK_SERVICES} from "../utils/constants.ts";


export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getServices: builder.query<Service[], void>({
            queryFn: () => {
                return { data: MOCK_SERVICES };
            },
        }),
    }),
});

export const { useGetServicesQuery } = servicesApi;