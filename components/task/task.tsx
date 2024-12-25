import {Text, View} from 'react-native';
import React from 'react';
import styles from './task.style';
import {TaskType} from '../../types/task';

type Props = {
  task: TaskType;
  setTasks: (tasks: TaskType[]) => void;
};

const Task = ({task, setTasks}: Props) => {
  return (
    <View>
      <Text>AddTask</Text>
    </View>
  );
};

export default Task;
