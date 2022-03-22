// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import Head from 'next/head';
import {Col, Row, Table } from 'antd';

const { Column, ColumnGroup } = Table;

import styles from './styles/table.module.sass'


const data = [
    {
      key: '1',
      transport: 'KT8',
      price: '330 000 Kč',
      price2: '300 000 Kč',
      price3: '270 000 Kč',
      product: '178 000 Kč',
    },
    {
      key: '2',
      transport: 'Vario dlouhé',
      price: '200 000 Kč',
      price2: '180 000 Kč',
      price3: '160 000 Kč',
      product: '120 000 Kč',
    },
    {
      key: '3',
      transport: 'Vario krátké',
      price: '170 000 Kč', 
      price2: '150 000 Kč',
      price3: '130 000 Kč',
      product: '94 000 Kč',
    },
    {
        key: '4',
        transport: 'Anitra',
        price: '300 000 Kč',
        price2: '270 000 Kč',
        price3: '250 000 Kč',
        product: '162 000 Kč',
      },
      {
        key: '5',
        transport: 'Škoda 13T',
        price: '500 000 Kč',
        price2: '450 000 Kč',
        price3: '400 000 Kč',
        product: '200 000 Kč',
      },
  ];
  const tram = [
    {
      key: '1',
      transport: 'Tramvaj',
      price: '8 500 Kč',
      price2: '7 000 Kč',
      price3: '75 000 Kč',
      product: '8 000 Kč',
    },
    {
      key: '2',
      transport: 'Autobus, trolejbus',
      price: '6 000 Kč',
      price2: '5 000 Kč',
      price3: '50 000 Kč',
      product: '5 000 Kč',
    },
  ];
  const leaflet = [
    {
      key: '1',
      transport: 'A4 svisle do 199 ks',
      price: '35 Kč',
      price2: '70 Kč',
      price3: '80 Kč',
      product: '10 Kč',
    },
    {
      key: '2',
      transport: 'A4 svisle do 200 ks',
      price: '30 Kč',
      price2: '60 Kč',
      price3: '70 Kč',
      product: '10 Kč',
    },
    {
        key: '3',
        transport: 'A4 vodorovně do 199 ks',
        price: '60 Kč',
        price2: '120 Kč',
        price3: '150 Kč',
        product: '10 Kč',
      },
      {
        key: '4',
        transport: 'A4 vodorovně do 200 ks',
        price: '55 Kč',
        price2: '110 Kč',
        price3: '140 Kč',
        product: '10 Kč',
      },
  ];


export default class ContactPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Reklama</title>
                    <style dangerouslySetInnerHTML={{__html: `
                    .ant-table-thead > tr > th {
                        background: #cee6e3  !important;
                    }`
                    }}/>
                </Head>
                <Row style={{overflow: 'hidden', marginBottom: '8vh'}} align='center'>
                    <Col xs={18} md={16} lg={15} xl={14} xxl={14} align='center' className={styles.table}>
                    <div className={styles.title}>
                            <p className='fontSizeMd' style={{padding: '0.5em 0'}} align='center'>VŠEOBECNÉ TECHNICKÉ PODMÍNKY POLEPU VOZIDEL A CENÍK</p>
                        </div>
                        <div className='fontSizeSm' align='center' style={{marginBottom: '8vh'}}>
                          <p >Objednavatel nese odpovědnost za estetickou úroveň, formu a obsah reklamy.
                          Celoplošná reklama musí zachovat kontrastní viditelnost povinných provozních údajů na povrchu vozidla,
                          musí zachovat předepsanou barvu živých částí elektrického zařízení pod napětím a výstražných tabulek.
                          Nesmí zakrývat svítilny, zrcátka, odrazky a
                          prosklennéčásti na pravé straně vozidla.
                          </p>
                        </div>
                        <div className={styles.table}>
                        <Table dataSource={data} pagination={false} className={styles.table} bordered='true' tableLayout='fixed' rowClassName={'fontSizeSm'}>
                            <ColumnGroup title="CELOPLOŠNÁ REKLAMA - TRAMVAJE - BEZ POLEPU OKEN" className={'fontSizeMd'}>
                            <ColumnGroup title="Typ vozidla" dataIndex="transport" key="transport" className={'fontSizeMd'}/>
                            <ColumnGroup title = "Pronájem reklamních ploch" dataIndex="advert" key="advert" className={'fontSizeMd'}>
                            <Column title="1.rok" dataIndex="price" key="price" className={'fontSizeMd '}/>
                            <Column title="2.rok" dataIndex="price2" key="price2" className={'fontSizeMd'} />
                            <Column title="3.rok" dataIndex="price3" key="price3" className={'fontSizeMd'}/>
                            </ColumnGroup>
                            <Column title="Zhotovení" dataIndex="product" key="product" className={'fontSizeMd'} />
                            </ColumnGroup>
                        </Table>
                        <div className='fontSizeSm' align='center' style={{marginBottom: '10vh'}}>
                        <p>*Reklamy typu MOBILBOARD, TRAMBOARD jsou řešeny kombinací speciálníokenní fólie
                        se schváleným použítím i na nouzových východech a klasické vinylové fólie. Reklama se instaluje na nenástupní stranu vozidla 
                        Přesný rozměr reklamního polepu se určuje podle konkrétního typu vozidla.
                        </p>
                        </div>
                        <Table dataSource={tram} pagination={false} rowClassName={'fontSizeMd'} bordered='true' >
                            <ColumnGroup title="TRAMBOARD,MOBILBOARD  REKLAMA - TRAMVAJE - BEZ POLEPU OKEN"className={'fontSizeMd'}>
                            <ColumnGroup title="Typ vozidla" dataIndex="transport" key="transport" className={'fontSizeMd'}/>
                            <ColumnGroup title = "Pronájem reklamních ploch" dataIndex="advert" key="advert" className={'fontSizeMd'}>
                            <Column title="1.měsic" dataIndex="price" key="price" className={'fontSizeMd'}/>
                            <Column title="každý další" dataIndex="price2" key="price2" className={'fontSizeMd'}/>
                            <Column title="12 měsiců" dataIndex="price3" key="price3" className={'fontSizeMd'}/>
                            </ColumnGroup>
                            <Column title="Instalace a odstranění " dataIndex="product" key="product" className={'fontSizeMd'}/>
                            </ColumnGroup>
                        </Table>
                        <Table dataSource={leaflet} pagination={false} style={{marginTop: '2em'}} rowClassName={'fontSizeMd'} bordered='true' >
                            <ColumnGroup title="LETÁKY VE VOZIDLECH" className={'fontSizeMd'}>
                            <ColumnGroup title="Formát" dataIndex="transport" key="transport" className={'fontSizeMd'}/>
                            <ColumnGroup title = "Pronájem reklamních ploch" dataIndex="advert" key="advert"className={'fontSizeMd'} >
                            <Column title="7 dní" dataIndex="price" key="price" className={'fontSizeMd'}/>
                            <Column title="14 dní" dataIndex="price2" key="price2" className={'fontSizeMd'}/>
                            <Column title="4 týdny" dataIndex="price3" key="price3" className={'fontSizeMd'}/>
                            </ColumnGroup>
                            <Column title="Instalace a odstranění " dataIndex="product" key="product" className={'fontSizeMd'}/>
                            </ColumnGroup>
                        </Table>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


