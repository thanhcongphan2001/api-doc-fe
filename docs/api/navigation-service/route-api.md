---
description: Tính toán lộ trình tối ưu giữa hai hoặc nhiều điểm, hỗ trợ nhiều phương tiện di chuyển như ô tô, xe máy, xe đạp hoặc đi bộ. Có thể bao gồm thông tin về thời gian di chuyển, quãng đường và điều kiện giao thông.
---

# Route API

**Mô tả**: Dịch vụ Tính toán lộ trình tối ưu giữa hai hoặc nhiều điểm, hỗ trợ nhiều phương tiện di chuyển như ô tô, xe
máy, xe đạp hoặc đi bộ. Có thể bao gồm thông tin về thời gian di chuyển, quãng đường và điều kiện giao thông.

**Phương thức**: `GET`

**URL**: `https://maps.ots.vn/api/v1/route/{profile}/{coordinates}`

**Tham số**:

| Tham số        | Mô tả                                                                                                                                                                                                                                                            | Yêu cầu | Ví dụ                                        |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|----------------------------------------------|
| `profile`      | Loại phương tiện di chuyển:<br/> - `car`: Ô tô<br/> - `bike`: Xe đạp<br/> - `foot`: Đi bộ                                                                                                                                                                        |    ✅    | `car`                                        |
| `coordinates`  | Danh sách tọa độ bao gồm kinh độ, vĩ độ. Ít nhất có hai cặp tọa độ.                                                                                                                                                                                              |    ✅    | `106.475678,10.331456;106.4714565,10.346897` |
| `geometries`   | Định dạng của hình học tuyến đường trả về. `polyline` là định dạng mặc định, `polyline6` cung cấp độ chính xác cao hơn, và `geojson` là định dạng dựa trên JSON cho dữ liệu địa lý.                                                                              |    ✅    | `geojson`                                    |
| `step`         | Trả về các bước di chuyển cụ thể cho mỗi chặng của tuyến đường. Nếu thiết lập là true, phản hồi sẽ bao gồm thông tin chi tiết về cách di chuyển từ điểm này sang điểm khác trên tuyến đường.                                                                     |         | `true`                                       |
| `overview`     | Kiểm soát mức độ chi tiết của hình học tuyến đường được thêm vào phản hồi. full cung cấp toàn bộ hình học chi tiết, simplified (mặc định) trả về hình học được đơn giản hóa, và false không trả về hình học tuyến đường.                                         |         | `full`                                       |
| `alternatives` | Quyết định có tìm các tuyến đường thay thế nếu thiết lập là true hay chỉ tuyến chính false (mặc định).                                                                                                                                                           |         | `true`                                       |
| `annotations`  | Quyết định sẽ trả về dữ liệu bổ sung cho mỗi tọa độ dọc theo hình học của tuyến đường, bao gồm thông tin như khoảng cách, thời gian ước tính, và các thuộc tính khác liên quan đến tuyến đường nếu là true, và false (mặc định) sẽ không trả về dữ liệu bổ sung. |         | `false`                                      |
| `language`     | Ngôn ngữ.                                                                                                                                                                                                                                                        |         | `vi`                                         |

**Ví dụ**:

```http
https://maps.ots.vn/api/v1/route/foot/106.475678,10.331456;106.4714565,10.346897?geometries=geojson&steps=true&overview=full&alternatives=true&annotations=false&language=vi&apikey={YOUR_API_KEY}
```

**Response**:

