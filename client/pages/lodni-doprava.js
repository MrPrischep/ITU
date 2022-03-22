// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row} from 'antd';
import { Table, Tag, Space } from 'antd';
import Navigator from "../components/Navigator/Navigator";
import styles from './styles/ztraty.module.sass'

const columns = [
    { title: 'Stop', dataIndex: 'stop', key: 'stop', width: 150, fixed: 'left', render: text => <a>{text}</a>, },
    { title: 'time1', dataIndex: 'time1', key: 'time1', },
    { title: 'time2', dataIndex: 'time2', key: 'time2', },
    { title: 'time3', dataIndex: 'time3', key: 'time3', },
    { title: 'time4', dataIndex: 'time4', key: 'time4', },
    { title: 'time5', dataIndex: 'time5', key: 'time5', },
    { title: 'time6', dataIndex: 'time6', key: 'time6', },
    { title: 'time7', dataIndex: 'time7', key: 'time7', },
    { title: 'time8', dataIndex: 'time8', key: 'time8', },
    { title: 'time9', dataIndex: 'time9', key: 'time9', },
    { title: 'time10', dataIndex: 'time10', key: 'time10', },
    { title: 'time11', dataIndex: 'time11', key: 'time11', },
    { title: 'time12', dataIndex: 'time12', key: 'time12', },
    { title: 'time13', dataIndex: 'time13', key: 'time13', },
    { title: 'time14', dataIndex: 'time14', key: 'time14', },
    { title: 'time15', dataIndex: 'time15', key: 'time15', },
];

const data1 = [
    { key: '1', stop: 'Bystrc', time1: '08:30', time2: '09:15', time3: '10:00', time4: '10:45', time5: '11:30',
      time6: '12:15', time7: '13:00', time8: '13:45', time9: '14:30', time10: '15:15', 
      time11: '16:00', time12: '16:45', time13: '17:30', time14: '18:15', time15: '19:00', 
    },
    { key: '2', stop: 'Kozí Horka', time1: '08:36', time2: '09:21', time3: '10:06', time4: '10:51', time5: '11:36',
      time6: '12:21', time7: '13:06', time8: '13:51', time9: '14:36', time10: '15:21', 
      time11: '16:06', time12: '16:51', time13: '17:36', time14: '18:21', time15: '19:06', 
    },
    { key: '3', stop: 'Sokolské koupaliště', time1: '08:44', time2: '09:29', time3: '10:14', time4: '10:59', time5: '11:44',
      time6: '12:29', time7: '13:14', time8: '13:59', time9: '14:44', time10: '15:29', 
      time11: '16:14', time12: '16:59', time13: '17:44', time14: '18:29', time15: '19:14', 
    },
    { key: '4', stop: 'Uykotvy', time1: '08:49', time2: '09:34', time3: '10:19', time4: '11:04', time5: '11:49',
      time6: '12:34', time7: '13:19', time8: '14:04', time9: '14:49', time10: '15:34', 
      time11: '16:19', time12: '17:04', time13: '17:49', time14: '18:34', time15: '19:19', 
    },
    { key: '5', stop: 'Rokle', time1: '08:55', time2: '09:40', time3: '10:25', time4: '11:10', time5: '11:55',
      time6: '12:40', time7: '13:25', time8: '14:10', time9: '14:55', time10: '15:40', 
      time11: '16:25', time12: '17:10', time13: '17:55', time14: '18:40', time15: '19:25', 
    },
    { key: '6', stop: 'Pod Trnůvkou', time1: '09:06', time2: '09:51', time3: '10:36', time4: '11:21', time5: '12:06',
      time6: '12:51', time7: '13:36', time8: '14:21', time9: '15:06', time10: '15:51', 
      time11: '16:36', time12: '17:21', time13: '18:06', time14: '18:51', time15: '19:36', 
    },
    { key: '7', stop: 'Hrad Veveří', time1: '09:18', time2: '10:03', time3: '10:48', time4: '11:33', time5: '12:18',
      time6: '13:03', time7: '13:48', time8: '14:33', time9: '15:18', time10: '16:03', 
      time11: '16:48', time12: '17:33', time13: '18:18', time14: '19:03', time15: '19:48', 
    },
    { key: '8', stop: 'Mečkov', time1: '09:24', time2: '10:09', time3: '10:54', time4: '11:39', time5: '12:24',
      time6: '13:09', time7: '13:54', time8: '14:39', time9: '15:24', time10: '16:09', 
      time11: '16:54', time12: '17:39', time13: '18:24', time14: '19:09', time15: '19:54', 
    },
    { key: '9', stop: 'Skály', time1: '09:29', time2: '10:14', time3: '10:59', time4: '11:44', time5: '12:29',
      time6: '13:14', time7: '13:59', time8: '14:44', time9: '15:29', time10: '16:14', 
      time11: '16:59', time12: '17:44', time13: '18:29', time14: '19:14', time15: '19:59', 
    },
    { key: '10', stop: 'Veverská Bítýška', time1: '09:40', time2: '10:25', time3: '11:10', time4: '11:55', time5: '12:40',
      time6: '13:25', time7: '14:10', time8: '14:55', time9: '15:40', time10: '16:25', 
      time11: '17:10', time12: '17:55', time13: '18:40', time14: '19:25', time15: '20:10', 
    },
];

