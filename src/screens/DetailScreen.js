import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from '../components/Detail/Header';
import ChartAffected from '../components/Detail/ChartAffected';
import ChartLine from '../components/Detail/ChartLine';
import ChartAge from '../components/Detail/ChartAge';

const DetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <ChartAffected />
      <ChartLine />
      <ChartAge />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
});
