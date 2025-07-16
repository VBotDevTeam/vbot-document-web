<script setup>
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-left">
        <p>Tổng đài AI đa tính năng</p>
        <p>Địa chỉ: 3/4, 163 Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội</p>
        <p>Điện thoại: 0857 066 866</p>
        <p>Email: sales@vbot.vn</p>
        <p>Số ĐKKD: 0106342003</p>
      </div>

      <div class="footer-links">
        <h3>Danh mục</h3>
        <ul>
          <li><a href="/vi/">Trang chủ</a></li>
          <li><a href="/vi/doc/open-api/introduction">Tài liệu</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h3>Chính sách</h3>
        <ul>
          <li><a href="#">Chính sách và quy định chung</a></li>
          <li><a href="#">Chính sách bảo mật</a></li>
          <li><a href="#">Chính sách thanh toán</a></li>
          <li><a href="#">Chính sách bảo hành</a></li>
          <li><a href="#">Chính sách đổi trả</a></li>
          <li><a href="#">Chính sách vận chuyển</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #121212;
  color: white;
  padding: 20px 0;
  text-align: left;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  max-width: 300px;
}

.footer-logo {
  width: 50px;
  margin-bottom: 10px;
}

.footer-links h3 {
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 5px;
}

.footer-links ul li a {
  color: #4caf50;
  text-decoration: none;
}

.footer-links ul li a:hover {
  text-decoration: underline;
}
</style>



<!-- <script setup>
import AppFooter.vue from '../../../.vitepress//components/AppFooter.vue'
</script>

<AppFooter.vue /> -->