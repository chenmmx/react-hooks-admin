import React from 'react';

// 选择的对话id
export const CHANGE_SELECT_COMMENT_ID = 'CHANGE_SELECT_COMMENT_ID';
// 选择的navbar的key
export const CHANGE_SELECT_NAV_KEY = 'CHANGE_SELECT_NAV_KEY';
// 切换皮肤
export const CHANGE_SKIN = 'CHANGE_SKIN';
// 对话框
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
// 对话框type
export const CHANGE_MODAL_TYPE = 'CHANGE_MODAL_TYPE';

interface ModalOptions {
  type: string;
  title?: string;
}

type StateType = {
  id: string;
  selectNavKey: string;
  mode: string;
  modalVisible: boolean;
  modalOptions: ModalOptions;
};

type ActionType = {
  type: string;
  data?: any;
};

export type MixStateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
};

export const defaultState: StateType = {
  id: '',
  selectNavKey: 'message',
  mode: 'primary',
  modalVisible: false,
  modalOptions: {
    type: '',
    title: '',
  },
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case CHANGE_SELECT_COMMENT_ID:
      return { ...state, id: action.data };
    case CHANGE_SELECT_NAV_KEY:
      return { ...state, selectNavKey: action.data };
    case CHANGE_SKIN:
      return { ...state, mode: action.data };
    case OPEN_MODAL:
      return { ...state, modalVisible: true };
    case CLOSE_MODAL:
      return { ...state, modalVisible: false };
    case CHANGE_MODAL_TYPE:
      return { ...state, modalOptions: action.data };
    default:
      throw new Error();
  }
}
