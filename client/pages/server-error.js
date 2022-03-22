// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import Head from 'next/head';
import styles from './styles/server-error.module.sass'
import { Result, Button } from 'antd';


export default class ServerError extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

     render() {
        return (
            <div align='center' style={{background: 'white'}}>
                <Head>
                    <title>Oooops</title>
                    <meta name='description' content='Bla'/>
                </Head>
                <Result
                    status="403"
                    title={
                        <span className={styles.mainHeader}>
                            Ooops - něco se pokazilo a server neodpovídá
                        </span>
                    }
                    subTitle={
                        <span className={styles.nextHeader}>
                            Ale nebojte se, brzy to napravíme
                        </span>
                    }
                    extra={<Button type="primary" onClick={() => window.location.href = "/"}>Zpět</Button>}
                    className={styles.result}

                    />
            </div>

         )
     }


}
