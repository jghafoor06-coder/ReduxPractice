import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#111844',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Enter your Name"
          placeholderTextColor={'#4B5694'}
          value={name}
          onChangeText={setName}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            borderColor: '#4B5694',
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            color: '#EAE0CF',
          }}
        />

        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor={'#4B5694'}
          value={email}
          onChangeText={setEmail}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            borderColor: '#4B5694',
            borderWidth: 1,
            padding: 10,
            color: '#EAE0CF',
          }}
        />

        <TouchableOpacity
          onPress={handleSaveUser}
          activeOpacity={0.7}
          style={{
            backgroundColor: '#7288AE',
            padding: 10,
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 120,
          }}
        >
          <Text style={{ color: '#EAE0CF', fontSize: 15, fontWeight: 500 }}>
            Save User
          </Text>
        </TouchableOpacity>

        {user && (
          <>
            <Text
              style={{
                color: '#EAE0CF',
                fontSize: 15,
                fontWeight: 500,
                marginTop: 10,
              }}
            >
              name: {user.name}
            </Text>
            <Text style={{ color: '#EAE0CF', fontSize: 15, fontWeight: 500 }}>
              email: {user.email}
            </Text>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
