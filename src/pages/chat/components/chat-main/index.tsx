import React, { FC, useEffect, useState } from 'react';
import './styles.less';
import { Avatar, Button, Input, Spin } from 'antd';
import {
  PhoneTwoTone,
  VideoCameraTwoTone,
  EllipsisOutlined,
  SmileOutlined,
  PlusCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin={true} />;

const { TextArea } = Input;

const result = {
  status: 0,
  message: 'success',
  data: [
    {
      id: '0',
      name: '糖糖',
      content:
        '哈哈哈哈哈哈哈哈哈哈哈，你真逗！哈哈哈哈哈哈哈哈哈哈哈，你真逗！哈哈哈哈哈哈哈哈哈哈哈，你真逗！哈哈哈哈哈哈哈哈哈哈哈，你真逗！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'mine',
      date: '上午 9:20',
    },
    {
      id: '1',
      name: '嘟嘟',
      content: '哈哈哈哈哈哈哈哈哈哈哈，我真逗！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'other',
      date: '上午 9:32',
    },
    {
      id: '2',
      name: '嘟嘟',
      content: '哈哈哈哈哈哈哈哈哈哈哈，我真逗！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'other',
      date: '上午 9:33',
    },
    {
      id: '3',
      name: '嘟嘟',
      content: '哈哈哈哈哈哈哈哈哈哈哈，我真逗！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'other',
      date: '上午 9:35',
    },
    {
      id: '4',
      name: '糖糖',
      content: '寒江孤影！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'mine',
      date: '上午 9:40',
    },
  ],
};

const getData: any = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

const ChatMain: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading((prev) => (prev = true));
      const { data } = await getData();
      setLoading((prev) => (prev = false));
      setComments((prev: any) => (prev = data));
    };
    fetchData();
  }, []);
  return (
    <div className="chat-main">
      <div className="chat-main-header">
        <div className="chat-main-header-user">
          <Avatar size="large" src="https://api.sunweihu.com/api/sjtx/api.php" />
          <div>
            <h3>嘟嘟</h3>
            <span>正在输入...</span>
          </div>
        </div>
        <div className="chat-main-header-action">
          <Button className="chat-main-header-action-btn" icon={<PhoneTwoTone />} />
          <Button className="chat-main-header-action-btn" icon={<VideoCameraTwoTone />} />
          <Button className="chat-main-header-action-btn" icon={<EllipsisOutlined />} />
        </div>
      </div>
      <div className="chat-main-body">
        <Spin indicator={antIcon} spinning={loading}>
          <div className="messages">
            {comments.map((comment: any) => {
              return (
                <div
                  className={[
                    'message-item',
                    comment.type === 'mine' ? 'outgoing-message' : '',
                  ].join(' ')}
                  key={comment.id}
                >
                  <div className="message-item-header">
                    <Avatar size="large" src={comment.avatar} />
                    <div>
                      <h3>{comment.name}</h3>
                      <div className="time">{comment.date}</div>
                    </div>
                  </div>
                  <div className="message-item-content">{comment.content}</div>
                </div>
              );
            })}
          </div>
        </Spin>
      </div>
      <div className="chat-main-footer">
        <div className="chat-main-footer-input">
          <TextArea rows={3} />
        </div>
        <div className="chat-main-footer-btns">
          <div>
            <Button icon={<SmileOutlined />} />
            <Button icon={<PlusCircleOutlined />} />
          </div>
          <Button type="primary">发送</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
