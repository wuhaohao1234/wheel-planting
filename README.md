# wheel-planting
响应式轮播图插件

## example

```
<div class="wrap">
<ul class="clearfix" style="margin-left: 0;" >
    <li><img src="./assets/images/1.jpg" alt="图片1"></li>
    <li><img src="./assets/images/2.jpg" alt="图片2"></li>
    <li><img src="./assets/images/3.jpg" alt="图片2"></li>
    <li><img src="./assets/images/4.jpg" alt="图片4"></li>
    <li><img src="./assets/images/5.jpg" alt="图片5"></li>
    <li><img src="./assets/images/6.jpg" alt="图片6"></li>
</ul>
<span class="left" ><img src="./assets/images/l.png" alt=""></span>
<span class="right" ><img src="./assets/images/r.png" alt=""></span>
</div>
<script src="./node_modules/jquery/dist/jquery.min.js"></script>
<script src="./src/index.js"></script>
<script>
new WheelPlanting('wrap')
</script>
```

## 原理

1. 百分比布局

2. rem布局

设计图中的尺寸为750
box高度为100
将设计图分为16份,1rem为750 / 16
将可视区域分为10份,1rem为clientWidth / 16
设计图中box高度为100 / (750 / 16+) rem