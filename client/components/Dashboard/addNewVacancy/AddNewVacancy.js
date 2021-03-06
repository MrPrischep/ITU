import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewVacancy.module.sass"
import { Button, Modal, Input, Form, Result } from 'antd'
import { createVacancy } from "../../../store/vacancies/actions";

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

class NewVacancy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            isModalVisible: false,
            success: false,
            errorStatus: false,
            requirements: [],
            offers: [],
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
          name: e.target.elements.name.value,
          requirements: this.state.requirements,
          offers: this.state.offers,
        }

        this.props.createVacancy(data).then(
            (res) => {
                this.setState({isSuccessModalVisible: true});
                e.target.elements.name.value = null;
            },
            (err) => {
                console.log(err);
                this.setState({isErrorModalVisible: true});
            ;},
        )
    }

    takeOffer = (e) => {
        this.setState({offers: e.target.value})
    }

    takeRequirement = (e) => {
      this.setState({requirements: e.target.value})
    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Nov?? pozice</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>N??zev</label>
                    <input type="text" name="name" placeholder="N??zev pozice" />
                    </div>

                    <div className={styles.addStopItem}>
                    <label>Po??adavek</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="requirements"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeRequirement} style={{height: '200px'}}/>
                        </Form.Item>
                    </Form>

                    <div className={styles.addStopItem}>
                    <label>Nab??dka</label>
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="offers"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeOffer} style={{height: '200px'}}/>
                        </Form.Item>
                    </Form>

                    <button className={styles.addStopButton}>Vytvo??it</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                          OK
                        </Button>]}>
                            <p>Pozice ??sp????n?? p??id??na</p>
                </Modal>
                <Modal title="Error" visible={this.state.isErrorModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                    <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                      OK
                    </Button>]}>
                        <p>N??co se pokazilo</p>
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

export default connect(mapStateToProps, {createVacancy,
}) (NewVacancy);
