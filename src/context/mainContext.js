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
    case 'CHANGE_PLAY_STATE':
      return {
        ...state,
        playArtist: action.payload,
      };
    case 'CHANGE_DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'CHANGE_SOBRE_TEXT':
      return {
        ...state,
        sobreText: action.payload,
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
    playImg:
      'https://1.bp.blogspot.com/-LoKlow8dGZc/XQ9jIeR9DxI/AAAAAAABGVc/EKlE83PyBm8owjwVuF9ywBE5SS2xZjJGgCLcBGAs/s1600/Ray%2Bof%2BLight%2BDemo%2BAssembly%2Bby%2Balb69.jpg',
    playTitle: 'Sky Fits Heaven (demo)',
    playArtist: 'Madonna',
    playState: 'stop',
    description: null,
    sobreText: 1,
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
  const changePlayState = (state) => {
    dispatch({
      type: 'CHANGE_PLAY_STATE',
      payload: state,
    });
  };
  const changeDescription = (description) => {
    dispatch({
      type: 'CHANGE_DESCRIPTION',
      payload: description,
    });
  };
  const changeSobreText = (sobreText) => {
    dispatch({
      type: 'CHANGE_SOBRE_TEXT',
      payload: sobreText,
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
        playState: state.playState,
        changePlayState,
        description: state.description,
        changeDescription,
        sobreText: state.sobreText,
        changeSobreText,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
