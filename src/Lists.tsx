import { View, Text, StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'


export default function Lists() {
    const [players, setPlayers] = useState([
        {name: 'Jonny', key: 10},
        {name: 'Curry', key: 7},
        {name: 'Genge', key: 1},
        {name: 'Lawes', key: 6},
        {name: 'Faz', key: 12},
        {name: 'Johno', key: 4}
    ])
    const [newPlayer, setNewPlayer] = useState({name: '', key: -1})
    const [errorMessage, setErrorMessage] = useState('')

    const submitNewPlayer = (name: string, position: number) => {
        if(position > 15 || position < 1) {
            setErrorMessage('incorrect position')
            return
        }
        if(name.length < 1) {
            setErrorMessage('name is incorrect')
            return
        }
        setPlayers([
            ...players,
            {name: name, key: position}
        ])    
    }

    players.sort((fst, snd) => fst.key - snd.key)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>England Rugby Greatest XV</Text>
            </View>

            <View style={styles.body}>
                <ScrollView>
                    {players.map(player => (
                            <View 
                                key={player.key}
                                style={styles.player}
                            >
                                <Text>{player.key}: {player.name}</Text>
                            </View>
                        )
                    )}
                </ScrollView>
            </View>

            {/* or */}

            {/* Only renders visiable items from list => better */}
            <FlatList
                data={players}
                renderItem={({ item }) => (
                    <Text style={styles.player}>{item.name}</Text>
                )}
            />

            <View style={styles.inputContainer}>
                <Text>Enter new player:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter player name'
                    onChangeText={value => setNewPlayer({name: value, key: newPlayer.key})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter player position'
                    keyboardType='numeric'
                    onChangeText={value => setNewPlayer({name: newPlayer.name, key: Number(value)})}
                />

                <Button
                    title='Add new player'
                    onPress={() => submitNewPlayer(newPlayer.name, newPlayer.key)}
                />

                <Text style={styles.errorMessage}>{errorMessage}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        paddingTop: 40, 
        paddingHorizontal: 20
    },
    header: {
        padding: 10,
        border: 2
    },
    title: {
        fontWeight: 'bold'
    },
    body: {
        paddingLeft: 10
    },
    inputContainer: {
        padding: 20,
        border: 1,
        borderColor: '#777'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        margin: 10,
        padding: 8,
        width: 200
    },
    errorMessage: {
        padding: 20,
        color: 'red'
    },
    player: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})