
export type Service = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'comfort' | 'food' | 'entertainment' | 'luggage';
};

export type SelectedService = Service & {
    quantity: number;
};

export type ServicesState = {
    services: Service[];
    selectedServices: SelectedService[];
    totalAmount: number;
};