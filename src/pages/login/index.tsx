import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import './styles.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: FC = () => {
  interface FormFields {
    username: string;
    password: string;
    remember: boolean;
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const history = useHistory();
  useEffect(() => {
    const userInfo: any = JSON.parse(window.localStorage.getItem('user_info') || '{}') || {};
    if (userInfo.remember) {
      form.setFieldsValue(userInfo);
    } else {
      form.setFieldsValue({
        remember: false,
      });
    }
    window.localStorage.setItem('is_login', 'false');
  }, [form]);

  const onFinish = (values: FormFields) => {
    setLoading(true);
    window.localStorage.setItem('user_info', JSON.stringify(values));

    setTimeout(() => {
      setLoading(false);
      const date: string = new Date().getTime() + 6 * 3600 * 1000 + '';
      window.localStorage.setItem('is_login', 'true');
      window.localStorage.setItem('tokenTime', date);
      notification.success({
        message: '提示',
        description: '登陆成功！',
      });
      history.push('/home');
    }, 1000);
  };

  return (
    <div className="container">
      <div className="container-main">
        <div className="main-left" />
        <div className="main-right">
          <div className="login-form">
            <h2 className="login-form-title">Welcome Back!</h2>
            <Form
              form={form}
              {...layout}
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名！' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码！' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
