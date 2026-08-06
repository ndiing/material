import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTree extends MdElement {
    constructor() {
        super();

        this.data0 = [
            // Level 1 - C-Level
            { id: 1, parent_id: null, label: "CEO Office" },
            { id: 2, parent_id: null, label: "Board of Directors" },

            // Level 2 - Divisi
            { id: 3, parent_id: 1, label: "Technology Division" },
            { id: 4, parent_id: 1, label: "Operations Division" },
            { id: 5, parent_id: 1, label: "Finance Division" },
            { id: 6, parent_id: 1, label: "HR & GA Division" },

            // Technology Division
            { id: 7, parent_id: 3, label: "Software Engineering" },
            { id: 8, parent_id: 3, label: "Infrastructure & DevOps" },
            { id: 9, parent_id: 3, label: "Data & Analytics" },
            { id: 10, parent_id: 3, label: "Product Management" },
            { id: 11, parent_id: 3, label: "Quality Assurance" },

            // Software Engineering Teams
            { id: 12, parent_id: 7, label: "Frontend Team" },
            { id: 13, parent_id: 7, label: "Backend Team" },
            { id: 14, parent_id: 7, label: "Mobile Team" },

            // Frontend Team
            { id: 15, parent_id: 12, label: "React Development" },
            { id: 16, parent_id: 12, label: "Vue Development" },
            { id: 17, parent_id: 12, label: "Angular Development" },

            // Backend Team
            { id: 18, parent_id: 13, label: "Node.js Services" },
            { id: 19, parent_id: 13, label: "Java Microservices" },
            { id: 20, parent_id: 13, label: "Python AI Services" },

            // Infrastructure
            { id: 21, parent_id: 8, label: "Cloud Operations" },
            { id: 22, parent_id: 8, label: "Network Security" },
            { id: 23, parent_id: 8, label: "Database Administration" },

            // Data & Analytics
            { id: 24, parent_id: 9, label: "Data Engineering" },
            { id: 25, parent_id: 9, label: "Data Science" },
            { id: 26, parent_id: 9, label: "Business Intelligence" },

            // Operations Division
            { id: 27, parent_id: 4, label: "Supply Chain", selected: true },
            { id: 28, parent_id: 4, label: "Manufacturing" },
            { id: 29, parent_id: 4, label: "Quality Control" },
            { id: 30, parent_id: 4, label: "Logistics" },

            // Finance Division
            { id: 31, parent_id: 5, label: "Accounting" },
            { id: 32, parent_id: 5, label: "Treasury" },
            { id: 33, parent_id: 5, label: "Budgeting & Planning" },
            { id: 34, parent_id: 5, label: "Taxation" },

            // HR & GA
            { id: 35, parent_id: 6, label: "Recruitment" },
            { id: 36, parent_id: 6, label: "Training & Development" },
            { id: 37, parent_id: 6, label: "Compensation & Benefit" },
            { id: 38, parent_id: 6, label: "General Affairs" },
        ];
        this.data1 = [
            // Root Categories
            { id: 1, parent_id: null, label: "Elektronik" },
            { id: 2, parent_id: null, label: "Fashion" },
            { id: 3, parent_id: null, label: "Makanan & Minuman" },
            { id: 4, parent_id: null, label: "Kesehatan & Kecantikan" },
            { id: 5, parent_id: null, label: "Otomotif" },

            // Elektronik Sub-categories
            { id: 6, parent_id: 1, label: "Smartphone & Tablet" },
            { id: 7, parent_id: 1, label: "Laptop & Komputer" },
            { id: 8, parent_id: 1, label: "Aksesoris Gadget" },
            { id: 9, parent_id: 1, label: "TV & Audio" },

            // Smartphone Brands
            { id: 10, parent_id: 6, label: "Samsung" },
            { id: 11, parent_id: 6, label: "Apple iPhone" },
            { id: 12, parent_id: 6, label: "Xiaomi" },
            { id: 13, parent_id: 6, label: "OPPO" },
            { id: 14, parent_id: 6, label: "Vivo" },

            // Laptop Brands
            { id: 15, parent_id: 7, label: "ASUS" },
            { id: 16, parent_id: 7, label: "Lenovo" },
            { id: 17, parent_id: 7, label: "Dell" },
            { id: 18, parent_id: 7, label: "HP" },
            { id: 19, parent_id: 7, label: "Acer" },

            // Aksesoris
            { id: 20, parent_id: 8, label: "Charger & Kabel", selected: true },
            { id: 21, parent_id: 8, label: "Headphone & Earphone" },
            { id: 22, parent_id: 8, label: "Case & Cover" },
            { id: 23, parent_id: 8, label: "Power Bank" },
            { id: 24, parent_id: 8, label: "Screen Protector" },

            // Fashion
            { id: 25, parent_id: 2, label: "Pria" },
            { id: 26, parent_id: 2, label: "Wanita" },
            { id: 27, parent_id: 2, label: "Anak-anak" },

            // Pria
            { id: 28, parent_id: 25, label: "Kemeja" },
            { id: 29, parent_id: 25, label: "Celana" },
            { id: 30, parent_id: 25, label: "Jaket" },
            { id: 31, parent_id: 25, label: "Sepatu" },
            { id: 32, parent_id: 25, label: "Aksesoris Pria" },

            // Wanita
            { id: 33, parent_id: 26, label: "Dress" },
            { id: 34, parent_id: 26, label: "Blouse" },
            { id: 35, parent_id: 26, label: "Rok" },
            { id: 36, parent_id: 26, label: "Tas Wanita" },
            { id: 37, parent_id: 26, label: "Sepatu Wanita" },

            // Makanan
            { id: 38, parent_id: 3, label: "Makanan Ringan" },
            { id: 39, parent_id: 3, label: "Minuman" },
            { id: 40, parent_id: 3, label: "Bahan Masak" },

            // Makanan Ringan
            { id: 41, parent_id: 38, label: "Keripik" },
            { id: 42, parent_id: 38, label: "Biskuit" },
            { id: 43, parent_id: 38, label: "Cokelat" },
            { id: 44, parent_id: 38, label: "Permen" },
        ];
        this.data2 = [
            // Provinsi
            { id: 1, parent_id: null, label: "DKI Jakarta" },
            { id: 2, parent_id: null, label: "Jawa Barat" },
            { id: 3, parent_id: null, label: "Jawa Tengah" },
            { id: 4, parent_id: null, label: "Jawa Timur" },
            { id: 5, parent_id: null, label: "Bali" },

            // Kabupaten/Kota DKI Jakarta
            { id: 6, parent_id: 1, label: "Jakarta Pusat" },
            { id: 7, parent_id: 1, label: "Jakarta Utara" },
            { id: 8, parent_id: 1, label: "Jakarta Barat" },
            { id: 9, parent_id: 1, label: "Jakarta Selatan" },
            { id: 10, parent_id: 1, label: "Jakarta Timur" },

            // Kecamatan Jakarta Pusat
            { id: 11, parent_id: 6, label: "Gambir" },
            { id: 12, parent_id: 6, label: "Sawah Besar" },
            { id: 13, parent_id: 6, label: "Kemayoran" },
            { id: 14, parent_id: 6, label: "Menteng" },

            // Kecamatan Jakarta Selatan
            { id: 15, parent_id: 9, label: "Kebayoran Baru" },
            { id: 16, parent_id: 9, label: "Kebayoran Lama" },
            { id: 17, parent_id: 9, label: "Pancoran" },
            { id: 18, parent_id: 9, label: "Mampang Prapatan" },

            // Jawa Barat
            { id: 19, parent_id: 2, label: "Kota Bandung", selected: true },
            { id: 20, parent_id: 2, label: "Kabupaten Bogor" },
            { id: 21, parent_id: 2, label: "Kota Bekasi" },
            { id: 22, parent_id: 2, label: "Kabupaten Cianjur" },

            // Kecamatan Bandung
            { id: 23, parent_id: 19, label: "Cicendo" },
            { id: 24, parent_id: 19, label: "Bandung Kidul" },
            { id: 25, parent_id: 19, label: "Bandung Wetan" },
            { id: 26, parent_id: 19, label: "Astana Anyar" },
        ];
    }
    /* prettier-ignore */
    render(){
        return html`
            <md-grid >
                <md-grid-column expanded="4" medium="4" compact="2">
                    <md-tree
                        .items="${this.data0}"
                        .singleSelect="${true}"
                    ></md-tree>
                </md-grid-column>
                <md-grid-column expanded="4" medium="4" compact="2">
                    <md-tree
                        .items="${this.data1}"
                        .singleSelect="${true}"
                    ></md-tree>
                </md-grid-column>
                <md-grid-column expanded="4" medium="4" compact="2">
                    <md-tree
                        .items="${this.data2}"
                        .singleSelect="${true}"
                    ></md-tree>
                </md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-tree", DemoTree);
export default document.createElement("demo-tree");
