import React, { FC, useEffect, useState, useContext } from 'react';
import './index.less';
import { Avatar, Button, Input, Spin } from 'antd';
import BScroll from '@better-scroll/core';
import MouseWheel from '@better-scroll/mouse-wheel';
import PullDown from '@better-scroll/pull-down';
import { Context } from '../../index';
import {
  PhoneTwoTone,
  VideoCameraTwoTone,
  EllipsisOutlined,
  SmileOutlined,
  PlusCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

BScroll.use(MouseWheel);
BScroll.use(PullDown);
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin={true} />;
const { TextArea } = Input;
let scroll: any = null;
let STEP = 0;

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
      content: '天王盖地虎！',
      avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
      type: 'other',
      date: '上午 9:32',
    },
    {
      id: '2',
      name: '嘟嘟',
      content: '宝塔镇河妖！',
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

const fakeData = [
  {
    id: '99',
    name: '糖糖',
    content: '天上没有乌云盖！',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
    type: 'mine',
    date: '上午 8:20',
  },
  {
    id: '88',
    name: '嘟嘟',
    content: '为什么你又掉下来？',
    avatar: 'https://api.sunweihu.com/api/sjtx/api.php',
    type: 'other',
    date: '上午 8:32',
  },
];

const getData: any = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 600);
  });
};

const fetchMoreData: any = (id: string, pageIndex: number, pageSize: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(id) % 2 === 0) {
        resolve({
          status: 0,
          message: 'success',
          data: [],
        });
      } else {
        resolve({
          status: 0,
          message: 'success',
          data: fakeData,
        });
      }
    }, 600);
  });
};

const ChatMain: FC = () => {
  const { state } = useContext(Context);
  const [isPullingDown, setIsPullingDown] = useState<boolean>(false);
  const [comments, setComments] = useState<any>([]);

  // fetch data
  useEffect(() => {
    setComments((prev: any) => (prev = []));
    STEP = 0;
    const fetchData = async () => {
      const { data } = await getData(state.id);
      setComments((prev: any) => (prev = data));
      scroll.refresh();
      scrollToBottom();
    };
    fetchData();
  }, [state.id]);

  // init bsscroll
  useEffect(() => {
    scroll = new BScroll('.chat-main .chat-main-body .chat-main-body-wrapper', {
      scrollX: false,
      scrollY: true,
      click: true,
      pullDownRefresh: true,
      mouseWheel: {
        speed: 10,
      },
    });

    const pullingDownHandler = async () => {
      STEP += 1;
      setIsPullingDown((prev) => (prev = true));
      const { data } = await fetchMoreData(state.id, STEP, 10);
      setComments((prev: any) => [...data, ...prev]);
      setIsPullingDown((prev: boolean) => (prev = false));
      finishPullDown();
    };
    scroll.on('pullingDown', pullingDownHandler);

    return () => {
      scroll.stop();
      scroll.destroy();
    };
  }, [state.id]);

  // load more finish
  const finishPullDown = (): void => {
    scroll.finishPullDown();
    setTimeout(() => {
      scroll.refresh();
    }, 800);
  };

  const scrollToBottom = (): void => {
    scroll.scrollTo(0, scroll.maxScrollY);
  };

  const sendComment = (): void => {
    console.log(123);
  };

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
        <div className="chat-main-body-wrapper">
          <div className="messages">
            {isPullingDown ? (
              <div className="loader">
                <Spin indicator={antIcon} spinning={true} />
              </div>
            ) : null}
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
                    <Avatar size="large" src={comment.avatar + `?${comment.id}`} />
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
        </div>
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
          <Button type="primary" onClick={sendComment}>
            发送
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
