// mulai dengan membuat fungsi hitungip()
function hitungip() {
// persiapkan empat input variabel : absen , tugas , uts dan uas
  var absen = parseFloat(document.fform.iabsen.value);
  var tugas = parseFloat(document.fform.itugas.value);
  var uts     = parseFloat(document.fform.iuts.value);
  var uas    = parseFloat(document.fform.iuas.value);
// persiapkan juga untuk output pengolahan ip dan keterangan nya 
  var ip      =" ";
  var ket   =" ";
//   buat variabel untuk wadah atas perhitungan ke 4 nput dan untuk nilai IP/nilai akhir==na
//  var na2 menggunakan toFixed(2) , agar hasil akhir hanya menggunakan 2 desimal saja 
//  untuk inut absen, kita harus hitng berapa % total kehadiran mahasiswa terlebih dahulu 
//  baru kemudian 10%
  var nabsen             = ((absen/16)*10);
  var ntugas             = (0.20*tugas);
  var nuts                 = (0.35*uts);
  var nuas                 = (0.35*uas);
  var na                     = nabsen + ntugas + nuts + nuas;
  var na2                  = na.toFixed(2);
//   buat fungsi logika untuk menentukan batas bawah dan batas atas nilai 
//   kemudian hasilnya diisikan pada variabel ip dan ket 
  if (na2 > 100)
    {ip ="X"; ket="Angka Overdosis!";}
  else if ((na2 >= 80) && (na2 <=100))
     {ip ="A"; ket="Lulus dengan sangat baik";}
  else if ((na2 >= 68) && (na2 <=79))
    {ip ="B"; ket="Lulus dengan baik";}
  else if ((na2 >= 55) && (na2 <=67))
     {ip ="C"; ket="Lulus dengan Cukup";}
  else if ((na2 >=38) && (na2 <=54))
     { ip ="D"; ket="Lulus dengan Kurang";}
  else
     {  ip ="E"; ket="Tidak Lulus";}
  
//buat variable untuk wadah atas perhitungan ke-4 input dan untuk nilai IP/nilai 
//proses akhir adalah menerapkan hasil pengolahan JS pada sub element form dalam HTML
//yakni,element input dgn name iabsen,itugas,iuts,iuas,ouas,oip,dan oket.
  document.fform.iabsen.value  = nabsen;
  document.fform.itugas.value  =  ntugas;
  document.fform.iuts.value       = nuts;
  document.fform.iuas.value       = nuas;
  document.fform.oip.value        =  ip + " " + "(" +na2+ ")";
  document.fform.oket.value     =  ket;

// akhir kurung kurawal function
}
