import { View, Text, TextInput, Button, ButtonProps, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Props {
    addThingToDailys: (text: string) => void
}

export default function AddThing({addThingToDailys}: Props) {
  
    const [entry, setEntry] = useState('')
  
    const onChangeEntry = (updatedEntry: string): void => {
        setEntry(updatedEntry)
    }

    const buttonPressHandler = (): void => {
        addThingToDailys(entry)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={'Add new thing here...'}
                onChangeText={onChangeEntry} 
            />
            <Button
                title='Add Thing'
                color='blue'
                onPress={buttonPressHandler}                 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
})