import {Text, View} from 'react-native';
import React from 'react';
import styles from './addTask.style';
import {TaskType} from '../../types/task';

type Props = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

const AddTask = (props: Props) => {
  return (
    <View>
      <Text>AddTask</Text>
    </View>
  );
};

export default AddTask;
