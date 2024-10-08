import React from 'react';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className='display: flex'>
                <Image className={styles.logo} src="/image.png" alt="logo" width={200} height={36} />
                <div className={styles.sub}>calculator</div>
            </div>
        </header>
    );
};
export default Header;