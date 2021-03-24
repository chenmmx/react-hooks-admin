import React, { FC, useReducer, createContext } from 'react';
import { reducer, defaultState, MixStateAndDispatch } from './context';
import './styles.less';
import ChatNavigation from './components/chat-navigation';
import SidebarMessage from './components/sidebar-message';
import SidebarFriends from './components/sidebar-friends';
import SidebarFavorites from './components/sidebar-favorites';
import ChatMain from './components/chat-main';

export const Context = createContext<MixStateAndDispatch>({
  state: defaultState,
});

const Chat: FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className={['chat', state.mode].join(' ')}>
      <div className="chat-layout">
        <Context.Provider value={{ state, dispatch }}>
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
        </Context.Provider>
      </div>
    </div>
  );
};

export default Chat;
