import React from "react";
import { Row, Col, Dropdown, Menu} from "antd";
import styles from './navigator.module.scss'
// import {SearchOutlined} from '@ant-design/icons';
import Link from 'next/link'


const menuItems = [
    {name: 'Hlavní', link: '/'},
    {name: 'Doprava', link: '/transport'},
    {name: 'Reklama', link: '/pricelist'},
    {name: 'Kariera', link: '/vacancies'},
    {name: 'Doklady', link: '/documents'},
    {name: 'Kontakty', link: '/contact'},
    {name: 'Ztráty a nálezy', link: 'lost-and-founds'}
]


const menu = (
    <Menu>
        {menuItems.map(el => {
            return (
                <Menu.Item>
                    <Link href={el.link}>
                        <a className={styles.mobileMenuItem}>
                            {el.name}
                        </a>
                    </Link>
                </Menu.Item>
            )
        })}
    </Menu>
)


class Navigator extends React.Component {
    render() {
        return (
            <div className={styles.navigatorBody}>

                {/* Navigator for Large Screens */}
                <Row className={styles.navigator} align='left'>
                        {menuItems.map((el, idx) => {
                            return (
                                <Link href={el.link} key={el.name}>
                                <Col
                                    xxl={3}
                                    xl={3}
                                    lg={3}
                                    className={styles.navigatorItem}
                                    style={{borderRight: menuItems.length - 1 === idx ? 'none' : '', borderColor: 'rgba(200, 200, 200, 0.5)'}}
                                >
                                        <a className={styles.navigatorLink} style={{color: this.props.color}}>
                                            {el.name}
                                        </a>
                                </Col>
                                </Link>
                            )
                        })}
                        <Col lg={3} md={3} sm={5} xs={5} className={styles.menuForMobilesCol} style={{borderRight: 'none'}} align='left'>
                            <Dropdown overlay={menu} placement='bottomLeft'>
                                <a className={styles.navigatorRightLink + ' ' + styles.menuForMobilesArrow} style={{color: this.props.color}}>
                                    Menu
                                </a>
                            </Dropdown>
                        </Col>
                        <Col xxl={2} xl={2} lg={1} md={3} sm={5} xs={7} className={styles.navigatorRightItem} style={{borderRight: 'none'}} >
                            <a className={styles.navigatorRightLink} style={{color: this.props.color}}>
                                CZ
                            </a>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Navigator;
