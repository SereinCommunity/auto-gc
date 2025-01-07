/// @ts-check

const interval = 10_000;

setInterval(() => {
    System.GC.Collect();
}, interval);

serein.log('加载完毕！当前清理间隔：' + interval + 'ms');
