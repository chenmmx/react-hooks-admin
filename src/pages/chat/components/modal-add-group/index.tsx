import React, { FC, useState, useContext } from 'react';
import { Input, Form, Button, Avatar } from 'antd';
import { Context } from '../../index';
import { CLOSE_MODAL } from '../../context';

const { TextArea } = Input;

const ModalAddGroup: FC = () => {
  const [form] = Form.useForm();

  const { dispatch } = useContext(Context);
  const [loading, setLoading] = useState<boolean>(false);

  const onCreateGroup = (): void => {
    setLoading((prev) => (prev = true));
    setTimeout(() => {
      setLoading((prev) => (prev = false));
      if (dispatch) {
        dispatch({ type: CLOSE_MODAL });
      }
    }, 1000);
  };
  return (
    <Form layout="vertical" form={form}>
      <Form.Item label="分组名称">
        <Input />
      </Form.Item>
      <Form.Item label="分组成员">
        <Avatar.Group
          maxCount={5}
          size="large"
          maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {[1, 2, 3].map((i) => {
            return <Avatar key={i} src={'https://api.sunweihu.com/api/sjtx/api.php?' + i} />;
          })}
        </Avatar.Group>
      </Form.Item>
      <Form.Item label="描述">
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item className="al-right">
        <Button loading={loading} type="primary" onClick={onCreateGroup}>
          创建分组
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModalAddGroup;
