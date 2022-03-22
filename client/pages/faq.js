// Author: Pastushenko Vladislav
// Login: xpastu04

import React from "react";
import {Row, Col, Divider, Skeleton} from "antd";
import Head from 'next/head';
import {fetchFAQs} from '../store/FAQs/actions';
import { connect } from "react-redux";

class FAQ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {faqs: []}

        this.props.fetchFAQs()
            .then(res => this.setState({faqs: res}))
    }

    render() {
        return (
            <div>
                <Head>
                    <title> Q&A </title>
                </Head>
                <Row align='center' style={{marginTop: '5vh'}}>
                    <Col xxl={12} xl={15} lg={18} md={20} xs={22}>
                        <h1 className='fontSizeLg'>
                            Otázky a odpovědi
                        </h1>
                        <Divider/>
                        <Skeleton loading={this.state.faqs.length == 0} active>
                        <div className='fontSizeMd'>
                            {this.state.faqs.map(el => {
                                return (
                                <div>
                                    <div style={{fontWeight: '600'}}>
                                        {el.question}
                                    </div>
                                    <div>
                                        {el.answer}
                                    </div>
                                    <Divider/>
                                </div>
                                )
                            })}
                        </div>
                        </Skeleton>
                    </Col>
                </Row>
                <Divider/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        faqs: state.FAQs.faqs,
    }
}


export default connect(mapStateToProps, {fetchFAQs})(FAQ);