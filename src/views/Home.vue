<template>
  <div class="container">
    <header>
      <h1>新锐工具箱</h1>
      <p>简单、高效、实用的在线工具</p>
    </header>

    <div class="tools-grid">
      <router-link to="/cover" class="tool-card">
        <div class="tool-icon">🎨</div>
        <h2>封面设计</h2>
        <p>创建精美的封面图片，支持自定义文本、背景和字体</p>
      </router-link>

      <router-link to="/image" class="tool-card">
        <div class="tool-icon">🖼️</div>
        <h2>图片转换器</h2>
        <p>将图片批量转换为WebP、JPG、PNG格式，支持多种命名方式</p>
      </router-link>

      <router-link to="/watermark" class="tool-card">
        <div class="tool-icon">📹</div>
        <h2>短视频去水印</h2>
        <p>轻松去除短视频中的水印，支持多种平台，快速处理</p>
      </router-link>

      <div class="tool-card" style="opacity: 0.6; cursor: not-allowed;">
        <div class="tool-icon">⏰</div>
        <h2>时间戳转换</h2>
        <p>在时间戳和日期时间之间轻松转换，支持多种格式和时区</p>
      </div>

      <div class="tool-card" style="opacity: 0.6; cursor: not-allowed;">
        <div class="tool-icon">🎵</div>
        <h2>Meting API</h2>
        <p>集成网易云、QQ音乐等平台音乐接口</p>
      </div>

      <div class="tool-card" style="opacity: 0.6; cursor: not-allowed;">
        <div class="tool-icon">✨</div>
        <h2>更多工具</h2>
        <p>我们正在开发更多实用工具，敬请期待...</p>
        <span class="coming-soon">即将推出</span>
      </div>
    </div>

    <footer>
      <p>© 2024 新锐工具箱 | 由 EdgeOne 提供加速</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
