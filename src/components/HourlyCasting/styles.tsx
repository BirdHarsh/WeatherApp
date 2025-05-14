
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "100%",
  
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  scrollContent: {
    paddingBottom: 8,
  },
  hourItem: {
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginRight: 10,
    width: 60,
  },
  currentHour: {
    backgroundColor: '#4285F4',
  },
  hourText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  currentHourText: {
    color: 'white',
  },
  iconContainer: {
    marginVertical: 8,
  },
  tempText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
