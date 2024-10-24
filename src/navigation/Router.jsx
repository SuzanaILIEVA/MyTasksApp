import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import AddTaskScreen from '../screens/addTaskScreen';
import TaskDetailScreen from '../screens/taskDetailScreen';
import {ADDTASKS, TASKDETAIL, TASKS} from '../utils/routes';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={TASKS} component={HomeScreen} />
      <Stack.Screen name={ADDTASKS} component={AddTaskScreen} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetailScreen} />
    </Stack.Navigator>
  );
};

export default Router;
