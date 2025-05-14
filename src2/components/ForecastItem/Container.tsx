// components/ForecastItem/Container.tsx
import React from 'react';
import ForecastItemView from './View';
import { ForecastDay } from '../../models/weather';

interface ForecastItemContainerProps {
  forecast: ForecastDay;
}

const ForecastItemContainer: React.FC<ForecastItemContainerProps> = ({ forecast }) => {
  return <ForecastItemView forecast={forecast} />;
};

export default ForecastItemContainer;
