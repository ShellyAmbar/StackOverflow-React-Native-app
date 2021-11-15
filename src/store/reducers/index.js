import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import Articles from './Articles';
import Posts from './Posts';
import Favorites from './Favirites';
import Questions from './Questions';
import Me from './Me';
import Profiles from './Profiles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  articles: Articles,
  posts: Posts,
  favorites: Favorites,
  questions: Questions,
  profiles: Profiles,
  me: Me,
});

export default persistReducer(rootPersistConfig, appReducer);
