import {Text, View} from 'react-native';
import React from 'react';
import styles from './Title.style';
import {TaskType} from '../../types/task';

type Props = {
  tasks: TaskType[];
};

const Title = ({tasks}: Props) => {
  const activeTasks = tasks.filter(task => !task.done).length;
  return (
    <View>
      <Text>Yapılacaklar</Text>
      <Text>{activeTasks}</Text>
    </View>
  );
};

export default Title;
