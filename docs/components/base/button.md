---
layout: doc
---

# tyy-button

按钮分为 primary - 主要按钮、secondary - 次要按钮（默认）、dashed - 虚线按钮、outline - 线形按钮、plain - 朴素按钮、text - 蓝色文本按钮、textPlain - 黑色文本按钮七种类型。
<demo src="../../../examples/src/components/button/button.vue"></demo>
按钮分为 mini、small、medium、large 四种尺寸.通过设置 long 属性，使按钮的宽度跟随容器的宽度。
<demo src="../../../examples/src/components/button/button-size.vue"></demo>
按钮的状态分为 normal - 正常(默认)、warning - 警告、danger - 危险 3 种，可以与按钮类型同时使用。另外还有禁用状态和加载状态
<demo src="../../../examples/src/components/button/button-status.vue"></demo>
按钮可以嵌入图标。在只设置图标时，按钮的宽高相等。
<demo src="../../../examples/src/components/button/button-icon.vue"></demo>

# APi

### \<button\> props

| 参数名   | 描述                                                                                           | 类型                                                                                   | 默认值    |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------- |
| type     | 按钮的类型，分为七种：主要按钮、次要按钮、虚框按钮、线性按钮、朴素按钮、文字按钮、文字朴素按钮 | 'primary' \| 'secondary' \| 'dashed' \| 'outline' \| 'plain' \| 'text' \| 'textPlain'` | 'primary' |
| shape    | 按钮的形状                                                                                     | 'square' \| 'round' \| 'circle'                                                        | 'square'  |
| status   | 按钮的状态                                                                                     | 'normal' \| 'warning' \| 'success' \| 'danger'                                         | 'normal'  |
| size     | 按钮的尺寸                                                                                     | 'mini' \| 'small' \| 'medium' \| 'large'                                               | 'medium'  |
| long     | 按钮的宽度是否随容器自适应。                                                                   | boolean                                                                                | false     |
| loading  | 按钮是否为加载中状态                                                                           | boolean                                                                                | false     |
| disabled | 按钮是否禁用                                                                                   | boolean                                                                                | false     |

### \<button\> events

| 事件名 | 描述 | 参数 |
| click | 点击按钮时触发 | event: Event |

### \<button\> Slots

| 插槽名 | 描述 | 参数 |
| icon | 图标 | - |
