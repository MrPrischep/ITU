import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../transport.module.sass"
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
    { key: 'N89', number: 'N89', cesta: '(Prace –) Dvorska / Letiště Tuřany – Slatina, závod – Ericha Roučky – Černovičky – Bělohorská – Dělnický dům – Škroupova – Hlavní nádraží – Komenského nám. – Úvoz – Náměstí Míru – Náměstí Svornosti – Přívrat – Svratecká – Podlesí – Kamenolom – U Luhu(Prace –) Dvorska / Letiště Tuřany – Slatina, závod – Ericha Roučky – Černovičky – Bělohorská – Dělnický dům – Škroupova – Hlavní nádraží – Komenského nám. – Úvoz – Náměstí Míru – Náměstí Svornosti – Přívrat – Svratecká – Podlesí – Kamenolom – U Luhu'},
    { key: 'N90', number: 'N90', cesta: 'Ořešín – Mokrá Hora – (Řečkovice, nádraží –) Řečkovice – Medlánky – Pionýrská – Moravské nám. – Hlavní nádraží – Křídlovická – Celní – Nemocnice Bohunice – Kamenný vrch – Kohoutovice, hájenka'},
    { key: 'N91', number: 'N91', cesta: 'Labská – Osová – Humenná – Běloruská – Celní – Poříčí – Hlavní nádraží – Moravské nám. – Pionýrská – Řečkovice – Kouty – Ivanovice, Globus / Lelekovice / Kuřim'},
    { key: 'N92', number: 'N92', cesta: 'Halasovo nám. – Haškova – Štefánikova čtvrť – Jugoslávská – Moravské nám. – Hlavní nádraží – Česká – Konečného nám. – Tábor – Vozovna Komín – Svratecká – Náměstí 28. dubna – Černého'},
    { key: 'N93', number: 'N93', cesta: '(Vranov –) Útěchov – Klarisky – Kociánka – Halasovo nám. – Lesnická – Jugoslávská – Moravské nám. – Hlavní nádraží – Česká – Klusáčkova – Skácelova – Přívrat – Vozovna Komín – Svratecká – Komín, sídliště'},
    { key: 'N94', number: 'N94', cesta: '(Bílovice n. Svit. –) Obřany, sídliště – Maloměřický most – Tomkovo nám. – Vozovna Husovice – Hlavní nádraží – Tržní – Faměrovo nám. – Komárov – Horní Heršpice – Přízřenice (– Modřice, smyčka)'},
    { key: 'N95', number: 'N95', cesta: 'Kamenný vrch – Čtvrtě – Anthropos – Žlutý kopec – Úvoz – Komenského nám. – Hlavní nádraží – Konopná – Popelova – Ivanovické nám. / Holásky – Hanácká – Chrlické nám. – Chrlice, smyčka (– Sokolnice – Újezd u Brna)'},
    { key: 'N96', number: 'N96', cesta: 'Bosonohy – Starý Lískovec, smyčka – Humenná – Vyhlídalova – Ořechovská – Heršpická – Křídlovická – Hlavní nádraží – Tržní – Spáčilova – Černovičky – Slatina, sídliště – Šlapanice, Kalvodova (– Mariánské údolí)'},
    { key: 'N97', number: 'N97', cesta: 'Jírovcova – Voříškova – Libušina třída – Anthropos – Mendlovo nám. – Nemocnice u sv. Anny – Hlavní nádraží – Vojenská nemocnice – Stará osada – Dělnický dům –Malá Klajdovka – Zaoralova – Náměstí Karla IV. – Líšeň, hřbitov'},
    { key: 'N98', number: 'N98', cesta: 'Jírova – Horníkova – Vlkova – Bělohorská – Dělnický dům – Geislerova – Hlavní nádraží – Mendlovo nám. – Riviéra – Anthropos – Svratecká – Zoologická zahrada – Rakovecká – Ečerova – Kamechy – Bartolomějská'},
    { key: 'N99', number: 'N99', cesta: 'Technologický park – Skácelova – Klusáčkova – Česká – Hlavní nádraží – Vojenská nemocnice – Stará osada – Pálavské nám. – Novolíšeňská – Jírova – Náměstí Karla IV. – Mariánské údolí'},
];

export default class NightBus extends React.Component {
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
