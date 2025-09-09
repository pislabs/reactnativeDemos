## 环境搭建

```bash
# 1. ruby版本升级： 原ios自带ruby 为ruby2
brew install ruby

# 或则 brew upgrade ruby


# 2. 替换gem源: 原gem源太慢可能导致安装cocoapods 卡住
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
# 查看替换后的源地址
gem sources -l
https://gems.ruby-china.com
# 确保只有 gems.ruby-china.com

# 3. 安装cocoapods

# -V参数可以查看进度
sudo gem install cocoapods -V

# 4. java安装: 需要jvm11以上
brew install jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

## 初始化项目

参考：https://reactnative.dev/docs/getting-started-without-a-framework

```bash
# 初始化框架 (参考，https://github.com/react-native-community/cli，注意脚手架兼容性)
# tamagui最新版本兼容react native 0.79.2
npx @react-native-community/cli@18.0.0 init reactnativeDemos --version 0.79.2

# 启动android
cd reactnativeDemos
react-native run-android

# 启动ios
cd reactnativeDemos/ios
# 安装时比较慢，可以考虑开代理安装
git config --global http.proxy socks5://127.0.0.1:7890
pod install
```

## 接入 UI 库 (tamagui)

```bash
npm i tamagui
```
