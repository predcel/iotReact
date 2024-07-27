import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from "react-native";
import { Avatar } from '@rneui/themed';
import { Text } from '@rneui/themed';

const randomNum = (max = 0) => {
    const aux = Math.random();
    return Math.floor(aux * max);
}

export default function Recamara() {
    const [isEnabled, setIsEnabled] = useState(randomNum(2) == 1 ? true : false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isOn1, setIsOn1] = useState(false);
    const changeSwtich1 = () => {
        setIsOn1(previousState => !previousState);
        setIsOn2(previousState => isOn2 ? !previousState : previousState)
    }

    const [isOn2, setIsOn2] = useState(false);
    const changeSwtich2 = () => {
        setIsOn2(previousState => !previousState)
        setIsOn1(previousState => isOn1 ? !previousState : previousState)
    };

    const temperatura = useState(typeof temperatura === 'undefined' ? randomNum(41) : temperatura);
    // const changeSwtich2 = () => setIsOn2(previousState => !previousState);

    return (
        <ScrollView>
            <View style={estilos.renglon}>
                <Avatar
                    size={200}
                    rounded
                    icon={{ name: 'bed', type: 'font-awesome', color: '#009688' }}
                    containerStyle={{
                        borderColor: 'grey',
                        borderStyle: 'solid',
                        borderWidth: 3,
                    }} />
            </View>
            <Text style={estilos.header}>Iluminacion</Text>
            <View style={estilos.renglon}>
                <Text style={estilos.espacioDerecho}>Apagado</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text style={estilos.espacioIzquierdo}>Encendido</Text>
            </View>
            <Text style={estilos.header}>Temperatura</Text>
            <View style={estilos.renglon}>
                <Text h4>{temperatura}° C</Text>
            </View>
            <View style={estilos.renglon}>
                <View style={estilos.basicStyle}>
                    <Text style={estilos.subHeader}>Calefacción</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isOn1 ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={changeSwtich1}
                        value={isOn1}
                    />
                </View>
                <View style={estilos.basicStyle}>
                    <Text style={estilos.subHeader}>Aire acondicionado</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isOn2 ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={changeSwtich2}
                        value={isOn2}
                    />
                </View>
            </View>
        </ScrollView>

    );
}

const estilos = StyleSheet.create({
    basicStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    header: {
        backgroundColor: "#2089ff",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10,
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 1,
        marginBottom: 10,
        paddingHorizontal: 20
    },
    view: {
        margin: 10,
    },
    espacioDerecho: {
        marginRight: 10
    },
    espacioIzquierdo: {
        marginLeft: 10
    },
    renglon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 30,
    }
});