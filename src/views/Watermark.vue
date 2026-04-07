<template>
  <div class="container">
    <a href="#/" class="back-link">← 返回首页</a>
    <div class="tool-container">
      <div class="tool-header">
        <h2>短视频去水印</h2>
        <p>轻松去除短视频中的水印，支持多种平台，快速处理</p>
      </div>
      <!-- 这里将嵌入 shortvideo-html 组件 -->
      <div id="watermark-remover">
        <!-- shortvideo-html 内容将通过 iframe 加载 -->
        <iframe src="/watermark-tool/index.html" width="100%" height="800px" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Watermark'
}
</script>
