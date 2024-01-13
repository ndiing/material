const pelanggan = [
    {kode:1,nama:'agus'}
]

const jurnal = [
    { kode: 1, tanggal: "", keterangan: "modal awal" },
    { kode: 2, tanggal: "", keterangan: "transfer bank" },
    { kode: 3, tanggal: "", keterangan: "pembelian barang dagang tunai" },
    { kode: 4, tanggal: "", keterangan: "pelunasan pembelian dari pemasok a" },
    { kode: 5, tanggal: "", keterangan: "penjualan xl5000" },
    { kode: 6, tanggal: "", keterangan: "penjualan xl5000 (piutang si a)" },
    { kode: 7, tanggal: "", keterangan: "pelunasan penjualan xl5000 (piutang si a)" },
];

// jurnal umum
// jurnal pembelian (utang)
// jurnal penjualan (piutang)
// jurnal penerimaan kas (tunai)
// jurnal pengeluaran kas (tunai)

const jurnal_entri = [
    { kode: 1, kode_jurnal: 1, akun: "kas", debit: 10000000, kredit: 0 },
    { kode: 2, kode_jurnal: 1, akun: "modal", debit: 0, kredit: 10000000 },

    { kode: 3, kode_jurnal: 2, akun: "bank", debit: 5000000, kredit: 0 },
    { kode: 4, kode_jurnal: 2, akun: "kas", debit: 0, kredit: 5000000 },

    { kode: 5, kode_jurnal: 3, akun: "persediaan", debit: 25000, kredit: 0 },
    { kode: 6, kode_jurnal: 3, akun: "utang", debit: 0, kredit: 25000 },

    { kode: 7, kode_jurnal: 4, akun: "utang", debit: 25000, kredit: 0 },
    { kode: 8, kode_jurnal: 4, akun: "bank", debit: 0, kredit: 25000 },

    { kode: 7, kode_jurnal: 5, akun: "kas", debit: 6000, kredit: 0 },
    { kode: 8, kode_jurnal: 5, akun: "penjualan", debit: 0, kredit: 6000 },
    { kode: 9, kode_jurnal: 5, akun: "harga_pokok", debit: 5000, kredit: 0 },
    { kode: 10, kode_jurnal: 5, akun: "persediaan", debit: 0, kredit: 5000 },

    { kode: 11, kode_jurnal: 6, akun: "piutang", debit: 6000, kredit: 0, kode_pelanggan:1 },
    { kode: 12, kode_jurnal: 6, akun: "penjualan", debit: 0, kredit: 6000 },
    { kode: 13, kode_jurnal: 6, akun: "harga_pokok", debit: 5000, kredit: 0 },
    { kode: 14, kode_jurnal: 6, akun: "persediaan", debit: 0, kredit: 5000 },

    { kode: 15, kode_jurnal: 7, akun: "bank", debit: 6000, kredit: 0 },
    { kode: 16, kode_jurnal: 7, akun: "piutang", debit: 0, kredit: 6000, kode_pelanggan:1 },
];

// buku besar umum
// buku besar pembantu persediaan
// buku besar pembantu utang
// buku besar pembantu piutang
const bukuBesarUmum = (data = []) => {
    return data.reduce(
        (p, c, i) => {
            c.saldo = p[i].saldo + (c.debit - c.kredit);
            p = p.concat(c);
            return p;
        },
        [{ saldo: 0 }]
    );
};

const akun = [
    // harta
    { kode: "kas", saldo_normal: 'D', jenis: "rill" },
    { kode: "bank", saldo_normal: 'D', jenis: "rill" },
    { kode: "persediaan", saldo_normal: 'D', jenis: "rill" },
    { kode: "piutang", saldo_normal: 'D', jenis: "rill" },

    // utang
    { kode: "utang", saldo_normal: 'K', jenis: "rill" },

    // modal
    { kode: "modal", saldo_normal: 'K', jenis: "rill" },
    { kode: "laba_berjalan", saldo_normal: 'K', jenis: "rill" },
    { kode: "laba_ditahan", saldo_normal: 'K', jenis: "rill" },
    
    // pendapatan
    { kode: "penjualan", saldo_normal: 'K', jenis: "nominal" },
    
    // beban
    { kode: "harga_pokok", saldo_normal: 'D', jenis: "nominal" },
];

console.log('buku besar')
akun.forEach(doc => {
    console.log(doc.kode)
    console.table(bukuBesarUmum(jurnal_entri.filter(doc2=>doc2.akun===doc.kode)))
})

console.log('buku pembantu piutang')
pelanggan.forEach(doc=>{
    console.log(doc.nama)
    console.table(bukuBesarUmum(jurnal_entri.filter(doc2=>doc2.akun==='piutang'&&doc2.kode_pelanggan===doc.kode)))
})

console.log('neraca saldo')
let neraca_saldo = akun.map(doc => {
    const saldo=bukuBesarUmum(jurnal_entri.filter(doc2=>doc2.akun===doc.kode)).slice(-1)[0].saldo

    const debit = saldo >0?saldo:0
    const kredit = saldo <0?saldo:0

    return ({kode:doc.kode,debit,kredit})
})
const debit = neraca_saldo.reduce((p,c)=>p+c.debit,0)
const kredit = neraca_saldo.reduce((p,c)=>p+c.kredit,0)

neraca_saldo.push({debit,kredit})
neraca_saldo.push({debit:debit+kredit})
console.table(neraca_saldo)

console.log('laba rugi')
let laba_rugi = akun.filter(doc=>doc.jenis==='nominal').map(doc => {
    const saldo=bukuBesarUmum(jurnal_entri.filter(doc2=>doc2.akun===doc.kode)).slice(-1)[0].saldo

    const debit = saldo >0?saldo:0
    const kredit = saldo <0?saldo:0

    return ({kode:doc.kode,debit,kredit})
})
const laba_rugi_debit = laba_rugi.reduce((p,c)=>p+c.debit,0)
const laba_rugi_kredit = laba_rugi.reduce((p,c)=>p+c.kredit,0)

laba_rugi.push({debit:laba_rugi_debit,kredit:laba_rugi_kredit})
laba_rugi.push({debit:laba_rugi_debit+laba_rugi_kredit})


console.table(laba_rugi)

console.log('neraca')
let neraca = akun.filter(doc=>doc.jenis==='rill').map(doc => {
    const saldo=bukuBesarUmum(jurnal_entri.filter(doc2=>doc2.akun===doc.kode)).slice(-1)[0].saldo

    const debit = saldo >0?saldo:0
    const kredit = saldo <0?saldo:0

    return ({kode:doc.kode,debit,kredit})
})

const lr = neraca.find(doc=>doc.kode==='laba_berjalan')
lr.debit = 0
lr.kredit = laba_rugi.slice(-1)[0].debit

const neraca_debit = neraca.reduce((p,c)=>p+c.debit,0)
const neraca_kredit = neraca.reduce((p,c)=>p+c.kredit,0)

neraca.push({debit:neraca_debit,kredit:neraca_kredit})
neraca.push({debit:neraca_debit+neraca_kredit})
console.table(neraca)
