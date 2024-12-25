/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import Title from '../../components/title';
import Tasks from '../../components/tasks';
import AddTask from '../../components/addTask';
import styles from './todos.style';
import {TaskType} from '../../types/task';

function Todos(): React.JSX.Element {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <View style={styles.container}>
      <Title tasks={tasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </View>
  );
}

export default Todos;
