import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import styles from './SelectedServices.module.css';
import type { SelectedService } from '../../types';

type SelectedServicesProps = {
    services: SelectedService[];
    totalAmount: number;
    onRemove: (id: string) => void;
    onUpdateQuantity: (id: string, quantity: number) => void;
    onClear: () => void;
    onCheckout: () => void;
};

export const SelectedServices = ({
                                     services,
                                     totalAmount,
                                     onRemove,
                                     onUpdateQuantity,
                                     onClear,
                                     onCheckout,
                                 }: SelectedServicesProps) => {
    const quantityChangeHandler = (id: string, value: string) => {
        const quantity = parseInt(value);
        if (!isNaN(quantity) && quantity >= 0) {
            onUpdateQuantity(id, quantity);
        }
    };

    if (services.length === 0) {
        return (
            <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🛒</div>
                <p className={styles.emptyText}>Выберите услуги из списка</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Выбранные услуги</h2>
                <Button
                    onClick={onClear}
                    variant="secondary"
                    size="small"
                    ariaLabel="Очистить все"
                >
                    Очистить
                </Button>
            </div>

            <div className={styles.servicesList}>
                {services.map((service) => (
                    <div key={service.id} className={styles.serviceItem}>
                        <div className={styles.serviceInfo}>
                            <h3 className={styles.serviceName} title={service.name}>
                                {service.name}
                            </h3>
                            <p className={styles.servicePrice}>
                                {service.price.toLocaleString('ru-RU')} ₽ ×
                            </p>
                        </div>

                        <div className={styles.controls}>
                            <div className={styles.quantityControl}>
                                <Button
                                    onClick={() => onUpdateQuantity(service.id, service.quantity - 1)}
                                    variant="secondary"
                                    size="small"
                                    ariaLabel="Уменьшить количество"
                                    className={styles.quantityButton}
                                >
                                    −
                                </Button>
                                <Input
                                    type="number"
                                    value={service.quantity}
                                    onChange={(value) => quantityChangeHandler(service.id, value)}
                                    size="small"
                                    min={1}
                                    ariaLabel={`Количество ${service.name}`}
                                    className={styles.quantityInput}
                                />
                                <Button
                                    onClick={() => onUpdateQuantity(service.id, service.quantity + 1)}
                                    variant="secondary"
                                    size="small"
                                    ariaLabel="Увеличить количество"
                                    className={styles.quantityButton}
                                >
                                    +
                                </Button>
                            </div>

                            <div className={styles.subtotal}>
                                {(service.price * service.quantity).toLocaleString('ru-RU')} ₽
                            </div>

                            <Button
                                onClick={() => onRemove(service.id)}
                                variant="danger"
                                size="small"
                                ariaLabel={`Удалить ${service.name}`}
                                className={styles.removeButton}
                            >
                                ×
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                    <span className={styles.totalLabel}>Итого:</span>
                    <span className={styles.totalAmount}>
                        {totalAmount.toLocaleString('ru-RU')} ₽
                    </span>
                </div>

                <Button
                    onClick={onCheckout}
                    variant="success"
                    size="large"
                    ariaLabel="Оформить заказ"
                    className={styles.checkoutButton}
                >
                    Оформить заказ
                </Button>

                <p className={styles.note}>
                    После нажатия кнопки «Оформить заказ» с вами свяжется представитель авиакомпании
                </p>
            </div>
        </div>
    );
};