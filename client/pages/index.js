// Author: Pastushenko Vladislav, Kozhevnikov Dmitrii
// Login: xpastu04, xkozhe00

import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row} from 'antd';

import { InfoCircleOutlined } from '@ant-design/icons';


import Navigator from "../components/Navigator/Navigator";
import styles from './styles/index.module.sass'

import Searcher from "../components/Searcher/searcher"
import News from "../components/News/news"
import Trams from "../components/Trams/trams"
import FAQS from "../components/Faqs/faqs"

import Link from 'next/link'

const api = new Api;


class IndexPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>DP | Index</title>
                    <meta name='description' content='Bla'/>
                </Head>
                <div className={styles.videoContainer} ref={this.myRef}>
                <video autoPlay={true} muted loop className={styles.myVideo}>
                    <source src="/train-min.mp4"/>
                </video>
                <div className={styles.videoOverlay}/>

                <div className={styles.videoContainerNavigatorContainer}>
                    <Navigator color='white'/>
                </div>

                <Row style={{height: '100%', overflow: 'hidden'}} className={styles.colContainer} align='center'>
                    <Col xs={22} md={24} lg={13} xl={14} xxl={10} align='center'>
                        <div className={styles.headerContainer}>
                            <div className='fontSizeLg' align='left'>
                                Dopravní podnik
                            </div>
                            <p className='fontSizeMd' align='left'>
                                Jezdíme pro vás
                            </p>
                            <Searcher />
                        </div>
                    </Col>
                </Row>
                </div>

                <div className={styles.secondSection}>
                    <h1 className='fontSizeXl' align='center' style={{fontWeight: 600, marginBottom: '5rem'}}>
                        Naše novinky
                    </h1>
                    <div style={{position: 'relative', zIndex: '0', marginBottom: '10rem'}}>
                        <News/>
                    </div>
                    <div style={{position: 'relative', zIndex: '0'}}>
                        <Trams/>
                    </div>

                    <div style={{marginTop: '12em', overflow: 'hidden'}}>

                        <Row gutter={[{xs: 0, md: 62, lg: 62}, 62]} align='center' style={{marginBottom: '10rem'}}>
                            <Col xs={22} sm={22} md={21} lg={13} xl={8} xxl={7} style={{position: 'relative', padding: '0 1em'}} id='howItWorks' className='fontSizeSm'>
                                <div  className={styles.card} style={{backgroundColor: '#5d83b6', color: 'white'}}>
                                    <div className={styles.flexBlockCenterItems}>
                                        <div>
                                        <Link href='/transport'>
                                            <p className={' fontSizeMd ' + styles.cardLinkHeader} align='left'>
                                                Doprava
                                            </p>
                                        </Link>
                                        <p className={' fontSizeSm ' + styles.blocksText}>
                                            Informujte se o naší dopravě
                                        </p>
                                        <p className={' fontSizeSm ' + styles.blocksText}>
                                            Zjistěte naše trasy v různých kategoriích transportů
                                        </p>
                                        <Link href='/transport'>
                                            <p className={' fontSizeSm ' + styles.cardLinkHeader}>
                                                Learn More
                                            </p>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={22} sm={22} md={10} lg={9} xl={8} xxl={5} style={{paddingTop: 0}}>
                                <Row style={{marginBottom: '10%'}}>
                                    <Col xs={22} sm={14} md={24} className={styles.card} style={{background: '#e5e5e5', padding: '3em 1.5em'}}>
                                        <div className={styles.flexBlockCenterItems}>
                                            <div>
                                                <Link href='/vacancies'>
                                                    <span className={styles.cardLinkHeader + ' fontSizeMd'}>
                                                        Kariéra
                                                    </span>
                                                </Link>
                                                <InfoCircleOutlined className={styles.cardIcon + ' fontSizeXl'}/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={22} sm={14} md={24} className={styles.card} style={{background: '#f5f5f5', padding: '3em 1.5em'}}>
                                        <div className={styles.flexBlockCenterItems}>
                                            <Link href='/pricelist'>
                                                <span className={styles.cardLinkHeader + ' fontSizeMd'}>
                                                    Reklamní služby
                                                </span>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={22} sm={22} md={12} lg={23} xl={7} xxl={7}>
                                <FAQS/>
                            </Col>
                        </Row>
                    </div>
                </div>


            </div>

        )
    }

}



const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, {
}) (IndexPage);


