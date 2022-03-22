// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import styles from "./topbar.module.sass"
import { message, Modal,} from 'antd'
import { logoutUser } from "../../../store/users/actions";
import {connect} from "react-redux";
import Router from 'next/router'

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isVisibleModal: false
        };
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };

    onClose = () => {
        this.setState({
          visible: false,
        });
      };

    handleOk = () => {
        this.setState({
            isModalVisible: false,
        });
    };

    logout = (values) => {  
        this.props.logoutUser(values).then(
          (res) => {
            message.open(
              {
                type: 'success',
                content: 'Úspěšně jste se odhlásili',
                duration: 3,
                onClose: () => {Router.push('/')}
              }
            )
            window.location.reload(false)
          },
          (err) => {
            this.setState({errMsg: err})
          }
  
        )
  
      };

    render() {
        return (
            <div className={styles.topbar}>
                <div className={styles.topbarWraper}>
                    <div className={styles.topLeft}>
                        <span className={styles.logo}>
                            Admin panel
                        </span>
                    </div>
                    <div className={styles.topRight}>

                        <a className={'fontSizeSm'} onClick={() => {this.setState({visible: false}); this.setState({isModalVisible: true})}}>
                            Logout
                        </a>
                        
                        <Modal title="Exit" visible={this.state.isModalVisible} onOk={this.logout} onCancel={this.handleOk}>
                            <p>Určitě se chceš dostat ven?</p>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.res,
    }
  }
export default connect(mapStateToProps, {logoutUser
  }) (Topbar);