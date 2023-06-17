function kirimData () {
      var name = document.getElementById("nama").value
      var peminatan = document.querySelector("input[name=peminatan]:checked").value
      var alamat = document.getElementById("alamat").value
      var e = document.getElementById("angkatan");
      var value = e.value;
      var angkatan = e.options[e.selectedIndex].text;
      var date = document.getElementById("tanggal").value;

      alert(
            "Nama : " + name +
            "\nTanggal Lahir : " + date +
            "\nAngkatan : " + angkatan +
            "\nPeminatan : " + peminatan +
            "\nAlamat : " + alamat 
      )
}