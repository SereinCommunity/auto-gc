# 自动垃圾回收

>[!TIP]
>其实这个插件也可以在v1下使用，只需将解压后的`gc.js`放在`plugins`文件夹下

定时调用[`System.GC.Collect()`](https://learn.microsoft.com/zh-cn/dotnet/api/system.gc.collect?view=net-8.0)，减少内存占用
