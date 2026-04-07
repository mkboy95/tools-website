<template>
  <div class="container">
    <a href="#/" class="back-link">← 返回首页</a>
    <div class="tool-container">
      <div class="tool-header">
        <h2>封面设计</h2>
        <p>创建精美的封面图片，支持自定义文本、背景和字体</p>
      </div>
      <!-- 这里将嵌入 Mini-Cover 组件 -->
      <div id="cover-generator">
        <!-- Mini-Cover 内容将通过 iframe 加载 -->
        <iframe src="/cover-tool/index.html" width="100%" height="800px" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>
