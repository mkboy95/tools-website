<template>
  <div class="container">
    <a href="#/" class="back-link">← 返回首页</a>
    <div class="tool-container">
      <div class="tool-header">
        <h2>图片格式转换器</h2>
        <p>将图片批量转换为WebP、JPG、PNG格式，支持多种命名方式</p>
      </div>
      
      <div class="image-upload-area">
        <div class="upload-box">
          <p>拖放图片到此处或点击上传</p>
          <p class="text-sm text-gray-500">支持JPG、PNG、GIF等格式</p>
          <input type="file" multiple accept="image/*" class="upload-input">
        </div>
      </div>
      
      <div class="conversion-settings">
        <h3 class="text-lg font-semibold mb-4">转换设置</h3>
        
        <div class="setting-group">
          <label class="block mb-2">输出格式</label>
          <div class="format-options">
            <button class="format-btn active">WebP</button>
            <button class="format-btn">JPG</button>
            <button class="format-btn">PNG</button>
          </div>
        </div>
        
        <div class="setting-group">
          <label class="block mb-2">命名方式</label>
          <div class="naming-options">
            <button class="naming-btn active">原名</button>
            <button class="naming-btn">时间戳</button>
            <button class="naming-btn">MD5</button>
            <button class="naming-btn">重命名</button>
          </div>
        </div>
        
        <div class="setting-group">
          <label class="block mb-2">命名设置</label>
          <div class="setting-inputs">
            <input type="checkbox" id="auto-padding">
            <label for="auto-padding">自动补零</label>
          </div>
        </div>
        
        <button class="convert-btn">开始转换</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Image'
}
</script>

<style scoped>
.image-upload-area {
  margin-bottom: 30px;
}

.upload-box {
  border: 2px dashed #667eea;
  border-radius: 16px;
  padding: 60px;
  text-align: center;
  background: #f8f9ff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-box:hover {
  background: #edf0ff;
  border-color: #764ba2;
}

.upload-box p {
  margin-bottom: 10px;
  color: #333;
}

.upload-input {
  display: none;
}

.conversion-settings {
  background: #f8f9ff;
  border-radius: 16px;
  padding: 30px;
}

.setting-group {
  margin-bottom: 20px;
}

.format-options,
.naming-options {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.format-btn,
.naming-btn {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.format-btn.active,
.naming-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.convert-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.convert-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.setting-inputs {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.setting-inputs input[type="checkbox"] {
  width: 18px;
  height: 18px;
}
</style>