```json title="Dữ liệu trả về dạng JSON"
{
  "code": "Ok",
  "routes": [
    {
      "weight": 1800.1,
      "weight_name": "duration",
      "summary": "ĐH.23",
      "overview_polyline": {
        "points": "eczhSio`~@gAsE?[FWR]j@gAVq@RY\\O`@If@CxA@dBDHBpBj@L@l@EJ@NHH@d@AN@RBrA`@fA^p@LFABC@CDUFSFENAvDFbCK?Yu@iNIoAE[OcA_@uC?UD}@Bi@EmA}@uIy@sH[qDoFt@cAJI?IEEGCIEk@CAECeBLG@s@Do@HcAJa@BQFQHCBKHUNSFG@?L?B?B@?B@B@B@@B?B?D?N"
      },
      "distance": {
        "text": "2.5 km",
        "value": 2499.5
      },
      "duration": {
        "text": "30 min",
        "value": 1800.1
      },
      "legs": [
        {
          "steps": [
            {
              "name": "",
              "direction": "N",
              "travel_mode": "walking",
              "icon_name": "depart",
              "html_instructions": "Đi về hướng bắc",
              "distance": {
                "text": "948 m",
                "value": 947.5
              },
              "duration": {
                "text": "12 min",
                "value": 682.3
              },
              "overview_polyline": {
                "points": "eczhSio`~@gAsE?[FWR]j@gAVq@RY\\O`@If@CxA@dBDHBpBj@L@l@EJ@NHH@d@AN@RBrA`@fA^p@LFABC@CDUFSFENAvDFbCK"
              }
            },
            {
              "name": "",
              "direction": "N",
              "travel_mode": "walking",
              "icon_name": "turn-right",
              "html_instructions": "Quẹo phải vào ĐH.23",
              "distance": {
                "text": "1.05 km",
                "value": 1050
              },
              "duration": {
                "text": "13 min",
                "value": 756.2
              },
              "overview_polyline": {
                "points": "k}xhSk{`~@?Yu@iNIoAE[OcA_@uC?UD}@Bi@EmA}@uIy@sH[qD"
              }
            },
            {
              "name": "",
              "direction": "E",
              "travel_mode": "walking",
              "icon_name": "turn-right",
              "html_instructions": "Quẹo phải",
              "distance": {
                "text": "464 m",
                "value": 464.4
              },
              "duration": {
                "text": "6 min",
                "value": 334.5
              },
              "overview_polyline": {
                "points": "qeyhS}ub~@oFt@cAJI?IEEGCIEk@CAECeBLG@s@Do@HcAJa@BQFQHCBKHUNSFG@"
              }
            },
            {
              "name": "",
              "direction": "S",
              "travel_mode": "walking",
              "icon_name": "turn-right",
              "html_instructions": "Quẹo phải",
              "distance": {
                "text": "38 m",
                "value": 37.7
              },
              "duration": {
                "text": "30 s",
                "value": 27.1
              },
              "overview_polyline": {
                "points": "q}yhS{rb~@?L?B?B@?B@B@B@@B?B?D?N"
              }
            },
            {
              "name": "",
              "direction": "N",
              "travel_mode": "walking",
              "icon_name": "arrive",
              "html_instructions": "Đến nơi ở trước mặt",
              "distance": {
                "text": "0 m",
                "value": 0
              },
              "duration": {
                "text": "0 s",
                "value": 0
              },
              "overview_polyline": {
                "points": "a}yhSaqb~@??"
              }
            }
          ],
          "summary": "ĐH.23",
          "weight": 1800.1,
          "duration": {
            "text": "30 min",
            "value": 1800.1
          },
          "distance": {
            "text": "2.5 km",
            "value": 2499.5
          }
        }
      ]
    }
  ],
  "waypoints": [
    {
      "hint": "WxYJgPY3dYCAAwAAqAAAACcXAADZAwAA1sv4Qqi8ukGRxk1EU98IQ4ADAACoAAAAJxcAANkDAAACAAAAoJ5YBjCenQBwmlgGkJ-dACEAbwwuVIaO",
      "distance": 123.701776167,
      "name": "",
      "location": [
        106.471072,
        10.329648
      ]
    },
    {
      "hint": "2j11gN09dYAAAAAAQAAAAAAAAADPAAAAAAAAAHKXDUEAAAAAQdLmQQAAAABAAAAAAAAAAM8AAAACAAAAzJpYBkXHnQBwmlgGoMadAAAAfxYuVIaO",
      "distance": 20.847651243,
      "name": "",
      "location": [
        106.470092,
        10.340165
      ]
    }
  ],
  "licence": "GTEL MAPS"
}
```