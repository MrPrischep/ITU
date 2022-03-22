// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import Head from 'next/head';
import {LinkOutlined} from '@ant-design/icons';
import {Col, Row, List} from 'antd';


const data = [
    {
      title: <span className='fontSizeMd'><a href="https://dpmb.cz/cs/download/6755">Organizační schéma DPMB, a.s.</a></span>,
      description: 'Popis všech schémat různých přeprav od roku 2017'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Strategie DPMB</a></span>,
      description: 'Strategie je vyjádřena v jednoduchém grafickém schématu.'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Výroční zprávy</a></span>,
      description: 'Katalog všech hlavních novinek pro každý rok'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Historie firmy</a></span>,
      description: 'Popis založení společnosti'
      
    },
  ];

  const dat = [
    {
      title: <span className='fontSizeMd'><a href="#">Nabídky pronájmů</a></span>,
      description: 'Сeny a nabídka'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Veřejné zakázky podlimitní</a></span>,
      description: 'Věstník veřejných zakázek:'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Informace zveřejňované o povinném subjektu</a></span>,
      description: 'Kontakt, způsob založení, organizace'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Lodní doprava</a></span>,
      description: 'Popis všech schémat různých přeprav od roku 2017'

    },
  ];
  const date = [
    {
      title: <span className='fontSizeMd'><a href="#">Dopravní informace</a></span>,
      description: 'Popis kompletní práce komunikace'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Dopravní podniky</a></span>, 
      description: 'Odkaz na stránky'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Jihomoravský kraj</a></span>, 
      description: 'Novinky a zprávy kraje'
    },
    {
      title: <span className='fontSizeMd'><a href="#">Statutární město Brno</a></span>,
      description: 'Popis města Brno'

    },
  ];

export default class Links extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>O nas</title>
                    <style dangerouslySetInnerHTML={{__html: `
                    .ant-list-item-meta-title {
                        fontSize: '20px';
                    }`
                    }}/>
                </Head>
                <p className='fontSizeLg' align='center' >
                    Důležité odkazy</p>
                <Row align='center' style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]}>
                    <Col xs={22} md={20} lg={6} xl={6} xxl={6} style={{paddingRight:'2em'}} align='center' >
                        <List itemLayout="horizontal"
                        size="large" 
                            dataSource={data}
                            renderItem={item => (
                            <List.Item >
                                <List.Item.Meta
                                    avatar={<LinkOutlined  style={{ fontSize: '20px', color: 'rgb(75, 146, 147)'}}/>}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}
                                    />
                             </List.Item>)}/>
                    </Col> 
                    <Col xs={22} md={20} lg={6} xl={6} xxl={6} style={{paddingRight:'2em'}} align='center'>
                        <List itemLayout="horizontal"
                        size="large"
                            dataSource={dat}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<LinkOutlined  style={{ fontSize: '20px', color: 'rgb(75, 146, 147)'}}/>}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}
                                    />
                             </List.Item>)}/>
                    </Col> 
                    <Col xs={22} md={20} lg={6} xl={6} xxl={6} style={{paddingRight:'2em'}} align='center'>
                        <List itemLayout="horizontal"
                        size="large"
                            dataSource={date}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<LinkOutlined  style={{ fontSize: '20px', color: 'rgb(75, 146, 147)'}}/>}
                                    title={<a href="/">{item.title}</a>}
                                    description={item.description}
                                    />
                             </List.Item>)}/>
                    </Col> 
                </Row>                  
            </div>
        )
    }
}



