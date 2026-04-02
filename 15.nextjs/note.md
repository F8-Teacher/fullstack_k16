# Nextjs

## Routing

- File systems
- folder-1/page.tsx --> /folder-1
- folder-1/sub-folder-1/page.tsx --> /folder-1/sub-folder-1

Rewrite URL

Event, State, useEffect, Context,... --> Chuyển về client

## Route Handler

- Tính năng của next, cho phép viết các api nội bộ
- Dùng để sử dụng các api của Nextjs (Các hàm) chỉ cho phép chạy trên server

revalidatePath(path)
revalidateTag(tag)

## Server Actions

Các hành động cập nhật -->

- Validation
- Back-End
- Clear Cache
- Cookie

Server actions 1 hàm chạy trên server

Có 2 tình huống gọi Server action

1. Gọi từ server component (Không setup được các message thông báo)
