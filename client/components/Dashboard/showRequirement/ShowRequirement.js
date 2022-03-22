// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import styles from "./showRequirement.module.sass"
import { Modal, Form, Input, Button, message } from "antd"
import { fetchVacancies } from "../../../store/vacancies/actions";

const { TextArea } = Input;

class ShowRequirement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            data: [],
        };

        this.props.fetchVacancies().then(
            (res) => {
              this.setState({data: res})
            },
            (err) => {
              this.setState({errMsg: err})
            }
          );
    }
    handleOk = () => {
        this.setState({isModalOpen: false});
        message.success({
            type: 'error',
            content: 'Požadavek úspěšně editovan',
            duration: 3
        })
    };

    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Zobrazit
                </a>
                <Modal style={{height: '60%'}} title="Text požadavku" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={[
                        <Button key="back" type="primary" onClick={this.handleOk} className={styles.addStopButton}>
                          Editovat
                        </Button>]}>
                    <Form initialValues={{
                            requirements: this.props.requirements.requirements
                        }}
                    >
                        <Form.Item
                            name="requirements"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                        >
                            <TextArea size="large" style={{height: '300px'}}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        res: state.vacancies.res,
    }
  }
  export default connect(mapStateToProps, {fetchVacancies
  }) (ShowRequirement);