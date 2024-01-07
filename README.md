## Classes

<dl>
<dt><a href="#MDButtonComponent">MDButtonComponent</a></dt>
<dd><p>Komponen tombol kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDCheckboxComponent">MDCheckboxComponent</a></dt>
<dd><p>Komponen checkbox kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDFabComponent">MDFabComponent</a></dt>
<dd><p>Komponen fab kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDCDK">MDCDK</a></dt>
<dd><p>Mewakili sebuah Custom Development Kit untuk MD Framework.</p>
</dd>
<dt><a href="#MDComponent">MDComponent</a></dt>
<dd><p>Mewakili sebuah komponen untuk framework MD.
Memperluas kelas LitElement.</p>
</dd>
<dt><a href="#MDOutletComponent">MDOutletComponent</a></dt>
<dd><p>Mewakili komponen outlet untuk mengelola rendering konten dalam sebuah router.
Memperluas kelas MDComponent.</p>
</dd>
<dt><a href="#MDPopover">MDPopover</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Mewakili fungsionalitas popover berdasarkan komponen Material Design.</p>
</dd>
<dt><a href="#MDRipple">MDRipple</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Mewakili efek Ripple Material Design yang diterapkan pada sebuah elemen.</p>
</dd>
<dt><a href="#MDRouter">MDRouter</a></dt>
<dd><p>Class yang mewakili router sederhana.</p>
</dd>
<dt><a href="#MDStore">MDStore</a></dt>
<dd><p>Mengelola penyaringan data, pengurutan, dan paginasi melalui parameter URL.</p>
</dd>
<dt><a href="#MDVirtualScroll">MDVirtualScroll</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Mewakili fungsionalitas gulir virtual menggunakan komponen Material Design.</p>
</dd>
<dt><a href="#MDIconButtonComponent">MDIconButtonComponent</a></dt>
<dd><p>Komponen tombol ikon kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDRadioButtonComponent">MDRadioButtonComponent</a></dt>
<dd><p>Komponen radio-button kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDSegmentedButtonComponent">MDSegmentedButtonComponent</a></dt>
<dd><p>Komponen tombol segmen kustom yang memperluas MDComponent.</p>
</dd>
<dt><a href="#MDSwitchComponent">MDSwitchComponent</a></dt>
<dd><p>Komponen switch kustom yang memperluas MDComponent.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#notNull">notNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Memeriksa apakah nilai yang diberikan tidak undefined atau null.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Memeriksa apakah nilai yang diberikan tidak kosong.</p>
</dd>
<dt><a href="#parseNumber">parseNumber(value)</a> ⇒ <code>number</code></dt>
<dd><p>Mencoba untuk mengonversi nilai menjadi integer.</p>
</dd>
<dt><a href="#toPascalCase">toPascalCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Mengonversi string menjadi PascalCase.</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Mengonversi string menjadi camelCase.</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Mengonversi string menjadi snake_case.</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Mengonversi string menjadi kebab-case.</p>
</dd>
<dt><a href="#toTitleCase">toTitleCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Mengonversi string menjadi Title Case.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Route">Route</a> : <code>Object</code></dt>
<dd><p>Representasi objek konfigurasi suatu rute.</p>
</dd>
<dt><a href="#Scroll">Scroll</a> : <code>Object</code></dt>
<dd><p>Mewakili detail dari peristiwa gulir.</p>
</dd>
</dl>

<a name="MDButtonComponent"></a>

## MDButtonComponent
Komponen tombol kustom yang memperluas MDComponent.

**Kind**: global class  

