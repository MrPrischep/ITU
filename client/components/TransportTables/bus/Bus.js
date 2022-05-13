import React from "react";
import {connect} from "react-redux";
import ReactDOM from "react-dom";
import styles from "./../transport.module.sass"
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const data = [
    { key: 'x4', number: 'x4', cesta: 'Babická – Proškovo náměstí – Maloměřický most – Mostecká'},
    { key: 'x31', number: 'x31', cesta: 'Hlavní nádraží – Tržní – Spáčilova – Černovičky – Řípská – Slatina, nádraží'},
    { key: '40', number: '40', cesta: 'Studentská – Nemocnice Bohunice – Stará nemocnice – Ústřední hřbitov – Křídlovická – Úzká – Konopná – Popelova – Hanácká – Tuřany, smyčka (– Tovární / – Sokolnice – Újezd u Brna)'},
    { key: '41', number: '41', cesta: 'Královo Pole, nádraží – Semilasso – Medlánky – Řečkovice – Kouty – Ivanovice, Globus / – Česká, Hlavní – Lelekovice (– Vranov, myslivna)'},
    { key: '42', number: '42', cesta: 'Královo Pole, nádraží – Semilasso (→) – Letovická – Palackého nám. (– Řečkovice, hřbitov) – Ivanovice, Globus'},
    { key: '43', number: '43', cesta: 'Královo Pole, nádraží – Klarisky '},
    { key: '44', number: '44', cesta: 'ÚAN Zvonařka – Tržní – Stará osada – Tomkovo nám. – Štefánikova čtvrť – Halasovo nám. – Královo Pole, nádraží – Skácelova – Přívrat – Vozovna Komín – Pisárky – Mendlovo nám. – ÚAN Zvonařka'},
    { key: '46', number: '46', cesta: 'Haškova – Blažkova – Štefánikova čtvrť – Zemědělská'},
    { key: '47', number: '47', cesta: 'Hlavní nádraží – Tržní – Faměrovo nám. – Staré Černovice'},
    { key: '48', number: '48', cesta: 'Úzká – Konopná – Popelova – Holásky – Hanácká – Dvorska – Kobylnice – Prace'},
    { key: '49', number: '49', cesta: 'Úzká – Tržní – Faměrovo nám. – (Staré Černovice) – Komárov – Horní Heršpice – (Bednářova) – Přízřenice – Modřice, Olympia (– Dvůr v lese)'},
    { key: '50', number: '50', cesta: 'Mariánské náměstí – Horní Heršpice – Bohunická – Traťová – Vyhlídalova – Osová – Nemocnice Bohunice – Čtvrtě – Kamenný vrch – Jírovcova – Kohoutovice, hájenka – Adamcova – Zoologická zahrada'},
    { key: 'E50', number: 'E50', cesta: 'Kamechy – Říčanská – Ečerova – Kohoutovice, hájenka – Starý Lískovec, smyčka – Běloruská – Bohunická – Komárov – Těžební – Ericha Roučky – Slatina, závod'},
    { key: '51', number: '51', cesta: 'Zoologická zahrada – Ečerova – Křivánkovo nám. – Troubsko, Veselka – Popůvky – Troubsko – Pražská / Hoštická – Nemocnice Bohunice (– Osová – Ostopovice – Moravany – Ořechovská – Ústřední hřbitov)'},
    { key: '52', number: '52', cesta: 'Mendlovo nám. – Riviéra – Pisárky – Kohoutovice, hájenka – Bartolomějská – Ríšova – Kamechy – Ečerova – Zoologická zahrada'},
    { key: '53', number: '53', cesta: 'Technologický park – Technická – Skácelova – Královo Pole, nádraží (– Halasovo nám. – Štefánikova čtvrť)'},
    { key: '54', number: '54', cesta: 'Zoologická zahrada – Přístaviště – Ečerova – Kamechy'},
    { key: '55', number: '55', cesta: 'Židenice, nádraží – Stará osada – Dělnický dům – Bělohorská – Vlkova – Elplova – Podbělová – Jírova – Náměstí Karla IV. – Mariánské údolí'},
    { key: 'x55', number: 'x55', cesta: 'Jírova – Náměstí Karla IV. – Velatická '},
    { key: 'E56', number: 'E56', cesta: 'Nemocnice Bohunice – Pisárky – Královo Pole, nádraží'},
    { key: '57', number: '57', cesta: '(Vranov, smyčka –) Útěchov – Klarisky – Haškova – Halasovo nám. – Štefánikova čtvrť – Merhautova (– Maloměřický most – Proškovo nám. – Obřany, sídliště)'},
    { key: '58', number: '58', cesta: 'Židenice, nádraží – Stará osada – Dělnický dům – Malá Klajdovka – (Zetor-smyčka) – Klicperova – Náměstí Karla IV. – Líšeň, hřbitov'},
    { key: '61', number: '61', cesta: 'Nemocnice Bohunice – Kamenice – Ústřední hřbitov – Křídlovická – Úzká'},
    { key: '63', number: '63', cesta: 'Úzká – Konopná – Popelova – Holásky – Chrlické nám. – Chrlice, smyčka'},
    { key: '64', number: '64', cesta: 'Červený písek – Zimní – Stará osada (– Židenice, nádraží) – Kuldova – Geislerova – Masná – Škrobárenská – Konopná – Popelova – Holásky – Chrlické nám. – Chrlice, smyčka'},
    { key: '65', number: '65', cesta: 'Technologický park – Medlánky – Nadační – Řečkovice – Řečkovice, hřbitov (– Řečkovice, nádraží)'},
    { key: '67', number: '67', cesta: 'Jundrov – Vozovna Komín – Přívrat – Skácelova – Štefánikova – (NC Královo Pole) – Zimní stadion – Náměstí 28. října – Hlavní nádraží – Masná – Škrobárenská – Konopná – Avion Shopping Park'},
    { key: '68', number: '68', cesta: '(Myslivna – Pisárky – Vaňkovo nám. –) Náměstí Míru – Tábor – Šumavská'},
    { key: '69', number: '69', cesta: 'Bosonohy – Starý Lískovec, smyčka – Čermákova – Osová – Nemocnice Bohunice – Kamenice – Ukrajinská'},
    { key: '70', number: '70', cesta: 'Královo Pole, nádraží – Semilasso (→) – Letovická – Palackého nám. – Kronova – Mokrá Hora – Ořešín'},
    { key: '71', number: '71', cesta: 'Královo Pole, nádraží – Semilasso – Medlánky – Řečkovice – Kouty – Česká, Hlavní – Kuřim, žel. st'},
    { key: '73', number: '73', cesta: 'Slatina, závod – Hanácká – Sokolnice, žel. st'},
    { key: '74', number: '74', cesta: 'Červený písek – Stará osada – Škroupova – Psychiatrická nemocnice – Faměrovo nám.– Staré Černovice'},
    { key: '75', number: '75', cesta: '(Slatina, nádraží – Slatina, závod – Ericha Roučky –) Vozovna Slatina – Černovičky – Dělnický dům – Stará osada – Maloměřický most – Proškovo nám. – Obřany, sídliště (– Bílovice n. S.)'},
    { key: 'E75', number: 'E75', cesta: 'Židenice, nádraží – Stará osada – Těžební – Ericha Roučky – Slatina, závod'},
    { key: 'E76', number: 'E76', cesta: 'Hlavní nádraží – Tržní – Černovičky – Řípská – Letiště Tuřany - terminál'},
    { key: '77', number: '77', cesta: 'Úzká – Tržní – Spáčilova – Těžební – Ericha Roučky – Slatina, závod (– Slatinka / Letiště - logistický areál)'},
    { key: '78', number: '78', cesta: 'Židenice, nádraží – Stará osada – Dělnický dům – Malá Klajdovka – Pálavské nám. – Strnadova – Elplova – Jírova – Náměstí Karla IV. – Holzova – Slatina, sídliště – Vozovna Slatina – Řípská – Slatina, závod – Hanácká – Chrlické nám. – Modřice, Olympia'},
    { key: '80', number: '80', cesta: 'Česká – Úvoz – Hrad Špilberk'},
    { key: '81', number: '81', cesta: 'Česká – Úvoz – Klusáčkova – NC Královo Pole – Královo Pole, nádraží – Kociánka – Halasovo nám. – Haškova – Blažkova – Štefánikova čtvrť'},
    { key: '82', number: '82', cesta: 'Valašská – Nemocnice Bohunice – Traťová – OC Futurum – Červený kopec – Mendlovo nám. – Hlavní nádraží – Česká – Dětská nemocnice – Geislerova – Juliánov – Jírova – Pálavské nám.'},
    { key: '84', number: '84', cesta: 'Stará osada – Tržní – Autobusové nádraží – Mendlovo nám. – Pisárky – Vozovna Komín – Přívrat – Skácelova – Královo Pole, nádraží – Halasovo nám. – Štefánikova čtvrť – Tomkovo nám. – Stará osada'},

];

export default class Bus extends React.Component {
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
