import React from 'react';
import {CreateDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator = CreateDrawerNavigator({
    Home:{
        screen : AppTabNavigator
        },
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName : 'Home'
    }
)