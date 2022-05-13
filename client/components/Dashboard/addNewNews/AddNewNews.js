import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./addNewNews.module.sass"
import { Button, Modal, Input, Form, Result } from 'antd'
import { createNews } from "../../../store/news/actions";

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

class NewNews extends React.Component {
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
          name: e.target.elements.name.value,
          text: this.state.message,
          
        }

        this.props.createNews(data).then(
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

    takeValue = (e) => {
        this.setState({message: e.target.value})

    }

    render() {
        return (
            <div className={styles.newStop}>
                <h1 className={styles.addStopTitle}>Nová Novinka</h1>
                <form className={styles.addStopForm} onSubmit={this.handleSubmit}>
                    <div className={styles.addStopItem}>
                    <label>Název novinky</label>
                    <input type="text" name="name" placeholder="Název novinky" />
                    </div>
                    <Form className={styles.addStopForm} {...formItemLayout}>
                        <Form.Item
                            name="new"
                            rules={[
                            {
                                required: true,
                                message: '',
                            },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <TextArea size="medium" onChange={this.takeValue} style={{height: '300px'}}/>
                        </Form.Item>
                    </Form>
                    <button className={styles.addStopButton}>Vytvořit</button>
                </form>
                <Modal title="Success" visible={this.state.isSuccessModalVisible} onOk={this.handleOk} onCancel={this.handleOk} footer={[
                        <Button key="back" onClick={this.handleOk} className={styles.addStopButton}>
                          OK
                        </Button>]}>
                            <p>Novinka úspěšně přidána</p>
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

export default connect(mapStateToProps, {createNews,
}) (NewNews);
