import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDataTable extends MdComponent {
    constructor(){
        super()
        const numRows = 100; // Jumlah data yang ingin dibuat

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
        
        const categories = ['Pendapatan', 'Pengeluaran', 'Investasi', 'Kewajiban', 'Hiburan'];
        const descriptions = ['Gaji Bulanan', 'Pembayaran Listrik', 'Pembelian Saham', 'Cicilan Kendaraan', 'Bonus Tahunan', 'Belanja Bulanan', 'Makan di Restoran', 'Bunga Deposito', 'Asuransi Jiwa', 'Transfer ke Orang Tua'];
        const types = ['Kredit', 'Debet'];
        const statuses = ['Selesai', 'Pending'];
        
        this.data = Array.from({ length: numRows }, (_, i) => ({
            transaction_id: `TRX${String(i + 1).padStart(3, '0')}`,
            date: `2024-02-${String(i + 1).padStart(2, '0')}`,
            description: descriptions[i % descriptions.length],
            category: categories[i % categories.length],
            amount: Math.floor(Math.random() * 10000000) + 500000, // Nominal random antara 500rb - 10jt
            type: types[i % types.length],
            status: statuses[i % statuses.length]
        }));
        
        console.log(this.data);
        
        this.bodies=this.headers
        this.footers=[]
    }
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid" style="height:100%;min-height:0;">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4" style="height:100%;min-height:0;">
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
