import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// import './SearchBar.css';
const Index = ({onSearchClicked}) => {
  const [value, setvalue] = useState('');

  const handleValueChanged = e => {
    setvalue(e.target.value);
    const val = e.target.value;
    console.log(val);
  };
  const handleOptionPicked = object => {
    onSearchClicked(object);
  };
  return (
    <div className="search-conatiner">
      <Button title="Search" onPress={() => handleOptionPicked(value)} />

      <TextInput
        style={styles.input}
        onChangeText={newVal => handleValueChanged(newVal)}
        value={value}
        placeholder="Enter id"
        keyboardType="numeric"
      />
    </div>
  );
};

export default Index;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
