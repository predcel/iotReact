import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar } from '@rneui/themed';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import { Text } from '@rneui/themed';



export default function Index() {
  return (
    <ScrollView>
      <View style={estilos.renglon}>
        <Avatar
          size={200}
          rounded
          icon={{ name: 'house', type: 'material', color: '#009688' }}
          containerStyle={{
            borderColor: 'grey',
            borderStyle: 'solid',
            borderWidth: 3,
          }} />
      </View>
      <View style={estilos.renglon}>
        <Text h3>Bienvenido a HouseController</Text>
      </View>
      <View style={estilos.renglon}>
        <Text>Desde esta aplicacion podrás controlar y sensar tu casa.


        </Text>
      </View>
    </ScrollView>

  );
}

const estilos = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  basicStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  renglon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  }
});