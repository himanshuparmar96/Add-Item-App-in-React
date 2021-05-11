import react, { Component } from 'react';
import {Layout} from 'antd';



class NavigationBar extends Component {
    render() {
        return (<div>
            <Layout.Header>
                <div className="logo" >My App</div>
            </Layout.Header>
        </div>)
    }
}
export default NavigationBar
