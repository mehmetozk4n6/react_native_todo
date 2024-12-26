import {Text, View, Pressable, Alert} from 'react-native';
import React from 'react';
import styles from './task.style';
import {TaskType} from '../../types/task';

type Props = {
  task: TaskType;
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
};

const Task = ({task, tasks, setTasks}: Props) => {
  const handleDone = () => {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return {...t, done: !t.done};
        }
        return t;
      }),
    );
  };

  const handleDelete = () => {
    Alert.alert('Silmek ister misin?', '', [
      {
        text: 'Evet',
        onPress: () => setTasks(tasks.filter(t => t.id !== task.id)),
      },
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View>
      <Pressable onPress={handleDone} onLongPress={handleDelete}>
        <Text style={task.done ? styles.doneTask : ''}>{task.title}</Text>
      </Pressable>
    </View>
  );
};

export default Task;
