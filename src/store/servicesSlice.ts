import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Service, ServicesState } from '../types';
import { MOCK_SERVICES } from '../utils/constants';

const initialState: ServicesState = {
    services: MOCK_SERVICES,
    selectedServices: [],
    totalAmount: 0,
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addService: (state, action: PayloadAction<Service>) => {
            const existingService = state.selectedServices.find(
                (service) => service.id === action.payload.id
            );

            if (existingService) {
                existingService.quantity += 1;
            } else {
                state.selectedServices.push({
                    ...action.payload,
                    quantity: 1,
                });
            }

            state.totalAmount = state.selectedServices.reduce(
                (total, service) => total + service.price * service.quantity,
                0
            );
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.selectedServices = state.selectedServices.filter(
                (service) => service.id !== action.payload
            );

            state.totalAmount = state.selectedServices.reduce(
                (total, service) => total + service.price * service.quantity,
                0
            );
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) => {
            const service = state.selectedServices.find(
                (s) => s.id === action.payload.id
            );
            if (service) {
                service.quantity = action.payload.quantity;
                if (service.quantity <= 0) {
                    state.selectedServices = state.selectedServices.filter(
                        (s) => s.id !== action.payload.id
                    );
                }
            }

            state.totalAmount = state.selectedServices.reduce(
                (total, service) => total + service.price * service.quantity,
                0
            );
        },
        clearSelectedServices: (state) => {
            state.selectedServices = [];
            state.totalAmount = 0;
        },
    },
});


export const {
    addService,
    removeService,
    updateQuantity,
    clearSelectedServices
} = servicesSlice.actions;

export default servicesSlice.reducer;