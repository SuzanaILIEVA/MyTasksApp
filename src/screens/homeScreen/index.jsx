import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatActionButton from '../../components/UI/FloatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCart from '../../components/home/TaskCart';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getTask = async () => {
    let myTask = [];
    try {
      const task = await AsyncStorage.getItem('task');
      myTask.push(JSON.parse(task));
      console.log(task);
      setTasks(myTask);
    } catch (e) {
      console.log(e);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true); // yenileme basladiginda refreshing true
    await getTask(); // gorevleri yeniden al
    setRefreshing(false); //yenileme bittiginde refreshing state'ini false yap
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskCart item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
