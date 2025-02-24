---
description: Xác định địa chỉ hoặc địa danh từ một cặp tọa độ địa lý.
---

# Reverse Geocoding

**Mô tả**: Dịch vụ xác định thông tin địa điểm dựa trên tọa độ. Ví dụ, tọa độ `106.683321, 10.766121` có thể được diễn
giải thành địa chỉ `47a phạm viết chánh`.

**Phương thức**: `GET`

**URL**: `https://maps.ots.vn/api/v1/reverse`

**Tham số**:

| Tham số     | Mô tả                                                                          | Yêu cầu | Ví dụ                |
|-------------|--------------------------------------------------------------------------------|:-------:|----------------------|
| `size`      | Số lượng kết quả trả về trong một truy vấn nếu không truyền mặc định sẽ là 10. |         | `20`                 |
| `point.lat` | Vĩ độ của điểm cần tập trung.                                                  |    ✅    | `10.7752858785`      |
| `point.lon` | Kinh độ của điểm cần tập trung.                                                |    ✅    | `106.69969573162079` |

**Ví dụ**:

```http
https://maps.ots.vn/api/v1/reverse?size=1&point.lat=10.766121&point.lon=106.683321&apikey={YOUR_API_KEY}
```

**Response**:

```json title="dữ liệu trả về dạng JSON"
{
  "geocoding": {
    "query": {
      "layers": [
        "address"
      ],
      "sources": [
        "gm"
      ],
      "size": 1,
      "private": false,
      "point.lat": 10.766121,
      "point.lon": 106.683321,
      "boundary.circle.lat": 10.766121,
      "boundary.circle.lon": 106.683321,
      "lang": {
        "name": "Vietnamese",
        "iso6391": "vi",
        "iso6393": "vie",
        "via": "querystring",
        "defaulted": false
      },
      "querySize": 2
    }
  },
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.683321,
          10.766121
        ]
      },
      "properties": {
        "id": "9687e238-a5c3-45bb-8255-b56a529430c5",
        "gid": "gm:address:9687e238-a5c3-45bb-8255-b56a529430c5",
        "layer": "address",
        "source": "gm",
        "source_id": "9687e238-a5c3-45bb-8255-b56a529430c5",
        "name": "47A Đ. Phạm Viết Chánh",
        "confidence": 1,
        "distance": 0,
        "accuracy": "point",
        "country": "Việt Nam",
        "region": "Thành phố Hồ Chí Minh",
        "county": "Quận 1",
        "localadmin": "Phường Nguyễn Cư Trinh",
        "locality": "Phường Nguyễn Cư Trinh",
        "address": "47A Phạm Viết Chánh, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
        "address_components": [
          {
            "types": [
              "housenumber"
            ],
            "name": "47A"
          },
          {
            "types": [
              "street"
            ],
            "name": "Phạm Viết Chánh"
          },
          {
            "types": [
              "admin_level_4"
            ],
            "name": "Phường Nguyễn Cư Trinh"
          },
          {
            "types": [
              "admin_level_3"
            ],
            "name": "Quận 1"
          },
          {
            "types": [
              "admin_level_2"
            ],
            "name": "Thành phố Hồ Chí Minh"
          },
          {
            "types": [
              "admin_level_1"
            ],
            "name": "Việt Nam"
          }
        ],
        "plus_code": "7P28QM8M+C8",
        "region_code": "79",
        "county_code": "760",
        "locality_code": "26758",
        "localadmin_code": "26758"
      }
    }
  ],
  "bbox": [
    106.683321,
    10.766121,
    106.683321,
    10.766121
  ],
  "licence": "GTEL MAPS"
}
```