* [MDButtonComponent](#MDButtonComponent)
    * [new MDButtonComponent()](#new_MDButtonComponent_new)
    * _instance_
        * [.native](#MDButtonComponent+native) ⇒ <code>HTMLButtonElement</code>
        * [.render()](#MDButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.updated(changedProperties)](#MDButtonComponent+updated)
    * _static_
        * [.properties](#MDButtonComponent.properties)

<a name="new_MDButtonComponent_new"></a>

### new MDButtonComponent()
Konstruktor untuk MDButtonComponent.

<a name="MDButtonComponent+native"></a>

### mdButtonComponent.native ⇒ <code>HTMLButtonElement</code>
Mengambil elemen tombol asli.

**Kind**: instance property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>HTMLButtonElement</code> - Elemen tombol asli.  
<a name="MDButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Merender MDButtonComponent.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen tombol dan efek riaknya.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Promise yang menyelesaikan inisialisasi.  
<a name="MDButtonComponent+updated"></a>

### mdButtonComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.Memperbarui gaya tombol berdasarkan perubahan properti.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDButtonComponent.properties"></a>

### MDButtonComponent.properties
Properti untuk MDButtonComponent.

**Kind**: static property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | Ikon yang ditampilkan di dalam tombol. |
| label | <code>string</code> | Label atau teks yang ditampilkan di dalam tombol. |
| type | <code>string</code> | Tipe dari tombol (misalnya, "button", "submit", "reset"). |
| appearance | <code>string</code> | Gaya penampilan dari tombol ("elevated", "filled", "tonal", "outlined"). |
| activated | <code>boolean</code> | Mewakili apakah tombol telah diaktifkan atau tidak. |

<a name="MDCheckboxComponent"></a>

## MDCheckboxComponent
Komponen checkbox kustom yang memperluas MDComponent.

**Kind**: global class  
**Emits**: <code>MDCheckboxComponent#event:onCheckboxNativeInput - Menunjukkan acara input checkbox asli.</code>  

* [MDCheckboxComponent](#MDCheckboxComponent)
    * [new MDCheckboxComponent()](#new_MDCheckboxComponent_new)
    * _instance_
        * [.native](#MDCheckboxComponent+native) ⇒ <code>HTMLInputElement</code>
        * [.track](#MDCheckboxComponent+track) ⇒ <code>HTMLElement</code>
        * [.thumb](#MDCheckboxComponent+thumb) ⇒ <code>HTMLElement</code>
        * [.render()](#MDCheckboxComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDCheckboxComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDCheckboxComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDCheckboxComponent+firstUpdated)
        * [.updated(changedProperties)](#MDCheckboxComponent+updated)
        * [.handleCheckboxNativeInput(event)](#MDCheckboxComponent+handleCheckboxNativeInput)
    * _static_
        * [.properties](#MDCheckboxComponent.properties)

<a name="new_MDCheckboxComponent_new"></a>

### new MDCheckboxComponent()
Konstruktor untuk MDCheckboxComponent.

<a name="MDCheckboxComponent+native"></a>

### mdCheckboxComponent.native ⇒ <code>HTMLInputElement</code>
Mendapatkan elemen checkbox asli.

**Kind**: instance property of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>HTMLInputElement</code> - Elemen checkbox asli.  
<a name="MDCheckboxComponent+track"></a>

### mdCheckboxComponent.track ⇒ <code>HTMLElement</code>
Mendapatkan elemen track dari checkbox.

**Kind**: instance property of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>HTMLElement</code> - Elemen track dari checkbox.  
<a name="MDCheckboxComponent+thumb"></a>

### mdCheckboxComponent.thumb ⇒ <code>HTMLElement</code>
Mendapatkan elemen thumb dari checkbox.

**Kind**: instance property of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>HTMLElement</code> - Elemen thumb dari checkbox.  
<a name="MDCheckboxComponent+render"></a>

### mdCheckboxComponent.render() ⇒ <code>TemplateResult</code>
Merender MDCheckboxComponent.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDCheckboxComponent+connectedCallback"></a>

### mdCheckboxComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen checkbox.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Sebuah Promise yang diselesaikan ketika inisialisasi selesai.  
<a name="MDCheckboxComponent+disconnectedCallback"></a>

### mdCheckboxComponent.disconnectedCallback()
Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
<a name="MDCheckboxComponent+firstUpdated"></a>

### mdCheckboxComponent.firstUpdated(changedProperties)
Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.Menginisialisasi efek riak untuk checkbox.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDCheckboxComponent+updated"></a>

### mdCheckboxComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDCheckboxComponent+handleCheckboxNativeInput"></a>

### mdCheckboxComponent.handleCheckboxNativeInput(event)
Menangani acara input checkbox asli.Memancarkan sebuah acara saat input checkbox asli terjadi.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Acara input. |

<a name="MDCheckboxComponent.properties"></a>

### MDCheckboxComponent.properties
Properti untuk MDCheckboxComponent.

**Kind**: static property of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nama dari checkbox. |
| checked | <code>boolean</code> | Mewakili apakah checkbox dicentang atau tidak. |
| indeterminate | <code>boolean</code> | Menunjukkan apakah checkbox berada dalam keadaan tidak pasti. |

<a name="MDFabComponent"></a>

## MDFabComponent
Komponen fab kustom yang memperluas MDComponent.

**Kind**: global class  

* [MDFabComponent](#MDFabComponent)
    * [new MDFabComponent()](#new_MDFabComponent_new)
    * _instance_
        * [.native](#MDFabComponent+native) ⇒ <code>HTMLElement</code>
        * [.render()](#MDFabComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDFabComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.updated(changedProperties)](#MDFabComponent+updated)
    * _static_
        * [.properties](#MDFabComponent.properties)

<a name="new_MDFabComponent_new"></a>

### new MDFabComponent()
Konstruktor untuk MDFabComponent.

<a name="MDFabComponent+native"></a>

### mdFabComponent.native ⇒ <code>HTMLElement</code>
Mengambil elemen fab asli.

**Kind**: instance property of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>HTMLElement</code> - Elemen fab asli.  
<a name="MDFabComponent+render"></a>

### mdFabComponent.render() ⇒ <code>TemplateResult</code>
Merender MDFabComponent.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDFabComponent+connectedCallback"></a>

### mdFabComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen fab dan efek riaknya.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Promise yang menyelesaikan inisialisasi.  
<a name="MDFabComponent+updated"></a>

### mdFabComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.Memperbarui gaya fab berdasarkan perubahan properti.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | Properti yang telah berubah. |

<a name="MDFabComponent.properties"></a>

### MDFabComponent.properties
Properti untuk MDFabComponent.

**Kind**: static property of [<code>MDFabComponent</code>](#MDFabComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | Ikon yang ditampilkan di dalam fab. |
| label | <code>string</code> | Label atau teks yang ditampilkan di dalam fab. |
| type | <code>string</code> | Tipe dari fab (misalnya, "button", "submit", "reset"). |
| appearance | <code>string</code> | Gaya penampilan dari fab ("extended"). |
| size | <code>string</code> | Gaya ukuran dari fab ("small", "large"). |

<a name="MDCDK"></a>

## MDCDK
Mewakili sebuah Custom Development Kit untuk MD Framework.

**Kind**: global class  

* [MDCDK](#MDCDK)
    * [new MDCDK(root, [options])](#new_MDCDK_new)
    * [.init()](#MDCDK+init)
    * [.destroy()](#MDCDK+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDCDK_new"></a>

### new MDCDK(root, [options])
Membuat sebuah instance dari MDCDK.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | Elemen HTML root untuk mengikat event kepadanya. |
| [options] | <code>Object</code> | <code>{}</code> | Opsi tambahan untuk MDCDK. |

<a name="MDCDK+init"></a>

### mdcdK.init()
Menginisialisasi instance MDCDK.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  
<a name="MDCDK+destroy"></a>

### mdcdK.destroy()
Menghancurkan instance MDCDK.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  
<a name="MDCDK+on"></a>

### mdcdK.on(type, listener)
Melampirkan event listener ke elemen root.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event yang akan didengarkan. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dipanggil ketika event terjadi. |

<a name="MDCDK+off"></a>

### mdcdK.off(type, listener)
Menghapus event listener dari elemen root.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event untuk menghapus event listener. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dihapus. |

<a name="MDCDK+emit"></a>

### mdcdK.emit(type, detail)
Memancarkan sebuah event kustom dari elemen root.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event kustom yang akan di-dispatch. |
| detail | <code>any</code> | Detail opsional yang akan disertakan dalam event. |

<a name="MDComponent"></a>

## MDComponent
Mewakili sebuah komponen untuk framework MD.Memperluas kelas LitElement.

**Kind**: global class  

* [MDComponent](#MDComponent)
    * [.on(type, listener)](#MDComponent+on)
    * [.off(type, listener)](#MDComponent+off)
    * [.emit(type, detail)](#MDComponent+emit)

<a name="MDComponent+on"></a>

### mdComponent.on(type, listener)
Melampirkan event listener ke komponen.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event yang akan didengarkan. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dipanggil ketika event terjadi. |

<a name="MDComponent+off"></a>

### mdComponent.off(type, listener)
Menghapus event listener dari komponen.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event untuk menghapus event listener. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dihapus. |

<a name="MDComponent+emit"></a>

### mdComponent.emit(type, detail)
Memancarkan sebuah event kustom dari komponen.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event kustom yang akan di-dispatch. |
| detail | <code>any</code> | Detail opsional yang akan disertakan dalam event. |

<a name="MDOutletComponent"></a>

## MDOutletComponent
Mewakili komponen outlet untuk mengelola rendering konten dalam sebuah router.Memperluas kelas MDComponent.

**Kind**: global class  
<a name="MDPopover"></a>

## MDPopover ⇐ [<code>MDCDK</code>](#MDCDK)
Mewakili fungsionalitas popover berdasarkan komponen Material Design.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  

* [MDPopover](#MDPopover) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDPopover(root, [options])](#new_MDPopover_new)
    * [.init()](#MDPopover+init)
    * [.destroy()](#MDPopover+destroy)
    * [.setPlacement()](#MDPopover+setPlacement)
    * [.getPlacement(placement)](#MDPopover+getPlacement) ⇒ <code>Object</code>
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDPopover_new"></a>

### new MDPopover(root, [options])
Membuat sebuah instance dari MDPopover.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | Elemen root untuk popover. |
| [options] | <code>Object</code> | <code>{}</code> | Opsi tambahan untuk popover. |
| [options.placement] | <code>string</code> | <code>&quot;\&quot;bottom-start\&quot;&quot;</code> | Penempatan dari popover. |
| [options.offset] | <code>number</code> | <code>0</code> | Nilai offset untuk penempatan popover. |
| [options.shift] | <code>boolean</code> | <code>false</code> | Apakah untuk memindahkan popover agar tetap dalam viewport. |

<a name="MDPopover+init"></a>

### mdPopover.init()
Menginisialisasi popover.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDPopover+destroy"></a>

### mdPopover.destroy()
Menghancurkan popover.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDPopover+setPlacement"></a>

### mdPopover.setPlacement()
Mengatur penempatan dari popover berdasarkan opsi yang ditentukan.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
<a name="MDPopover+getPlacement"></a>

### mdPopover.getPlacement(placement) ⇒ <code>Object</code>
Menghitung penempatan dari popover berdasarkan opsi penempatan yang ditentukan.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Returns**: <code>Object</code> - Mengembalikan objek dengan posisi left dan top untuk popover.  

| Param | Type | Description |
| --- | --- | --- |
| placement | <code>string</code> | Opsi penempatan untuk popover. |

<a name="MDCDK+on"></a>

### mdPopover.on(type, listener)
Melampirkan event listener ke elemen root.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event yang akan didengarkan. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dipanggil ketika event terjadi. |

<a name="MDCDK+off"></a>

### mdPopover.off(type, listener)
Menghapus event listener dari elemen root.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event untuk menghapus event listener. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dihapus. |

<a name="MDCDK+emit"></a>

### mdPopover.emit(type, detail)
Memancarkan sebuah event kustom dari elemen root.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event kustom yang akan di-dispatch. |
| detail | <code>any</code> | Detail opsional yang akan disertakan dalam event. |

<a name="MDRipple"></a>

## MDRipple ⇐ [<code>MDCDK</code>](#MDCDK)
Mewakili efek Ripple Material Design yang diterapkan pada sebuah elemen.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  

* [MDRipple](#MDRipple) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDRipple(root, [options])](#new_MDRipple_new)
    * [.init()](#MDRipple+init)
    * [.destroy()](#MDRipple+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDRipple_new"></a>

### new MDRipple(root, [options])
Membuat sebuah instance dari MDRipple.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | Elemen root untuk menerapkan efek ripple. |
| [options] | <code>Object</code> | <code>{}</code> | Opsi tambahan untuk efek ripple. |
| [options.bounded] | <code>boolean</code> | <code>true</code> | Apakah efek ripple dibatasi. |
| [options.centered] | <code>boolean</code> | <code>false</code> | Apakah efek ripple berada di tengah. |
| [options.trigger] | <code>HTMLElement</code> |  | Elemen yang memicu efek ripple. |
| [options.diameter] | <code>number</code> |  | Diameter dari efek ripple. |
| [options.fadeout] | <code>boolean</code> |  | Apakah menerapkan efek fade-out. |

<a name="MDRipple+init"></a>

### mdRipple.init()
Menginisialisasi efek ripple.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDRipple+destroy"></a>

### mdRipple.destroy()
Menghancurkan efek ripple dan menghapus event listener.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDCDK+on"></a>

### mdRipple.on(type, listener)
Melampirkan event listener ke elemen root.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event yang akan didengarkan. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dipanggil ketika event terjadi. |

<a name="MDCDK+off"></a>

### mdRipple.off(type, listener)
Menghapus event listener dari elemen root.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event untuk menghapus event listener. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dihapus. |

<a name="MDCDK+emit"></a>

### mdRipple.emit(type, detail)
Memancarkan sebuah event kustom dari elemen root.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event kustom yang akan di-dispatch. |
| detail | <code>any</code> | Detail opsional yang akan disertakan dalam event. |

<a name="MDRouter"></a>

## MDRouter
Class yang mewakili router sederhana.

**Kind**: global class  
**Emits**: <code>window#event:onCurrentEntryChange - Dipicu ketika entri saat ini berubah.</code>, <code>window#event:onNavigate - Dipicu saat navigasi dimulai.</code>, <code>window#event:onNavigateError - Dipicu saat terjadi kesalahan selama navigasi.</code>, <code>window#event:onNavigateSuccess - Dipicu saat navigasi berhasil.</code>  

* [MDRouter](#MDRouter)
    * [.navigate(url)](#MDRouter.navigate)
    * [.init([routes])](#MDRouter.init)

<a name="MDRouter.navigate"></a>

### MDRouter.navigate(url)
Menavigasi ke URL tertentu.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL yang akan dituju. |

**Example**  
```js
// Navigasi ke rute '/about'MDRouter.navigate('/about');
```
<a name="MDRouter.init"></a>

### MDRouter.init([routes])
Menginisialisasi router dengan rute yang diberikan.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [routes] | [<code>Array.&lt;Route&gt;</code>](#Route) | <code>[]</code> | Array konfigurasi rute. |

<a name="MDStore"></a>

## MDStore
Mengelola penyaringan data, pengurutan, dan paginasi melalui parameter URL.

**Kind**: global class  

* [MDStore](#MDStore)
    * [new MDStore([docs])](#new_MDStore_new)
    * [.filter(name, value, [operator])](#MDStore+filter)
    * [.paginate(_page, _limit)](#MDStore+paginate)
    * [.sort(_sort, _order)](#MDStore+sort)
    * [.slice(_start, _end)](#MDStore+slice)
    * [.search(q)](#MDStore+search)
    * [.getAll()](#MDStore+getAll) ⇒ <code>Object</code>

<a name="new_MDStore_new"></a>

### new MDStore([docs])
Membuat instance MDStore.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | Sebuah array dokumen. |

<a name="MDStore+filter"></a>

### mdStore.filter(name, value, [operator])
Menyaring parameter pencarian URL berdasarkan nama, nilai, dan operator.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Nama parameter. |
| value | <code>string</code> |  | Nilai parameter. |
| [operator] | <code>string</code> | <code>&quot;_eq&quot;</code> | Operator untuk penyaringan (default: '_eq' untuk kesetaraan). |

<a name="MDStore+paginate"></a>

### mdStore.paginate(_page, _limit)
Melakukan paginasi data dengan menetapkan atau menghapus parameter pencarian URL '_page' dan '_limit'.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _page | <code>number</code> | Nomor halaman. |
| _limit | <code>number</code> | Batasan data per halaman. |

<a name="MDStore+sort"></a>

### mdStore.sort(_sort, _order)
Mengurutkan data dengan menetapkan atau menghapus parameter pencarian URL '_sort' dan '_order'.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _sort | <code>string</code> | Bidang yang digunakan untuk pengurutan. |
| _order | <code>string</code> | Urutan pengurutan ('asc' atau 'desc'). |

<a name="MDStore+slice"></a>

### mdStore.slice(_start, _end)
Memotong data dengan menetapkan atau menghapus parameter pencarian URL '_start' dan '_end'.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _start | <code>number</code> | Indeks awal. |
| _end | <code>number</code> | Indeks akhir. |

<a name="MDStore+search"></a>

### mdStore.search(q)
Mencari data dengan menetapkan atau menghapus parameter pencarian URL 'q' (query).

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | Query pencarian. |

<a name="MDStore+getAll"></a>

### mdStore.getAll() ⇒ <code>Object</code>
Mengambil semua data berdasarkan filter yang diterapkan, sorting, dan pagination.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>Object</code> - - Objek yang berisi total jumlah dan data yang difilter.  
<a name="MDVirtualScroll"></a>

## MDVirtualScroll ⇐ [<code>MDCDK</code>](#MDCDK)
Mewakili fungsionalitas gulir virtual menggunakan komponen Material Design.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  
**Emits**: <code>root#event:onScroll</code>  

* [MDVirtualScroll](#MDVirtualScroll) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDVirtualScroll(root, [options])](#new_MDVirtualScroll_new)
    * [.init()](#MDVirtualScroll+init)
    * [.destroy()](#MDVirtualScroll+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDVirtualScroll_new"></a>

### new MDVirtualScroll(root, [options])
Membuat instance dari MDVirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | Elemen root untuk menerapkan gulir virtual. |
| [options] | <code>Object</code> | <code>{}</code> | Opsi tambahan untuk gulir virtual. |
| [options.total] | <code>number</code> | <code>0</code> | Jumlah total item. |
| [options.contentHeight] | <code>number</code> | <code>48</code> | Tinggi setiap item. |
| [options.threshold] | <code>number</code> | <code>2</code> | Ambang untuk memuat pra-item. |

<a name="MDVirtualScroll+init"></a>

### mdVirtualScroll.init()
Menginisialisasi instance MDVirtualScroll.Mengikat penangan peristiwa gulir dan menyiapkan parameter yang diperlukan.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDVirtualScroll+destroy"></a>

### mdVirtualScroll.destroy()
Menghancurkan instance MDVirtualScroll.Menghapus penyetel peristiwa gulir.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDCDK+on"></a>

### mdVirtualScroll.on(type, listener)
Melampirkan event listener ke elemen root.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event yang akan didengarkan. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dipanggil ketika event terjadi. |

<a name="MDCDK+off"></a>

### mdVirtualScroll.off(type, listener)
Menghapus event listener dari elemen root.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis event untuk menghapus event listener. |
| listener | <code>EventListenerOrEventListenerObject</code> | Fungsi event listener yang akan dihapus. |

<a name="MDCDK+emit"></a>

### mdVirtualScroll.emit(type, detail)
Memancarkan sebuah event kustom dari elemen root.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Jenis dari event kustom yang akan di-dispatch. |
| detail | <code>any</code> | Detail opsional yang akan disertakan dalam event. |

<a name="MDIconButtonComponent"></a>

## MDIconButtonComponent
Komponen tombol ikon kustom yang memperluas MDComponent.

**Kind**: global class  

* [MDIconButtonComponent](#MDIconButtonComponent)
    * _instance_
        * [.connectedCallback()](#MDIconButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MDIconButtonComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDIconButtonComponent+firstUpdated)
        * [.updated(changedProperties)](#MDIconButtonComponent+updated)
    * _static_
        * [.properties](#MDIconButtonComponent.properties)

<a name="MDIconButtonComponent+connectedCallback"></a>

### mdIconButtonComponent.connectedCallback()
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+disconnectedCallback"></a>

### mdIconButtonComponent.disconnectedCallback()
Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+firstUpdated"></a>

### mdIconButtonComponent.firstUpdated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui untuk pertama kalinya.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | Properti yang telah berubah. |

<a name="MDIconButtonComponent+updated"></a>

### mdIconButtonComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | Properti yang telah berubah. |

<a name="MDIconButtonComponent.properties"></a>

### MDIconButtonComponent.properties
Properti untuk MDIconButtonComponent.

**Kind**: static property of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| toggle | <code>boolean</code> | Menunjukkan apakah tombol berperilaku sebagai toggle. |
| activated | <code>boolean</code> | Menunjukkan apakah tombol diaktifkan. |
| appearance | <code>string</code> | Penampilan tombol. Nilai yang mungkin: "filled", "tonal", "outlined". |

<a name="MDRadioButtonComponent"></a>

## MDRadioButtonComponent
Komponen radio-button kustom yang memperluas MDComponent.

**Kind**: global class  
**Emits**: <code>MDRadioButtonComponent#event:onRadioButtonNativeInput - Menunjukkan acara input radio-button asli.</code>  

* [MDRadioButtonComponent](#MDRadioButtonComponent)
    * [new MDRadioButtonComponent()](#new_MDRadioButtonComponent_new)
    * _instance_
        * [.native](#MDRadioButtonComponent+native) ⇒ <code>HTMLInputElement</code>
        * [.track](#MDRadioButtonComponent+track) ⇒ <code>HTMLElement</code>
        * [.thumb](#MDRadioButtonComponent+thumb) ⇒ <code>HTMLElement</code>
        * [.render()](#MDRadioButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDRadioButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDRadioButtonComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDRadioButtonComponent+firstUpdated)
        * [.updated(changedProperties)](#MDRadioButtonComponent+updated)
        * [.handleRadioButtonNativeInput(event)](#MDRadioButtonComponent+handleRadioButtonNativeInput)
    * _static_
        * [.properties](#MDRadioButtonComponent.properties)

<a name="new_MDRadioButtonComponent_new"></a>

### new MDRadioButtonComponent()
Konstruktor untuk MDRadioButtonComponent.

<a name="MDRadioButtonComponent+native"></a>

### mdRadioButtonComponent.native ⇒ <code>HTMLInputElement</code>
Mengambil elemen radio-button asli.

**Kind**: instance property of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>HTMLInputElement</code> - Elemen radio-button asli.  
<a name="MDRadioButtonComponent+track"></a>

### mdRadioButtonComponent.track ⇒ <code>HTMLElement</code>
Mengambil elemen track dari radio-button.

**Kind**: instance property of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>HTMLElement</code> - Elemen track dari radio-button.  
<a name="MDRadioButtonComponent+thumb"></a>

### mdRadioButtonComponent.thumb ⇒ <code>HTMLElement</code>
Mengambil elemen thumb dari radio-button.

**Kind**: instance property of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>HTMLElement</code> - Elemen thumb dari radio-button.  
<a name="MDRadioButtonComponent+render"></a>

### mdRadioButtonComponent.render() ⇒ <code>TemplateResult</code>
Merender MDRadioButtonComponent.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDRadioButtonComponent+connectedCallback"></a>

### mdRadioButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen radio-button.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Sebuah Promise yang diselesaikan ketika inisialisasi selesai.  
<a name="MDRadioButtonComponent+disconnectedCallback"></a>

### mdRadioButtonComponent.disconnectedCallback()
Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
<a name="MDRadioButtonComponent+firstUpdated"></a>

### mdRadioButtonComponent.firstUpdated(changedProperties)
Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.Menginisialisasi efek ripple untuk radio-button.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDRadioButtonComponent+updated"></a>

### mdRadioButtonComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDRadioButtonComponent+handleRadioButtonNativeInput"></a>

### mdRadioButtonComponent.handleRadioButtonNativeInput(event)
Menangani acara input radio-button asli.Memancarkan suatu acara ketika input radio-button asli terjadi.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Acara input. |

<a name="MDRadioButtonComponent.properties"></a>

### MDRadioButtonComponent.properties
Properti untuk MDRadioButtonComponent.

**Kind**: static property of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nama dari radio-button. |
| checked | <code>boolean</code> | Mengindikasikan apakah radio-button diceklis atau tidak. |
| indeterminate | <code>boolean</code> | Menunjukkan jika radio-button dalam keadaan indeterminate. |

<a name="MDSegmentedButtonComponent"></a>

## MDSegmentedButtonComponent
Komponen tombol segmen kustom yang memperluas MDComponent.

**Kind**: global class  
**Emits**: <code>MDSegmentedButtonComponent#event:onButtonClick - Menunjukkan bahwa tombol dalam komponen segmen telah diklik.</code>  

* [MDSegmentedButtonComponent](#MDSegmentedButtonComponent)
    * [new MDSegmentedButtonComponent()](#new_MDSegmentedButtonComponent_new)
    * _instance_
        * [.render()](#MDSegmentedButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDSegmentedButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDSegmentedButtonComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDSegmentedButtonComponent+firstUpdated)
        * [.updated(changedProperties)](#MDSegmentedButtonComponent+updated)
        * [.handleButtonClick(event)](#MDSegmentedButtonComponent+handleButtonClick)
    * _static_
        * [.properties](#MDSegmentedButtonComponent.properties)

<a name="new_MDSegmentedButtonComponent_new"></a>

### new MDSegmentedButtonComponent()
Konstruktor untuk MDSegmentedButtonComponent.

<a name="MDSegmentedButtonComponent+render"></a>

### mdSegmentedButtonComponent.render() ⇒ <code>TemplateResult</code>
Merender MDSegmentedButtonComponent.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDSegmentedButtonComponent+connectedCallback"></a>

### mdSegmentedButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen tombol segmen.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Sebuah Promise yang diselesaikan ketika inisialisasi selesai.  
<a name="MDSegmentedButtonComponent+disconnectedCallback"></a>

### mdSegmentedButtonComponent.disconnectedCallback()
Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+firstUpdated"></a>

### mdSegmentedButtonComponent.firstUpdated(changedProperties)
Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDSegmentedButtonComponent+updated"></a>

### mdSegmentedButtonComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDSegmentedButtonComponent+handleButtonClick"></a>

### mdSegmentedButtonComponent.handleButtonClick(event)
Menangani acara klik pada tombol segmen.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Acara klik. |

<a name="MDSegmentedButtonComponent.properties"></a>

### MDSegmentedButtonComponent.properties
Properti untuk MDSegmentedButtonComponent.

**Kind**: static property of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>Array</code> | Array data yang digunakan untuk mengisi tombol segmen. |
| type | <code>string</code> | Jenis tombol segmen ("single-select" atau "multi-select"). |

<a name="MDSwitchComponent"></a>

## MDSwitchComponent
Komponen switch kustom yang memperluas MDComponent.

**Kind**: global class  
**Emits**: <code>MDSwitchComponent#event:onSwitchNativeInput - Menunjukkan acara input switch asli.</code>  

* [MDSwitchComponent](#MDSwitchComponent)
    * [new MDSwitchComponent()](#new_MDSwitchComponent_new)
    * _instance_
        * [.native](#MDSwitchComponent+native) ⇒ <code>HTMLInputElement</code>
        * [.track](#MDSwitchComponent+track) ⇒ <code>HTMLElement</code>
        * [.thumb](#MDSwitchComponent+thumb) ⇒ <code>HTMLElement</code>
        * [.render()](#MDSwitchComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDSwitchComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDSwitchComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDSwitchComponent+firstUpdated)
        * [.updated(changedProperties)](#MDSwitchComponent+updated)
        * [.handleSwitchNativeInput(event)](#MDSwitchComponent+handleSwitchNativeInput)
    * _static_
        * [.properties](#MDSwitchComponent.properties)

<a name="new_MDSwitchComponent_new"></a>

### new MDSwitchComponent()
Konstruktor untuk MDSwitchComponent.

<a name="MDSwitchComponent+native"></a>

### mdSwitchComponent.native ⇒ <code>HTMLInputElement</code>
Mendapatkan elemen switch asli.

**Kind**: instance property of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>HTMLInputElement</code> - Elemen switch asli.  
<a name="MDSwitchComponent+track"></a>

### mdSwitchComponent.track ⇒ <code>HTMLElement</code>
Mendapatkan elemen track dari switch.

**Kind**: instance property of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>HTMLElement</code> - Elemen track dari switch.  
<a name="MDSwitchComponent+thumb"></a>

### mdSwitchComponent.thumb ⇒ <code>HTMLElement</code>
Mendapatkan elemen thumb dari switch.

**Kind**: instance property of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>HTMLElement</code> - Elemen thumb dari switch.  
<a name="MDSwitchComponent+render"></a>

### mdSwitchComponent.render() ⇒ <code>TemplateResult</code>
Merender MDSwitchComponent.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>TemplateResult</code> - Hasil template yang dirender.  
<a name="MDSwitchComponent+connectedCallback"></a>

### mdSwitchComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Metode siklus hidup yang dipanggil saat elemen terpasang ke DOM.Menginisialisasi komponen switch.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - Sebuah Promise yang diselesaikan ketika inisialisasi selesai.  
<a name="MDSwitchComponent+disconnectedCallback"></a>

### mdSwitchComponent.disconnectedCallback()
Metode siklus hidup yang dipanggil saat elemen dilepas dari DOM.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
<a name="MDSwitchComponent+firstUpdated"></a>

### mdSwitchComponent.firstUpdated(changedProperties)
Metode siklus hidup yang dipanggil saat pembaruan pertama elemen terjadi.Menginisialisasi efek riak untuk switch.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDSwitchComponent+updated"></a>

### mdSwitchComponent.updated(changedProperties)
Metode siklus hidup yang dipanggil saat properti elemen telah diperbarui.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map.&lt;string, unknown&gt;</code> | Properti yang telah berubah. |

<a name="MDSwitchComponent+handleSwitchNativeInput"></a>

### mdSwitchComponent.handleSwitchNativeInput(event)
Menangani acara input switch asli.Memancarkan sebuah acara saat input switch asli terjadi.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Acara input. |

<a name="MDSwitchComponent.properties"></a>

### MDSwitchComponent.properties
Properti untuk MDSwitchComponent.

**Kind**: static property of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Nama dari switch. |
| checked | <code>boolean</code> | Mewakili apakah switch dicentang atau tidak. |
| indeterminate | <code>boolean</code> | Menunjukkan apakah switch berada dalam keadaan tidak pasti. |
| icons | <code>Array</code> | Array ikon untuk switch. |

<a name="notNull"></a>

## notNull(value) ⇒ <code>boolean</code>
Memeriksa apakah nilai yang diberikan tidak undefined atau null.

**Kind**: global function  
**Returns**: <code>boolean</code> - Mengembalikan true jika nilai tidak undefined atau null, jika tidak false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Nilai yang akan diperiksa. |

<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>boolean</code>
Memeriksa apakah nilai yang diberikan tidak kosong.

**Kind**: global function  
**Returns**: <code>boolean</code> - Mengembalikan true jika nilai tidak null, undefined, atau string kosong, jika tidak false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Nilai yang akan diperiksa. |

<a name="parseNumber"></a>

## parseNumber(value) ⇒ <code>number</code>
Mencoba untuk mengonversi nilai menjadi integer.

**Kind**: global function  
**Returns**: <code>number</code> - Mengembalikan integer yang di-parse jika berhasil, jika tidak null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Nilai yang akan di-parse. |

<a name="toPascalCase"></a>

## toPascalCase(string) ⇒ <code>string</code>
Mengonversi string menjadi PascalCase.

**Kind**: global function  
**Returns**: <code>string</code> - Mengembalikan string yang dikonversi menjadi PascalCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String yang akan dikonversi. |

<a name="toCamelCase"></a>

## toCamelCase(string) ⇒ <code>string</code>
Mengonversi string menjadi camelCase.

**Kind**: global function  
**Returns**: <code>string</code> - Mengembalikan string yang dikonversi menjadi camelCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String yang akan dikonversi. |

<a name="toSnakeCase"></a>

## toSnakeCase(string) ⇒ <code>string</code>
Mengonversi string menjadi snake_case.

**Kind**: global function  
**Returns**: <code>string</code> - Mengembalikan string yang dikonversi menjadi snake_case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String yang akan dikonversi. |

<a name="toKebabCase"></a>

## toKebabCase(string) ⇒ <code>string</code>
Mengonversi string menjadi kebab-case.

**Kind**: global function  
**Returns**: <code>string</code> - Mengembalikan string yang dikonversi menjadi kebab-case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String yang akan dikonversi. |

<a name="toTitleCase"></a>

## toTitleCase(string) ⇒ <code>string</code>
Mengonversi string menjadi Title Case.

**Kind**: global function  
**Returns**: <code>string</code> - Mengembalikan string yang dikonversi menjadi Title Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String yang akan dikonversi. |

<a name="Route"></a>

## Route : <code>Object</code>
Representasi objek konfigurasi suatu rute.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path untuk rute tersebut. |
| component | <code>HTMLElement</code> | Komponen yang terkait dengan rute tersebut. |
| load | <code>function</code> | Fungsi untuk memuat rute tersebut. |
| [beforeLoad] | <code>function</code> | Fungsi yang dieksekusi sebelum memuat rute tersebut. |
| [children] | [<code>Array.&lt;Route&gt;</code>](#Route) | Array dari rute anak. |

<a name="Scroll"></a>

## Scroll : <code>Object</code>
Mewakili detail dari peristiwa gulir.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scrollbarHeight | <code>number</code> | Total tinggi dari konten yang dapat digulir. |
| start | <code>number</code> | Indeks dari node yang pertama terlihat di dalam viewport. |
| limit | <code>number</code> | Jumlah node yang terlihat di dalam viewport. |
| translateY | <code>number</code> | Perpindahan dari node yang pertama terlihat dari bagian atas viewport. |

