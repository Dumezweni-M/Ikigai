import { View, Text } from "react-native-web"
import CalendarStrip from 'react-native-calendar-strip';

const Calendar = ( ) => {
    return (
        <View> 

            <Text className="text-2xl font-bold">Calendar</Text>
            <View>
                <CalendarStrip
                    scrollable
                    style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                    calendarColor={'#ffffff'}
                    calendarHeaderStyle={{color: 'black'}}
                    dateNumberStyle={{color: 'black'}}
                    dateNameStyle={{color: 'black'}}
                    highlightDateNumberStyle={{color: 'white'}}
                    highlightDateNameStyle={{color: 'white'}}
                    highlightDateContainerStyle={{backgroundColor: '#E44332'}} // Todoist Red
                    iconContainer={{flex: 0.1}}
                />
            </View>
        </View>
    )
}

export default Calendar;