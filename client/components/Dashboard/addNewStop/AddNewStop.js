// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewStop.module.sass"
import { Button, Modal, Form, Select } from 'antd'
import { createStop } from "../../../store/stops/actions";

class NewStop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            city_id: null,
            isSuccessModalVisible: false,
            isErrorModalVisible: false,
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
            name: e.target.elements.name.value, 
        }

        this.props.createStop(data).then(
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

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Nová Zastávka</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název zastávky</label>
                    <input type="text" name="name" placeholder="Název zastávky" />
                    </div>
                    <button className={styles.addStopButton}>Vytvořit</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                          OK
                        </Button>]}>
                            <p>Zastávky úspěšně přidána</p>
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

export default connect(mapStateToProps, {createStop,
}) (NewStop);
