import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Required Field'),
  description: Yup.string().required('Required Field'),
  startDate: Yup.date().required('Required Field'),
  endDate: Yup.date().required('Required Field'),
});

export {taskSchema};
