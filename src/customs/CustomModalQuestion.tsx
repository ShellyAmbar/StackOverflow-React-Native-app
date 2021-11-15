import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {WebView} from 'react-native-webview';
type CustomModalQuestionProps = {
  visible: boolean;
  item: any;
  onClosePressed: () => void;
};
const CustomModalQuestion = (props: CustomModalQuestionProps) => {
  const [showModal, setShowModal] = useState(false);

  const scaleValue = useRef(new Animated.Value(0)).current;
  const toggleModal = () => {
    if (props.visible) {
      setShowModal(props.visible);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(props.visible), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  useEffect(() => {
    toggleModal();
    console.log('useEffect', props.item);
  }, [props.visible]);
  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.onClosePressed()}>
              <Icon name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{
              width: '100%',
            }}>
            <View style={styles.content}>
              {props.item && (
                <WebView
                  source={{uri: props.item.link ? props.item.link : ''}}
                />
              )}
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModalQuestion;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    //  height: '80%',

    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },

  textTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    padding: 5,
  },
  content: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 20,
    marginBottom: 30,
  },
});
