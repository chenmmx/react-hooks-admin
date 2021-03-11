import React, { FC } from 'react';
import './styles.less';
import ChatNavigation from './components/chat-navigation';

const Chat: FC = () => {
  return (
    <div className="chat">
      <div className="chat-layout">
        <ChatNavigation />
        <div className="chat-layout-content">123</div>
      </div>
    </div>
  );
};

export default Chat;
