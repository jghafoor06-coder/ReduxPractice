import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import LoginForm from "./src/components/LoginForm"

const App = () => {
  return (
    <Provider store={store}>
      <LoginForm/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})