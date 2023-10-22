import { View, Text,StyleSheet } from 'react-native'
import { useState } from 'react';
import React from 'react'
import Health from './Health'
import Value from './Value';
const STEPS_GOAL = 10_000;
const App = () => {
    const [date, setDate] = useState(new Date());
    const { steps, flights, distance } = Health(date);
    const changeDate = (numDays) => {
        const currentDate = new Date(date); // Create a copy of the current date
        // Update the date by adding/subtracting the number of days
        currentDate.setDate(currentDate.getDate() + numDays);
    
        setDate(currentDate); // Update the state variable
      };
    
    console.log(steps)
    console.log(flights)
    console.log(distance)
  return (
    <View style={styles.container}>
    <View style={styles.datePicker}>
      {/* <AntDesign
        onPress={() => changeDate(-1)}
        name="left"
        size={20}
        color="#C3FF53"
      /> */}
      <Text onPress={() => changeDate(-1)}>AntDesignleft</Text>
      <Text style={styles.date}>{date.toDateString()}</Text>

      {/* <AntDesign
        onPress={() => changeDate(1)}
        name="right"
        size={20}
        color="#C3FF53"
      /> */}
      <Text onPress={() => changeDate(1)}>AntDesignright</Text>
    </View>

    {/* <RingProgress
      radius={150}
      strokeWidth={50}
      progress={steps / STEPS_GOAL}
    /> */}
<Text >Progress {steps / STEPS_GOAL}</Text>
    <View style={styles.values}>
      <Value label="Steps" value={steps.toString()} />
      <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`} />
      <Value label="Flights Climbed" value={flights.toString()} />
    </View>

    {/* <StatusBar style="auto" /> */}
  </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});