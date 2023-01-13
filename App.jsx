import React from 'react';

import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import Message from "./Message";

const App = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [message, setMessage] = React.useState(null);

  const onSubmit = () => {
    if (number % 2 === 0) {
      setMessage("The number enter is Even")
    } else {
      setMessage("The number enter is Odd")
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Number"
          keyboardType="numeric"
        />
        <Button
          title="Tell me"
          onPress={() => onSubmit()}
        />
        <Message message={message}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }
});

export default App;
