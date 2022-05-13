import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./sidebar.module.scss"
import { ContactSupport, Person, Store, Settings, FiberNew, Info, SentimentVeryDissatisfied, Work } from "@material-ui/icons";
import Link from "next/link"

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.sidebar} >
                <div className={styles.sidebarWrapper}>
                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Panel</h3>

                        <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('userList')}}>
                                <Person className={styles.sidebarIcon}/>
                                Uživateli
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Menu</h3>
                        <ul className={styles.sidebarList}>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('stopList')}}>
                                <Store className={styles.sidebarIcon}/>
                                Zastávky
                            </li>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('newsList')}}>
                                <FiberNew className={styles.sidebarIcon}/>
                                Novinky
                            </li>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('lostThingsList')}}>
                                <SentimentVeryDissatisfied className={styles.sidebarIcon}/>
                                Ztraty
                            </li>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('vacanciesList')}}>
                                <Work className={styles.sidebarIcon}/>
                                Zaměstnání
                            </li>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('questionsFromUsersList')}}>
                                <ContactSupport className={styles.sidebarIcon}/>
                                Otázky
                            </li>

                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('FAQsList')}}>
                                <Info className={styles.sidebarIcon}/>
                                FAQs
                            </li>
                            
                            
                        </ul>
                    </div>

                    <div className={styles.sidebarMenu}>
                        <h3 className={styles.sidebarTitle}>Nastavení</h3>
                        <ul className={styles.sidebarList}>
                            <li className={styles.sidebarListItem} onClick={() => {this.props.changeLocation('editUser')}}>
                                <Settings className={styles.sidebarIcon}/>
                                Můj profil
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
