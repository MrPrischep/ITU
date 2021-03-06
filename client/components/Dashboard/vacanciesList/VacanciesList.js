import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./vacanciesList.module.sass"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons";
import { ResponsiveContainer } from "recharts";
import { fetchVacancies, deleteVacancy } from "../../../store/vacancies/actions";
import { LoadingOutlined } from '@ant-design/icons'
import { message } from "antd";
import ShowRequirement from "../showRequirement/ShowRequirement";
import ShowOffers from "../showOffers/ShowOffers";

class VacanciesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleDelete = (params) => {
      let id = params.row.id

      this.props.deleteVacancy(id).then(
        (res) => {window.location.reload(false)},
        (err) => {
          message.open({
            'content': 'Error while deleting',
            duration: 1
          })
        }
      )
    };

    columns = [
        { field: "id", headerName: "ID", width: 100 , align: "left",},
        { field: "name", headerName: "Název", width: 600, align: "left",},
        { field: "requirements", headerName: "Požadavky", width: 200, align: "left",
        
          renderCell: (params) => {
            return (
              <ShowRequirement requirements={params.row} {...this.props}/>
            );
          },
        },
        { field: "offers", headerName: "Nabídka", width: 200, align: "left",
        
          renderCell: (params) => {
            return (
              <ShowOffers offers={params.row} {...this.props}/>
            );
          },
        },
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
                    <h1 className="userTitle">Zaměstnání</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newVacancy')}}>Vytvořit</button>
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
                    <h1 className="userTitle">Zaměstnání</h1>
                    <button className={styles.userAddButton} onClick={() => {this.props.changeLocation('newVacancy')}}>Vytvořit</button>
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

export default connect(mapStateToProps, {fetchVacancies, deleteVacancy
}) (VacanciesList);
