import './login.scss';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
import setting from '../common/js/setting.js';
const FormItem = Form.Item;
const mountNode = document.getElementById('login-wrap');

const { CONSTANT_SUCCEED, CONSTANT_ERROR } = setting;
class NormalLoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        axios.get(`${setting.API_SERVER}/check-user`, {params: values})
        .then( res => {
          let { data } = res;
          if (data.status === CONSTANT_SUCCEED) {
            message.success('login success!');
            console.log('res:', res);
          } else {
            message.error(data.msg);
          }
        })
        .catch( error => {
          console.log('error:', error);
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem className="input-form-item">
          <h1 className="title">egg example</h1>
        </FormItem>
        <FormItem className="input-form-item">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem className="input-form-item">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

ReactDOM.render(<WrappedNormalLoginForm />, mountNode);