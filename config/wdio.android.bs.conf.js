import {config} from './wdio.shared.conf.js'
import 'dotenv/config'

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

    config.specs= [
        '../test/specs/**/*.js'
    ]

    config.services = ['browserstack'],

    config.capabilities=[
{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
       // 'appium:app': path.join(process.cwd(), 'app', 'android', 'ApiDemos-debug.apk')
       'appium:app': "bs://f9d573a6109d7661dabb6baef21e0c4fc8200d11",
       "appium:autoGrantPermissions":true
    }
]
export { config };