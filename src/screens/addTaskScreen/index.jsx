import {View, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import {Button, Input, Radio, RadioGroup} from '@ui-kitten/components';
import CustomDatePicker from '../../components/UI/CustomDatePicker';
import {taskSchema} from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {TASKS} from '../../utils/routes';

const AddTaskScreen = () => {
  const navigation = useNavigation();

  const saveTask = async values => {
    try {
      await AsyncStorage.setItem('task', JSON.stringify(values));
      console.log('basarili ');
    } catch (error) {
      console.log('hata ', error);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Task added successfully');
    handleSubmit();
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: 'Software lesson',
          description: 'Learn more about software',
          startDate: null,
          endDate: null,
          category: null,
        }}
        validationSchema={taskSchema}
        onSubmit={values => {
          saveTask(values);
          navigation.navigate(TASKS);
        }}>
        {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
          <View>
            <Input
              size="large"
              placeholder=""
              value={values.title}
              label={'Title'}
              onChangeText={handleChange('title')}
              style={{marginVertical: 10}}
              status={errors.title ? 'danger' : 'success'}
              caption={errors.title}
            />

            <Input
              multiline
              size="large"
              placeholder=""
              value={values.description}
              label={'Description'}
              onChangeText={handleChange('description')}
              style={{marginVertical: 10}}
              status={errors.description ? 'danger' : 'success'}
              caption={errors.description}
            />

            <CustomDatePicker
              label={'Start Date'}
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'success'}
              caption={errors.startDate}
            />

            <CustomDatePicker
              label={'End Date'}
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'success'}
              caption={errors.endDate}
            />

            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Design</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>

            <Button
              onPress={handleSubmit}
              status="success"
              style={{marginTop: 30}}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
  },
});
