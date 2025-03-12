
#ReadMe

### About
API static Wilayah indonesia | Jekyll

https://whdzera.site/api-wilayah-indonesia

### Usage

#### Get province

```
https://whdzera.site/api-wilayah-indonesia/api/v1/provinces
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
https://whdzera.site/api-wilayah-indonesia/api/v1/regencies/[provinceId]
```

Example province Aceh id=11

```
https://whdzera.site/api-wilayah-indonesia/api/v1/regencies/11
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
https://whdzera.site/api-wilayah-indonesia/api/v1/districts/[regencyId]
```

Example district Aceh Selatan id=1103

```
https://whdzera.site/api-wilayah-indonesia/api/v1/districts/1103
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
https://whdzera.site/api-wilayah-indonesia/api/v1/villages/[districtId]
```

Example village Trumon id=1103010

```
https://whdzera.site/api-wilayah-indonesia/api/v1/villages/1103010
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

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rokhimin/api-wilayah-indonesia/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
