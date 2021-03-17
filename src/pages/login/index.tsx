import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, notification, Row, Col, Divider } from 'antd';
import './styles.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { span: 16 },
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
    <div className="login">
      <video id="login-video" autoPlay={true} loop={true} muted={true}>
        <source src={require('../../assets/videos/login.mp4').default} type="video/mp4" />
      </video>
      <div className="form-wrapper">
        <div className="form-wrapper-logo" />
        <h2>登陆</h2>
        <div className="login-form">
          <Form
            form={form}
            {...layout}
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Row>
              <Col span={12}>
                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                  style={{ textAlign: 'left', marginBottom: '12px' }}
                >
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
              </Col>
              <Col span={12} style={{ textAlign: 'right', lineHeight: '32px' }}>
                <span>忘记密码</span>
              </Col>
            </Row>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                登陆
              </Button>
            </Form.Item>
          </Form>
          <Divider />
          <p className="text-muted">其他登陆方式</p>
          <Divider />
          <p className="text-muted">没有账号？</p>
          <Button>立即注册</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
