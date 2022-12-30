import React, { useState,useEffect } from 'react'
import moment from 'moment' // 2.20.1
import { View,Text,ScrollView } from 'react-native' // 0.0.1
import { Calendar } from 'react-native-calendars'
import { height } from 'react-native-daterange-picker/src/modules'
import colors from '../../constants/colors'
const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(100, 'days').format(_format)

const WixCalendar = () => {
  const [_markedDates, setMarkedDates] = useState([_today])
  const [selectedDates, setSelectdates] = useState([])
  // useEffect(() => {
  //  console.log(_markedDates,"marked",selectedDates);
  // }, [_markedDates])
  
  const onDaySelect = (day) => {
     let temp = [...selectedDates]
     let _selectedDay = moment(day.dateString).format(_format);
     
      let selected = true;
      if (_markedDates[_selectedDay]) {
        
        delete temp[_selectedDay]
        selected = !_markedDates[_selectedDay].selected;
        console.log(temp);

      }else{
        temp.push(_selectedDay)
        setSelectdates(temp)
      }
      let updatedMarkedDates = {..._markedDates, ...{ [_selectedDay]: { selected} } }
      
 
      setMarkedDates(updatedMarkedDates);
  }
 
    return (
      <View style={{width:"100%",}}>
        <Calendar
        style={{width:"100%", height:250,backgroundColor:colors.BACKGROUND,}}
            minDate={_today}
            maxDate={_maxDate}
            onDayPress={onDaySelect}
            markedDates={_markedDates}
        />
        
      </View>
    );
}

export default WixCalendar