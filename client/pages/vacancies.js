// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "../Api";
import {UserAddOutlined} from '@ant-design/icons';
import {Col, Row} from 'antd';
import { fetchVacancies } from "../store/vacancies/actions";

import styles from './styles/table.module.sass'
const api = new Api;

class Vacancy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: [], 
            offers: [],
            requirements: []
        }

    this.props.fetchVacancies().then(
        (res) => {
          this.setState({data: res})
        },
        (err) => {
          this.setState({errMsg: err})
        }

      );
    }
    
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Zamestnani</title>
                </Head>
                <p className='fontSizeLg' align='center' >
                        Přidáš se k nám?</p>
                <Row style={{height: '100%', overflow: 'hidden'}} gutter={[0,40]} align='center'>
                    <Col xs={22} md={20} lg={10} xl={10} xxl={10}  align='center'>
                    <UserAddOutlined  style={{ fontSize: '48px', color: 'white',backgroundColor:'rgb(75, 146, 147)', borderRadius:'50%', width: '100px',height: '100px',lineHeight: '110px'}}/>
                            <p className='fontSizeMd'style={{paddingTop:'2vh'}}> <b>Nabídky pracovních příležitostí</b></p>
                            <p className='fontSizeSm'>
                                Hledáte práci v rozvíjející se a stabilní firmě s jistotou dobrého výdělku?<br/>
                                Přidejte se do našeho týmu a začněte svoji profesní kariéru u nás!<br/>
                                Rádi Vás u nás přivítáme!<br/>
                           </p>
                            {this.state.data.map(el => {
                                return (
                                    <div key={el.id} style={{marginBottom: '8rem'}}>
                                        <div className={styles.title} style={{borderRadius:'4px', padding: '0.5em 0', color: 'white', fontWeight : '600'}}>
                                            <div className='fontSizeMd' align='center'>{(el.name)}</div>
                                        </div>
                                        <div className='fontSizeSm' align='left' style={{ marginTop: '2em', borderColor: 'rgb(75, 146, 147)' }}>
                                            <div style={{marginBottom: '1em'}}>
                                                POŽADUJEME:
                                                <br/>
                                                <div style={{marginLeft: '1em'}}>
                                                    {el.requirements}
                                                </div>
                                                NABÍZÍME:
                                                <div style={{marginLeft: '1em'}}>
                                                    {el.offers}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                     </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        res: state.vacancies.res,
    }
}
export default connect(mapStateToProps, {fetchVacancies
}) (Vacancy);


