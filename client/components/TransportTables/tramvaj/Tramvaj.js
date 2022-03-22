// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../transport.module.sass"
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
    { key: '1', number: '1', cesta: 'Řečkovice – Semilasso – Pionýrská – Moravské nám. – Hlavní nádraží – Mendlovo nám. – Pisárky'},
    { key: '2', number: '2', cesta: 'Stará osada – Tkalcovská – Hlavní nádraží – Poříčí – Celní – Ústřední hřbitov – Modřice, smyčka'},
    { key: '3', number: '3', cesta: 'Stará osada – Jugoslávská – Česká – Konečného nám. – Tábor – Vozovna Komín – Rakovecká'},
    { key: '4', number: '4', cesta: 'Vozovna Husovice – Tkalcovská – Hlavní nádraží – Česká – Náměstí Míru'},
    { key: 'H4', number: 'H4', cesta: 'Nové sady - smyčka – Náměstí Svobody – Česká – Malinovského nám.'},
    { key: '5', number: '5', cesta: 'Štefánikova čtvrť – Jugoslávská – Česká – Mendlovo nám. – Celní – Ústřední hřbitov - smyčka'},
    { key: '6', number: '6', cesta: 'Královo Pole, nádraží – Semilasso – Pionýrská – Česká – Mendlovo nám. – Celní – Švermova – Starý Lískovec, smyčka'},
    { key: '7', number: '7', cesta: '(Čertova rokle –) Zemědělská – Jugoslávská – Hlavní nádraží – Vsetínská – Švermova'},
    { key: '8', number: '8', cesta: 'Mifkova – Novolíšeňská – Geislerova – Hlavní nádraží – Vsetínská – Švermova – Starý Lískovec, smyčka'},
    { key: '9', number: '9', cesta: 'Čertova rokle – Zemědělská – Jugoslávská – Česká – Hlavní nádraží – Geislerova – Juliánov'},
    { key: '10', number: '10', cesta: '(Stránská skála –) Geislerova – Hlavní nádraží – Česká – Konečného nám. – Tábor – Vozovna Komín – Ečerova'},
    { key: '11', number: '11', cesta: 'Bráfova – Vozovna Komín'},
    { key: '12', number: '12', cesta: 'Technologický park – Červinkova – Konečného nám. – Česká – Hlavní nádraží – Autobusové nádraží – Komárov'},
];

export default class Tramvaj extends React.Component {
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
