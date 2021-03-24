import React from 'react';

export const CHANGE_SELECT_COMMENT_ID = 'CHANGE_SELECT_COMMENT_ID';
export const CHANGE_SELECT_NAV_KEY = 'CHANGE_SELECT_NAV_KEY';
export const CHANGE_SKIN = 'CHANGE_SKIN';

type StateType = {
  id: string;
  selectNavKey: string;
  mode: string;
};

type ActionType = {
  type: string;
  data: string;
};

export type MixStateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
};

export const defaultState: StateType = {
  id: '',
  selectNavKey: 'message',
  mode: 'primary',
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case CHANGE_SELECT_COMMENT_ID:
      return { ...state, id: action.data };
    case CHANGE_SELECT_NAV_KEY:
      return { ...state, selectNavKey: action.data };
    case CHANGE_SKIN:
      return { ...state, mode: action.data };
    default:
      throw new Error();
  }
}
