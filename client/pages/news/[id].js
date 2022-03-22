// Author: Pastushenko Vladislav
// Login: xpastu04

import React from "react";
import {Row, Col, Divider, Skeleton} from "antd";
import Head from 'next/head';
import Link from 'next/link';
import {fetchNewsById} from '../../store/news/actions';
import { connect } from "react-redux";

class FAQSection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {item: null}

        this.props.fetchNewsById(this.props.id)
            .then(res => this.setState({item: res}))
    }


    static async getInitialProps({ query }) {
        const id = query.id;
        return { id };
    }

    render() {
        return (
            <div>
                {console.log(this.state.item)}
                <Head>
                    <title> Novinky </title>
                </Head>
                <Row align='center' style={{marginTop: '5vh'}}>
                    <Col xxl={12} xl={15} lg={18} md={20} xs={22}>
                        <Skeleton loading={!this.state.item} active>
                            {this.state.item &&
                            <div>
                                <h1 style={{fontWeight: '600'}} className='fontSizeLg'>
                                    {this.state.item.name}
                                </h1>
                                <p className='fontSizeSm' style={{fontWeight: 200}}>
                                    {new Date(this.state.item.date).toLocaleString('default', { month: 'short', day: '2-digit' })} {new Date(this.state.item.date).getFullYear()}
                                </p>
                                <article className='fontSizeSm'>
                                    {this.state.item.text}
                                </article>
                                <Divider/>
                            </div>}
                        </Skeleton>
                        <Divider/>
                    </Col>
                </Row>
                <Divider/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        news: state.news.news,
    }
}


export default connect(mapStateToProps, {fetchNewsById})(FAQSection);