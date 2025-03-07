import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';

const App = () => {
  const [goalInput, setGoalInput] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (input) => {
    setGoalInput(input);
  };

  const addGoalHandler = () => {
    if (!goalInput) return;
    setGoalList((prev) => [...prev, goalInput]);
    setGoalInput('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          defaultValue={goalInput}
        />
        {/* <Button title="Add Goal" /> */}
        <TouchableHighlight onPress={addGoalHandler} disabled={!goalInput}>
          <View
            style={[
              styles.buttonView,
              { backgroundColor: !goalInput ? '#ccc' : 'blue' },
            ]}
          >
            {/* <ActivityIndicator /> */}
            <Text style={styles.colorWhite}>Add Goal</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/* disini kita tetap harus pakai view untuk ngebungkus scroll view, karena scroll view itu butuh height yang fix, jadi dari pada kita setel height nya fix, mending pakai parent view aja lebih responsiv design */}
      <View style={styles.listGoalsContainer}>
        {/* scroll view ini bagus untuk limited item, tapi untuk item yang banyak dan apalagi ada paging, pakai flatlist aja, baca dokumentasi */}

        {goalList.length > 0 ? (
          <FlatList
            style={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.goalScrollView}
            data={goalList}
            keyExtractor={(item, index) => `${item}-${index}`} //ini untuk extract key di looping child nya, gak perlu pake key props lagi
            renderItem={(goal) => {
              return (
                <Text style={[styles.goalItem, styles.colorWhite]}>
                  {goal.item}
                </Text>
              );
            }}
          />
        ) : (
          <Text>Goals not found...</Text>
        )}

        {/* <ScrollView
          style={{ width: '100%' }}
          contentContainerStyle={styles.goalScrollView}
          showsVerticalScrollIndicator={false}
        >
          {goalList.length > 0 ? (
            goalList.map((el, i) => (
              <Text
                key={`${el}-${i}`}
                style={[styles.goalItem, styles.colorWhite]}
              >
                {el}
              </Text>
            ))
          ) : (
            <Text>Goals not found...</Text>
          )}
        </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    // alignItems: 'stretch', //ini untuk cross axis nya memenuhi space yang ada
    // height: '100%', //ini untuk buat view nya jadi sebesar ukuran layar, tapi better pake flex
    flex: 1, //jadi disini flex akan bernilai full jika cuma 1 flex doang, jika banyak bisa seperti flex basis bernilai 1 atau 2 atau 3, nantinya nilainya adalah rata2 nya, kayak flex-basis
  },
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
  buttonView: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 6,
    gap: 6,
  },
  colorWhite: {
    color: 'white',
  },
  listGoalsContainer: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  goalScrollView: {
    gap: 12,
  },
  goalItem: {
    padding: 16,
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 6,
  },
});

export default App;
