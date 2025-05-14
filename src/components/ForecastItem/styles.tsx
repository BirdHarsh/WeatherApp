// components/ForecastItem/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayContainer: {
    marginLeft: 16,
    flexDirection: 'row',
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginRight: 4,
  },
  dateText: {
    fontSize: 16,
    color: '#d5d5d5',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maxTemp: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  minTemp: {
    fontSize: 14,
    color: '#d3d3d3',
    marginLeft: 4,
  },
});
