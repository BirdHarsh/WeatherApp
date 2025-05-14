// styles.tsx
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  
  card: {
    width: width - 48,
    backgroundColor: '#4285F4',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  internalCard: {
    justifyContent: 'center',
    padding: 24,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  weatherCondition: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  dateText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginBottom: 20,
  },
  temperature: {
    color: 'white',
    fontSize: 80,
    fontWeight: '700',
    marginBottom: 24,
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  metricItem: {
    width: '50%',
    padding: 12,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderColor: '#92c1ff',
  },
  metricLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 4,
  },
  metricValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 2,
  },
  cityLocation: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  countryLocation: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-Light',
  },
});
