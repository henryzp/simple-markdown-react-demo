### 项目背景

需要实现像ant-design那样的demo演示功能。

### 项目技术

使用了[bisheng](https://github.com/benjycui/bisheng)，抄了ant-design的一些代码，在其基础上修改了一些，去掉了国际化。

实现较简单版的demo演示功能

### 项目启动

```
npm start
```

可访问的链接：

```
http://localhost:8001
http://localhost:8001/cssModule/button/
```

### 项目布署

```
npm run site
```

然后配置一下nginx，指向当前目录的`_site`目录即可。