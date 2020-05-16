import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const BottomBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.col1, {borderTopRightRadius: 200}]}>
          <Feather name="cast" size={30} color="#B6BBC4" />
        </View>

        <View style={[styles.col1, {borderTopLeftRadius: 200}]}>
          <Feather name="bell" size={30} color="#B6BBC4" />
        </View>
      </View>
      <View style={styles.center} />
      <View style={styles.center2} />
      <View style={styles.volumnCon}>
        <Feather name="mic" size={30} color="#222" />
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F4F4',
  },
  col1: {
    width: '42%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  center: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    width: 100,
    height: 400,
    top: 10,
    borderRadius: 40,
  },
  center2: {
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    width: 90,
    height: 90,
    top: -56,
    borderRadius: 100,
  },
  volumnCon: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    width: 80,
    height: 80,
    top: -60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
