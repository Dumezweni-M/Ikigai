import { View, Text } from "react-native"
import CalendarStrip from 'react-native-calendar-strip';

const Calendar = ( ) => {
    return (
        <View> 

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
                    highlightDateContainerStyle={{backgroundColor: '#B96588'}}
                    iconContainer={{flex: 0.1}}
                />
            </View>
        </View>
    )
}

export default Calendar;