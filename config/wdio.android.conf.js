import {config} from './wdio.shared.conf.js'
import path from 'path'

config.port= 4723,

    config.specs= [
        '../test/specs/**/*.js'
    ]
config.services = ['appium'],

    config.capabilities=[
{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel 5 API 31',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
       // 'appium:app': path.join(process.cwd(), 'app', 'android', 'ApiDemos-debug.apk')
       'appium:app': path.join(process.cwd(), 'app', 'android', 'ColorNote+Notepad.apk'),
       "appium:autoGrantPermissions":true
    }
]
export { config };