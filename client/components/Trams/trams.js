// Author: Pastushenko Vladislav
// Login: xpastu04
import React from "react";
import styles from './trams.module.sass'

export default class Trams extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        let lineOfTrams = []
        for (let i = 0; i < 6; i++) {
            lineOfTrams.push(
                (<img src='tram.png' key={i} height={100} width={125}/>)
            )
        }
        return (
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <video autoPlay={true} muted loop className={styles.myVideo}>
                        <source src="/tram-compressed.mp4"/>
                    </video>
                    <div className={styles.trams + ' ' + styles.line1}>
                        {lineOfTrams}
                    </div>
                    <div className={styles.trams + ' ' + styles.line2} style={{top: 100}}>
                        {lineOfTrams}
                    </div>
                    <div className={styles.trams + ' ' + styles.line3} style={{top: 200}}>
                        {lineOfTrams}
                    </div>
                    <div className={styles.trams + ' ' + styles.line4} style={{top: 300}}>
                        {lineOfTrams}
                    </div>
                    <div className={styles.trams + ' ' + styles.line5} style={{top: 400}}>
                        {lineOfTrams}
                    </div>
                    <div className={styles.trams + ' ' + styles.line2} style={{top: 500}}>
                        {lineOfTrams}
                    </div>
                </div>
            </div>

        )
    }

}

