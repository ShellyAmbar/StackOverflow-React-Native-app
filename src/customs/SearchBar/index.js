import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity} from 'react-native';
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
      <div className="input-search">
        <TextInput
          placeholder="Enter city name"
          className="input"
          value={value}
          onChange={newVal => handleValueChanged(newVal)}
        />
      </div>
    </div>
  );
};

export default Index;
