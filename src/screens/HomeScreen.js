import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ChartView from '../components/Home/ChartView';
import CaseView from '../components/Home/CaseView';
const HomeScreen = () => {
  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Entypo name="menu" size={30} />
            <Image
              source={require('../assets/cast.png')}
              resizeMode="contain"
              style={styles.img}
            />
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>Mar 22, 2020, 12:48 GMT</Text>
            <Text style={styles.headerTitle}>Corona Virus Case</Text>
            <Text style={styles.headerNumber}>316,067</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <ChartView title="DEATHS" num="13,590" color="#E35757" />
          <ChartView title="RECOVERED" num="95,892" color="#6AB276" />
        </View>
        <View style={styles.caseContainer}>
          <CaseView />
          <View style={{height: 10}} />
          <CaseView />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  container: {
    padding: 20,
    flex: 1,
  },

  header: {},
  headerContent: {
    marginTop: 10,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: '400',
    color: '#35343A',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#35343A',
    marginVertical: 8,
  },
  headerNumber: {
    fontSize: 45,
    fontWeight: '500',
    color: '#35343A',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  caseContainer: {
    marginTop: 20,
  },
});
