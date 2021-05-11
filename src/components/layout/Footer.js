import React, { Component } from 'react'
import { Layout } from 'antd';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
            </div>
        )
    }
}
