import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Use the full Calendar import

const FullCalendar = () => {
  const [selected, setSelected] = useState('');

  return (
    <View className="flex-1 bg-white p-4">
      <Calendar
        // Style the calendar to match your "Todoist Red" theme
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#E44332', // Your Red
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#E44332',
          dayTextColor: '#2d4150',
          arrowColor: '#E44332',
          monthTextColor: 'black',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
        }}
        // Handle date selection
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
      />
    </View>
  );
};

export default FullCalendar;