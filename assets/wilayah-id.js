
$.getJSON('https://whdzera.site/api-wilayah-indonesia/api/v1/provinces', function(data) {
    $.each(data, function(index, provinsi) {
      $('#provinsi').append('<option value="' + provinsi.id + '">' + provinsi.name + '</option>');
    });

    $('#provinsi').on('change', function() {
      var idProvinsi = $(this).val();
      $.getJSON('https://whdzera.site/api-wilayah-indonesia/api/v1/regencies/' + idProvinsi, function(data) {
        $('#kota').empty();
        $.each(data, function(index, kota) {
          $('#kota').append('<option value="' + kota.id + '">' + kota.name + '</option>');
        });

        $('#kota').on('change', function() {
          var idKota = $(this).val();
          $.getJSON('https://whdzera.site/api-wilayah-indonesia/api/v1/districts/' + idKota, function(data) {
            $('#kecamatan').empty();
            $.each(data, function(index, kecamatan) {
              $('#kecamatan').append('<option value="' + kecamatan.id + '">' + kecamatan.name + '</option>');
            });

            $('#kecamatan').on('change', function() {
              var idKecamatan = $(this).val();
              $.getJSON('https://whdzera.site/api-wilayah-indonesia/api/v1/villages/' + idKecamatan, function(data) {
                $('#kelurahan').empty();
                $.each(data, function(index, kelurahan) {
                  $('#kelurahan').append('<option value="' + kelurahan.id + '">' + kelurahan.name + '</option>');
                });
              });
            });
          });
        });
      });
    });
  });