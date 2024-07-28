import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from "react-native";
import { Dialog, Text, Avatar } from '@rneui/themed';

const randomNum = (max = 0) => {
    const aux = Math.random();
    return Math.floor(aux * max);
}

export default function Cocina() {
    // const [isEnabled, setIsEnabled] = useState(randomNum(2) == 1 ? true : false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const switchOn = () => setIsEnabled(isEnabled ? previousState => previousState : previousState => !previousState);

    const [visible5, setVisible5] = useState(randomNum(2) == 1 ? true : false);
    const toggleDialog5 = () => {
        setVisible5(!visible5);
    };

    return (
        <ScrollView>
            <View style={estilos.renglon}>
                <Avatar
                    size={200}
                    rounded
                    icon={{ name: 'blender', type: 'material', color: '#009688' }}
                    containerStyle={{
                        borderColor: 'grey',
                        borderStyle: 'solid',
                        borderWidth: 3,
                    }} />
            </View>
            <Text style={estilos.header}>Estractor de humo</Text>
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
            <Dialog
                isVisible={visible5}
                onBackdropPress={toggleDialog5}
            >
                <Dialog.Title
                    title="Se ha detectado humo en la habitacion. 
                ¿Desea encender el estractor?" />
                <Dialog.Actions>
                    <Dialog.Button title="Salir" onPress={toggleDialog5} />
                    <Dialog.Button
                        title="Encender"
                        onPress={() => {
                            switchOn();
                            toggleDialog5();
                        }}
                    />
                </Dialog.Actions>
            </Dialog>
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
