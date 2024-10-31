import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {Divider, Button} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../theme/colors';
import {status, taskValues} from '../../utils/constats';
import {useNavigation} from '@react-navigation/native';

const TaskDetail = ({route}) => {
  const {item} = route?.params;
  const navigation = useNavigation();

  // delete butonu taskları silmek için
  const deleteTask = async () => {
    try {
      //mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return; // kayıtlı görevv yoksa fonskiyonu durdur
      }

      const tasks = JSON.parse(savedTasks);

      //silinecek görevi filtrele
      const filteredTasks = tasks.filter(task => task.id !== item.id);

      //filtrelenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev Silindi');
    } catch (error) {
      console.log('Görev silinirken hata oluştu:', error);
    }

    navigation.goBack();
  };

  // update butonları için güncelleme

  const updateTask = async newStatus => {
    try {
      // mevcut görevler al
      const savedTasks = await AsyncStorage.getItem('tasks');

      if (savedTasks === null) {
        return; // kayıtlı görev yoksa fonksiyonu durdur
      }

      const tasks = JSON.parse(savedTasks);

      // güncellenecek görevi bul
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus, // yeni durumu uygula
          };
        }
        return task;
      });

      // güncellenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('Görev Güncellendi');
    } catch (error) {
      console.log('Görev güncellenirken hata oluştu:', error);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: 'black',
            }}>
            Title:
          </Text>
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Description:
          </Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Start Date:
          </Text>
          <Text style={styles.text}>
            {moment(item.startDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Deadline:
          </Text>
          <Text style={styles.text}>
            {' '}
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Category:
          </Text>
          <Text style={styles.text}>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Status:
          </Text>
          <Text style={styles.text}>
            {taskValues.find(task => task.status === item?.status)?.title}
          </Text>
        </View>
        <Divider />
      </ScrollView>

      <View>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLETED)}
          style={styles.button}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: colors.WHITE},
  button: {
    marginVertical: 5,
  },
  text: {
    fontWeight: '500',
    color: '#000',
    paddingLeft: 10,
    fontSize: 16,
  },
});
