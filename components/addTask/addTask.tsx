import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './addTask.style';
import {TaskType} from '../../types/task';

type Props = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

const AddTask = ({tasks, setTasks}: Props) => {
  const [newTask, setNewTask] = useState('');

  const handleChangeText = (text: string) => {
    setNewTask(text);
  };

  const handlePress = () => {
    if (!newTask) return;

    setTasks([
      ...tasks,
      {
        id: (tasks.length + 1).toString(),
        title: newTask,
        done: false,
      },
    ]);
    setNewTask('');
  };

  return (
    <View>
      <TextInput
        placeholder="Yapılacak..."
        value={newTask}
        onChangeText={handleChangeText}
      />
      <Button title="Kaydet" onPress={handlePress} />
    </View>
  );
};

export default AddTask;
