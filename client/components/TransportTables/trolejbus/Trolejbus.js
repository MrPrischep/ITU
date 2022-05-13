import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../transport.module.sass"
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
    { key: 'H24', number: 'H24', cesta: 'Mendlovo nám. – Pisárky – Vozovna Komín'},
    { key: '25', number: '25', cesta: 'Osová – Nemocnce Bohunice – Čtvrtě – Pisárky – Mendlovo nám. – Úvoz – Konečného nám. – Pionýrská – Lesnická – Tomkovo nám. – Stará osada – Pálavské nám. – Novolíšeňská – Jírova'},
    { key: '26', number: '26', cesta: 'Kamenný vrch – Čtvrtě – Pisárky – Mendlovo nám. – Úvoz – Konečného nám. – Pionýrská – Lesnická – Tomkovo nám. – Stará osada – Pálavské nám. – Novolíšeňská – Jírova'},
    { key: '30', number: '30', cesta: 'Černého – Zoologická zahrada (←) – Svratecká – Přívrat – Skácelova – Semilasso – Královo Pole, nádraží'},
    { key: '31', number: '31', cesta: 'Hlavní nádraží – Tržní – Spáčilova – Černovičky – Slatina, sídliště – Šlapanice, Kalvodova'},
    { key: '32', number: '32', cesta: 'Česká – Botanická – Slovanské nám. – Srbská'},
    { key: '33', number: '33', cesta: 'Hlavní nádraží – Tržní – Spáčilova – Černovičky – Slatina, sídliště'},
    { key: '34', number: '34', cesta: ' Česká – Klusáčkova – Přívrat – Vychodilova'},
    { key: '35', number: '35', cesta: '(Kamenný vrch – Čtvrtě – Pisárky –) Mendlovo nám. – Žlutý kopec – Barvičova '},
    { key: '36', number: '36', cesta: 'Česká – Klusáčkova – Přívrat – (Vychodilova) – Svratecká – Komín, sídliště'},
    { key: '37', number: '37', cesta: 'Mendlovo nám. – Pisárky – Voříškova – Jírovcova (–  Kamenný vrch – Čtvrtě – Nemocnice Bohunice)'},
    { key: '38', number: '38', cesta: 'Komenského nám. – Žlutý kopec – Preslova '},
    { key: '39', number: '39', cesta: 'Komenského nám. – Žlutý kopec – Barvičova'},
  ];

export default class Trolejbus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
        { title: 'Number', dataIndex: 'number', key: 'number', width: 100, fixed: 'left', render: text => <a>{text}</a>, ...this.getColumnSearchProps('number'),
            sorter: {
            compare: (a, b) => a.number - b.number,
            multiple: 2,
            },},
        { title: 'Cesta', dataIndex: 'cesta', key: 'cesta', },
    ];

    render() {
        return (
            <div className={styles.title}>
                <Table columns={this.columns} dataSource={data} scroll={{ y: 400 }} className={styles.table} pagination={false} bordered='true' tableLayout='fixed' rowClassName={'fontSizeSm'}/>
            </div>
        );
    }
}
