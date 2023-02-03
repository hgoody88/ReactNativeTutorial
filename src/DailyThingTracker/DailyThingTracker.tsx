import { View, Text, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState} from 'react'
import Header from './Header'
import DailyThingItem, { IDailyThing } from './DailyThingItem'
import AddThing from './AddThing'


export default function DailyThingTracker() {

    const [dailyThings, setDailyThings] = useState<IDailyThing[]>([
        {info: "Yoga", id: 1},
        {info: "Healthy food", id: 2},
        {info: "Exercise", id: 3},
        {info: "Brain Training", id: 4},
        {info: "Duolingo", id: 5},
    ])

    const pressHandler = (key: number) => {
        setDailyThings(prevDailyThings => {
            return prevDailyThings.filter(thing => thing.id != key)
        })
    }

    const addThingToDailys = (text: string): void => {
        if(text.length > 0) {
            setDailyThings(prevDailys => {
                const largestId = prevDailys.reduce((a,b) => Math.max(a,b.id), -Infinity)
                return ([
                    ...prevDailys,
                    {info: text, id: largestId + 1}
                ])
            })
        } else {
            // This is only for ios and android btw
            Alert.alert(
                'Oh dear!',
                'Must input something before creating a thing',
                [{
                    text: 'Ok',
                    onPress: () => console.log('Closed alert')
                }]
            )
        }
    }

  return (
    <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss()
            console.log('dismissed!')
        }}
    >
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <AddThing
                    addThingToDailys={addThingToDailys}
                />
                <FlatList
                    style={styles.list}
                    data={dailyThings}
                    renderItem={({ item }) => (
                        <DailyThingItem
                            thing={item}
                            pressHandler={pressHandler}
                        />
                    )}
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20
    },
    dailyThing: {
        backgroundColor: 'pink',
        marginHorizontal: 10
    }
})