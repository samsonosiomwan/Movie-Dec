import {StyleSheet} from 'react-native'
import Colors from '../../utils/themes/colors'

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  clearFavorite: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.primary,
    fontWeight: "bold",
    color: Colors.primary,
    marginTop: "2%",
    padding: 2,
  },
});