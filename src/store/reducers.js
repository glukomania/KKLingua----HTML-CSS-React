import {takeDataByLand} from './actions';

const initialState = {
  lang: `czech`,
  allTexts: takeDataByLand(`czech`),
}

export const ActionCreator = {
  changeTexts: (lang) => ({
    type: `CHANGE_TEXTS`,
    payload: takeDataByLand(lang),
  }),
  changeLang: (lang) => ({
    type: `CHANGE_LANG`,
    payload: lang,
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_TEXTS`: return Object.assign({}, state, {
      allTexts: action.payload,
    });
    case `CHANGE_LANG`: return Object.assign({}, state, {
      lang: action.payload,
    })
  }

  return state;
}