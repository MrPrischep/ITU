// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

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
        { title: 'Datum nálezu', dataIndex: 'date', width: '15%', render: (text) => moment(text).format("YYYY-MM-DD"), ...this.getColumnSearchProps('date'), },
        { title: 'Nalezená věc', dataIndex: 'description', ...this.getColumnSearchProps('description'),
          sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 2,
          },
        },
        {
          title: 'Umístění nalezené věci v rámci DPMB, a.s.',
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
                            <p className='fontSizeMd' style={{padding: '0.5em 0'}} align='center'>Ztráty a nálezy věcí</p>
                        </div>
                        <div>
                        <p className='fontSizeSm' >
                            Níže uvedený seznam je evidencí věcí nalezených v dopravních prostředcích a v prostorách <i>Dopravního podniku města Brna, a.s.</i></p>
                        <p className='fontSizeSm'>
                            Věci nalezené v dopravních prostředcích jsou skladovány na příslušných výpravnách (<i>Medlánky, Pisárky, Husovice, Slatina, Komín</i>),
                            ostatní věci jsou skladovány v Informační kanceláři na <i>ul. Novobranské 18 v Brně</i>.</p>
                        <p className='fontSizeSm'>
                            Informaci o možnostech vyzvednutí věci, příp. s uvedením kontaktu na příslušnou výpravnu Vám poskytne Informační kancelář, 
                            a to v provozní době (<i>pondělí-pátek od 6:00 hod. do 19:00 hod., v sobotu od 8:00 hod. do 15:30 hod, přestávka 12:30-13:00 hod</i>):
                        </p>
                        <ul>
                            <li className='fontSizeXs'>telefonicky: na čísle 543 174 317 / provolba 2</li>
                            <li className='fontSizeXs'>e-mailem: dpmb@dpmb.cz</li>

                        </ul>
                        <p className='fontSizeSm'>
                            Při převzetí nalezené věci je nezbytné prokázat vlastnictví této věci, předložit průkaz totožnosti a svým podpisem stvrdit převzetí.
                        </p>
                        <p className='fontSizeSm'>
                            Věci, které byly odevzdány na referát podatelny <i>Magistrátu města Brna</i> jsou v níže uvedeném seznamu zvýrazněny <strong>žlutým podbarvením</strong>.
                        </p>
                        </div>
                        <div className={styles.title}>
                        <p className='fontSizeMd' align='center' style={{padding: '0.5em 0'}}>
                            Něco jste ztratili?
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


