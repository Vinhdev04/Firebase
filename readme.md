# 🔥 Series Học Firebase + JavaScript

- **Author: @Vinhdev04**
  ![](./Firebase.webp)
  Chào mừng bạn đến với series học **Firebase kết hợp JavaScript** – nơi bạn sẽ được hướng dẫn từ cơ bản đến nâng cao cách xây dựng ứng dụng web sử dụng sức mạnh của nền tảng Firebase và JavaScript thuần.

---

## 🚀 Mục tiêu

- Hiểu rõ Firebase và các dịch vụ cốt lõi như Authentication, Firestore, Hosting, Storage,...
- Nắm vững cách tích hợp Firebase vào project JavaScript (vanilla JS).
- Tự xây dựng các ứng dụng thực tế như To-Do App, Chat App, Auth App,...

---

## 📚 Nội dung các phần học

| STT | Chủ đề                     | Mô tả                                         |
| --- | -------------------------- | --------------------------------------------- |
| 01  | Giới thiệu Firebase        | Tổng quan nền tảng Firebase và cách sử dụng   |
| 02  | Cài đặt Firebase cho Web   | Tạo project, cấu hình Firebase vào HTML + JS  |
| 03  | Firebase Authentication    | Đăng ký, đăng nhập, quản lý người dùng        |
| 04  | Firestore Database         | Thêm, đọc, sửa, xóa dữ liệu realtime          |
| 05  | Firebase Hosting           | Triển khai ứng dụng JS lên Firebase Hosting   |
| 06  | Firebase Storage           | Upload và quản lý file hình ảnh, tài liệu     |
| 07  | Bảo mật và Rules           | Cấu hình bảo mật cho Auth và Database         |
| 08  | Project #1: To-Do App      | App quản lý công việc dùng Firestore          |
| 09  | Project #2: Auth + Profile | App đăng nhập, chỉnh sửa profile người dùng   |
| 10  | Project #3: Chat Realtime  | Ứng dụng trò chuyện đơn giản sử dụng Firebase |

| --- | -------------------------- | --------------------------------------------- |

## 🛠️ Công nghệ sử dụng

- HTML5, CSS3, JavaScript ES6+
- Firebase SDK (v9+ modular syntax)
- Firebase Console
- Git, GitHub

---

## 📁 Cấu trúc repo mẫu

---

## ✨ Yêu cầu

- Biết HTML/CSS cơ bản và JavaScript ES6
- Có tài khoản Google để sử dụng Firebase Console
- Biết sử dụng VSCode và Chrome DevTools

---

## 📌 Ghi chú

- Mỗi phần đều có ví dụ thực hành và hướng dẫn chi tiết.
- Dự án mẫu có sẵn file `index.html`, `main.js` và hướng dẫn triển khai.
- Bạn nên clone repo về để học song song và tự phát triển thêm.

---

## 📬 Liên hệ & Đóng góp

Nếu bạn gặp lỗi hoặc có đóng góp, vui lòng mở [Issue](https://github.com/your-repo/issues) hoặc gửi [Pull Request](https://github.com/your-repo/pulls).

---

> 🚧 **Series đang trong quá trình hoàn thiện - hãy theo dõi để nhận cập nhật mới nhất!**

## Firebase

- Firebase là một nền tảng giúp phát triển các ứng dụng di động trong web. Bên cạnh đó, Firebase còn được hiểu là một dịch vụ cơ sở dữ liệu hoạt động trên nền tảng đám mây cloud với hệ thống máy chủ mạnh mẽ của Google.
- Firebase chứa cơ sở dữ liệu mang đến khả năng code nhanh và thuận tiện hơn. Lập trình viên có thể dễ dàng lập trình ứng dụng bằng cách đơn giản hóa các thao tác với cơ sở dữ liệu sẵn có.

## Thao tác với Firebase

### 🚀 1. Khởi tạo Firebase Database

    ```bash
    ```

### ✅ 2. CREATE (Tạo dữ liệu) — set()

     ```bash
     ```

### 🔍 3. READ (Đọc dữ liệu) — get() + ref() + child()

     ```bash
     ```

### 🛠 4. UPDATE (Cập nhật một phần) — update()

     ```bash
     ```

### ❌ 5. DELETE (Xóa dữ liệu) — remove()

      ```bash
      ```

### 📌 Lưu ý thêm:

- Sử dụng ref() để trỏ đến 1 node cụ thể.

- Dùng child() để trỏ đến các node con.

- Trong thực tế, bạn có thể kết hợp push() để tạo ID tự động (giống như Auto-Increment):

  ```bash

  ```

---

## 🔥 So sánh nhanh: Firestore vs Realtime Database
