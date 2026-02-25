import { View } from 'react-native';
import {RadarChart} from '@salmonco/react-native-radar-chart';

const PowerWheel = () => {

  const data = [
    {label: ',', value: 15, labelSize: 5}, //What you love
    {label: 'Mission', value: 51},
    {label: '.', value: 51}, //What the world needs
    {label: 'Vocation', value: 45},
    {label: ':', value: 20}, //What you can be paid for
    {label: 'Profession', value: 30},
    {label: ';', value: 40}, //What you're good at
    {label: 'Passion', value: 10},
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
        strokeWidth={[1, 0.5, 0.5, 0.5, 1]}
        strokeOpacity={[1, 1, 1, 1, 0.13]}
        labelColor="#433D3A"
        labelSize={10}
        dataFillColor="#daf7dc"
        dataFillOpacity={0.7}
        dataStroke="white"
        dataStrokeWidth={1}
        // isCircle
      />
    </View>
  );
};


export default PowerWheel;