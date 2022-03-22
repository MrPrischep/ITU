// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import Head from 'next/head';
import { MailOutlined, PhoneOutlined, HomeOutlined} from '@ant-design/icons';
import {Col, Row} from 'antd';
import Link from 'next/link'


export default class ContactPage extends React.Component {
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Kontakt</title>
                </Head>
                <p className='fontSizeLg' align='center' >
                        Základní identifikační údaje           
                </p>
                <Row style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]} align='center'>
                    <Col xs={22} md={20} lg={6} xl={5} xxl={5}  align='center'>
                        <HomeOutlined style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '110px'}}/>
                        <p className='fontSizeMd'style={{paddingTop:'2vh'}}>
                            <b>Adresa:</b>
                        </p>
                        <p className='fontSizeSm'>
                            <b>Sídlo společnosti:</b>
                            <br/>
                            Hlinky 64/151, Pisárky, 603 00 BRNO
                            <br/>
                            <b>Generální ředitelství</b>
                            <br/>
                            Novobranská 18, 656 46 BRNO
                            <br/>
                            <b>Podatelna</b>
                            <br/>
                            Tererova 12
                        </p>
                     </Col>
                     <Col xs={22} md={20} lg={6} xl={5} xxl={5} align='center'>
                        <PhoneOutlined style={{ fontSize: '48px',color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '120px'}}/>
                        <p className='fontSizeMd'style={{paddingTop:'2vh'}}>
                            <b>Telefon:</b>
                        </p>
                        <p className='fontSizeSm'>
                            <b>Dopravní informace</b>
                            <br/>
                            +420 543 174 317
                            <br/>
                            <b>Ztráty a nálezy</b>
                            <br/>
                            +420 543 171 111
                            <br/> 
                        </p>
                    </Col>
                    <Col xs={22} md={20} lg={6} xl={5} xxl={5}  align='center'>
                    <MailOutlined style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '120px'}}/>
                            <p className='fontSizeMd' style={{paddingTop:'2vh'}}> <b>Email:</b></p>
                            <p className='fontSizeSm'>
                             dpmb@dpmb.cz<br/>
                            
                           </p>
                     </Col>
                </Row>
                <Row style={{height: '100%', overflow: 'hidden', paddingTop:'4em'}} align='center'>
                    <Col xs={8} md={7} lg={5} xl={4} xxl={3} style={{marginRight:'50px'}}>
                        <p className='fontSizeLg' align='center'>
                            <u> Máte otázky? </u>
                        </p>
                        <p align='center' className='fontSizeMd' >
                            <Link href="/contact-us">
                                <a >Napište nam!</a>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}



