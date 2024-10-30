import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';

const HeaderComponent = ({ongoing, pending, completed, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: colors.ONGOING,
      icon: <ChartCircle size="32" color={colors.WHITE} />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: colors.PENDING,
      icon: <Clock size="32" color={colors.WHITE} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Completed',
      color: colors.COMPLETED,
      icon: <TickCircle size="32" color={colors.WHITE} />,
      count: completed,
    },
    {
      id: 4,
      title: 'Cancel',
      color: colors.CANCEL,
      icon: <CloseCircle size="32" color={colors.WHITE} />,
      count: cancel,
    },
  ];

  const RenderTasks = ({item}) => {
    return (
      <Pressable
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <View style={{marginBottom: 5}}>
            <Text style={styles.taskText}>{item.title}</Text>
            <Text style={styles.taskText}> Task : {item.count}</Text>
          </View>
          <View>
            <ArrowCircleRight2 size="24" color={colors.WHITE} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <RenderTasks item={item} />}
      />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: '#000',
            margin: 5,
          }}>
          All Tasks
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.WHITE,
    marginTop: 3,
  },
});
