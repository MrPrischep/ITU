// Author: Pastushenko Vladislav
// Login: xpastu04

import React, { useEffect, useState } from "react";

import { Provider } from 'react-redux';

import { useStore } from '../store/makeStore';
import {Layout} from "antd";
import CookieConsent from "react-cookie-consent";
import Navigator from "../components/Navigator/Navigator";
import Basement from "../components/Basement/Basement";

import 'antd/dist/antd.min.css';
import '../style.sass';
import Head from "next/head";

import { Router, useRouter } from 'next/router';

import Api from "../Api"

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.min.css';

const {Header, Content, Footer} = Layout;

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    const router = useRouter();
    useEffect(() => {
        const api = new Api
        fetch(api.baseUrl + '/isServerRunning')
        .then(result => {
            if ((window.location.pathname === '/server-error')) {
                router.back();
            }
        })
        .catch(error => {
            console.log(error);

            if (window.location.pathname !== '/server-error') {
                router.push('/server-error')
            }
        })
    });
    return (
        <Provider store={store}>
            <Head>
                <title>IIS</title>
            </Head>
            <Layout>
                {router.pathname !== '/' &&
                <Header>
                    <Navigator {...pageProps} pathname={router.pathname} style={{ background: 'white'}} color='black'/>
                </Header>}

                <Content style={{ padding: '0 0', marginTop: router.pathname !== '/' && 64, background: 'white'}}>
                    <div style={{paddingTop: 0, minHeight: "80vh" }}>
                        <Component {...pageProps} />
                    </div>
                </Content>

                <Footer style={{textAlign: 'center',  backgroundColor: 'white', padding: 0, zIndex: 1}}>
                    <Basement {...pageProps} pathname={router.pathname}/>
                </Footer>
                <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
            </Layout>
        </Provider>
    ) }
