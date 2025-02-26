
### Usage

#### Get province

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/provinces.json
```

Response:

```
[
  {
    "id": "11",
    "name": "ACEH"
  },
  {
    "id": "12",
    "name": "SUMATERA UTARA"
  },
  ...
]
```

#### 2. Get regencie

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/regencies/[provinceId].json
```

Example province Aceh id=11

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/regencies/11.json
```

Response:

```
[
  {
    "id": "1101",
    "province_id": "11",
    "name": "KABUPATEN SIMEULUE"
  },
  {
    "id": "1102",
    "province_id": "11",
    "name": "KABUPATEN ACEH SINGKIL"
  },
  ...
]
```

#### 3. Get District

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/districts/[regencyId].json
```

Example district Aceh Selatan id=1103

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/districts/1103.json
```

Response:

```
[
  {
    "id": "1103010",
    "regency_id": "1103",
    "name": "TRUMON"
  },
  {
    "id": "1103011",
    "regency_id": "1103",
    "name": "TRUMON TIMUR"
  },
  ...
]
```

#### 4.Get village

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/villages/[districtId].json
```

Example village Trumon id=1103010

```
https://whdzera.site/jekyll-api-wilayah-indonesia/api/v1/villages/1103010.json
```

Response:

```
[
  {
    "id": "1103010001",
    "district_id": "1103010",
    "name": "KUTA PADANG"
  },
  {
    "id": "1103010002",
    "district_id": "1103010",
    "name": "RAKET"
  },
  ...
]
```