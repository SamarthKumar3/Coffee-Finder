import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';

function Card(props) {
    return (
        <Link href={props.href} className={styles.cardLink}>
            <div className={cls("glass",styles.container)}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{props.name}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    <Image loader={() => props.imgUrl} src={props.imgUrl} alt={`${props.alt}`} height={160} width={260} className={styles.cardImage} />
                </div>
            </div>
        </Link>
    )
}

export default Card;