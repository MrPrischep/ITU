import React from "react";
import {connect} from "react-redux";
import styles from "./userEdit.module.sass"
import {Modal, Form, Input, Select, Button, message} from "antd"
import { editUser } from '../../../store/users/actions'
import { LoadingOutlined } from '@ant-design/icons'


class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            carriers: null,
            res: 'preparing',
        };
    }

    onFinish = (values) => {
        if (!values.role) values.role = this.props.user.role
        if (!values.carrier_id) values.carrier_id = this.props.user.carrier_id
        values.id = this.props.user.id
        this.setState({res: 'loading'})
        this.props.editUser(values).then(
            res => {
                this.setState({res: 'OK'})
            },
            err => {
                console.log(err)
                message.open({
                    type: 'error',
                    content: "Error while editing user, or you don't have enough rights to edit this user",
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
                        email: this.props.user.email,
                        full_name: this.props.user.full_name,
                        role: this.props.user.role,
                        is_active: this.props.user.is_active,
                        carrier_id: this.props.user.carrier_id
                    }}
                        onFinish={this.onFinish}
                    >
                    
                        <div className={'fontSizeXs'}>
                            Email:
                        </div>
                        <Form.Item
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input E-mail',
                            },
                            ]}
                        >
                            <Input placeholder="E-mail" />
                        </Form.Item>

                        <div className={'fontSizeXs'}>
                            Jmeno a Příjmení:
                        </div>
                        <Form.Item
                            name="full_name"
                        >
                            <Input placeholder="Full name" />
                        </Form.Item>

                        {this.props.loggedUser.role === 'admin' &&
                        <div className={'fontSizeXs'}>
                            Role:
                            <Form.Item name="role">
                                <Select style={{ width: 150 }} >     
                                    <Select.Option value="personnel">Personál</Select.Option>
                                    <Select.Option value="admin">Administrátor</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        }

                        <div className={'fontSizeXs'}>
                            Je aktivní:
                        </div>
                        <Form.Item name="is_active">
                               <Select style={{ width: 120 }} >
                                    <Select.Option value={1}>Aktivní</Select.Option>
                                    <Select.Option value={0}>Neaktivní</Select.Option>
                                </Select>
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
                        Uživatel byl úspěšně upraven
                    </div>}
                </Modal>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        res: state.users.res,
    }
  }
  export default connect(mapStateToProps, { editUser
  }) (UserEdit);
