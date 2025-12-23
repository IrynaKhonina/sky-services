import React from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>✈️</span>
                        <h1 className={styles.logoText}>SkyServices</h1>
                    </div>
                    <p className={styles.subtitle}>
                        Дополнительные услуги для вашего комфорта в полете
                    </p>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    {children}
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p className={styles.footerText}>
                        © 2025 SkyServices. Все права защищены.
                    </p>
                </div>
            </footer>
        </div>
    );
};