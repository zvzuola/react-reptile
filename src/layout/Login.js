import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('/api/user/login', {
          method: 'post',
          body: JSON.stringify(values),
          credentials: 'same-origin',
        })
          .then(response => response.json())
          .then((res) => {
            console.log(res);
          });
      }
    });
  }

  create() {
    fetch('/api/user/create', {
      method: 'POST',
      body: JSON.stringify({
        name: 'zv',
        nick: 'zvzuola',
        password: '666666',
        gender: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }),
    })
      .then(response => response.json())
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: 400, margin: '10px auto' }}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />,
          )}
        </FormItem>
        <FormItem style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
