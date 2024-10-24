import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskCart = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={styles.dateTitle}>Start Date</Text>
          <Text style={styles.date}>{item.startDate}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.dateTitle}>End Date</Text>
          <Text style={styles.date}>{item.endDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default TaskCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  taskDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
  },
  dateTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  date: {
    fontSize: 14,
    fontWeight: '400',
    color: '#686D76',
  },
});
