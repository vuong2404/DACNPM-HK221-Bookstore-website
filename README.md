## Sơ đồ usecase
Tất cả sơ đồ usecase thêm vào đây [eidt](https://lucid.app/lucidchart/106c7cd4-247e-4837-b62c-b8163644a3ba/edit?viewport_loc=-238%2C5071%2C2938%2C1273%2CCiwWk7vTuG6D&invitationId=inv_8bfef6b9-0ec8-421e-98d4-673ce1bc6556)

## ScreenFlow

https://lucid.app/lucidchart/106c7cd4-247e-4837-b62c-b8163644a3ba/edit?viewport_loc=-1529%2C702%2C2838%2C1295%2C--if-a.VGZdJ&invitationId=inv_8bfef6b9-0ec8-421e-98d4-673ce1bc6556

## MocKup 
Tất cả link mockup vẽ bằng figma  [mockup.md](./Documents/mockup.md)
## Một số điểm cần chỉnh sửa: 
1. Về header footer của customer
    - Phần header màu sắc chưa ổn, có thể đổi thành màu trắng(chữ đen), hoặc xanh(chữ trắng) ,...
    - Phần header hơi nhiều nội dung nên cần lượt bớt : phần contact, about us có thể thêm vào phần footer. Nếu trống quá thì thêm tên shop, để đồng nhất UI 2 phần thì có thẻ để width của header là 1200px, hoặc fullscreen cũng đc
    - Phần footer bổ sung một số thứ cho đỡ trống ví dụ : phương thức thanh toán, about us, kết nối facebook, zalo,... 
2. UI quản lý hồ sơ khách hàng
    - Phần quản lý đơn hàng cần thêm một số thông tin như mã đơn hàng, ngày đặt, trạng thái đơn hàng, mã vận chuyển ,....
3. UI đăng nhập: 
    - Phần đăng kí thêm phần xác nhận mật khẩu. 
4. Bỏ chức năng send message ( Nếu như có đủ thời gian thì có thể hiện thực chức năng gửi thông báo)
5.  Sơ đồ usecase cho hệ thống, sơ đồ usecase + useecase scenartio của từng tính năng chỉnh sửa lại cho khớp với design.

## Các trang hiện thực
### Trang xác thực: (Lương)
    - Trang đăng nhập: (Lương)
        + Xác thực OTP nếu là tài khoản admin
    - Trang đăng kí (Lương)
        + Xác thực OTP (Có thể sử dụng firebase)
### Khách hàng: (Trình + Vương + Tiến)
    - Trang chủ: (Trình)
        + Tìm sách
        + Lọc sách
        + Phân trang
    - Trang thông tin của cuốn sách: (Trình)
        + Thêm sách vào giỏ hàng ( chỉ cần cập nhật giỏ hàng)
        + Đặt hàng:  chuyển đến trang giỏ hàng.
    - Trang giỏ hàng: (Trình)
        + Chỉnh sửa số lượng
        + Chọn sách 
        + Xóa sách khỏi giỏ hàng
        + Tính tổng số tiền
    - Trang đặt hàng:   (Vương)
        + Chỉnh sửa địa chỉ nhận hàng
        + Chỉnh sửa phương thức thanh toán
        + Thanh toán online (Thanh toán bằng quét mã QR, thêm thông tin hướng dẫn khách hàng thanh toán)
    - Trang quản lý thông tin cá nhân (Tiến)
        + Thêm thông tin
        + Chỉnh sửa thông tin
    - Trang thông tin đơn hàng: (Tiến)
            + Đơn hàng trạng thái đang vận chuyển: option là xác nhận đã nhận hàng
            + Đơn hàng trạng thái chờ xác nhận: option là hủy đơn hàng
            + Đơn hàng trạng thái đã hủy: option là đặt lại
            + Đơn hàng nhận thành công: Option là đánh giá, mua lại
### Admin: (Vương + Thịnh + Lương)
    - Trang chủ: (Vương)
    - Trang quản lý đơn hàng: (Vương)
        + Tìm kiếm
        + Lọc
        + Phân trang 
    - Trang thông tin chi tiết của đơn hàng: (Vương)
        + Cập nhật trạng thái đối với đơn đã xác nhận, đang vận chuyển, và phát thất bại
        + Xác nhận đơn hàng: đối với đơn đang chờ xác nhận
    - Trang quản lý sách: (Thịnh)
        + Thêm, sửa, xóa sách --> Có thể thêm chức năng là xem giao diện hiển thị với khách hàng
        + Tìm kiếm sách
        + Phân trang
    - Trang quản lý khách hàng: (Thịnh + Lương)
        + Xem thông tin cá nhân (trừ tên tài khoản), lịch sử đặt hàng
        + Tìm kiếm
        + Lọc
        + Phân trang
