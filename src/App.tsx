
import { useSelector, useDispatch } from 'react-redux';
import { useGetServicesQuery } from './api/servicesApi';
import {
    addService,
    removeService,
    updateQuantity,
    clearSelectedServices,
} from './store/servicesSlice';
import { ServiceCard } from './components/ServiceCard/ServiceCard';
import { SelectedServices } from './components/SelectedServices/SelectedServices';
import { Layout } from './components/Layout/Layout';
import styles from './App.module.css';
import type { AppDispatch, RootState } from './store';
import type { Service } from './types';

export const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        data: services = [],
        isLoading,
        error
    } = useGetServicesQuery();

    const { selectedServices, totalAmount } = useSelector(
        (state: RootState) => state.services
    );

    const addServiceHandler = (service: Service) => {
        dispatch(addService(service));
    };

    const removeServiceHandler = (id: string) => {
        dispatch(removeService(id));
    };

    const updateQuantityHandler = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const clearServicesHandler = () => {
        dispatch(clearSelectedServices());
    };

    const checkoutHandler = () => {
        alert('Спасибо за заказ! С вами свяжется представитель авиакомпании для подтверждения.');
        clearServicesHandler();
    };

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px',
                color: '#1976d2'
            }}>
                Загрузка услуг...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '18px',
                color: '#d32f2f'
            }}>
                Ошибка загрузки услуг
            </div>
        );
    }

    return (
        <Layout>
            <div className={styles.app}>
                <div className={styles.content}>
                    <section className={styles.servicesSection}>
                        <h2 className={styles.sectionTitle}>Доступные услуги</h2>
                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    onAdd={addServiceHandler}
                                />
                            ))}
                        </div>
                    </section>

                    <aside className={styles.sidebar}>
                        <SelectedServices
                            services={selectedServices}
                            totalAmount={totalAmount}
                            onRemove={removeServiceHandler}
                            onUpdateQuantity={updateQuantityHandler}
                            onClear={clearServicesHandler}
                            onCheckout={checkoutHandler}
                        />
                    </aside>
                </div>
            </div>
        </Layout>
    );
};