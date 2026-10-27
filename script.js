function hitungSegitiga() {
    var alas = 6;
    var tinggi = 8;
    var s1 = 5, s2 = 5, s3 = 6;
    
    var luas = 0.5 * alas * tinggi;
    var keliling = s1 + s2 + s3;
    
    console.log("--- Segitiga ---");
    console.log("Luas:", luas);
    console.log("Keliling:", keliling);
}

function hitungPersegiPanjang() {
    var p = 10;
    var l = 5;
    
    var luas = p * l;
    var keliling = 2 * (p + l);
    
    console.log("\n--- Persegi Panjang ---");
    console.log("Luas:", luas);
    console.log("Keliling:", keliling);
}

function hitungPrisma() {
    var alasSegitiga = 6;
    var tinggiSegitiga = 4;
    var tinggiPrisma = 10;
    var sisiA = 6, sisiB = 5, sisiC = 5;
    
    var luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
    var kelilingAlas = sisiA + sisiB + sisiC;
    var luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggiPrisma);
    var volume = luasAlas * tinggiPrisma;
    
    console.log("\n--- Prisma Segitiga ---");
    console.log("Luas Permukaan:", luasPermukaan);
    console.log("Keliling Alas:", kelilingAlas);
    console.log("Volume:", volume);
}

function hitungLimas() {
    var sisiAlas = 6;
    var tinggiLimas = 10;
    var tinggiSisiTegak = 10.2;
    
    var luasAlas = sisiAlas * sisiAlas;
    var kelilingAlas = 4 * sisiAlas;
    var luasSisiTegak = 0.5 * sisiAlas * tinggiSisiTegak;
    var luasPermukaan = luasAlas + (4 * luasSisiTegak);
    var volume = (1 / 3) * luasAlas * tinggiLimas;
    
    console.log("\n--- Limas Segi Empat ---");
    console.log("Luas Permukaan:", luasPermukaan);
    console.log("Keliling Alas:", kelilingAlas);
    console.log("Volume:", volume);
}

function hitungSegitigaSembarang() {
    var a = 7;
    var b = 8;
    var c = 9;
    
    var keliling = a + b + c;
    var s = keliling / 2;
    var luas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    console.log("\n--- Segitiga Sembarang ---");
    console.log("Luas:", luas);
    console.log("Keliling:", keliling);
}

hitungSegitiga();
hitungPersegiPanjang();
hitungPrisma();
hitungLimas();
hitungSegitigaSembarang();