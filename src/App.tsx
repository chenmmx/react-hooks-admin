import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { MyRouter } from './router';
import { ConfigProvider, message, notification } from 'antd';
import { tokenExpressInTime } from '../src/utils/methods';
// import storeConfig from './store';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './App.less';
moment.locale('zh-cn');

// const store = storeConfig();

message.config({
  duration: 2,
  maxCount: 2,
});
notification.config({
  placement: 'topRight',
  bottom: 50,
  duration: 2,
});
function App() {
  const isLogined: boolean = window.localStorage.getItem('is_login') === 'true' || false;
  useEffect(() => {
    if (tokenExpressInTime()) {
      message.error('登陆过期，请重新登陆!');
    }
  }, []);

  return (
    // <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <MyRouter />
        {isLogined && !tokenExpressInTime() ? null : (
          <Redirect from={'*'} exact={true} to={'/login'} />
        )}
      </BrowserRouter>
    </ConfigProvider>
    // </Provider>
  );
}

export default App;
