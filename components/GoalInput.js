import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

const GoalInput = ({ setGoalList }) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (input) => {
    /**
     * Parameter input disini akan langsung bertipe string, beda dg di web biasanya akan return InputEvent (biasanya a.target.value())
     */
    setGoalInput(input);
  };

  const addGoalHandler = () => {
    if (!goalInput) return;
    setGoalList((prev) => [...prev, goalInput]);
    setGoalInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        defaultValue={goalInput}
      />
      {/* <Button title="Add Goal" /> */}
      {/* sebenarnya ada touchable component kayak touchable | touchablehighligh | touchableopacity, tapi semua itu akan segera di ganti sama pressable */}
      <Pressable onPress={addGoalHandler} disabled={!goalInput}>
        {/**
         * kita bisa compound style, jadi yang paling ujung akan replace yang di awal, hanya assign aja bukan overwrite semuanya
         */}
        <View
          style={[
            styles.buttonView,
            { backgroundColor: !goalInput ? '#ccc' : 'blue' },
          ]}
        >
          {/* <ActivityIndicator /> */}
          <Text style={styles.colorWhite}>Add Goal</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', //kasih spasi antar komponen, start dan end nya gak termasuk, pake space-around kalo itu
    marginBottom: 24,
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    gap: 12,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  colorWhite: {
    color: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 6,
    gap: 6,
  },
});

export default GoalInput;
