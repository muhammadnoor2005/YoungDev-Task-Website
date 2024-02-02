import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import styles from "./TrendingCard.module.css";
import { useRouter } from 'next/router';

//trending section single cart
export default function({imgSrc,title}){
    const router = useRouter();
    const category = title.toLowerCase();
    return(
        <Card
            hoverable
            className={styles.card}
            cover={<img alt="tredingCard" src={imgSrc} />}
            onClick={() => {router.push(`/home/trending/${category}`)}}
        >
            <Meta title={title}/>
        </Card>
    )
}