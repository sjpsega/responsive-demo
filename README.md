# 响应式研究

## 做法
* 囊括990，1190，1390三种宽度
* 根据三种跨度，对grid的宽度做调整

<table>
	<thead>
		<th></th>
		<th>990px</th>
		<th>1190px</th>
		<th>1390px</th>
	</thead>
	<tbody>
    	<tr>
        	<td>单个Grid宽度</td>
        	<td>40px</td>
	        <td>44px</td>
    	    <td>48px</td>
	    </tr>
    	<tr>
        	<td>Grid间距</td>
	        <td>10px</td>
    	    <td>12px</td>
        	<td>14px</td>
	    </tr>
	    <tr>
        	<td>默认字体大小</td>
	        <td>12px</td>
    	    <td>14px</td>
        	<td>16px</td>
	    </tr>
    </tbody>
</table>

* IE8及以下版本浏览器的media query通过[Respond.js](https://github.com/scottjehl/Respond)实现

## 优点
* 不使用display:none的做法，因为在实际工作中，较难界定模块的重要性，根据宽度的不同，隐藏模块，很大可能会受到业务方的反对；多余的模块也会增加运营的工作量
* 不仅根据页面宽度的不同，修改grid的宽度，还修改默认的字体大小，让不同宽度下，使用者均有良好的阅读体验

## 缺点
* 对背景图(background-image)较难处理
* IE6/7下的img缩放需要借助js实现


## demo
[Grid](http://sjpsega.github.io/responsive-demo/html/grid.html)

[Demo](http://sjpsega.github.io/responsive-demo/html/demo.html)