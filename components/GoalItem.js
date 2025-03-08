import { Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ item, onDeleteGoal }) => {
  return (
    <Pressable
      android_ripple={{ color: '#dddddd' }} //ini cuma untuk andro
      onPress={onDeleteGoal.bind(this, item)} //ini ada manggil func pakai bind, fungsi bind ini inisialisasi function sebelum dipanggil, sebenarnya bisa panggil dia pakai function juga sih, cuma biar keren aja
      style={({ pressed }) => pressed && styles.goalItemPress}
    >
      <Text style={[styles.goalItem, styles.colorWhite]}>{item}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  colorWhite: {
    color: 'white',
  },
  goalItem: {
    padding: 16,
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 6,
  },
  goalItemPress: {
    // backgroundColor: '#cccccc', //ini gak muncul dia, kayaknya gabisa ditimpa style didalamnya
    opacity: 0.5,
  },
});

export default GoalItem;
