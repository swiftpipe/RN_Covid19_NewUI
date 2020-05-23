import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChartAge = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>AGE GROUP</Text>
      </View>
      <View style={styles.chartContainer}>
        {Array(7)
          .fill(0)
          .map((e, i) => {
            const f = Math.random() * 100;
            return (
              <View style={[styles.chartCol, (i == 0) & {marginLeft: 0}]}>
                <Text style={styles.percent}>
                  {((30 / (f + 30)) * 100).toFixed(0)}%
                </Text>
                <View
                  style={[styles.col, {height: 30 + Math.random() * 100}]}
                />
                <Text style={styles.titleCol}>18-24</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default ChartAge;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    marginTop: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
  },

  col: {
    width: 30,
    height: 40,
    backgroundColor: '#AEB8C9',
  },

  percent: {
    color: 'gray',
    textAlign: 'center',
  },
  chartCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  titleCol: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 6,
  },
});
