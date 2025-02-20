---
sidebar_position: 1
description: Chuyển đổi địa chỉ hoặc mô tả vị trí thành tọa độ địa lý (kinh độ, vĩ độ).
---

# Forward Geocoding

**Mô tả**: Dịch vụ chuyển văn bản mô tả vị trí thành tọa độ địa lý. Ví dụ, địa chỉ `47a phạm viết chánh` sẽ được chuyển
đổi thành (kinh độ, vĩ độ) tương ứng `106.683321, 10.766121`

**Phương thức**: `GET`

**URL**: `https://maps.ots.vn/api-web/geocode/v1/search`

**Tham số**:

| Tham số           | Mô tả                                       | Ví dụ                 |
|-------------------|---------------------------------------------|-----------------------|
| `size`            | Số lượng kết quả trả về trong một truy vấn. | `20`                  |
| `text`            | Chuỗi tìm kiếm để tra cứu địa chỉ.          | `47a phạm viết chánh` |
| `focus.point.lat` | Vĩ độ của điểm cần tập trung.               | `10.7752858785`       |
| `focus.point.lon` | Kinh độ của điểm cần tập trung.             | `106.69969573162079`  |

**Ví dụ**:

```http
https://maps.ots.vn/api-web/geocode/v1/search?size=1&text=47a%20ph%E1%BA%A1m%20vi%E1%BA%BFt%20ch%C3%A1nh&focus.point.lat=10.7752858785&focus.point.lon=106.69969573162079
```

**Response**:

```json title="dữ liệu trả về dạng JSON"
{
  "geocoding": {
    "query": {
      "text": "47a phạm viết chánh",
      "size": 1,
      "layers": [
        "address"
      ],
      "sources": [
        "gm"
      ],
      "private": false,
      "focus.point.lat": 10.7752858785,
      "focus.point.lon": 106.69969573162079,
      "lang": {
        "name": "Vietnamese",
        "iso6391": "vi",
        "iso6393": "vie",
        "via": "querystring",
        "defaulted": false
      },
      "querySize": 20,
      "parser": "pelias",
      "parsed_text": {
        "subject": "47a phạm viết chánh"
      }
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
        "match_type": "exact",
        "distance": 2.061,
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

