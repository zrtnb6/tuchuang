// 文件 UI 渲染与交互
document.addEventListener("DOMContentLoaded", () => {
  const fileList = document.getElementById("fileList");
  const uploadBtn = document.getElementById("uploadBtn");

  // 模拟加载文件数据（实际数据来自后端 API）
  fetch("/functions/api/manage/list")
    .then(res => res.json())
    .then(data => {
      fileList.innerHTML = "";
      data.files.forEach(file => {
        const div = document.createElement("div");
        div.className = "file-item";
        div.innerHTML = `
          <h3>${file.name}</h3>
          <p class="meta">${(file.size/1024).toFixed(2)} KB</p>
          <button onclick="downloadFile('${file.url}')">下载</button>
        `;
        fileList.appendChild(div);
      });
    });

  uploadBtn.addEventListener("click", () => {
    window.location.href = "/functions/upload";
  });
});

function downloadFile(url) {
  window.open(url, "_blank");
}
