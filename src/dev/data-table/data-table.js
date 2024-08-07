import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { toTitleCase } from "../../material/functions/functions.js";

class DevDataTable extends MDComponent {
    constructor() {
        super();

        const columns = ["name", "description", "logoid", "update_mode", "type", "typespecs", "close", "pricescale", "minmov", "fractional", "minmove2", "currency", "change", "volume", "relative_volume_10d_calc", "market_cap_basic", "fundamental_currency_code", "price_earnings_ttm", "earnings_per_share_diluted_ttm", "earnings_per_share_diluted_yoy_growth_ttm", "dividends_yield_current", "sector.tr", "market", "sector", "recommendation_mark", "exchange"];

        const rows = [
            {
                s: "NASDAQ:AAPL",
                d: ["AAPL", "Apple Inc.", "apple", "delayed_streaming_900", "stock", ["common"], 224.3, 100, 1, "false", 0, "USD", 0.05352841466678764, 36260807, 0.6281172439380349, 3439434487238.632, "USD", 34.87901971760901, 6.4308, 9.261430246189912, 0.432688, "Electronic technology", "america", "Electronic Technology", 1.468085, "NASDAQ"],
            },
            {
                s: "NASDAQ:MSFT",
                d: ["MSFT", "Microsoft Corporation", "microsoft", "delayed_streaming_900", "stock", ["common"], 436.53, 100, 1, "false", 0, "USD", -0.8719940050412225, 15704171, 0.8823737420165614, 3244424568708.452, "USD", 37.82362319342876, 11.5412, 25.105146771885718, 0.66535, "Technology services", "america", "Technology Services", 1.116667, "NASDAQ"],
            },
            {
                s: "NASDAQ:NVDA",
                d: ["NVDA", "NVIDIA Corporation", "nvidia", "delayed_streaming_900", "stock", ["common"], 118.025, 100, 1, "false", 0, "USD", -2.5311751589726628, 175515702, 0.6383678016621191, 2903414912192.285, "USD", 69.04065516232816, 1.7095, 788.5135135135135, 0.0181683, "Electronic technology", "america", "Electronic Technology", 1.174603, "NASDAQ"],
            },
            {
                s: "NASDAQ:GOOG",
                d: ["GOOG", "Alphabet Inc.", "alphabet", "delayed_streaming_900", "stock", ["common"], 179.161, 100, 1, "false", 0, "USD", -0.03292043298738841, 10348562, 0.7403484777264525, 2203761326630.898, "USD", 27.477416683281444, 6.5203, 44.998665717843785, 0.111595, "Technology services", "america", "Technology Services", 1.322581, "NASDAQ"],
            },
            {
                s: "NASDAQ:GOOGL",
                d: ["GOOGL", "Alphabet Inc.", "alphabet", "delayed_streaming_900", "stock", ["common"], 177.43, 100, 1, "false", 0, "USD", -0.1463222466092582, 13715593, 0.6775290970111189, 2201261398331.381, "USD", 27.211938101007625, 6.5203, 44.998665717843785, 0.112556, "Technology services", "america", "Technology Services", 1.31746, "NASDAQ"],
            },
            {
                s: "NASDAQ:AMZN",
                d: ["AMZN", "Amazon.com, Inc.", "amazon", "delayed_streaming_900", "stock", ["common"], 182.65, 100, 1, "false", 0, "USD", -0.5986394557823098, 34609513, 0.8891902106852663, 1900770412988.5608, "USD", 51.29753412346234, 3.5606, 763.8039786511401, 0, "Retail trade", "america", "Retail Trade", 1.113636, "NASDAQ"],
            },
            {
                s: "NASDAQ:META",
                d: ["META", "Meta Platforms, Inc.", "meta-platforms", "delayed_streaming_900", "stock", ["common"], 476.805, 100, 1, "false", 0, "USD", 0.20069349584952906, 12158963, 0.7316284727441721, 1209432227183.015, "USD", 27.38826246043736, 17.4091, 115.94824912859569, 0.21015, "Technology services", "america", "Technology Services", 1.246269, "NASDAQ"],
            },
            {
                s: "NYSE:BRK.A",
                d: ["BRK.A", "Berkshire Hathaway Inc.", "berkshire-hathaway", "delayed_streaming_900", "stock", ["common"], 652840, 100, 1, "false", 0, "USD", -1.5056878187139795, 1790, 0.8423234559758799, 937920133119.2494, "USD", 12.846486369091636, 50818.5648, 876.6639112896598, 0, "Finance", "america", "Finance", 1.5, "NYSE"],
            },
            {
                s: "NYSE:BRK.B",
                d: ["BRK.B", "Berkshire Hathaway Inc. New", "berkshire-hathaway", "delayed_streaming_900", "stock", ["common"], 434.76, 100, 1, "false", 0, "USD", -1.5979358109637414, 2663400, 0.6236488515567513, 937041694077.9004, "USD", 12.832728238731958, 33.879, 876.6778136531365, 0, "Finance", "america", "Finance", 1.5, "NYSE"],
            },
            {
                s: "NYSE:LLY",
                d: ["LLY", "Eli Lilly and Company", "eli-lilly", "delayed_streaming_900", "stock", ["common"], 856.21, 100, 1, "false", 0, "USD", 0.861114383319597, 2843691, 0.8930467250484556, 813746627090.9701, "USD", 128.22505765717196, 6.6774, 7.886190683922241, 0.572506, "Health technology", "america", "Health Technology", 1.339286, "NYSE"],
            },
            {
                s: "NYSE:TSM",
                d: ["TSM", "Taiwan Semiconductor Manufacturing Company Ltd.", "taiwan-semiconductor", "delayed_streaming_900", "dr", [""], 165.815, 100, 1, "false", 0, "USD", -3.523011578518652, 16199668, 0.6630664015465483, 798084279097.6503, "USD", 29.669159748067564, 5.5888, -7.690274841437636, 0.938531, "Electronic technology", "america", "Electronic Technology", 1.195122, "NYSE"],
            },
            {
                s: "NASDAQ:TSLA",
                d: ["TSLA", "Tesla, Inc.", "tesla", "delayed_streaming_900", "stock", ["common"], 239.93, 100, 1, "false", 0, "USD", -3.7314929984351735, 78086651, 0.528206836166398, 765183852517.1738, "USD", 61.31299192476746, 3.9132, 15.138141053932387, 0, "Consumer durables", "america", "Consumer Durables", 1.763636, "NASDAQ"],
            },
            {
                s: "NASDAQ:AVGO",
                d: ["AVGO", "Broadcom Inc.", "broadcom", "delayed_streaming_900", "stock", ["common"], 158.47, 100, 1, "false", 0, "USD", -1.2770994268627034, 18063392, 0.489852985978308, 737659376308.414, "USD", 68.17673378076063, 2.3244, -26.540673788003293, 1.26775, "Electronic technology", "america", "Electronic Technology", 1.26087, "NASDAQ"],
            },
            {
                s: "NYSE:JPM/PL",
                d: ["JPM/PL", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of 4.625% Non-Cumulative Preferred Stock, Series LL", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 21.55, 100, 1, "false", 0, "USD", 0.23255813953488702, 31812, 0.3880586455030844, 602992827809, "USD", 1.202003525133308, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM/PM",
                d: ["JPM/PM", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of 4.20% Non-Cumulative Preferred Stock, Series MM", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 19.856, 100, 1, "false", 0, "USD", -0.0704579768495186, 99504, 0.7605769451260062, 602992827809, "USD", 1.1075165658954509, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM/PD",
                d: ["JPM/PD", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of 5.75% Non-Cumulative Preferred Stock, Series DD", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 25.0309, 100, 1, "false", 0, "USD", 0.12359999999999616, 39088, 0.4761400110849215, 602992827809, "USD", 1.3961591664621493, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM/PJ",
                d: ["JPM/PJ", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of JPMorgan Chase & Co. 4.75% Non-Cumulative Preferred Stock, Series GG", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 21.91, 100, 1, "false", 0, "USD", -0.09119927040583481, 57447, 1.0950754297609198, 602992827809, "USD", 1.2220833984069968, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM/PK",
                d: ["JPM/PK", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of 4.55% Non-Cumulative Preferred Stock, Series JJ", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 21.29, 100, 1, "false", 0, "USD", 0, 47663, 0.4342070981013062, 602992827809, "USD", 1.187501394435644, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM/PC",
                d: ["JPM/PC", "J P Morgan Chase & Co Depositary Shares, each representing a 1/400th interest in a share of 6.00% Non-Cumulative Preferred Stock, Series EE", "jpmorgan-chase", "delayed_streaming_900", "stock", ["preferred"], 25.27, 100, 1, "false", 0, "USD", -0.019782393669630093, 42122, 0.554630921970874, 602992827809, "USD", 1.4094955489614243, 17.9284, null, 2.024, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:JPM",
                d: ["JPM", "JP Morgan Chase & Co.", "jpmorgan-chase", "delayed_streaming_900", "stock", ["common"], 209.69, 100, 1, "false", 0, "USD", -0.1381083912753558, 5616502, 0.527061202467676, 602160044115.0072, "USD", 11.695968407666049, 17.9284, null, 2.024, "Finance", "america", "Finance", 1.407407, "NYSE"],
            },
            {
                s: "OTC:NONOF",
                d: ["NONOF", "Novo-Nordisk A/S", "novo-nordisk", "delayed_streaming_900", "stock", ["common"], 133.1, 100, 1, "false", 0, "USD", -1.8436578171091444, 960, 0.050020320755306845, 590215303141.4344, "USD", 46.32580922835458, 2.87312844, 46.61558487572871, 1.05975, "Health technology", "america", "Health Technology", 1.439394, "OTC"],
            },
            {
                s: "NYSE:NVO",
                d: ["NVO", "Novo Nordisk A/S", "novo-nordisk", "delayed_streaming_900", "dr", [""], 131.83, 100, 1, "false", 0, "USD", 1.4154934994999642, 2958522, 0.7037928741911735, 573080434975.628, "USD", 45.522980765910425, 2.8959, 52.96323684766534, 0.750657, "Health technology", "america", "Health Technology", 1.453125, "NYSE"],
            },
            {
                s: "NYSE:WMT",
                d: ["WMT", "Walmart Inc.", "walmart", "delayed_streaming_900", "stock", ["common"], 70.815, 100, 1, "false", 0, "USD", -0.007060152499287564, 7263314, 0.5753411566948154, 569603527454.8883, "USD", 30.25247778537252, 2.3408, 69.24300484419061, 1.12256, "Retail trade", "america", "Retail Trade", 1.24359, "NYSE"],
            },
            {
                s: "NYSE:V",
                d: ["V", "Visa Inc.", "visa", "delayed_streaming_900", "stock", ["common"], 265.245, 100, 1, "false", 0, "USD", -1.4508638305777346, 4309934, 0.5852756805417558, 530754482911.6461, "USD", 30.121282322079516, 8.8059, 19.920741920987044, 0.746795, "Commercial services", "america", "Commercial Services", 1.309524, "NYSE"],
            },
            {
                s: "NYSE:UNH",
                d: ["UNH", "UnitedHealth Group Incorporated", "unitedhealth", "delayed_streaming_900", "stock", ["common"], 567.26, 100, 1, "false", 0, "USD", 0.517418577453301, 2751050, 0.5126876328553858, 522097660107.6301, "USD", 37.59302826468737, 15.0895, -32.49029152275453, 1.37151, "Health services", "america", "Health Services", 1.183333, "NYSE"],
            },
            {
                s: "NYSE:XOM",
                d: ["XOM", "Exxon Mobil Corporation", "exxon", "delayed_streaming_900", "stock", ["common"], 116, 100, 1, "false", 0, "USD", -2.3569023569023546, 10066498, 0.800406057567117, 520367630555.0842, "USD", 14.23277956369169, 8.1502, -44.86476979069421, 3.16498, "Energy minerals", "america", "Energy Minerals", 1.516667, "NYSE"],
            },
            {
                s: "OTC:TCTZF",
                d: ["TCTZF", "Tencent Holding Ltd.", "tencent", "delayed_streaming_900", "stock", ["common"], 48.43, 100, 1, "false", 0, "USD", 3.927038626609438, 36912, 0.9033486452951814, 449049927200.6654, "USD", 25.48998516088645, 1.899961875, -32.375355678508875, 0.92091, "Technology services", "america", "Technology Services", 1.112069, "OTC"],
            },
            {
                s: "OTC:TCEHY",
                d: ["TCEHY", "Tencent Holding Ltd.", "tencent", "delayed_streaming_900", "dr", [""], 46.67, 100, 1, "false", 0, "USD", 0.08578168561012041, 1543186, 0.6257108341483893, 438213498492.8638, "USD", 24.551528223473092, 1.9009, -32.515620562340246, 0.81235, "Technology services", "america", "Technology Services", 1.114035, "OTC"],
            },
            {
                s: "NYSE:MA",
                d: ["MA", "Mastercard Incorporated", "mastercard", "delayed_streaming_900", "stock", ["common"], 445.18, 100, 1, "false", 0, "USD", -0.7889106792654708, 1269704, 0.4549151715039507, 413846158054.5014, "USD", 35.38285459950087, 12.5818, 25.650884323849283, 0.548226, "Commercial services", "america", "Commercial Services", 1.205128, "NYSE"],
            },
            {
                s: "NYSE:PG",
                d: ["PG", "Procter & Gamble Company (The)", "procter-and-gamble", "delayed_streaming_900", "stock", ["common"], 167.67, 100, 1, "false", 0, "USD", -0.4571360721918845, 4366097, 0.7574613665118329, 395723883758.1518, "USD", 27.414528866434487, 6.1161, 6.524427414438735, 2.27298, "Consumer non-durables", "america", "Consumer Non-Durables", 1.410714, "NYSE"],
            },
            {
                s: "NYSE:ORCL",
                d: ["ORCL", "Oracle Corporation", "oracle", "delayed_streaming_900", "stock", ["common"], 138.5, 100, 1, "false", 0, "USD", 0.34050568716945506, 4128990, 0.5272522995196169, 381686621502.03217, "USD", 37.36678807500337, 3.7065, 20.827356891380884, 1.15917, "Technology services", "america", "Technology Services", 1.515152, "NYSE"],
            },
            {
                s: "OTC:LVMUY",
                d: ["LVMUY", "LVMH-Moet Hennessy Louis Vuitton", "lvmh", "delayed_streaming_900", "dr", [""], 148.055, 100, 1, "false", 0, "USD", -1.591890993685598, 292974, 1.2730461352885811, 375506038029.8428, "USD", 22.57761986092473, 6.5576, 16.3169377583057, 1.42913, "Consumer non-durables", "america", "Consumer Non-Durables", 1.37037, "OTC"],
            },
            {
                s: "NYSE:JNJ",
                d: ["JNJ", "Johnson & Johnson", "johnson-and-johnson", "delayed_streaming_900", "stock", ["common"], 154.62, 100, 1, "false", 0, "USD", -0.51473426843391, 4655950, 0.6560335302112603, 372120733399.30725, "USD", 22.349421100559386, 6.9183, 40.148691354023185, 3.09484, "Health technology", "america", "Health Technology", 1.565217, "NYSE"],
            },
            {
                s: "NASDAQ:COST",
                d: ["COST", "Costco Wholesale Corporation", "costco-wholesale", "delayed_streaming_900", "stock", ["common"], 836.24, 100, 1, "false", 0, "USD", -0.3728987216602923, 1357858, 0.553574920808697, 370734476617.2995, "USD", 51.83220112064263, 16.1336, 19.528512265052576, 0.502758, "Retail trade", "america", "Retail Trade", 1.459459, "NASDAQ"],
            },
            {
                s: "OTC:LVMHF",
                d: ["LVMHF", "LVMH-Moet Hennessy Louis Vuitton", "lvmh", "delayed_streaming_900", "stock", ["common"], 740.8, 100, 1, "false", 0, "USD", -2.0131742546493516, 1473, 0.25641025641025644, 369784890726.83997, "USD", 22.129364439070187, 33.47588233, 23.301252278203783, 1.88324, "Consumer non-durables", "america", "Consumer Non-Durables", 1.357143, "OTC"],
            },
            {
                s: "NYSE:HD",
                d: ["HD", "Home Depot, Inc. (The)", "home-depot", "delayed_streaming_900", "stock", ["common"], 362.92, 100, 1, "false", 0, "USD", -0.8631993006992921, 1319309, 0.39812081497698987, 359876611094.1207, "USD", 24.34756940251446, 14.9058, -9.189050876989917, 2.32736, "Retail trade", "america", "Retail Trade", 1.539474, "NYSE"],
            },
            {
                s: "NASDAQ:ASML",
                d: ["ASML", "ASML Holding N.V. - New York Registry Shares", "asml", "delayed_streaming_900", "dr", [""], 899.34, 100, 1, "false", 0, "USD", -2.684629118649564, 1535627, 0.97779185675945, 359494512337.45166, "USD", 48.57253961567128, 18.5154, -5.9482688556566945, 0.602574, "Electronic technology", "america", "Electronic Technology", 1.3375, "NASDAQ"],
            },
            {
                s: "OTC:ASMLF",
                d: ["ASMLF", "ASML Holding N.V.", "asml", "delayed_streaming_900", "stock", ["common"], 908, 100, 1, "false", 0, "USD", -2.1551724137931036, 417, 0.02800857048823573, 357226923950.6786, "USD", 49.491246015657644, 18.34667892, -10.380600833267259, 0.72749, "Electronic technology", "america", "Electronic Technology", 1.329268, "OTC"],
            },
            {
                s: "NYSE:BAC",
                d: ["BAC", "Bank of America Corporation", "bank-of-america", "delayed_streaming_900", "stock", ["common"], 43.065, 100, 1, "false", 0, "USD", 0.17445917655267673, 30086781, 0.7469104890339116, 336784246981.5153, "USD", 15.12644889357218, 2.847, null, 2.23204, "Finance", "america", "Finance", 1.54, "NYSE"],
            },
            {
                s: "NYSE:BML/PJ",
                d: ["BML/PJ", "Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Pref", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 22.87, 100, 1, "false", 0, "USD", 0.4833040421792593, 7608, 0.3926243594308805, 336354126615, "USD", 8.033017211099404, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "OTC:BACRP",
                d: ["BACRP", "Bank of America Corp.", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 180, 100, 1, "false", 0, "USD", 1.1235955056179776, 3, 0.0759493670886076, 336354126615, "USD", 63.224446786090624, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "OTC"],
            },
            {
                s: "NYSE:MER/PK",
                d: ["MER/PK", "Bank of America Corporation Income Capital Obligation Notes initially due December 15, 2066", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 25.55, 100, 1, "false", 0, "USD", -0.07821666014860999, 9043, 0.2844981092185819, 336354126615, "USD", 8.974358974358974, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BML/PH",
                d: ["BML/PH", "Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Pref", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 22.45, 100, 1, "false", 0, "USD", -0.9970850366685735, 22743, 0.6029123665562975, 336354126615, "USD", 7.885493501931858, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PQ",
                d: ["BAC/PQ", "Bank of America Corporation Depositary shares, each representing 1/1,000th interest in a share of 4.250% Non-Cumulative Preferred Stock, Series QQ", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 19.05, 100, 1, "false", 0, "USD", -0.10487676979548807, 34951, 0.38431595915701416, 336354126615, "USD", 6.691253951527925, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PB",
                d: ["BAC/PB", "Bank of America Corporation Depositary Shares, each representing a 1/1,000th interest in a share of 6.000% Non-Cumulative Preferred Stock, Series GG", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 25.18, 100, 1, "false", 0, "USD", -0.1190003966679934, 15180, 0.3037616011718234, 336354126615, "USD", 8.844397611520899, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PO",
                d: ["BAC/PO", "Bank of America Corporation Depositary shares, each representing 1/1,000th interest in a share of 4.375% Non-Cumulative Preferred Stock, Series NN", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 19.73, 100, 1, "false", 0, "USD", 0.30503304524656183, 24231, 0.7224680374010114, 336354126615, "USD", 6.930101861608711, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PK",
                d: ["BAC/PK", "Bank of America Corporation Depositary Shares, each representing a 1/1,000th interest in a share of 5.875% Non- Cumulative Preferred Stock, Series HH", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 24.96, 100, 1, "false", 0, "USD", 0, 21775, 0.5095522024823558, 336354126615, "USD", 8.767123287671232, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PE",
                d: ["BAC/PE", "Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 23.56, 100, 1, "false", 0, "USD", 0.4262574595055323, 5004, 0.30592032866260727, 336354126615, "USD", 8.275377590446084, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PS",
                d: ["BAC/PS", "Bank of America Corporation Depositary shares, each representing 1/1,000th interest in a share of 4.750% Non-Cumulative Preferred Stock, Series SS", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 21.215, 100, 1, "false", 0, "USD", -0.16470588235294187, 12310, 0.22032305696004295, 336354126615, "USD", 7.451703547593959, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PL",
                d: ["BAC/PL", "Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 1215.01, 100, 1, "false", 0, "USD", 0.0008230452674889634, 1712, 0.41122213681783243, 336354126615, "USD", 426.7685282753776, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PP",
                d: ["BAC/PP", "Bank of America Corporation Depositary Shares, each representing a 1/1,000th interest in a share of 4.125% Non-Cumulative Preferred Stock, Series PP", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 18.46, 100, 1, "false", 0, "USD", 0.05420054200542853, 18793, 0.5107168188970386, 336354126615, "USD", 6.484018264840183, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PM",
                d: ["BAC/PM", "Bank of America Corporation Depositary Shares, each representing a 1/1,000th interest in a share of 5.375% Non-Cumulative Preferred Stock, Series KK", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 23.53, 100, 1, "false", 0, "USD", 0.2556455048998819, 36791, 0.5850260304860402, 336354126615, "USD", 8.264840182648403, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BML/PL",
                d: ["BML/PL", "Bank of America Corporation Depositary Shares (Each representing a 1/1200th Interest in a Share of Floating Rate Non-Cumulative Pref", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 22.41, 100, 1, "false", 0, "USD", -0.5679297186973118, 9692, 0.5240816944515041, 336354126615, "USD", 7.871443624868283, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BAC/PN",
                d: ["BAC/PN", "Bank of America Corporation Depositary shares, each representing 1/1,000th interest in a share of 5.000% Non-Cumulative Preferred Stock, Series LL", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 22.35, 100, 1, "false", 0, "USD", 0.17929179740028106, 27143, 0.49138986045635913, 336354126615, "USD", 7.850368809272919, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:BML/PG",
                d: ["BML/PG", "Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a share of Floating Rate Non-Cumulative Preferred Stock , Series 1)", "bank-of-america", "delayed_streaming_900", "stock", ["preferred"], 22.5299, 100, 1, "false", 0, "USD", -0.8367077464788623, 8813, 1.48229753595156, 336354126615, "USD", 7.913558131366351, 2.847, null, 2.23204, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:MRK",
                d: ["MRK", "Merck & Company, Inc.", "merck-and-co", "delayed_streaming_900", "stock", ["common"], 125.67, 100, 1, "false", 0, "USD", 1.1428571428571443, 4360645, 0.6249575958766008, 318297749165.3314, "USD", 139.89758432594903, 0.8983, -82.45644871494416, 2.44668, "Health technology", "america", "Health Technology", 1.25, "NYSE"],
            },
            {
                s: "NYSE:ABBV",
                d: ["ABBV", "AbbVie Inc.", "abbvie", "delayed_streaming_900", "stock", ["common"], 171.82, 100, 1, "false", 0, "USD", 0.39733551478322243, 2311625, 0.5185305716742212, 303411403945.2585, "USD", 51.15822068719109, 3.3586, -20.912708691454533, 3.54096, "Health technology", "america", "Health Technology", 1.396552, "NYSE"],
            },
            {
                s: "NYSE:CVX",
                d: ["CVX", "Chevron Corporation", "chevron", "delayed_streaming_900", "stock", ["common"], 159.07, 100, 1, "false", 0, "USD", -1.790455022535041, 3979778, 0.630483872035812, 293160614081.80914, "USD", 14.640184808518862, 10.8653, -41.25404154546536, 3.87726, "Energy minerals", "america", "Energy Minerals", 1.423077, "NYSE"],
            },
            {
                s: "OTC:IDCBF",
                d: ["IDCBF", "Industrial and Commercial Bank of China Ltd.", "industrial-and-commercial-bank-of-china", "delayed_streaming_900", "stock", ["common"], 0.59, 10000, 1, "false", 0, "USD", 5.357142857142842, 700, 0.06982822257247172, 283250137726.7821, "USD", 4.175386767314718, 0.141304275, null, 7.55128, "Finance", "america", "Finance", 1.3125, "OTC"],
            },
            {
                s: "NYSE:KO",
                d: ["KO", "Coca-Cola Company (The)", "coca-cola", "delayed_streaming_900", "stock", ["common"], 65.08, 100, 1, "false", 0, "USD", -0.16873753643196723, 9079622, 0.840191286948013, 280361758760.9493, "USD", 26.148097553135923, 2.4889, 9.648002114630614, 2.89922, "Consumer non-durables", "america", "Consumer Non-Durables", 1.357143, "NYSE"],
            },
            {
                s: "OTC:NSRGY",
                d: ["NSRGY", "Nestle S.A.", "nestle", "delayed_streaming_900", "dr", [""], 104.99, 100, 1, "false", 0, "USD", -0.7937257866389525, 884114, 2.5188210588453495, 272827067136.81424, "USD", 22.301287225455628, 4.7078, -28.812072824048872, 2.07423, "Consumer non-durables", "america", "Consumer Non-Durables", 1.642857, "OTC"],
            },
            {
                s: "NASDAQ:NFLX",
                d: ["NFLX", "Netflix, Inc.", "netflix", "delayed_streaming_900", "stock", ["common"], 631.72, 100, 1, "false", 0, "USD", -1.7603881562577657, 8456670, 2.3628156261047675, 272208867428.3255, "USD", 43.82896352674266, 14.4133, 54.76704356322948, 0, "Technology services", "america", "Technology Services", 1.481132, "NASDAQ"],
            },
            {
                s: "OTC:TOYOF",
                d: ["TOYOF", "Toyota Motor Corp.", "toyota", "delayed_streaming_900", "stock", ["common"], 20.12, 100, 1, "false", 0, "USD", 2.1579080985021615, 3253, 0.19888361059652856, 270995356523.4387, "USD", 8.322756617448297, 2.4174682649999997, 78.97644891959756, 2.38777, "Consumer durables", "america", "Consumer Durables", 1.5, "OTC"],
            },
            {
                s: "OTC:NSRGF",
                d: ["NSRGF", "Nestle S.A.", "nestle", "delayed_streaming_900", "stock", ["common"], 105.196, 100, 1, "false", 0, "USD", -0.6666540764102691, 2304, 0.2168409362559175, 270442190485.6612, "USD", 20.937614988474515, 5.024258974, -24.32293759719065, 3.18336, "Consumer non-durables", "america", "Consumer Non-Durables", 1.613636, "OTC"],
            },
            {
                s: "NYSE:TM",
                d: ["TM", "Toyota Motor Corporation", "toyota", "delayed_streaming_900", "dr", [""], 197.44, 100, 1, "false", 0, "USD", -1.2059044283212392, 171788, 0.7571879477935775, 268769921644.09982, "USD", 7.785304764082868, 25.3606, 91.05757205924454, 2.165, "Consumer durables", "america", "Consumer Durables", 1.52381, "NYSE"],
            },
            {
                s: "OTC:IDCBY",
                d: ["IDCBY", "Industrial and Commercial Bank of China Ltd.", "industrial-and-commercial-bank-of-china", "delayed_streaming_900", "dr", [""], 10.858, 100, 1, "false", 0, "USD", -1.3805631244323273, 20258, 0.322859292125663, 267946756895.87708, "USD", 3.8402772865530173, 2.8274, null, 6.32965, "Finance", "america", "Finance", null, "OTC"],
            },
            {
                s: "OTC:RHHBF",
                d: ["RHHBF", "Roche Holding Ltd", "roche", "delayed_streaming_900", "stock", ["common"], 345.92, 100, 1, "false", 0, "USD", 0.26666666666667127, 77, 0.49201277955271566, 257976574863.22702, "USD", 20.36516264959889, 16.985869740000002, -4.321042170283298, 3.1767, "Health technology", "america", "Health Technology", 1.934783, "OTC"],
            },
            {
                s: "OTC:RHHBY",
                d: ["RHHBY", "Roche Holding Ltd", "roche", "delayed_streaming_900", "dr", [""], 39.35, 100, 1, "false", 0, "USD", 0.025419420437208975, 2354180, 0.9894774970554367, 253790884054.52603, "USD", 19.849677158999196, 1.9824, -10.56169636814798, 2.15327, "Health technology", "america", "Health Technology", 1.934783, "OTC"],
            },
            {
                s: "OTC:RHHVF",
                d: ["RHHVF", "Roche Holding Ltd", "roche", "delayed_streaming_900", "stock", ["common"], 311.61, 100, 1, "false", 0, "USD", -0.8394643720882796, 5120, 1.2588512981904014, 252255831910.1746, "USD", 18.345248419407692, 16.985869740000002, -4.321042170283298, 3.44828, "Health technology", "america", "Health Technology", 1.895833, "OTC"],
            },
            {
                s: "NASDAQ:AMD",
                d: ["AMD", "Advanced Micro Devices, Inc.", "advanced-micro-devices", "delayed_streaming_900", "stock", ["common"], 151.7999, 100, 1, "false", 0, "USD", -2.5486935866983385, 38966078, 0.6548325809145698, 245356286430.81326, "USD", 221.7351738241309, 0.6846, 183.83084577114428, 0, "Electronic technology", "america", "Electronic Technology", 1.244898, "NASDAQ"],
            },
            {
                s: "NASDAQ:ADBE",
                d: ["ADBE", "Adobe Inc.", "adobe", "delayed_streaming_900", "stock", ["common"], 551.49, 100, 1, "false", 0, "USD", -0.9625572416270114, 1297030, 0.5522232752682074, 244530651912.9141, "USD", 49.52761562640323, 11.135, 6.270280587898454, 0, "Technology services", "america", "Technology Services", 1.377778, "NASDAQ"],
            },
            {
                s: "NASDAQ:AZN",
                d: ["AZN", "AstraZeneca PLC", "astrazeneca", "delayed_streaming_900", "dr", [""], 78.62, 100, 1, "false", 0, "USD", 0.7173968741993367, 1876338, 0.6288906226072064, 243309644355.64923, "USD", 38.74815179891573, 2.029, 34.44208852372117, 1.81911, "Health technology", "america", "Health Technology", 1.328571, "NASDAQ"],
            },
            {
                s: "NYSE:CRM",
                d: ["CRM", "Salesforce, Inc.", "salesforce", "delayed_streaming_900", "stock", ["common"], 247.59, 100, 1, "false", 0, "USD", 0.09702850212250216, 3189316, 0.5291142173403428, 239914715919.73825, "USD", 44.529774644340925, 5.5601, 1363.9547130068456, 0.161714, "Technology services", "america", "Technology Services", 1.292453, "NYSE"],
            },
            {
                s: "OTC:AZNCF",
                d: ["AZNCF", "AstraZeneca Plc", "astrazeneca", "delayed_streaming_900", "stock", ["common"], 154.3, 100, 1, "false", 0, "USD", -0.019633215253247533, 1157, 1.0164280066766231, 239206366860.37607, "USD", 37.91123223300728, 4.0700338899999995, 30.723575786129114, 1.87861, "Health technology", "america", "Health Technology", 1.319444, "OTC"],
            },
            {
                s: "OTC:PCCYF",
                d: ["PCCYF", "PetroChina Co., Ltd.", "petrochina", "delayed_streaming_900", "stock", ["common"], 0.92, 10000, 1, "false", 0, "USD", -6.122448979591831, 26834, 0.3756842650538312, 238604967672.8579, "USD", 7.922619431550333, 0.11612321, 11.142086214051389, 6.46032, "Energy minerals", "america", "Energy Minerals", 1.340909, "OTC"],
            },
            {
                s: "OTC:HESAY",
                d: ["HESAY", "Hermes International SA", "hermes", "delayed_streaming_900", "dr", [""], 224.245, 100, 1, "false", 0, "USD", -0.44617092119866614, 27947, 0.8958807501202116, 235713345483.56787, "USD", 50.44541425775539, 4.4453, 61.45939270666858, 0.853258, "Consumer non-durables", "america", "Consumer Non-Durables", 1.619048, "OTC"],
            },
            {
                s: "OTC:LRLCY",
                d: ["LRLCY", "L'Oreal Co.", "l-oreal", "delayed_streaming_900", "dr", [""], 88.0125, 100, 1, "false", 0, "USD", -0.5058783631019568, 76458, 0.5270646432810943, 235373900170.01056, "USD", 35.34922483733634, 2.4898, 28.102490224325983, 1.13981, "Consumer non-durables", "america", "Consumer Non-Durables", 1.75, "OTC"],
            },
            {
                s: "OTC:LRLCF",
                d: ["LRLCF", "L'Oreal Co.", "l-oreal", "delayed_streaming_900", "stock", ["common"], 439.55, 100, 1, "false", 0, "USD", 0.46397878954105637, 62, 0.11219688744118711, 233719961494.39267, "USD", 34.582984839311344, 12.710007595999999, 36.16433112774586, 1.62482, "Consumer non-durables", "america", "Consumer Non-Durables", 1.76, "OTC"],
            },
            {
                s: "OTC:HESAF",
                d: ["HESAF", "Hermes International SA", "hermes", "delayed_streaming_900", "stock", ["common"], 2230.8, 100, 1, "false", 0, "USD", -0.7796898142176525, 9, 0.09977827050997783, 233439029013.48685, "USD", 49.15338395676865, 45.384464312, 71.41454285586349, 1.20948, "Consumer non-durables", "america", "Consumer Non-Durables", 1.636364, "OTC"],
            },
            {
                s: "NASDAQ:PEP",
                d: ["PEP", "PepsiCo, Inc.", "pepsico", "delayed_streaming_900", "stock", ["common"], 169.105, 100, 1, "false", 0, "USD", -0.7425016141339524, 2684497, 0.42951658554268757, 232277951964.3624, "USD", 24.529656652983068, 6.8939, 20.869275545269666, 3.02283, "Consumer non-durables", "america", "Consumer Non-Durables", 1.645833, "NASDAQ"],
            },
            {
                s: "NYSE:SHEL",
                d: ["SHEL", "Shell PLC", "shell", "delayed_streaming_900", "dr", [""], 72.355, 100, 1, "false", 0, "USD", -1.221843003412964, 2727255, 1.020893455415833, 230302756874.12, "USD", 13.371340922531047, 5.4112, -55.09899264815705, 3.68601, "Energy minerals", "america", "Energy Minerals", 1.285714, "NYSE"],
            },
            {
                s: "NYSE:SAP",
                d: ["SAP", "SAP SE", "sap", "delayed_streaming_900", "dr", [""], 197.47, 100, 1, "false", 0, "USD", 0.12168534198651781, 496392, 0.8312778524015927, 229675736143.14337, "USD", 114.19071300526224, 1.7293, -3.49349852112283, 0.877454, "Technology services", "america", "Technology Services", 1.384615, "NYSE"],
            },
            {
                s: "OTC:SAPGF",
                d: ["SAPGF", "SAP SE", "sap", "delayed_streaming_900", "stock", ["common"], 195.4, 100, 1, "false", 0, "USD", 0.14863410383885603, 3127, 0.2499820128068815, 228054772307.36734, "USD", 113.21888414503955, 1.7258604999999998, -7.985592083156125, 1.2183, "Technology services", "america", "Technology Services", 1.413793, "OTC"],
            },
            {
                s: "OTC:RYDAF",
                d: ["RYDAF", "SHELL PLC", "shell", "delayed_streaming_900", "stock", ["common"], 36.15, 100, 1, "false", 0, "USD", 0.3553384043084785, 529, 0.1990367973511927, 226932149044.2759, "USD", 13.374211979128873, 2.70296299, -55.86598909925296, 2.80704, "Energy minerals", "america", "Energy Minerals", 1.310345, "OTC"],
            },
            {
                s: "OTC:ACGBY",
                d: ["ACGBY", "Agricultural Bank of China", "agricultural-bank-of-china", "delayed_streaming_900", "dr", [""], 10.766, 100, 1, "false", 0, "USD", -0.7924806487283477, 2689, 0.31966238706609607, 221075118951.6061, "USD", 4.286510590858417, 2.5116, null, 6.17974, "Finance", "america", "Finance", null, "OTC"],
            },
            {
                s: "OTC:NVSEF",
                d: ["NVSEF", "Novartis AG", "novartis", "delayed_streaming_900", "stock", ["common"], 110, 100, 1, "false", 0, "USD", 0.40343927417440356, 415, 0.01241418507605558, 217878785554.8428, "USD", 14.185902661476392, 7.75417699, 107.32188269073202, 3.4704, "Health technology", "america", "Health Technology", 1.741379, "OTC"],
            },
            {
                s: "NASDAQ:TMUS",
                d: ["TMUS", "T-Mobile US, Inc.", "t-mobile", "delayed_streaming_900", "stock", ["common"], 182.395, 100, 1, "false", 0, "USD", 0.05760052663339634, 1297526, 0.335783915902656, 213740347700.51324, "USD", 24.817334512551877, 7.3495, 138.15618924173688, 1.06972, "Communications", "america", "Communications", 1.233333, "NASDAQ"],
            },
            {
                s: "NASDAQ:LIN",
                d: ["LIN", "Linde plc", "linde", "delayed_streaming_900", "stock", ["common"], 443.245, 100, 1, "false", 0, "USD", -0.6266254147610115, 808829, 0.5532109605437524, 213075104284.73965, "USD", 34.38966862959601, 12.8889, 43.17977315899977, 1.19496, "Process industries", "america", "Process Industries", 1.403226, "NASDAQ"],
            },
            {
                s: "NYSE:NVS",
                d: ["NVS", "Novartis AG", "novartis", "delayed_streaming_900", "dr", [""], 106.28, 100, 1, "false", 0, "USD", -0.876702107815704, 1253347, 0.7357643622915087, 212096775784.55914, "USD", 13.540405906409653, 7.8491, 118.60743629021027, 2.98324, "Health technology", "america", "Health Technology", 1.732143, "NYSE"],
            },
            {
                s: "NASDAQ:QCOM",
                d: ["QCOM", "QUALCOMM Incorporated", "qualcomm", "delayed_streaming_900", "stock", ["common"], 187.05, 100, 1, "false", 0, "USD", -2.3033531808210572, 5440309, 0.6875190210163891, 208747807320.40976, "USD", 25.136736860494807, 7.4413, -20.144873101894085, 1.69748, "Electronic technology", "america", "Electronic Technology", 1.525641, "NASDAQ"],
            },
            {
                s: "NYSE:WFC",
                d: ["WFC", "Wells Fargo & Company", "wells-fargo", "delayed_streaming_900", "stock", ["common"], 59.37, 100, 1, "false", 0, "USD", 0.21944632005400985, 8062234, 0.3911579938510894, 206982538429.96133, "USD", 12.517657972970124, 4.7429, null, 2.36327, "Finance", "america", "Finance", 1.589286, "NYSE"],
            },
            {
                s: "NYSE:ACN",
                d: ["ACN", "Accenture plc", "accenture", "delayed_streaming_900", "stock", ["common"], 330.05, 100, 1, "false", 0, "USD", 0.5943309966473601, 3829328, 1.130468475428587, 206738195017.6009, "USD", 30.210802844877303, 10.9249, -2.647478167884516, 1.52088, "Technology services", "america", "Technology Services", 1.433333, "NYSE"],
            },
            {
                s: "NYSE:WFC/PL",
                d: ["WFC/PL", "Wells Fargo & Company 7.50% Non-Cumulative Perpetual Convertible", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 1200, 100, 1, "false", 0, "USD", -0.006249609399416326, 5875, 1.037619215824797, 206529317443, "USD", 253.0097619599823, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:WFC/PY",
                d: ["WFC/PY", "Wells Fargo & Company Depositary Shares, each representing a 1/1,000th interest in a share of Non-Cumulative Perpetual", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 24.12, 100, 1, "false", 0, "USD", -0.08285004142501894, 19540, 0.351774806514855, 206529317443, "USD", 5.0854962153956444, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:WFC/PA",
                d: ["WFC/PA", "Wells Fargo & Company Depositary Shares, each representing a 1/1,000th interest in a share of Non-Cumulative Perpetual", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 20.75, 100, 1, "false", 0, "USD", 0.24154589371981022, 28788, 0.5463292436448518, 206529317443, "USD", 4.374960467224694, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:WFC/PZ",
                d: ["WFC/PZ", "Wells Fargo & Company Depositary Shares, each representing a 1/1,000th interest in a share of Non-Cumulative Perpetual", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 20.78, 100, 1, "false", 0, "USD", 0.1445783132530175, 87139, 0.8106315444782651, 206529317443, "USD", 4.381285711273694, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:WFC/PD",
                d: ["WFC/PD", "Wells Fargo & Company Depositary Shares, each representing a 1/1,000th interest in a share of Non-Cumulative Perpetual", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 19.07, 100, 1, "false", 0, "USD", -0.052410901467494816, 35287, 0.7229698166709009, 206529317443, "USD", 4.020746800480719, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:WFC/PC",
                d: ["WFC/PC", "Wells Fargo & Company Depositary Shares, each representing a 1/1,000th interest in a share of Non-Cumulative Perpetual", "wells-fargo", "delayed_streaming_900", "stock", ["preferred"], 19.54, 100, 1, "false", 0, "USD", -0.10224948875255406, 53039, 0.7710882959267045, 206529317443, "USD", 4.119842290581712, 4.7429, null, 2.36327, "Finance", "america", "Finance", null, "NYSE"],
            },
            {
                s: "NYSE:TMO",
                d: ["TMO", "Thermo Fisher Scientific Inc", "thermo-fisher-scientific", "delayed_streaming_900", "stock", ["common"], 533.41, 100, 1, "false", 0, "USD", -1.333653952868935, 1201294, 0.8839156784526359, 203611294327.89774, "USD", 34.22102750975159, 15.5872, 1.608161402822586, 0.27376, "Health technology", "america", "Health Technology", 1.339286, "NYSE"],
            },
            {
                s: "NASDAQ:CSCO",
                d: ["CSCO", "Cisco Systems, Inc.", "cisco", "delayed_streaming_900", "stock", ["common"], 47.285, 100, 1, "false", 0, "USD", -1.5716069941715292, 10010758, 0.5301001655651232, 190502506590.59793, "USD", 15.929456946503166, 2.9684, 6.608245941675037, 3.26811, "Electronic technology", "america", "Electronic Technology", 1.767857, "NASDAQ"],
            },
        ];

        this.columns = columns.map((name) => ({
            name,
            label: toTitleCase(name),
        }));
        this.rows = rows.reduce((acc, curr) => {
            const row = this.columns.reduce((acc2, curr2, index2) => {
                acc2[curr2.name] = curr.d[index2];
                return acc2;
            }, {});
            acc.push(row);
            return acc;
        }, []);

        this.toolbarItems = [
            //
            { component: "button", _disabled: true, icon: "add_circle", label: "New", tooltip: "New" },
            { component: "divider", variant: "vertical" },
            { component: "icon-button", _disabled: true, icon: "content_cut", tooltip: "Cut" },
            { component: "icon-button", _disabled: true, icon: "content_copy", tooltip: "Copy" },
            { component: "icon-button", _disabled: true, icon: "content_paste", tooltip: "Paste" },
            { component: "icon-button", _disabled: true, icon: "edit", tooltip: "Edit" },
            { component: "icon-button", _disabled: true, icon: "share", tooltip: "Share" },
            { component: "icon-button", _disabled: true, icon: "delete", tooltip: "Delete" },
            { component: "divider", variant: "vertical" },
            { component: "button", icon: "swap_vert", label: "Sort", tooltip: "Sort" },
            { component: "button", icon: "view_list", label: "View", tooltip: "View" },
            { component: "divider", variant: "vertical" },
            { component: "icon-button", icon: "more_vert", tooltip: "More" },
            { component: "spacer" },
            { component: "button", icon: "side_navigation", label: "Details", tooltip: "Details" },
        ];
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:24px;" class="md-layout-column">
                        <div style="margin:0;min-width:0;min-height:0;width:100%;height:100%;padding:0;" class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table .columns="${this.columns}" .rows="${this.rows}" .footer="${this.footer}" stickyHeader stickyFooter checkboxSelection stickyCheckboxSelection rangeSelection multiSelection singleSelection allSelection .toolbarItems="${this.toolbarItems}"></md-data-table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
