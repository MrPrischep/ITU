// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./lostThingsList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchLostThings, deleteLostThings } from "../../../store/lostThings/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message } from "antd";

class LostThingsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.props.fetchLostThings().then(
          (res) => {
            this.setState({data: res})
          },
          (err) => {
            this.setState({errMsg: err})
          }

        );
        
    }

    handleDelete = (params) => {
      let id = params.row.id

      this.props.deleteLostThings(id).then(
        (res) => {window.location.reload(false)},
        (err) => {
          message.open({
            'content': 'Error while deleting',
            duration: 1
          })
        }
      )
    };
    getTime(params) {
      return new Date(params.value).toLocaleString('default', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
    }

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "date", headerName: "Datum", width: 130, align: "left", valueGetter: this.getTime,},
        { field: "description", headerName: "Popis", width: 410, align: "left",},
        { field: "storage_location", headerName: "Úložiště", width: 320, align: "left",},
        { field: "phone", headerName: "Telefon", width: 170, align: "left",},
        {
          field: "delete",
          headerName: "Odstranit",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className={styles.userListDelete}
                  onClick={() => {
                    this.handleDelete(params)
                  }}
                />
              </>
            );
          },
        },
      ];

    render() {
      if (this.state.data.length > 0) {
        return (
            <div className={styles.userList}>
              <div className={styles.userTitleContainer}>
                    <h1 className="userTitle">Ztracené věci</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newLostThing')}}>Vytvořit</button>
              </div>
              <ResponsiveContainer width="100%">
                <DataGrid
                    rows={this.state.data}
                    disableSelectionOnClick
                    columns={this.columns}
                    pageSize={8}
                    checkboxSelection
                />
              </ResponsiveContainer>
            </div>
        );
        } else {
          return (
            <div className={styles.userList}>
              <div className={styles.userTitleContainer}>
                    <h1 className="userTitle">Ztracené věci</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newLostThing')}}>Vytvořit</button>
              </div>
              <ResponsiveContainer width="100%">
                <div align='center' style={{marginTop: '2em'}} className='fontSizeMd'>
                    <LoadingOutlined/>
                </div>
              </ResponsiveContainer>
            </div>
        );
        }
    }
}

const mapStateToProps = state => {
  return {
      users: state.users.res,
  }
}

export default connect(mapStateToProps, {fetchLostThings, deleteLostThings
}) (LostThingsList);