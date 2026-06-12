import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../Redux/reducers/todoReducer';

const LoginForm = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.saveuser.user);

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSaveUser = () => {
    dispatch(saveUser({ name, email }));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="enter name"
        value={name}
        onChangeText={setName}
        style={{ width: 200, height: 100, borderRadius: 10 }}
      />

      <TextInput
        placeholder="enter email"
        value={email}
        onChangeText={setEmail}
        style={{ width: 200, height: 100, borderRadius: 10 }}
      />

      <TouchableOpacity
        onPress={handleSaveUser}
        style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}
      >
        <Text>Save User</Text>
      </TouchableOpacity>

      {user && (
        <>
          <Text>name: {user.name}</Text>
          <Text>email: {user.email}</Text>
        </>
      )}
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
