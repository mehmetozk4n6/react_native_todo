import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './tasks.style';
import {TaskType} from '../../types/task';
import Task from '../task/task';

type Props = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

const Todos = ({tasks, setTasks}: Props) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id.toString()}
      renderItem={item => <Task task={item.item} setTasks={setTasks} />}
    />
  );
};

export default Todos;
