import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import { Button, Form, Input } from "antd";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionList: [],
    };
  }
  onLoginSubmit = async(values) => {
    const response = await this.props.actions.checkLoginCredential(values);
    if (response.isSuccess) {
        this.props.history.replace("/home");
    }
  };

  render() {
    return (
      <div className="login-page-body">
        <Form
          name="normal_login"
          className="login-form login-form-center"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onLoginSubmit}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please Enter your E-mail!",
              },
            ]}
          >
            <Input type="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email Id"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please Enter your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ float: "right" }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default withRouter(LoginPage);
