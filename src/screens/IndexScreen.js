import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}{' '}
              </Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
