import React from "react";
import {connect} from "react-redux";
import Head from 'next/head';
import Api from "../Api";
import {Col, Row} from 'antd';
import { Table, Input, Button, Space } from 'antd';
import Navigator from "../components/Navigator/Navigator";
import styles from './styles/ztraty.module.sass'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { fetchLostThings } from "../store/lostThings/actions";

const api = new Api;

class Ztraty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
            data: [],
        }

        this.props.fetchLostThings().then(
          (res) => {
            this.setState({data: res.map(el => {
              let date = new Date(el.date)
              return {...el,date: date.getDay()+"."+date.getMonth()+"."+date.getFullYear()}
            })})

          },
          (err) => {
            this.setState({errMsg: err})
          }

        );
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({ closeDropdown: false });
                  this.setState({
                    searchText: selectedKeys[0],
                    searchedColumn: dataIndex,
                  });
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

    columns = [
        { title: 'Datum n??lezu', dataIndex: 'date', width: '15%', render: (text) => moment(text).format("YYYY-MM-DD"), ...this.getColumnSearchProps('date'), },
        { title: 'Nalezen?? v??c', dataIndex: 'description', ...this.getColumnSearchProps('description'),
          sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 2,
          },
        },
        {
          title: 'Um??st??n?? nalezen?? v??ci v r??mci DPMB, a.s.',
          dataIndex: 'storage_location',
          width: '25%',
          sorter: {
            compare: (a, b) => a.place - b.place,
            multiple: 1,
          },
        },
        { title: 'Telefon', dataIndex: 'phone', width: '10%',},
      ];
    render() {
        return (
            <div>
                {/* Meta Tags */}
                <Head>
                    <title>Ztraty a nalezeni</title>
                </Head>
                
                <Row style={{height: '100%', overflow: 'hidden'}} align='center'>
                    <Col xs={19} md={31} lg={20} xl={21} xxl={15}>
                        <div className={styles.title}>
                            <p className='fontSizeMd' style={{padding: '0.5em 0'}} align='center'>Ztr??ty a n??lezy v??c??</p>
                        </div>
                        <div>
                        <p className='fontSizeSm' >
                            N????e uveden?? seznam je evidenc?? v??c?? nalezen??ch v dopravn??ch prost??edc??ch a v prostor??ch <i>Dopravn??ho podniku m??sta Brna, a.s.</i></p>
                        <p className='fontSizeSm'>
                            V??ci nalezen?? v dopravn??ch prost??edc??ch jsou skladov??ny na p????slu??n??ch v??pravn??ch (<i>Medl??nky, Pis??rky, Husovice, Slatina, Kom??n</i>),
                            ostatn?? v??ci jsou skladov??ny v Informa??n?? kancel????i na <i>ul. Novobransk?? 18 v Brn??</i>.</p>
                        <p className='fontSizeSm'>
                            Informaci o mo??nostech vyzvednut?? v??ci, p????p. s uveden??m kontaktu na p????slu??nou v??pravnu V??m poskytne Informa??n?? kancel????, 
                            a to v provozn?? dob?? (<i>pond??l??-p??tek od 6:00 hod. do 19:00 hod., v sobotu od 8:00 hod. do 15:30 hod, p??est??vka 12:30-13:00 hod</i>):
                        </p>
                        <ul>
                            <li className='fontSizeXs'>telefonicky: na ????sle 543 174 317 / provolba 2</li>
                            <li className='fontSizeXs'>e-mailem: dpmb@dpmb.cz</li>

                        </ul>
                        <p className='fontSizeSm'>
                            P??i p??evzet?? nalezen?? v??ci je nezbytn?? prok??zat vlastnictv?? t??to v??ci, p??edlo??it pr??kaz toto??nosti a sv??m podpisem stvrdit p??evzet??.
                        </p>
                        <p className='fontSizeSm'>
                            V??ci, kter?? byly odevzd??ny na refer??t podatelny <i>Magistr??tu m??sta Brna</i> jsou v n????e uveden??m seznamu zv??razn??ny <strong>??lut??m podbarven??m</strong>.
                        </p>
                        </div>
                        <div className={styles.title}>
                        <p className='fontSizeMd' align='center' style={{padding: '0.5em 0'}}>
                            N??co jste ztratili?
                        </p>
                        </div>
                        <div >
                            <Table columns={this.columns} dataSource={this.state.data} className={styles.table}/>
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }

}


const mapStateToProps = state => {
    return {
        lostThings: state.lostThings.trips,
    }
}
export default connect(mapStateToProps, { fetchLostThings
}) (Ztraty);


