import {FlatList, StyleSheet, View, RefreshControl} from 'react-native';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import FloatActionButton from '../../components/UI/FloatActionButton';
import TaskCart from '../../components/home/TaskCart';
import HeaderComponent from '../../components/home/HeaderComponent';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(0);

  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      // setTasks(JSON.parse(savedTask));
      const taskList = savedTask ? JSON.parse(savedTask) : [];

      setTasks(taskList); //  tasks listi guncelle

      let completedCount = 0;
      let pendingCount = 0;
      let ongoingCount = 0;
      let cancelCount = 0;
      for (const task of taskList) {
        if (task.status === 1) {
          ongoingCount++;
        }
        if (task.status === 2) {
          pendingCount++;
        }
        if (task.status === 3) {
          completedCount++;
        }
        if (task.status === 4) {
          cancelCount++;
        }

        setOngoing(ongoingCount);
        setPending(pendingCount);
        setCompleted(completedCount);
        setCancel(cancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true); // yenileme başladığında resfreshing true yap
    getTask(); // görevleri yeniden al
    setRefreshing(false); //yenileme bittiğinde resrefing stateini false yap
  };

  useEffect(() => {
    getTask();
  }, []);

  //SAYFANIN OTOMATIK YENILENMESI ICIN
  useFocusEffect(
    React.useCallback(() => {
      getTask();
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            completed={completed}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCart item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
