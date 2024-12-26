import {FlatList} from 'react-native';
import React from 'react';
import styles from './tasks.style';
import {TaskType} from '../../types/task';
import Task from '../task/task';

type Props = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

const Todos = ({tasks, setTasks}: Props) => {
  console.log('🚀 ~ Todos ~ tasks:', tasks);
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={item => (
        <Task task={item.item} setTasks={setTasks} tasks={tasks} />
      )}
    />
  );
};

export default Todos;
