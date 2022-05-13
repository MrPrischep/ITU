import React from "react";
import {connect} from "react-redux";
import styles from "./addNewFAQ.module.sass"
import { Button, Modal, Input, Form, Result } from 'antd'
import { createFAQs } from "../../../store/FAQs/actions";

const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
      xs: {
        span: 2,
      },
      sm: {
        span: 2,
      },
    },
    wrapperCol: {
      xs: {
        span: 6,
      },
      sm: {
        span: 6,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 15,
        offset: 0,
      },
      sm: {
        span: 15,
        offset: 0,
      },
    },
  };

class NewFAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            isModalVisible: false,
            success: false,
            errorStatus: false,
            question: [],
            answer: [],

        };

    }
    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); 
        let data = {
          question: this.state.question,
          answer: this.state.answer,
        }

        this.props.createFAQs(data).then(
            (res) => {
                this.setState({isSuccessModalVisible: true});
            },
            (err) => {
                console.log(err);
                this.setState({isErrorModalVisible: true});
            ;},
        )
    }

    takeQuestion = (e) => {
        this.setState({question: e.target.value})
    }

    takeAnswer = (e) => {
      this.setState({answer: e.target.value})
    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Novy FAQ</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Otázka</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="question"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeQuestion} style={{height: '200px'}}/>
                        </Form.Item>
                    </Form>
                    
                    <div className={styles.addStopItem}>
                    <label>Odpověď</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="answer"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeAnswer} style={{height: '200px'}}/>
                        </Form.Item>
                    </Form>
                    
                    <button className={styles.addStopButton}>Vytvořit</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                          OK
                        </Button>]}>
                            <p>FAQ úspěšně přidán</p>
                </Modal>
                <Modal title="Error" visible={this.state.isErrorModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                    <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                      OK
                    </Button>]}>
                        <p>Něco se pokazilo</p>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }

export default connect(mapStateToProps, {createFAQs,
}) (NewFAQ);
