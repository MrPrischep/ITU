// Author: Pastushenko Vladislav
// Login: xpastu04
import React from "react";
import {connect} from "react-redux";
import {Col, Row, TimePicker, Form, Select, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {fetchStops} from '../../store/stops/actions'
import moment from 'moment';
// import RouteItem from "./routeItem";
import Router from "next/router";

class Searcher extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            stops: [],
            routes: 'preparing'
        }
        this.props.fetchStops().then(res => this.setState({stops: res}))
    }


    onSearch = (values) => {

        // ?f=achtelky&t=antonínská&date=3.12.2021&time=20:45&&byarr=false&lng=c&submit=true
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = dd + '.' + mm + '.' + yyyy;

        let queryData = {}
        queryData.f = values.from.toLowerCase()
        queryData.t = values.to.toLowerCase()
        queryData.date = today
        queryData.time = moment(values.start_time).format("HH:mm")

        queryData.byarr = false
        queryData.lng = 'c'
        queryData.submit = true

        Router.push({pathname: 'https://idos.idnes.cz/vlakyautobusymhdvse/spojeni/vysledky', query: {...queryData}})
    }

    render() {
        return (
            <div>
                <Form onFinish={this.onSearch} initialValues={{start_time: moment()}}>
                    <Row align='left' gutter={[10, 0]}>
                        <Col xs={6} align='start'>
                            <Form.Item name={'from'} rules={[{ required: true, message: 'Vyberte odkud' }]}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="Odkud"
                                    optionFilterProp="children"

                                >
                                    {this.state.stops.length > 0 && this.state.stops.map(stop => {
                                        return (
                                            <Select.Option key={'from' + stop.id} value={stop.name}> {stop.name}</Select.Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='to' rules={[{ required: true, message: 'Vyberte kam' }]}>
                                <Select
                                    showSearch
                                    style={{ width: '100%' }}
                                    placeholder="Kam"
                                    optionFilterProp="children"
                                >
                                    {this.state.stops.length > 0 && this.state.stops.map(stop => {
                                        return (
                                            <Select.Option key={'to' + stop.id} value={stop.name}>{stop.name}</Select.Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='start_time' rules={[{ required: true, message: 'Vyberte čas odjezdu' }]}>
                                <TimePicker format={'HH:mm'} placeholder='Vyberte čas odjezdu'/>
                            </Form.Item>
                        </Col>
                        <Col xs={6} align='start'>
                            <Form.Item name='start_time'>
                                <Button htmlType='submit' type='primary' icon={<SearchOutlined />}>
                                    Hledat
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {/* {this.state.routes !== 'preparing' &&
                    <>
                        {this.state.routes.length > 0 ?
                        <p align='left' className='fontSizeMd'>
                            Results
                            <div>
                                {this.state.routes.map((el, idx) => {return(<RouteItem key={idx} item={el}/>)})}
                            </div>
                        </p>
                        :
                        <p align='center' className='fontSizeMd'>
                            We could not find anything for your request.
                        </p>}
                    </>
                } */}

            </div>

        )
    }

}



const mapStateToProps = state => {
    return {
        stops: state.stops.stops,
    }
}
export default connect(mapStateToProps, {
    fetchStops
}) (Searcher);

