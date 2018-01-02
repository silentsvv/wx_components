封装的一个小程序cell插件

## 简单介绍

name | type | description
---|---|---
title | string | 左侧标题栏
placeholder | string |input的placeholder属性
link | string | 右侧文字
showArrow | boolean | 是否显示箭头
value | string | input的value值
maxlength | number | input最大字数，默认-1(无限制)

event | type | description
---|---|---
blur | event | 失焦事件
input | event | 输入事件
focus | event | 聚焦事件


引用组件:
```
  "usingComponents": {
    "cell": "../../components/cell/cell"
  }
```


使用例子:
```
 <cell title="身份证号" placeholder="请输入身份证号" type="input" value="{{beauticianDetails.identityNo}}" bindinput="setIdentityNo"></cell>
```

