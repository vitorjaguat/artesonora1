import React, { createContext, useReducer } from 'react';
// import { useMediaQuery } from '../util/useMediaQuery';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PLAY_SRC':
      return {
        ...state,
        playSrc: action.payload,
      };
    case 'CHANGE_PLAY_IMG':
      return {
        ...state,
        playImg: action.payload,
      };
    case 'CHANGE_PLAY_TITLE':
      return {
        ...state,
        playTitle: action.payload,
      };
    case 'CHANGE_PLAY_ARTIST':
      return {
        ...state,
        playArtist: action.payload,
      };
    default:
      return state;
  }
};

// Create the context
const MainContext = createContext();

// Context provider component
const MainContextProvider = ({ children }) => {
  // const isDesktop = useMediaQuery('md');
  // console.log('isDesktop', isDesktop);

  // Initial state
  const initialState = {
    playSrc:
      'https://ia904507.us.archive.org/16/items/madonna-rol-demos/01%20Sky%20Fits%20Heaven.mp3',
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Functions to change what is playing
  const changePlaySrc = (src) => {
    dispatch({
      type: 'CHANGE_PLAY_SRC',
      payload: src,
    });
  };
  const changePlayImg = (img) => {
    dispatch({
      type: 'CHANGE_PLAY_IMG',
      payload: img,
    });
  };
  const changePlayTitle = (title) => {
    dispatch({
      type: 'CHANGE_PLAY_TITLE',
      payload: title,
    });
  };
  const changePlayArtist = (artist) => {
    dispatch({
      type: 'CHANGE_PLAY_ARTIST',
      payload: artist,
    });
  };

  // console.log('showFooter', state.noShowFooter);

  return (
    <MainContext.Provider
      value={{
        playSrc: state.playSrc,
        changePlaySrc,
        playImg: state.playImg,
        changePlayImg,
        playTitle: state.playTitle,
        changePlayTitle,
        playArtist: state.playArtist,
        changePlayArtist,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
