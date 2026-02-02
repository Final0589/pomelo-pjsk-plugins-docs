# IOS抓包教程

## 程序准备

::: info
此教程步骤符合绝大部分抓包软件，该教程以`Reqable`为例
:::

在App Store搜索`Reqable`或 [点此跳转](https://apps.apple.com/cn/app/reqable/id6473166828)

![Reqable](img/reqable.png)

安装成功后打开，同意用户协议，接下来会提示选择工作模式，为方便故选择`独立模式`

![choose_workmode](img/choose_workmode.png)

::: info
- 独立模式：抓包信息显示并保存到本地
- 协同模式：与电脑端连接，抓包信息显示在电脑端可从电脑端保存
- **注意两个模式的证书是不同的，若切换模式需重新安装证书**
:::

## 安装证书

选择模式后会发现调试界面目前空白，点击左上角的三条杠，选择`证书管理`

![cert_manage](img/cert_manage.png)

点击证书管理后会发现*证书未安装*的字样，选择`安装根证书到本机`

![install_root_cert](img/install_root_cert.png)

进入后，点击方法2的`下载`字样，之后会提示保存，选择完成即可

![download_root_cert](img/download_from_browser.png)

![install_root_cert](img/save_cert.png)

软件会自动跳转到浏览器，点击`允许`即可

![allow_install](img/allow_install.png)

安装完成后，打开设置，选择iCloud账号位置下的已下载描述文件 或 找到`通用`->`VPN与设备管理`，点击已下载的描述文件的`Reqable Root CA`,选择`安装`即可

![install](img/install.png)

![install_confirm](img/install_confirm.png)

输入完锁屏密码后，再次点击`安装`即可完成安装






