# Cách học tailwind

## Cú pháp:

```
prefix-value
```

- prefix: Đại diện cho thuộc tính css
- value: Đại diện cho giá trị của thuộc tính đó

Ví dụ: text-red-500

```
prefix-[custom-value]
```

custom-value: Giá trị tự đưa vào (Không được chứa dấu cách)

Ví dụ: text-[#000]

## Sử dụng pseudo

```
ten-pseudo:prefix-value
ten-pseudo:prefix-[custom-value]
```

Ví dụ: hover:text-[red]

## Responsive

Cú pháp:

```
breakpoint:prefix-value
breakpoint:prefix-[custom-value]
```

breakpoint:

- sm
- md
- lg
- xl
- 2xl

Lưu ý: Tailwind triển khai theo mobile first. Cho nên nếu không khai báo breakpoint trong class --> Sẽ là màn hình nhỏ nhất
