import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goalList, setGoalList] = useState([]);

  const deleteGoalHandler = (item) => {
    setGoalList((prev) => prev.filter((el) => el !== item));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoalList={setGoalList} />
      {/* disini kita tetap harus pakai view untuk ngebungkus scroll view, karena scroll view itu butuh height yang fix, jadi dari pada kita setel height nya fix, mending pakai parent view aja lebih responsiv design */}
      <View style={styles.listGoalsContainer}>
        {/* scroll view ini bagus untuk limited item, tapi untuk item yang banyak dan apalagi ada paging, pakai flatlist aja, baca dokumentasi */}

        {goalList.length > 0 ? (
          <FlatList
            style={{ width: '100%' }}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.goalScrollView}
            data={goalList}
            keyExtractor={(item, index) => `${item}-${index}`} //ini untuk extract key di looping child nya, gak perlu pake key props lagi
            renderItem={(goal) => {
              return (
                <GoalItem item={goal.item} onDeleteGoal={deleteGoalHandler} />
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
      <StatusBar style="dark" />
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
    marginTop: StatusBar.currentHeight || 0,
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
    // backgroundColor: 'red',
  },
});

export default App;