const data2 = [
    { key: '1', stop: 'Veverská Bítýška', time1: '09:45', time2: '10:30', time3: '11:15', time4: '12:00', time5: '12:45',
      time6: '13:30', time7: '14:15', time8: '15:00', time9: '15:45', time10: '16:30', 
      time11: '17:15', time12: '18:00', time13: '18:45', time14: '19:30', time15: '20:15', 
    },
    { key: '2', stop: 'Skály', time1: '09:54', time2: '10:39', time3: '11:24', time4: '12:09', time5: '12:54',
      time6: '13:39', time7: '14:24', time8: '15:09', time9: '15:54', time10: '16:39', 
      time11: '17:24', time12: '18:09', time13: '18:54', time14: '19:39', time15: '20:24', 
    },
    { key: '3', stop: 'Mečkov', time1: '09:59', time2: '10:44', time3: '11:29', time4: '12:14', time5: '12:59',
      time6: '13:44', time7: '14:29', time8: '15:14', time9: '15:59', time10: '16:44', 
      time11: '17:29', time12: '18:14', time13: '18:59', time14: '19:44', time15: '20:29', 
    },
    { key: '4', stop: 'Hrady Veveří', time1: '10:06', time2: '10:51', time3: '11:36', time4: '12:21', time5: '13:06',
      time6: '13:51', time7: '14:36', time8: '15:51', time9: '16:06', time10: '16:51', 
      time11: '17:36', time12: '18:21', time13: '19:06', time14: '19:51', time15: '20:36', 
    },
    { key: '5', stop: 'Pod Trnůvkou', time1: '10:18', time2: '11:03', time3: '11:48', time4: '12:33', time5: '13:18',
      time6: '14:03', time7: '14:48', time8: '16:03', time9: '16:18', time10: '17:03', 
      time11: '17:48', time12: '18:33', time13: '19:18', time14: '20:03', time15: '20:48', 
    },
    { key: '6', stop: 'Rokle', time1: '10:30', time2: '11:15', time3: '12:00', time4: '12:45', time5: '13:30',
      time6: '14:15', time7: '15:00', time8: '16:15', time9: '16:30', time10: '17:15', 
      time11: '18:00', time12: '18:45', time13: '19:30', time14: '20:15', time15: '21:00', 
    },
    { key: '7', stop: 'U kotvy', time1: '10:36', time2: '11:21', time3: '12:06', time4: '12:51', time5: '13:36',
      time6: '14:21', time7: '15:06', time8: '16:21', time9: '16:36', time10: '17:21', 
      time11: '18:06', time12: '18:51', time13: '19:36', time14: '20:21', time15: '21:06', 
    },
    { key: '8', stop: 'Sokolské koupaliště', time1: '10:41', time2: '11:26', time3: '12:11', time4: '12:56', time5: '13:41',
      time6: '14:26', time7: '15:11', time8: '16:26', time9: '16:41', time10: '17:26', 
      time11: '18:11', time12: '18:56', time13: '19:41', time14: '20:26', time15: '21:11', 
    },
    { key: '9', stop: 'Kozí Horka', time1: '10:48', time2: '11:33', time3: '12:18', time4: '13:03', time5: '13:48',
      time6: '14:33', time7: '15:18', time8: '16:33', time9: '16:48', time10: '17:33', 
      time11: '18:18', time12: '19:03', time13: '19:48', time14: '20:33', time15: '21:18', 
    },
    { key: '10', stop: 'Bystrc', time1: '10:55', time2: '11:40', time3: '12:25', time4: '13:10', time5: '13:55',
      time6: '14:40', time7: '15:25', time8: '16:40', time9: '16:55', time10: '17:40', 
      time11: '18:25', time12: '19:10', time13: '19:55', time14: '20:40', time15: '21:25', 
    },
    
];
const api = new Api;

export default class LodniDoprava extends React.Component {

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
                    <title>Lodni doprava</title>
                    <style dangerouslySetInnerHTML={{__html: `
                    .ant-table-thead > tr > th {
                        background: #cee6e3  !important;
                    }`
                    }}/>
                    
                </Head>
                
                <Row style={{height: '100%', overflow: 'hidden'}} align='center' className={styles.table}>
                    <Col xs={18} md={16} lg={15} xl={14} xxl={14}>
                        <div className={styles.title}>
                            <p className='fontSizeMd' align='center'>Lodni doprava</p>
                        </div>
                        <div align='center' >
                            <p className='fontSizeSm' >
                            Bystrc - Veverská Bítýška
                            </p>
                        </div>
    
                        <div>
                            <Table columns={columns} dataSource={data1} scroll={{ x: 1300, y: 400 }} className={styles.table} pagination={false} bordered='true' tableLayout='fixed' rowClassName={'fontSizeSm'}/>
                        </div>
                        <br/>
                        <br/>

                        <div align='center'>
                            <p className='fontSizeSm' >
                            Veverská Bítýška - Bystrc
                            </p>
                        </div>
                        <div>
                            <Table columns={columns} dataSource={data2} scroll={{ x: 1300, y: 400 }} className={styles.table} pagination={false} bordered='true' tableLayout='fixed' rowClassName={'fontSizeSm'}/>
                        </div>
                        <br/>
                        <br/>
                        <div className={styles.title}>
                            <p className='fontSizeMd' align='center'>Mapa Brněnské přehrady</p>
                        </div>
                        <div>
                            <img src="./ld_map.jpg" alt="" style={{height: '100%', width: '100%', marginBottom: '40px'}}/>
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }

}


