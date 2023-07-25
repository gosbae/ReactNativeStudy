

import {URL} from 'next/dist/compiled/@edge-runtime/primitives/url';
import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { ImageBackground,StyleSheet, Text, StatusBar, View, TextInput } from 'react-native';
import {parentPort} from 'worker_threads';



export default function App() {

  const [sum, setSum] = useState(0);
  const [textValue, setValue] = useState('');
  const [numColor, setColor] = useState('white');
  useEffect(() => {
    switch((sum+'').length){
      case 1: setColor('white'); break;
      case 2: setColor('yellow'); break;
      case 3: setColor('orange'); break;
      case 4: setColor('red'); break;
      default: setColor('blue'); break;
    }
  },[sum]);
  return (
      <View style={styles.container}>
        <ImageBackground source={require('./img/containerBG.jpg')} style={styles.bgImage}>
        <View style={styles.numContainer}>
          <Text style={[styles.numText, {color: numColor }]}>{sum}</Text>
          <TextInput
        keyboardType='numeric'
        style={styles.numInput}
        value={textValue}
        caretHidden={true}
        onChangeText={(text) => {
          setSum(sum+parseInt(text));
          switch((sum+'').length){
            case 1: setColor('white'); break;
            case 2: setColor('yellow'); break;
            case 3: setColor('orange'); break;
            case 4: setColor('red'); break;
          }
          setValue('');
        }}
        ></TextInput>
        </View>
        </ImageBackground>

      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numInput: {
    width: '80%',
    height: '100%',
    backgroundColor: 'transparent',
    color: 'transparent',
    textAlign: 'center',
    position: 'absolute',
  },
  numText: {
    position: 'relative',
    fontSize: 200,
    marginTop: 140,
    color: 'white',
  },
  numContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  }
});
