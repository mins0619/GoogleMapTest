import React, {Component} from 'react';
import {View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


export default class Main extends Component{
    
    
    constructor(){
        super();
    }
    
    
    render(){
        return(
            <View style={{flex:1, padding:16,}}>
                <Text style={{padding:8, }}>
                    Map Test
                </Text>
                <MapView
                    style = {{flex:1,}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={
                        {
                        latitude:37.562087,
                        longitude:127.035192,
                        latitudeDelta:0.009,
                        longitudeDelta:0.004,
                    }}>


                    </MapView>
                    
            </View>
        );
    }
}