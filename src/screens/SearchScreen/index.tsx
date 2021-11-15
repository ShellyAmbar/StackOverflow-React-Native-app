import React, {useEffect, useState} from 'react';

//import './SettingsScreen.css';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../../customs/SearchBar';
const Index = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchedValue, setsearchedValue] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSearchValue = (value: string) => {
    setsearchedValue(value);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <SearchBar onSearchClicked={onSearchValue} /> */}

          {/* {searchedValue.length > 0 && <View></View>} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
