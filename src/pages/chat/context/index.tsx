import React from 'react';

export const CHANGE_SELECT_COMMENT_ID = 'CHANGE_SELECT_COMMENT_ID';
export const CHANGE_SELECT_NAV_KEY = 'CHANGE_SELECT_NAV_KEY';

type StateType = {
  id: string;
  selectNavKey: string;
};

type ActionType = {
  type: string;
  id: string;
};

export type MixStateAndDispatch = {
  state: StateType;
  dispatch?: React.Dispatch<ActionType>;
};

export const defaultState: StateType = {
  id: '',
  selectNavKey: 'message',
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case CHANGE_SELECT_COMMENT_ID:
      return { ...state, id: action.id };
    case CHANGE_SELECT_NAV_KEY:
      return { ...state, selectNavKey: action.id };
    default:
      throw new Error();
  }
}
