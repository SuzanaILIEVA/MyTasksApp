import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';
import moment from 'moment';
import {taskValues} from '../../utils/constats';
import {setCategory} from '../../utils/function';

const TaskCart = ({item}) => {
  const navigation = useNavigation();
  // console.log(item.title);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor:
            taskValues.find(task => task.status === item.status)?.color ||
            'red',
          padding: 7,
          borderRadius: 5,
        }}>
        {taskValues.find(task => task.status === item.status)?.icon}
      </View>

      <View>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskDescription}>{item.description}</Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.dateTitle}>Start Date</Text>
            <Text style={styles.date}>
              {moment(item.startDate).format('DD/MM/YY')}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.dateTitle}>Deadline</Text>
            <Text style={styles.date}>
              {moment(item.endDate).format('DD/MM/YY')}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginLeft: 15,
          height: 30,
          borderBlockColor: 'red',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}>
        <Text>{setCategory(item.category)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
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
