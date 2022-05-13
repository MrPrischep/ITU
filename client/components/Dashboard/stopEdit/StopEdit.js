import React from "react";
import {connect} from "react-redux";
import styles from "./stopEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { editStop } from '../../../store/stops/actions'
import { LoadingOutlined } from '@ant-design/icons'


class StopEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        values.id = this.props.stop.id
        console.log(values)
        this.setState({res: 'loading'})
        this.props.editStop(values).then(
            res => {
                this.setState({res: 'OK'})
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing stop",
                })
            }
        )
    }
    render() {
        return (
            <>
                <a onClick={() => {this.setState({isModalOpen: true})}}>
                    Upravit
                </a>
                <Modal title="Upravit uživatelská data" visible={this.state.isModalOpen} onCancel={() => {this.setState({ isModalOpen: false })}} footer={null}>
                    {this.state.res === 'preparing' &&
                    <Form initialValues={{
                        name: this.props.stop.name,
                        
                    }}
                        onFinish={this.onFinish}
                    >
                    
                        <div className={'fontSizeXs'}>
                            Stopname:
                        </div>
                        <Form.Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input stopname',
                            },
                            ]}
                        >
                            <Input placeholder="Stopname" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={styles.addStopButton}>
                            Upravit
                            </Button>
                        </Form.Item>
                    </Form>}
                    {this.state.res === 'loading' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        <LoadingOutlined/>
                    </div>}
                    {this.state.res === 'OK' &&
                    <div className='fontSizeLg' align='center' style={{padding: '2em'}}>
                        Zastávka byla úspěšně upravena
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.stops.res,
    }
  }
  export default connect(mapStateToProps, { editStop
  }) (StopEdit);
