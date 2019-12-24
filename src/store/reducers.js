import {takeDataByLand} from './actions';

const initialState = {
  lang: `czech`,
  allTexts: takeDataByLand(`english`),
}

export const ActionCreator = {
  changeLang: (lang) => ({
    type: `CHANGE_LANG`,
    PAYLOAD: takeDataByLand(lang),
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_LANG`: return Object.assign({}, state, {
      allTexts: action.payload,
    })
  }

  return state;
}