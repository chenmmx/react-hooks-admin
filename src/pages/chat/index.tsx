import React, { FC, useReducer, createContext } from 'react';
import { reducer, defaultState, MixStateAndDispatch } from './context';
import { Modal } from 'antd';
import './index.less';
import ChatNavigation from './components/chat-navigation';
import SidebarMessage from './components/sidebar-message';
import SidebarFriends from './components/sidebar-friends';
import SidebarFavorites from './components/sidebar-favorites';
import ChatMain from './components/chat-main';
import ModalAddGroup from './components/modal-add-group';
import { CLOSE_MODAL } from './context';

export const Context = createContext<MixStateAndDispatch>({
  state: defaultState,
});

const Chat: FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleCancel = (): void => {
    dispatch({ type: CLOSE_MODAL });
  };

  const ModelContent = (): React.ReactElement | null => {
    switch (state.modalOptions.type) {
      case 'add_group':
        return <ModalAddGroup />;
      default:
        return null;
    }
  };

  return (
    <div className={['chat', state.mode].join(' ')}>
      <Context.Provider value={{ state, dispatch }}>
        <div className="chat-layout">
          <ChatNavigation />
          <div className="chat-layout-content">
            <div className="sidebar-group">
              {(() => {
                switch (state.selectNavKey) {
                  case 'message':
                    return <SidebarMessage />;
                  case 'friends':
                    return <SidebarFriends />;
                  case 'favorites':
                    return <SidebarFavorites />;
                  default:
                    return <SidebarMessage />;
                }
              })()}
            </div>
            {state.id ? <ChatMain /> : null}
          </div>
        </div>
        <Modal
          visible={state.modalVisible}
          title={state.modalOptions.title}
          onCancel={handleCancel}
          footer={null}
        >
          <ModelContent />
        </Modal>
      </Context.Provider>
    </div>
  );
};

export default Chat;
