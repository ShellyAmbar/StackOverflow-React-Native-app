import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import './HomeScreen.css';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import CustomFlatList from '../../customs/CustomFlatList';
import CustomItem from '../../customs/CustomItem';
import CustomModalQuestion from '../../customs/CustomModalQuestion';
import SearchBar from '../../customs/SearchBar';
import {getProfileById} from '../../store/actions/Profiles';
import {useSelector} from 'react-redux';
const Index = () => {
  const [posts, setposts] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  const columns = 2;
  const width = Dimensions.get('window').width - 20;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [showModal, setshowModal] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const dispatch = useDispatch();

  const showItemData = (item: any) => {
    setselectedItem(item);
    setshowModal(true);
  };

  const onCloseModalPressed = () => {
    setshowModal(false);
    setselectedItem(null);
  };

  const rederItems =
    () =>
    ({item, index}: any) => {
      return (
        <CustomItem
          heightOfItem={width / columns}
          item={item}
          onClickItem={showItemData}
        />
      );
    };
  const onPickProfile = (id: string) => {
    console.log(id, 'Id');
    dispatch(getProfileById(id));
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CustomModalQuestion
        visible={showModal}
        item={selectedItem}
        onClosePressed={onCloseModalPressed}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <SearchBar onSearchClicked={onPickProfile} />
          <CustomFlatList
            data={posts}
            numColumns={1}
            rederItem={rederItems()}
            keyExtractor={(item: any, index: number) => index}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Index;
