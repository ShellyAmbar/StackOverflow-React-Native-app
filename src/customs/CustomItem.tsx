import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

type CustomItemProps = {
  item: any;
  heightOfItem: number;
  onClickItem: (item: any) => void;
};
const CustomItem = (props: CustomItemProps) => {
  return (
    <Pressable onPress={() => props.onClickItem(props.item)}>
      <View style={styles.ListItem}>
        <Image
          source={{
            uri:
              !props.item.photoUrl || props.item.photoUrl === ''
                ? 'https://image.flaticon.com/icons/png/512/912/912214.png'
                : props.item.photoUrl,
          }}
          style={styles.image}
        />

        <View>
          <Text
            style={
              styles.textTitle
            }>{`${props.item.firstName} ${props.item.lastName},${props.item.age}`}</Text>
          <View style={styles.row}>
            <Ionicons size={20} style={styles.icon} name="briefcase-outline" />
            <View /*style={styles.col}*/>
              <Text style={styles.text}>{`Roll: ${props.item.roll}`}</Text>
              <Text
                style={
                  styles.textLight
                }>{`Start Date: ${props.item.startDate}`}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <AntDesign size={20} style={styles.icon} name="phone" />
            <Text style={styles.text}>{`Phone: ${props.item.phone}`}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons size={20} style={styles.icon} name="location-outline" />
            <Text style={styles.text}>{`Address: ${props.item.address}`}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default CustomItem;
const styles = StyleSheet.create({
  ListItem: {
    width: '100%',
    display: 'flex',
    paddingVertical: 20,
    paddingHorizontal: 30,

    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 10,
    borderRadius: 30,
  },
  icon: {
    marginEnd: 5,
  },
  buttonMore: {
    alignSelf: 'baseline',
    position: 'absolute',
    top: 20,
    end: 20,
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    width: 70,
    height: 70,
    alignSelf: 'baseline',
    borderRadius: 30,
    marginRight: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
  },
  textLight: {
    fontSize: 15,
    fontWeight: '200',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    margin: 5,
  },
});
