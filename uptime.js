const websiteURL = 'https://uptimexiebot.repl.co'; // Thay liên kết https://uptimexiebot.repl.co thành liên kết cần treo 

setInterval(() => {
  axios.get(websiteURL)
    .then(response => {
      console.log('\n👉 Bot đang ở trạng thái hoạt động ổn định!');
    })
    .catch(error => {
      console.error('\n👉 Bot đang đang gặp lỗi!');
    });
}, 60000); // Cứ 1 phút thông báo 1 lần 

// Code bởi Cao Tiến Thành
