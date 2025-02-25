---
sidebar_position: 1
description: Dịch vụ truy vấn danh mục hành chính cấp các cấp.
---

# Administrative API

**Mô tả**: Dịch vụ cung cấp dữ liệu về các đơn vị hành chính, bao gồm quốc gia, tỉnh/thành phố, quận/huyện, phường/xã và
các địa điểm cụ thể

**Phương thức**: `GET`

**URL**: `https://maps.ots.vn/api-gateway/maps/administrative-unit/{level}`

**Tham số**:

| Tham số         | Mô tả                                                                                                                   | Yêu cầu | Ví dụ                  |
|-----------------|-------------------------------------------------------------------------------------------------------------------------|---------|------------------------|
| `level`         | Cấp hành chính:<br/> - `provinces`: Cấp Tỉnh/Thành phố<br/> - `districts`: Cấp Quận/Huyện<br/> - `wards`: Cấp Phường/Xã | ✅       | `provinces`            |
| `province_code` | Mã định danh của Tỉnh/Thành phố.                                                                                        | ✅       | `01`                   |
| `district_code` | Mã định danh của Quận/Huyện.                                                                                            | ✅       | `001`                  |
| `fields`        | Danh sách các trường thông tin cần lấy, cách nhau bằng dấu phẩy.                                                        |         | `prov_code,prov_fname` |

**Ví dụ truy vấn danh mục hành chính cấp Tỉnh/Thành phố:** :

```http
https://maps.ots.vn/api-gateway/maps/administrative-unit/provinces?fields=prov_code,prov_fname&apikey={YOUR_API_KEY}
```

**Ví dụ truy vấn danh mục hành chính cấp Quận/Huyện:** :

```http
https://maps.ots.vn/api-gateway/maps/administrative-unit/districts?province_code=01&fields=dist_code,dist_fname&apikey={YOUR_API_KEY}
```

**Ví dụ truy vấn danh mục hành chính cấp Phường/Xã:** :

```http
https://maps.ots.vn/api-gateway/maps/administrative-unit/wards?district_code=001&fields=ward_code,ward_fname&apikey={YOUR_API_KEY}
```

**Response**:

```json title="Dữ liệu trả về dạng JSON"
{
  "statusCode": 200,
  "data": [
    {
      "prov_code": "01",
      "prov_fname": "Thành phố Hà Nội",
      "prov_fne": "Ha Noi City"
    },
    {
      "...": "Còn nhiều dữ liệu"
    }
  ]
}
```