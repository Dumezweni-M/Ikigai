import { View } from 'react-native';
import {RadarChart} from '@salmonco/react-native-radar-chart';

const PowerWheel = () => {

  const data = [
    {label: 'Love', value: 15, labelSize: 5}, //What you love
    {label: 'Mission', value: 71},
    {label: 'World', value: 51}, //What the world needs
    {label: 'Vocation', value: 5},
    {label: 'Money', value: 70}, //What you can be paid for
    {label: 'Profession', value: 90},
    {label: 'Skills', value: 3}, //What you're good at
    {label: 'Passion', value: 1},
  ];

  return (

    <View className="border border-gray-300 rounded-lg items-center">
      <RadarChart
        data={data}
        maxValue={100}
        gradientColor={{
          startColor: '#BFFCA6',
          endColor: '#51cb20',
          count: 6,
        }}
        stroke={['#fff', '#fff', '#fff', '#fff', '#fff']}
        strokeWidth={[5, 0, 5, 0, 5, 1]}
        strokeOpacity={[1, 1, 1, 1, 1]}
        labelColor="#433D3A"
        labelSize={10}
        dataFillColor="#daf7dc"
        dataFillOpacity={0.7}
        dataStroke="lightblue"
        dataStrokeWidth={2}
        isCircle
      />
    </View>
  );
};


export default PowerWheel;