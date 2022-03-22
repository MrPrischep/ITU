// Author: Tomason Viktoryia
// Login: xtomas34
import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "./../Api";
import {Col, Row, Form,Input, Button, message, Result} from 'antd';

import styles from './styles/contact.module.sass'
import {createQuestionFromUser} from "../store/questionsFromUsers/actions"
const api = new Api;


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'isAnswerGotten': false
        }
    }

    handleFinish = (values) => {
        console.log(this.props);

        this.props.createQuestionFromUser(values).then(
            res => {
                this.setState({isAnswerGotten: true})
            },
            err => {
                message.open({"type": "error", content: "Chyba při odesílání vašeho dotazu"})
            }
        )

    }
    
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Contact us</title>
                </Head>
                {!this.state.isAnswerGotten ?
                <Row style={{height: '100%', overflow: 'hidden'}} align='center'>
                    <Col xs={16} md={14} lg={12} xl={10} xxl={8} align='center'>
                        <p className='fontSizeMd' align='center'>
                            Kontaktujte nás!   
                        </p>
                        <div >
                            <p className='fontSizeSm' align='center'>
                            Máte nějaké otázky?
                            </p>
                            <Form onFinish={this.handleFinish}>
                                <Form.Item name="contact" >
                                    <Input required
                                    placeholder='Zadejte svůj e-mail' type="email"
                                    className={styles.forms} size='large'/>    
                                        </Form.Item>
                                <Form.Item name="message" >
                                    <Input.TextArea required
                                    placeholder='Napište svůj dotaz'
                                    className={styles.forms} size='large'/>    
                                </Form.Item>
                                <Form.Item>
                                    <Button type='primary' size='large' htmlType='submit'> ODESLAT </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
                :
                <Row style={{height: '100%', overflow: 'hidden'}} align='center'>
                <Col xs={22} md={24} lg={13} xl={14} xxl={8} align='center'>
                <Result
                    status="success"
                    title="Vaše zpráva byla úspěšně odeslána!"
                    subTitle="Odpovíme co nejdříve"
                    extra={[
                    <Button type="primary" size='large' onClick={() => {this.setState({isAnswerGotten: false})}} key="console">
                        Zpět
                    </Button>
                    ]}/>
                </Col>
                </Row>

    }
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        res: state.questionsFromUsers.res,
    }
}
export default connect(mapStateToProps, {createQuestionFromUser
}) (ContactUs);


