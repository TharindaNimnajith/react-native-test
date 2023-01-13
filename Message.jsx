import React from 'react';

import {View} from 'react-native';

const Message = (props) => {
  return (
    <View>
      {props.message}
    </View>
  )
}

export default Message;
