// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import Head from 'next/head';
import Api from "../Api";
import {Col, Row} from 'antd';
import styles from './styles/transport.module.sass'
import Tramvaj from "../components/TransportTables/tramvaj/Tramvaj";
import NightBus from "../components/TransportTables/nightBus/NightBus";
import Trolejbus from "../components/TransportTables/trolejbus/Trolejbus";
import Bus from "../components/TransportTables/bus/Bus";
import router from "next/router";

const api = new Api;

export default class Transport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          tramvaj: false,
          bus: false,
          trolejbus: false,
          nightBus: false,
        }
    }

    takeTramvaj = () => {
      this.setState({tramvaj: true})
      this.setState({bus: false})
      this.setState({trolejbus: false})
      this.setState({nightBus: false})
    }

    takeNightBus = () => {
      this.setState({tramvaj: false})
      this.setState({bus: false})
      this.setState({trolejbus: false})
      this.setState({nightBus: true})
    }

    takeTrolejbus = () => {
      this.setState({tramvaj: false})
      this.setState({bus: false})
      this.setState({trolejbus: true})
      this.setState({nightBus: false})
    }

    takeBus = () => {
      this.setState({tramvaj: false})
      this.setState({bus: true})
      this.setState({trolejbus: false})
      this.setState({nightBus: false})
    }

    takeShip = () => {
      router.push("/lodni-doprava")
    }

    render() {
        return (
            <div>
                {/* Meta Ta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gs */}
                <Head>
                    <title>Transport</title>
                    <style dangerouslySetInnerHTML={{__html: `
                    .ant-table-thead > tr > th {
                        background: #cee6e3  !important;
                    }`
                    }}/>
                    <link
                      rel="stylesheet"
                      href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                    />
                </Head>
                
                <Row style={{height: '100%', overflow: 'hidden'}} align='center' className={styles.table}>
                    <Col xs={18} md={16} lg={15} xl={14} xxl={14}>
                    <div className={styles.title}>
                      
                      <h2 className='fontSizeMd'>Vyberte si svůj transport</h2>
                      <div className={styles.radioButtons}>
                        <label className={styles.customRadio}>
                          <input type="radio" name="radio" onClick={this.takeTramvaj}/>
                          <span className={styles.radioBtn}
                            ><i className="las la-check"></i>
                            <div className={styles.transportIcon}>
                              <i className="las la-tram"></i>
                              <h3 className='fontSizeSm'>Šalina</h3>
                            </div>
                          </span>
                        </label>
                        <label className={styles.customRadio}>
                          <input type="radio" name="radio" onClick={this.takeBus}/>
                          <span className={styles.radioBtn}
                            ><i className="las la-check"></i>
                            <div className={styles.transportIcon}>
                              <i className="las la-bus"></i>
                              <h3 className='fontSizeSm'>Autobus</h3>
                            </div>
                          </span>
                        </label>
                        <label className={styles.customRadio}>
                          <input type="radio" name="radio" onClick={this.takeTrolejbus}/>
                          <span className={styles.radioBtn}
                            ><i className="las la-check"></i>
                            <div className={styles.transportIcon}>
                              <i className="las la-bus-alt"></i>
                              <h3 className='fontSizeSm'>Trolejbus</h3>
                            </div>
                          </span>
                        </label>
                        <label className={styles.customRadio}>
                          <input type="radio" name="radio" onClick={this.takeNightBus}/>
                          <span className={styles.radioBtn}
                            ><i className="las la-check"></i>
                            <div className={styles.transportIcon}>
                              <i className="las la-moon"></i>
                              <h3 className='fontSizeSm'>Noční linka</h3>
                            </div>
                          </span>
                        </label>
                        <label className={styles.customRadio}>
                          <input type="radio" name="radio" onClick={this.takeShip}/>
                          <span className={styles.radioBtn}
                            ><i className="las la-check"></i>
                            <div className={styles.transportIcon}>
                              <i className="las la-ship"></i>
                              <h3 className='fontSizeSm'>Lodní doprava</h3>
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                    {this.state.tramvaj === true && <Tramvaj/>}
                    {this.state.nightBus === true && <NightBus/>}
                    {this.state.trolejbus=== true && <Trolejbus/>}
                    {this.state.bus=== true && <Bus/>}
                    </Col>
                </Row>

            </div>

        )
    }

}


