import { View, StyleSheet, Dimensions } from 'react-native';
import RadarChart from '@avaiyakapil/react-native-radar-chart';

const RadarGrid = () => {
  const data = [
    {
      physical: 0.1,  // Balanced
      mental: 0.2,    // Intune
      emotional: 0.225, // Basic
      external: 0.115,  // Balanced
    },
  ];

  const labels = {
    physical: 'Physical',
    mental: 'Mental',
    emotional: 'Emotional',
    external: 'External',
  };

  return (
    <View >
      <RadarChart
        data={data}
        values={labels}
        graphSize={400}
        scaleCount={5}        // Creates the 3 layers: Basic, Intune, Balanced
        // colorList={['#4CAF50']} // Main fill color
        fillOpacity={0.4}
        showGrid={true}
        showAxis={true}
        gradientColor={{
          startColor: '#FF9432',
          endColor: '#FFF8F1',
          count: 5,
        }}
        isCircle
      />
    </View>
  );
};



export default RadarGrid;