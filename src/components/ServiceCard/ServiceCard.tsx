
import { Button } from '../UI/Button/Button';
import styles from './ServiceCard.module.css';
import type { Service } from '../../types';

type ServiceCardProps = {
    service: Service;
    onAdd: (service: Service) => void;
};

export const ServiceCard = ({ service, onAdd }: ServiceCardProps) => {
    const addHandler = () => {
        onAdd(service);
    };

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h3 className={styles.name}>{service.name}</h3>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.footer}>
          <span className={styles.price}>
            {service.price.toLocaleString('ru-RU')} ₽
          </span>
                    <Button
                        onClick={addHandler}
                        ariaLabel={`Добавить ${service.name}`}
                        size="medium"
                    >
                        <span className={styles.buttonText}>Добавить</span>
                        <span className={styles.buttonIcon}>+</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};