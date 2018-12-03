#### 自定义react-native模板，集成redux、rematch、react-native-ui-lib、react-navigation
##### 初始化项目
`react-native init <PROJECT_NAME> --template rematch-redux`
##### 安装开发库
`node scripts/additionalDependencies.js`
##### 添加 Decorators 支持
`@babel/plugin-proposal-decorators .babelrc 添加 "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]`
##### react-navigation > 3.0
`react-native link react-native-gesture-handler`
###### react-native-screens （可以不安装）
`react-native link react-native-screens`
