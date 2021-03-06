import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewLostThing.module.sass"
import { Button, Modal, Input, Form, Result } from 'antd'
import { createLostThings } from "../../../store/lostThings/actions";

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

class NewLostThing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
            isModalVisible: false,
            success: false,
            errorStatus: false,
            message: [],
        };

    }
    handleOk = () => {
        this.setState({
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
        });
    };

    handleChange = (value) => {
        this.setState({city_id: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        
        let data = {
          description: e.target.elements.description.value,
          storage_location: e.target.elements.storage_location.value,
          phone: e.target.elements.phone.value,
        }

        this.props.createLostThings(data).then(
            (res) => {
                this.setState({isSuccessModalVisible: true});
                e.target.elements.description.value = null;
                e.target.elements.storage_location.value = null;
                e.target.elements.phone.value = null;
            },
            (err) => {
                console.log(err);
                this.setState({isErrorModalVisible: true});
            ;},
        )
    }

    takeValue = (e) => {
        this.setState({message: e.target.value})

    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Nov?? vec</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Popis v??ci</label>
                    <input type="text" name="description" placeholder="Popis v??ci" />
                    </div>

                    <div className={styles.addStopItem}>
                    <label>??lo??i??t??</label>
                    <input type="text" name="storage_location" placeholder="??lo??i??t??" />
                    </div>

                    <div className={styles.addStopItem}>
                    <label>Telefon</label>
                    <input type="text" name="phone" placeholder="Telefon" />
                    </div>

                    <button className={styles.addStopButton}>Vytvo??it</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                          OK
                        </Button>]}>
                            <p>Vec ??sp????n?? p??id??na</p>
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

export default connect(mapStateToProps, {createLostThings,
}) (NewLostThing);
