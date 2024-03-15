import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor} style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: '#6A1B4d',
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '45%',
    alignSelf: 'center',
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
