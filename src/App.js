import React ,{Component} from "react";
import { Button,Switch } from 'antd';
import './App.less'
export default class App extends Component {
    render() {
        return (
            <div>
                App描述
                <Switch defaultChecked />
                <Button type="primary">点击按钮</Button>
            </div>
        );
    }
}
