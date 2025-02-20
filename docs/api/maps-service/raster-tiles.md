---
sidebar_position: 1
description: Gợi ý vị trí theo thời gian thực khi người dùng nhập thông tin tìm kiếm.
---

# Raster Tiles

Vector Tiles API cung cấp các ô Vector theo đặc tả Mapbox Vector Tile, eKMap Platform cung cấp dịch vụ Vector Tiles cho các dịch vụ bản đồ như Bản đồ eKMap (nguồn dữ liệu OpenStreetMaps), Bản đồ eKMap Chi tiết (CityMap), Bản đồ eKMap hành chính (BDM) (địa phận, ranh giới, tên đơn vị hành chính)

## Retrieve vector tiles {#Retrieve vector tiles}

**Mô tả**: Bản đồ eKMap dạng Raster Tile, một lựa chọn khác của Bản đồ eKMap Vector Tile. Kích thước từng ô là 256x256

**Phương thức**: `GET`

**URL**: `https://maps.ots.vn/api-web/tiles/v1/basic/0/0/0/png`

**Tham số**:

| Tham số     | Mô tả       | Ví dụ                                                                                                                                                                                                     |
|-------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `typesssss` | aaa         | `basic`                                                                                                                                                                                                        |
| `x`         | `localhost` | Specify a host to use. For example, if you want your server to be accessible externally, you can use `--host 0.0.0.0`.                                                                                    |
| `y`         |             | Specify site locale to be used.                                                                                                                                                                           |
| `z`         | `false`     | Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information [here](https://webpack.js.org/configuration/dev-server/#devserverhotonly).                  |
                                                                                                                                                       
**Ví dụ**:
```http
https://maps.ots.vn/api-web/tiles/v1/basic/8/198/123.png
```
**Response**:

Dịch vụ trả về ảnh kích thước 256x256



