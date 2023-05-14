## Promise
- Sync (đồng bộ): chạy theo luồng từ trên xuống dưới hàm nào viết trước thì thực hiện trước và chỉ khi    thực hiện xong mới tiếp tục chạy hàm bên dưới.
- Async (bất đồng bộ): vẫn chạy từ trên xuống dưới nhưng nó không cần đợi hàm được gọi trước thực hiện xong mới khởi chạy mà nó chạy luôn bất chấp việc hàm bên trên đã chạy xong chưa. Nó xuất hiện trong các hàm như: fetch, setTimeout, setInterval, file reading, request animation, @keyframe, ...
- Nỗi đau
- Lý thuyết, cách hoạt động
- Thực hành, ví dụ


Promise có 3 trạng thái: pending (chờ), fulfilled(hoàn thành), rejected(thất bại)