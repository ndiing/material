import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDataTable extends MdComponent {
    constructor(){
        super()
        this.headers = [
            [
                { name: 'transaction_id', label: 'ID Transaksi' },
                { name: 'date', label: 'Tanggal' },
                { name: 'description', label: 'Deskripsi' },
                { name: 'category', label: 'Kategori' },
                { name: 'amount', label: 'Jumlah (IDR)' },
                { name: 'type', label: 'Tipe' },
                { name: 'status', label: 'Status' }
            ]
        ];
        this.data = [
            { transaction_id: 'TRX001', date: '2024-02-01', description: 'Gaji Bulanan', category: 'Pendapatan', amount: 15000000, type: 'Kredit', status: 'Selesai' },
            { transaction_id: 'TRX002', date: '2024-02-02', description: 'Pembayaran Listrik', category: 'Pengeluaran', amount: 750000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX003', date: '2024-02-03', description: 'Pembelian Saham', category: 'Investasi', amount: 5000000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX004', date: '2024-02-04', description: 'Cicilan Kendaraan', category: 'Kewajiban', amount: 3000000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX005', date: '2024-02-05', description: 'Bonus Tahunan', category: 'Pendapatan', amount: 5000000, type: 'Kredit', status: 'Selesai' },
            { transaction_id: 'TRX006', date: '2024-02-06', description: 'Belanja Bulanan', category: 'Pengeluaran', amount: 2000000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX007', date: '2024-02-07', description: 'Makan di Restoran', category: 'Hiburan', amount: 500000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX008', date: '2024-02-08', description: 'Bunga Deposito', category: 'Pendapatan', amount: 1000000, type: 'Kredit', status: 'Selesai' },
            { transaction_id: 'TRX009', date: '2024-02-09', description: 'Asuransi Jiwa', category: 'Kewajiban', amount: 250000, type: 'Debet', status: 'Selesai' },
            { transaction_id: 'TRX010', date: '2024-02-10', description: 'Transfer ke Orang Tua', category: 'Pengeluaran', amount: 2000000, type: 'Debet', status: 'Selesai' }
        ];
        this.bodies=this.headers
        this.footers=[]
    }
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-data-table
                            .headers="${this.headers}"
                            .bodies="${this.bodies}"
                            .footers="${this.footers}"
                            .data="${this.data}"
                            @onDataTableBodyClick="${console.log}"
                            @onDataTableHeaderCellCheckboxNativeInput="${console.log}"
                            @onDataTableBodyCellCheckboxNativeInput="${console.log}"
                        ></md-data-table>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-data-table", DemoDataTable);
export default document.createElement("demo-data-table");
