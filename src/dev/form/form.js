import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const options0 = [
    {
        id: "Accessories",
        name: "Accessories",
        options: {},
    },
    {
        id: "Accounting & Tax Preparation",
        name: "Accounting & tax preparation",
        options: {},
    },
    {
        id: "Adhesive",
        name: "Adhesive",
        options: {},
    },
    {
        id: "Adult Entertainment Production & Broadcasting",
        name: "Adult entertainment production & broadcasting",
        options: {},
    },
    {
        id: "Adult Products Retailers",
        name: "Adult products retailers",
        options: {},
    },
    {
        id: "Advanced Electronic Equipment",
        name: "Advanced electronic equipment",
        options: {},
    },
    {
        id: "Advanced Medical Equipment & Technology",
        name: "Advanced medical equipment & technology",
        options: {},
    },
    {
        id: "Advanced Medical Equipment Wholesale",
        name: "Advanced medical equipment wholesale",
        options: {},
    },
    {
        id: "Advanced Polymer",
        name: "Advanced polymer",
        options: {},
    },
    {
        id: "Adventure Sports Facilities & Ski Resorts",
        name: "Adventure sports facilities & ski resorts",
        options: {},
    },
    {
        id: "Advertising & Marketing",
        name: "Advertising & marketing",
        options: {},
    },
    {
        id: "Advertising/Marketing Services",
        name: "Advertising/Marketing services",
        options: {},
    },
    {
        id: "Advertising Agency",
        name: "Advertising agency",
        options: {},
    },
    {
        id: "Aerospace & Defense",
        name: "Aerospace & defense",
        options: {},
    },
    {
        id: "Agricultural Biotechnology",
        name: "Agricultural biotechnology",
        options: {},
    },
    {
        id: "Agricultural Chemicals Wholesale",
        name: "Agricultural chemicals wholesale",
        options: {},
    },
    {
        id: "Agricultural Chemicals",
        name: "Agricultural chemicals",
        options: {},
    },
    {
        id: "Agricultural Commodities/Milling",
        name: "Agricultural commodities/Milling",
        options: {},
    },
    {
        id: "Agricultural Machinery",
        name: "Agricultural machinery",
        options: {},
    },
    {
        id: "Agriculture Support Services",
        name: "Agriculture support services",
        options: {},
    },
    {
        id: "Air & Gas Compressors",
        name: "Air & gas compressors",
        options: {},
    },
    {
        id: "Air Freight & Courier Services",
        name: "Air freight & courier services",
        options: {},
    },
    {
        id: "Air Freight & Logistics",
        name: "Air freight & logistics",
        options: {},
    },
    {
        id: "Air Freight",
        name: "Air freight",
        options: {},
    },
    {
        id: "Air Freight/Couriers",
        name: "Air freight/Couriers",
        options: {},
    },
    {
        id: "Air Freight/Delivery Services",
        name: "Air freight/Delivery services",
        options: {},
    },
    {
        id: "Aircraft Equipment Wholesale",
        name: "Aircraft equipment wholesale",
        options: {},
    },
    {
        id: "Aircraft Parts Manufacturing",
        name: "Aircraft parts manufacturing",
        options: {},
    },
    {
        id: "Airline Catering Services",
        name: "Airline catering services",
        options: {},
    },
    {
        id: "Airlines",
        name: "Airlines",
        options: {},
    },
    {
        id: "Airport Operators",
        name: "Airport operators",
        options: {},
    },
    {
        id: "Airport Services",
        name: "Airport services",
        options: {},
    },
    {
        id: "All Other Food Manufacturing",
        name: "All other food manufacturing",
        options: {},
    },
    {
        id: "Alternative Medicine Facilities",
        name: "Alternative medicine facilities",
        options: {},
    },
    {
        id: "Alternative Medicine",
        name: "Alternative medicine",
        options: {},
    },
    {
        id: "Alternative Power Generation",
        name: "Alternative power generation",
        options: {},
    },
    {
        id: "Aluminum Rolling",
        name: "Aluminum rolling",
        options: {},
    },
    {
        id: "Aluminum",
        name: "Aluminum",
        options: {},
    },
    {
        id: "Ambulance & Emergency Services",
        name: "Ambulance & emergency services",
        options: {},
    },
    {
        id: "Amusement Parks and Zoos",
        name: "Amusement parks and zoos",
        options: {},
    },
    {
        id: "Animal Breeding",
        name: "Animal breeding",
        options: {},
    },
    {
        id: "Animal Feed",
        name: "Animal feed",
        options: {},
    },
    {
        id: "Animal Slaughtering & Processing",
        name: "Animal slaughtering & processing",
        options: {},
    },
    {
        id: "Antique Dealers",
        name: "Antique dealers",
        options: {},
    },
    {
        id: "Apparel & Accessories Retailers",
        name: "Apparel & accessories retailers",
        options: {},
    },
    {
        id: "Apparel & Accessories",
        name: "Apparel & accessories",
        options: {},
    },
    {
        id: "Apparel Wholesale",
        name: "Apparel wholesale",
        options: {},
    },
    {
        id: "Apparel/Footwear",
        name: "Apparel/Footwear",
        options: {},
    },
    {
        id: "Apparel/Footwear Retail",
        name: "Apparel/Footwear retail",
        options: {},
    },
    {
        id: "Appliance & Houseware Wholesale",
        name: "Appliance & houseware wholesale",
        options: {},
    },
    {
        id: "Appliances, Tools & Housewares",
        name: "Appliances, tools & housewares",
        options: {},
    },
    {
        id: "Application Software",
        name: "Application software",
        options: {},
    },
    {
        id: "Aquaculture",
        name: "Aquaculture",
        options: {},
    },
    {
        id: "Arms & Ammunitions Manufacturing",
        name: "Arms & ammunitions manufacturing",
        options: {},
    },
    {
        id: "Auto & Truck Manufacturers",
        name: "Auto & truck manufacturers",
        options: {},
    },
    {
        id: "Auto & Truck Parts Wholesale",
        name: "Auto & truck parts wholesale",
        options: {},
    },
    {
        id: "Auto & Truck Wholesale",
        name: "Auto & truck wholesale",
        options: {},
    },
    {
        id: "Auto Cleaning Products",
        name: "Auto cleaning products",
        options: {},
    },
    {
        id: "Auto Parts: OEM",
        name: "Auto parts: OEM",
        options: {},
    },
    {
        id: "Auto Vehicles, Parts & Service Retailers",
        name: "Auto vehicles, parts & service retailers",
        options: {},
    },
    {
        id: "Auto, Truck & Motorcycle Parts",
        name: "Auto, truck & motorcycle parts",
        options: {},
    },
    {
        id: "Automatic Vending Machines",
        name: "Automatic vending machines",
        options: {},
    },
    {
        id: "Automotive Aftermarket",
        name: "Automotive aftermarket",
        options: {},
    },
    {
        id: "Automobiles & Multi Utility Vehicles",
        name: "Automobiles & multi utility vehicles",
        options: {},
    },
    {
        id: "Automotive Accessories",
        name: "Automotive accessories",
        options: {},
    },
    {
        id: "Automotive Batteries",
        name: "Automotive batteries",
        options: {},
    },
    {
        id: "Automotive Body Parts",
        name: "Automotive body parts",
        options: {},
    },
    {
        id: "Automotive Parts & Accessories Retailers",
        name: "Automotive parts & accessories retailers",
        options: {},
    },
    {
        id: "Automotive Systems",
        name: "Automotive systems",
        options: {},
    },
    {
        id: "Baby Food",
        name: "Baby food",
        options: {},
    },
    {
        id: "Ball & Roller Bearings",
        name: "Ball & roller bearings",
        options: {},
    },
    {
        id: "Banks",
        name: "Banks",
        options: {},
    },
    {
        id: "Banquet Halls & Catering",
        name: "Banquet halls & catering",
        options: {},
    },
    {
        id: "Bathroom Fixtures",
        name: "Bathroom fixtures",
        options: {},
    },
    {
        id: "Batteries & Uninterruptible Power supplies",
        name: "Batteries & uninterruptible power supplies",
        options: {},
    },
    {
        id: "Bauxite Mining",
        name: "Bauxite mining",
        options: {},
    },
    {
        id: "Beauty Supply Shop",
        name: "Beauty supply shop",
        options: {},
    },
    {
        id: "Beef & Veal Farming",
        name: "Beef & veal farming",
        options: {},
    },
    {
        id: "Beer, Wine & Liquor Stores",
        name: "Beer, wine & liquor stores",
        options: {},
    },
    {
        id: "Beverages: Alcoholic",
        name: "Beverages: alcoholic",
        options: {},
    },
    {
        id: "Beverages: Non-Alcoholic",
        name: "Beverages: non-alcoholic",
        options: {},
    },
    {
        id: "Beverages (Production/Distribution)",
        name: "Beverages (production/distribution)",
        options: {},
    },
    {
        id: "Bicycle Manufacturing",
        name: "Bicycle manufacturing",
        options: {},
    },
    {
        id: "Bio Diagnostics & Testing",
        name: "Bio diagnostics & testing",
        options: {},
    },
    {
        id: "Bio Medical Devices",
        name: "Bio medical devices",
        options: {},
    },
    {
        id: "Bio Therapeutic Drugs",
        name: "Bio therapeutic drugs",
        options: {},
    },
    {
        id: "Biodiesel",
        name: "Biodiesel",
        options: {},
    },
    {
        id: "Biomass & Biogas Fuels",
        name: "Biomass & biogas fuels",
        options: {},
    },
    {
        id: "Biometric Products",
        name: "Biometric products",
        options: {},
    },
    {
        id: "Biopharmaceuticals",
        name: "Biopharmaceuticals",
        options: {},
    },
    {
        id: "Biotechnology",
        name: "Biotechnology",
        options: {},
    },
    {
        id: "Biotechnology & Medical Research",
        name: "Biotechnology & medical research",
        options: {},
    },
    {
        id: "Birth Control Products",
        name: "Birth control products",
        options: {},
    },
    {
        id: "Book & Magazine Retailers",
        name: "Book & magazine retailers",
        options: {},
    },
    {
        id: "Book Printing Services",
        name: "Book printing services",
        options: {},
    },
    {
        id: "Book Publishing",
        name: "Book publishing",
        options: {},
    },
    {
        id: "Bottled Water & Ice",
        name: "Bottled water & ice",
        options: {},
    },
    {
        id: "Branding & Naming",
        name: "Branding & naming",
        options: {},
    },
    {
        id: "Bread & Bakery Product Manufacturing",
        name: "Bread & bakery product manufacturing",
        options: {},
    },
    {
        id: "Breakfast Cereal Manufacturing",
        name: "Breakfast cereal manufacturing",
        options: {},
    },
    {
        id: "Brewers",
        name: "Brewers",
        options: {},
    },
    {
        id: "Broadcasting Equipment",
        name: "Broadcasting equipment",
        options: {},
    },
    {
        id: "Broadcasting",
        name: "Broadcasting",
        options: {},
    },
    {
        id: "Brokerage Services",
        name: "Brokerage services",
        options: {},
    },
    {
        id: "Brooms, Brushes & Dustpans",
        name: "Brooms, brushes & dustpans",
        options: {},
    },
    {
        id: "Builder Merchants",
        name: "Builder merchants",
        options: {},
    },
    {
        id: "Building Contractors",
        name: "Building contractors",
        options: {},
    },
    {
        id: "Building Products",
        name: "Building products",
        options: {},
    },
    {
        id: "Business Services",
        name: "Business services",
        options: {},
    },
    {
        id: "Business Support Services",
        name: "Business support services",
        options: {},
    },
    {
        id: "Business Support Supplies",
        name: "Business support supplies",
        options: {},
    },
    {
        id: "Cable Service Providers",
        name: "Cable service providers",
        options: {},
    },
    {
        id: "Cable/Satellite TV",
        name: "Cable/Satellite TV",
        options: {},
    },
    {
        id: "Cafes",
        name: "Cafes",
        options: {},
    },
    {
        id: "Call Center Services",
        name: "Call center services",
        options: {},
    },
    {
        id: "Carbon Capture & Storage",
        name: "Carbon capture & storage",
        options: {},
    },
    {
        id: "Carbonated Soft Drinks",
        name: "Carbonated soft drinks",
        options: {},
    },
    {
        id: "Carpets & Curtains",
        name: "Carpets & curtains",
        options: {},
    },
    {
        id: "Casinos & Gaming",
        name: "Casinos & gaming",
        options: {},
    },
    {
        id: "Casinos",
        name: "Casinos",
        options: {},
    },
    {
        id: "Casinos/Gaming",
        name: "Casinos/Gaming",
        options: {},
    },
    {
        id: "Casualty Insurance",
        name: "Casualty insurance",
        options: {},
    },
    {
        id: "Catalog/Specialty Distribution",
        name: "Catalog/Specialty distribution",
        options: {},
    },
    {
        id: "Cellular Fiber",
        name: "Cellular fiber",
        options: {},
    },
    {
        id: "Cement & Concrete Manufacturing",
        name: "Cement & concrete manufacturing",
        options: {},
    },
    {
        id: "Charter & Private Air Services",
        name: "Charter & private air services",
        options: {},
    },
    {
        id: "Charter Bus Services",
        name: "Charter bus services",
        options: {},
    },
    {
        id: "Chemicals: Agricultural",
        name: "Chemicals: agricultural",
        options: {},
    },
    {
        id: "Chemicals: Major Diversified",
        name: "Chemicals: major md-layout-itemersified",
        options: {},
    },
    {
        id: "Chemicals: Specialty",
        name: "Chemicals: specialty",
        options: {},
    },
    {
        id: "Child Care & Family Services",
        name: "Child care & family services",
        options: {},
    },
    {
        id: "Children & Infants Clothing Retailers",
        name: "Children & infants clothing retailers",
        options: {},
    },
    {
        id: "Children & Infants Clothing",
        name: "Children & infants clothing",
        options: {},
    },
    {
        id: "Chocolate & Confectionery",
        name: "Chocolate & confectionery",
        options: {},
    },
    {
        id: "Cigars & Cigarette Manufacturing",
        name: "Cigars & cigarette manufacturing",
        options: {},
    },
    {
        id: "Civil Engineers & Architects",
        name: "Civil engineers & architects",
        options: {},
    },
    {
        id: "Cleaning Services",
        name: "Cleaning services",
        options: {},
    },
    {
        id: "Clearing, Settlement & Custodial Service",
        name: "Clearing, settlement & custodial service",
        options: {},
    },
    {
        id: "Closed End Funds",
        name: "Closed end funds",
        options: {},
    },
    {
        id: "Cloud Computing Services",
        name: "Cloud computing services",
        options: {},
    },
    {
        id: "Coal Mining Support",
        name: "Coal mining support",
        options: {},
    },
    {
        id: "Coal Wholesale",
        name: "Coal wholesale",
        options: {},
    },
    {
        id: "Coal",
        name: "Coal",
        options: {},
    },
    {
        id: "Coffee & Tea",
        name: "Coffee & tea",
        options: {},
    },
    {
        id: "Coffee, Tea & Cocoa Farming",
        name: "Coffee, tea & cocoa farming",
        options: {},
    },
    {
        id: "Coke Coal Mining",
        name: "Coke coal mining",
        options: {},
    },
    {
        id: "Collective Investment Fund Operators",
        name: "Collective investment fund operators",
        options: {},
    },
    {
        id: "Coloring Agent",
        name: "Coloring agent",
        options: {},
    },
    {
        id: "Commercial Aircraft Manufacturing",
        name: "Commercial aircraft manufacturing",
        options: {},
    },
    {
        id: "Commercial Banks",
        name: "Commercial banks",
        options: {},
    },
    {
        id: "Commercial Buildings",
        name: "Commercial buildings",
        options: {},
    },
    {
        id: "Commercial Document Management",
        name: "Commercial document management",
        options: {},
    },
    {
        id: "Commercial Equipment Rental",
        name: "Commercial equipment rental",
        options: {},
    },
    {
        id: "Commercial Fishing",
        name: "Commercial fishing",
        options: {},
    },
    {
        id: "Commercial Food Services",
        name: "Commercial food services",
        options: {},
    },
    {
        id: "Commercial Leasing",
        name: "Commercial leasing",
        options: {},
    },
    {
        id: "Commercial Loans",
        name: "Commercial loans",
        options: {},
    },
    {
        id: "Commercial Nurseries",
        name: "Commercial nurseries",
        options: {},
    },
    {
        id: "Commercial Printing Services",
        name: "Commercial printing services",
        options: {},
    },
    {
        id: "Commercial Printing/Forms",
        name: "Commercial printing/Forms",
        options: {},
    },
    {
        id: "Commercial REITs",
        name: "Commercial REITs",
        options: {},
    },
    {
        id: "Commodity Chemicals Wholesale",
        name: "Commodity chemicals wholesale",
        options: {},
    },
    {
        id: "Commodity Chemicals",
        name: "Commodity chemicals",
        options: {},
    },
    {
        id: "Communication & Satellite Equipment",
        name: "Communication & satellite equipment",
        options: {},
    },
    {
        id: "Communications & Networking",
        name: "Communications & networking",
        options: {},
    },
    {
        id: "Commuter Ferry",
        name: "Commuter ferry",
        options: {},
    },
    {
        id: "Commuting Services",
        name: "Commuting services",
        options: {},
    },
    {
        id: "Computer Communications",
        name: "Computer communications",
        options: {},
    },
    {
        id: "Computer & Electronics Retailers",
        name: "Computer & electronics retailers",
        options: {},
    },
    {
        id: "Computer Hardware & Software Retailers",
        name: "Computer hardware & software retailers",
        options: {},
    },
    {
        id: "Computer Hardware Component Assembly",
        name: "Computer hardware component assembly",
        options: {},
    },
    {
        id: "Computer Hardware",
        name: "Computer hardware",
        options: {},
    },
    {
        id: "Computer Peripherals",
        name: "Computer peripherals",
        options: {},
    },
    {
        id: "Computer Processing Hardware",
        name: "Computer processing hardware",
        options: {},
    },
    {
        id: "Computer Programming",
        name: "Computer programming",
        options: {},
    },
    {
        id: "Consumer Sundries",
        name: "Consumer sundries",
        options: {},
    },
    {
        id: "Computer Training",
        name: "Computer training",
        options: {},
    },
    {
        id: "Conferencing Tools & Systems",
        name: "Conferencing tools & systems",
        options: {},
    },
    {
        id: "Containers/Packaging",
        name: "Containers/Packaging",
        options: {},
    },
    {
        id: "Contract Drilling",
        name: "Contract drilling",
        options: {},
    },
    {
        id: "Construction & Engineering",
        name: "Construction & engineering",
        options: {},
    },
    {
        id: "Construction Machinery",
        name: "Construction machinery",
        options: {},
    },
    {
        id: "Construction Material Processing",
        name: "Construction material processing",
        options: {},
    },
    {
        id: "Construction Material Wholesale",
        name: "Construction material wholesale",
        options: {},
    },
    {
        id: "Construction Materials",
        name: "Construction materials",
        options: {},
    },
    {
        id: "Construction Supplies & Fixtures Wholesale",
        name: "Construction supplies & fixtures wholesale",
        options: {},
    },
    {
        id: "Construction Supplies & Fixtures",
        name: "Construction supplies & fixtures",
        options: {},
    },
    {
        id: "Construction Supplies",
        name: "Construction supplies",
        options: {},
    },
    {
        id: "Consumer Credit Cards Services",
        name: "Consumer credit cards services",
        options: {},
    },
    {
        id: "Consumer Document Management",
        name: "Consumer document management",
        options: {},
    },
    {
        id: "Consumer Electronic Wholesale",
        name: "Consumer electronic wholesale",
        options: {},
    },
    {
        id: "Consumer Electronics Retailers",
        name: "Consumer electronics retailers",
        options: {},
    },
    {
        id: "Consumer Electronics/Appliances",
        name: "Consumer electronics/Appliances",
        options: {},
    },
    {
        id: "Consumer Goods Rental",
        name: "Consumer goods rental",
        options: {},
    },
    {
        id: "Consumer Leasing",
        name: "Consumer leasing",
        options: {},
    },
    {
        id: "Consumer Lending",
        name: "Consumer lending",
        options: {},
    },
    {
        id: "Consumer Publishing",
        name: "Consumer publishing",
        options: {},
    },
    {
        id: "Consumer Repair Services",
        name: "Consumer repair services",
        options: {},
    },
    {
        id: "Container & Packaging Material Wholesale",
        name: "Container & packaging material wholesale",
        options: {},
    },
    {
        id: "Content & Site Management Services",
        name: "Content & site management services",
        options: {},
    },
    {
        id: "Cookie, Cracker & Pasta Manufacturing",
        name: "Cookie, cracker & pasta manufacturing",
        options: {},
    },
    {
        id: "Copper Ore  Mining",
        name: "Copper ore  mining",
        options: {},
    },
    {
        id: "Copyright Management",
        name: "Copyright management",
        options: {},
    },
    {
        id: "Corporate Accounting Services",
        name: "Corporate accounting services",
        options: {},
    },
    {
        id: "Corporate Financial Services",
        name: "Corporate financial services",
        options: {},
    },
    {
        id: "Cosmetics & Perfumes",
        name: "Cosmetics & perfumes",
        options: {},
    },
    {
        id: "Courier Services",
        name: "Courier services",
        options: {},
    },
    {
        id: "Craft & Micro Brewers",
        name: "Craft & micro brewers",
        options: {},
    },
    {
        id: "Credit Unions",
        name: "Credit unions",
        options: {},
    },
    {
        id: "Cruise Lines",
        name: "Cruise lines",
        options: {},
    },
    {
        id: "Cutlery & Flatware",
        name: "Cutlery & flatware",
        options: {},
    },
    {
        id: "Dairy Products",
        name: "Dairy products",
        options: {},
    },
    {
        id: "Data Processing Services",
        name: "Data processing services",
        options: {},
    },
    {
        id: "Deep Sea Freight",
        name: "Deep sea freight",
        options: {},
    },
    {
        id: "Department Stores",
        name: "Department stores",
        options: {},
    },
    {
        id: "Department/Specialty Retail Stores",
        name: "Department/Specialty retail stores",
        options: {},
    },
    {
        id: "Design Services",
        name: "Design services",
        options: {},
    },
    {
        id: "Diagnostic & Testing Substances Manufacturers",
        name: "Diagnostic & testing substances manufacturers",
        options: {},
    },
    {
        id: "Diagnostic & Testing Substances",
        name: "Diagnostic & testing substances",
        options: {},
    },
    {
        id: "Diamond Mining",
        name: "Diamond mining",
        options: {},
    },
    {
        id: "Digital Media Agencies",
        name: "Digital media agencies",
        options: {},
    },
    {
        id: "Digital Publishing",
        name: "Digital publishing",
        options: {},
    },
    {
        id: "Direct Marketing",
        name: "Direct marketing",
        options: {},
    },
    {
        id: "Directory Publishing",
        name: "Directory publishing",
        options: {},
    },
    {
        id: "Discount Stores with groceries",
        name: "Discount stores with groceries",
        options: {},
    },
    {
        id: "Discount Stores without groceries",
        name: "Discount stores without groceries",
        options: {},
    },
    {
        id: "Discount Stores",
        name: "Discount stores",
        options: {},
    },
    {
        id: "Display Screens",
        name: "Display screens",
        options: {},
    },
    {
        id: "Distilleries",
        name: "Distilleries",
        options: {},
    },
    {
        id: "Distillers & Wineries",
        name: "Distillers & wineries",
        options: {},
    },
    {
        id: "Diversified Chemicals",
        name: "Diversified chemicals",
        options: {},
    },
    {
        id: "Diversified Investment Services",
        name: "Diversified investment services",
        options: {},
    },
    {
        id: "Diversified REITs",
        name: "Diversified REITs",
        options: {},
    },
    {
        id: "Diversified Trading & Distributing",
        name: "Diversified trading & distributing",
        options: {},
    },
    {
        id: "Doctor's Office",
        name: "Doctor's office",
        options: {},
    },
    {
        id: "Dolls & Stuffed Toys",
        name: "Dolls & stuffed toys",
        options: {},
    },
    {
        id: "Doors & Window Frames",
        name: "Doors & window frames",
        options: {},
    },
    {
        id: "Drug Delivery Systems",
        name: "Drug delivery systems",
        options: {},
    },
    {
        id: "Drug Retailers",
        name: "Drug retailers",
        options: {},
    },
    {
        id: "Drugstore Chains",
        name: "Drugstore chains",
        options: {},
    },
    {
        id: "E-commerce & Auction Services",
        name: "E-commerce & auction services",
        options: {},
    },
    {
        id: "Education & Training Information Providers",
        name: "Education & training information providers",
        options: {},
    },
    {
        id: "Educational Services",
        name: "Educational services",
        options: {},
    },
    {
        id: "Electric Construction",
        name: "Electric construction",
        options: {},
    },
    {
        id: "Electric Equipment Wholesale",
        name: "Electric equipment wholesale",
        options: {},
    },
    {
        id: "Electric Utilities",
        name: "Electric utilities",
        options: {},
    },
    {
        id: "Electric Utilities: Central",
        name: "Electric utilities: central",
        options: {},
    },
    {
        id: "Electrical (Alternative Vehicles)",
        name: "Electrical (alternative vehicles)",
        options: {},
    },
    {
        id: "Electrical Components & Equipment",
        name: "Electrical components & equipment",
        options: {},
    },
    {
        id: "Electrical Measuring & Testing Instruments",
        name: "Electrical measuring & testing instruments",
        options: {},
    },
    {
        id: "Electrical Products",
        name: "Electrical products",
        options: {},
    },
    {
        id: "Electron Tubes & Insulators",
        name: "Electron tubes & insulators",
        options: {},
    },
    {
        id: "Electronic Component",
        name: "Electronic component",
        options: {},
    },
    {
        id: "Electronic Components",
        name: "Electronic components",
        options: {},
    },
    {
        id: "Electronic Equipment & Parts",
        name: "Electronic equipment & parts",
        options: {},
    },
    {
        id: "Electronic Equipments & Parts",
        name: "Electronic equipments & parts",
        options: {},
    },
    {
        id: "Electronic Equipment/Instruments",
        name: "Electronic equipment/Instruments",
        options: {},
    },
    {
        id: "Electronic Production Equipment",
        name: "Electronic production equipment",
        options: {},
    },
    {
        id: "Electronic Repair Services",
        name: "Electronic repair services",
        options: {},
    },
    {
        id: "Electronics Distributors",
        name: "Electronics distributors",
        options: {},
    },
    {
        id: "Electronics/Appliance Stores",
        name: "Electronics/Appliance stores",
        options: {},
    },
    {
        id: "Electronics/Appliances",
        name: "Electronics/Appliances",
        options: {},
    },
    {
        id: "Elevator & Conveying Equipment",
        name: "Elevator & conveying equipment",
        options: {},
    },
    {
        id: "Employment Services",
        name: "Employment services",
        options: {},
    },
    {
        id: "Energy Drinks",
        name: "Energy drinks",
        options: {},
    },
    {
        id: "Engine & Powertrain Systems",
        name: "Engine & powertrain systems",
        options: {},
    },
    {
        id: "Engineering & Construction",
        name: "Engineering & construction",
        options: {},
    },
    {
        id: "Enterprise Software",
        name: "Enterprise software",
        options: {},
    },
    {
        id: "Entertainment Production Equipment & Services",
        name: "Entertainment production equipment & services",
        options: {},
    },
    {
        id: "Entertainment Production",
        name: "Entertainment production",
        options: {},
    },
    {
        id: "Environmental Biotechnology",
        name: "Environmental biotechnology",
        options: {},
    },
    {
        id: "Environmental Consultancy Services",
        name: "Environmental consultancy services",
        options: {},
    },
    {
        id: "Environmental Services",
        name: "Environmental services",
        options: {},
    },
    {
        id: "Environmental Services & Equipment",
        name: "Environmental services & equipment",
        options: {},
    },
    {
        id: "Epoxy",
        name: "Epoxy",
        options: {},
    },
    {
        id: "Ethanol Fuels",
        name: "Ethanol fuels",
        options: {},
    },
    {
        id: "Exchange Traded Fund",
        name: "Exchange traded fund",
        options: {},
    },
    {
        id: "Exchange Traded Funds",
        name: "Exchange traded funds",
        options: {},
    },
    {
        id: "Executive Search Services",
        name: "Executive search services",
        options: {},
    },
    {
        id: "Exhibition & Conference Services",
        name: "Exhibition & conference services",
        options: {},
    },
    {
        id: "Explosives",
        name: "Explosives",
        options: {},
    },
    {
        id: "Fabric Dyeing & Finishing",
        name: "Fabric dyeing & finishing",
        options: {},
    },
    {
        id: "Factoring",
        name: "Factoring",
        options: {},
    },
    {
        id: "Fashion Eyewear",
        name: "Fashion eyewear",
        options: {},
    },
    {
        id: "Fertilizer",
        name: "Fertilizer",
        options: {},
    },
    {
        id: "Fiber Optic Cable Manufacturing",
        name: "Fiber optic cable manufacturing",
        options: {},
    },
    {
        id: "Finance: Consumer Services",
        name: "Finance: consumer services",
        options: {},
    },
    {
        id: "Finance/Rental/Leasing",
        name: "Finance/Rental/Leasing",
        options: {},
    },
    {
        id: "Financial Conglomerates",
        name: "Financial conglomerates",
        options: {},
    },
    {
        id: "Financial & Commodity Market Operators",
        name: "Financial & commodity market operators",
        options: {},
    },
    {
        id: "Financial Information Providers",
        name: "Financial information providers",
        options: {},
    },
    {
        id: "Financial Publishing/Services",
        name: "Financial publishing/Services",
        options: {},
    },
    {
        id: "Financial Technology & Infrastructure",
        name: "Financial technology & infrastructure",
        options: {},
    },
    {
        id: "Fishing & Farming Wholesale",
        name: "Fishing & farming wholesale",
        options: {},
    },
    {
        id: "Fishing & Farming",
        name: "Fishing & farming",
        options: {},
    },
    {
        id: "Floor Covering Retailers",
        name: "Floor covering retailers",
        options: {},
    },
    {
        id: "Flooring & Interior Tile Manufacturers",
        name: "Flooring & interior tile manufacturers",
        options: {},
    },
    {
        id: "Florists",
        name: "Florists",
        options: {},
    },
    {
        id: "Flour Milling",
        name: "Flour milling",
        options: {},
    },
    {
        id: "Fluid Power Cylinder & Actuators",
        name: "Fluid power cylinder & actuators",
        options: {},
    },
    {
        id: "Food Distributors",
        name: "Food distributors",
        options: {},
    },
    {
        id: "Food Ingredients",
        name: "Food ingredients",
        options: {},
    },
    {
        id: "Food Markets",
        name: "Food markets",
        options: {},
    },
    {
        id: "Food Processing",
        name: "Food processing",
        options: {},
    },
    {
        id: "Food Retail",
        name: "Food retail",
        options: {},
    },
    {
        id: "Food Retail & Distribution",
        name: "Food retail & distribution",
        options: {},
    },
    {
        id: "Food Wholesale",
        name: "Food wholesale",
        options: {},
    },
    {
        id: "Food: Major Diversified",
        name: "Food: major md-layout-itemersified",
        options: {},
    },
    {
        id: "Food: Meat/Fish/Dairy",
        name: "Food: meat/fish/dairy",
        options: {},
    },
    {
        id: "Food: Specialty/Candy",
        name: "Food: specialty/candy",
        options: {},
    },
    {
        id: "Footwear Retailers",
        name: "Footwear retailers",
        options: {},
    },
    {
        id: "Footwear Wholesale",
        name: "Footwear wholesale",
        options: {},
    },
    {
        id: "Footwear",
        name: "Footwear",
        options: {},
    },
    {
        id: "Forest & Wood Products",
        name: "Forest & wood products",
        options: {},
    },
    {
        id: "Forest Nurseries & Gathering of Forest Products",
        name: "Forest nurseries & gathering of forest products",
        options: {},
    },
    {
        id: "Forest Products",
        name: "Forest products",
        options: {},
    },
    {
        id: "Forest Support & Services",
        name: "Forest support & services",
        options: {},
    },
    {
        id: "Fossil Fuel Electric Utilities",
        name: "Fossil fuel electric utilities",
        options: {},
    },
    {
        id: "Fossil Fuel IPPs",
        name: "Fossil fuel IPPs",
        options: {},
    },
    {
        id: "Freight Logistics",
        name: "Freight logistics",
        options: {},
    },
    {
        id: "Freight Trucking",
        name: "Freight trucking",
        options: {},
    },
    {
        id: "Frozen Food Manufacturing",
        name: "Frozen food manufacturing",
        options: {},
    },
    {
        id: "Fruit & Vegetable Processing",
        name: "Fruit & vegetable processing",
        options: {},
    },
    {
        id: "Fruit Drinks",
        name: "Fruit drinks",
        options: {},
    },
    {
        id: "Funeral Services",
        name: "Funeral services",
        options: {},
    },
    {
        id: "Furniture Retailers",
        name: "Furniture retailers",
        options: {},
    },
    {
        id: "Furniture",
        name: "Furniture",
        options: {},
    },
    {
        id: "Gambling & Gaming Machine Manufacturers",
        name: "Gambling & gaming machine manufacturers",
        options: {},
    },
    {
        id: "Games, Toys & Children Vehicles",
        name: "Games, toys & children vehicles",
        options: {},
    },
    {
        id: "Gaming Machine Operators",
        name: "Gaming machine operators",
        options: {},
    },
    {
        id: "Gas Distributors",
        name: "Gas distributors",
        options: {},
    },
    {
        id: "Gas Drilling - Onshore",
        name: "Gas drilling - onshore",
        options: {},
    },
    {
        id: "Gasoline stations",
        name: "Gasoline stations",
        options: {},
    },
    {
        id: "General Education Services",
        name: "General education services",
        options: {},
    },
    {
        id: "General Government",
        name: "General government",
        options: {},
    },
    {
        id: "Generic Pharmaceuticals",
        name: "Generic pharmaceuticals",
        options: {},
    },
    {
        id: "Geophysical Surveying & Mapping Services",
        name: "Geophysical surveying & mapping services",
        options: {},
    },
    {
        id: "Gift, Novelty & Souvenir Stores",
        name: "Gift, novelty & souvenir stores",
        options: {},
    },
    {
        id: "Glass Containers & Packaging",
        name: "Glass containers & packaging",
        options: {},
    },
    {
        id: "Glasses, Spectacles & Contact lenses",
        name: "Glasses, spectacles & contact lenses",
        options: {},
    },
    {
        id: "Gold Mining",
        name: "Gold mining",
        options: {},
    },
    {
        id: "Gold",
        name: "Gold",
        options: {},
    },
    {
        id: "Golf Courses",
        name: "Golf courses",
        options: {},
    },
    {
        id: "Grain (Crop Production)",
        name: "Grain (crop production)",
        options: {},
    },
    {
        id: "Ground Freight & Logistics",
        name: "Ground freight & logistics",
        options: {},
    },
    {
        id: "Guided Tour Operators",
        name: "Guided tour operators",
        options: {},
    },
    {
        id: "Gyms, Fitness and Spa Centers",
        name: "Gyms, fitness and spa centers",
        options: {},
    },
    {
        id: "Hair Accessories",
        name: "Hair accessories",
        options: {},
    },
    {
        id: "Halal Animal Slaughtering & Processing",
        name: "Halal animal slaughtering & processing",
        options: {},
    },
    {
        id: "Handbags & Luggage Retailers",
        name: "Handbags & luggage retailers",
        options: {},
    },
    {
        id: "Handbags & Luggage",
        name: "Handbags & luggage",
        options: {},
    },
    {
        id: "Health Food Stores",
        name: "Health food stores",
        options: {},
    },
    {
        id: "Health Insurance",
        name: "Health insurance",
        options: {},
    },
    {
        id: "Healthcare Facilities & Services",
        name: "Healthcare facilities & services",
        options: {},
    },
    {
        id: "Healthcare REITs",
        name: "Healthcare REITs",
        options: {},
    },
    {
        id: "Heating, Ventilation & Air Conditioning Systems",
        name: "Heating, ventilation & air conditioning systems",
        options: {},
    },
    {
        id: "Heavy Buses & Coaches",
        name: "Heavy buses & coaches",
        options: {},
    },
    {
        id: "Heavy Electrical Equipment",
        name: "Heavy electrical equipment",
        options: {},
    },
    {
        id: "Heavy Machinery & Vehicles Wholesale",
        name: "Heavy machinery & vehicles wholesale",
        options: {},
    },
    {
        id: "Heavy Machinery & Vehicles",
        name: "Heavy machinery & vehicles",
        options: {},
    },
    {
        id: "Heavy Motors & Generators",
        name: "Heavy motors & generators",
        options: {},
    },
    {
        id: "Heavy Trucks",
        name: "Heavy trucks",
        options: {},
    },
    {
        id: "Hedge Funds",
        name: "Hedge funds",
        options: {},
    },
    {
        id: "Highway & Bridge Construction",
        name: "Highway & bridge construction",
        options: {},
    },
    {
        id: "Highway Operators",
        name: "Highway operators",
        options: {},
    },
    {
        id: "Highways & Rail Tracks",
        name: "Highways & rail tracks",
        options: {},
    },
    {
        id: "Holding Companies",
        name: "Holding companies",
        options: {},
    },
    {
        id: "Home Audio",
        name: "Home audio",
        options: {},
    },
    {
        id: "Home Decor Retailers",
        name: "Home decor retailers",
        options: {},
    },
    {
        id: "Home Furnishings Retailers",
        name: "Home furnishings retailers",
        options: {},
    },
    {
        id: "Home Furnishings Wholesale",
        name: "Home furnishings wholesale",
        options: {},
    },
    {
        id: "Home Furnishings",
        name: "Home furnishings",
        options: {},
    },
    {
        id: "Home Healthcare Services",
        name: "Home healthcare services",
        options: {},
    },
    {
        id: "Home Improvement Chains",
        name: "Home improvement chains",
        options: {},
    },
    {
        id: "Home Improvement Products & Services Retailers",
        name: "Home improvement products & services retailers",
        options: {},
    },
    {
        id: "Homebuilding",
        name: "Homebuilding",
        options: {},
    },
    {
        id: "Horse & Dog Race Tracks",
        name: "Horse & dog race tracks",
        options: {},
    },
    {
        id: "Hosiery & Sock",
        name: "Hosiery & sock",
        options: {},
    },
    {
        id: "Hospital/Nursing Management",
        name: "Hospital/Nursing management",
        options: {},
    },
    {
        id: "Hospitality REITs",
        name: "Hospitality REITs",
        options: {},
    },
    {
        id: "Hospitals, Clinics & Primary Care Services",
        name: "Hospitals, clinics & primary care services",
        options: {},
    },
    {
        id: "Hotels & Motels",
        name: "Hotels & motels",
        options: {},
    },
    {
        id: "Hotels, Motels & Cruise Lines",
        name: "Hotels, motels & cruise lines",
        options: {},
    },
    {
        id: "Hotels/Resorts/Cruise lines",
        name: "Hotels/Resorts/Cruise lines",
        options: {},
    },
    {
        id: "Household Appliances",
        name: "Household appliances",
        options: {},
    },
    {
        id: "Household Electronics",
        name: "Household electronics",
        options: {},
    },
    {
        id: "Household Products",
        name: "Household products",
        options: {},
    },
    {
        id: "Household/Personal Care",
        name: "Household/Personal care",
        options: {},
    },
    {
        id: "Human Resources Consulting Services",
        name: "Human resources consulting services",
        options: {},
    },
    {
        id: "Hydrogen Fuel",
        name: "Hydrogen fuel",
        options: {},
    },
    {
        id: "Hydropower Equipment",
        name: "Hydropower equipment",
        options: {},
    },
    {
        id: "IT Services & Consulting",
        name: "IT services & consulting",
        options: {},
    },
    {
        id: "Independent Power Producers",
        name: "Independent power producers",
        options: {},
    },
    {
        id: "Industrial  Real Estate Development",
        name: "Industrial  real estate development",
        options: {},
    },
    {
        id: "Industrial Biotechnology Chemicals",
        name: "Industrial biotechnology chemicals",
        options: {},
    },
    {
        id: "Industrial Clothing & Uniforms",
        name: "Industrial clothing & uniforms",
        options: {},
    },
    {
        id: "Industrial Conglomerates",
        name: "Industrial conglomerates",
        options: {},
    },
    {
        id: "Industrial Electrical Switchgear",
        name: "Industrial electrical switchgear",
        options: {},
    },
    {
        id: "Industrial Gas",
        name: "Industrial gas",
        options: {},
    },
    {
        id: "Industrial Machinery & Equipment Wholesale",
        name: "Industrial machinery & equipment wholesale",
        options: {},
    },
    {
        id: "Industrial Machinery & Equipment",
        name: "Industrial machinery & equipment",
        options: {},
    },
    {
        id: "Industrial Machinery",
        name: "Industrial machinery",
        options: {},
    },
    {
        id: "Industrial Moulds",
        name: "Industrial moulds",
        options: {},
    },
    {
        id: "Industrial Parts & Components",
        name: "Industrial parts & components",
        options: {},
    },
    {
        id: "Industrial Plant",
        name: "Industrial plant",
        options: {},
    },
    {
        id: "Industrial Process Furnace & Ovens",
        name: "Industrial process furnace & ovens",
        options: {},
    },
    {
        id: "Industrial REITs",
        name: "Industrial REITs",
        options: {},
    },
    {
        id: "Industrial Rubber Products",
        name: "Industrial rubber products",
        options: {},
    },
    {
        id: "Industrial Specialties",
        name: "Industrial specialties",
        options: {},
    },
    {
        id: "Industrial Valve Manufacturing",
        name: "Industrial valve manufacturing",
        options: {},
    },
    {
        id: "Information Technology Services",
        name: "Information technology services",
        options: {},
    },
    {
        id: "Inland Water Freight",
        name: "Inland water freight",
        options: {},
    },
    {
        id: "Input Devices",
        name: "Input devices",
        options: {},
    },
    {
        id: "Insurance - Automobile",
        name: "Insurance - automobile",
        options: {},
    },
    {
        id: "Insurance Brokers",
        name: "Insurance brokers",
        options: {},
    },
    {
        id: "Insurance Brokers/Services",
        name: "Insurance brokers/Services",
        options: {},
    },
    {
        id: "Integrated  Mining",
        name: "Integrated  mining",
        options: {},
    },
    {
        id: "Integrated Circuits",
        name: "Integrated circuits",
        options: {},
    },
    {
        id: "Integrated Logistics Operators",
        name: "Integrated logistics operators",
        options: {},
    },
    {
        id: "Integrated Oil",
        name: "Integrated oil",
        options: {},
    },
    {
        id: "Integrated Oil & Gas",
        name: "Integrated oil & gas",
        options: {},
    },
    {
        id: "Integrated Telecommunications Services",
        name: "Integrated telecommunications services",
        options: {},
    },
    {
        id: "Inter-dealer Broker",
        name: "Inter-dealer broker",
        options: {},
    },
    {
        id: "Interior Design Services",
        name: "Interior design services",
        options: {},
    },
    {
        id: "International Trade Financing",
        name: "International trade financing",
        options: {},
    },
    {
        id: "Internet & Mail Order Department Stores",
        name: "Internet & mail order department stores",
        options: {},
    },
    {
        id: "Internet & Mail Order Discount Stores",
        name: "Internet & mail order discount stores",
        options: {},
    },
    {
        id: "Internet Gaming",
        name: "Internet gaming",
        options: {},
    },
    {
        id: "Internet Retail",
        name: "Internet retail",
        options: {},
    },
    {
        id: "Internet Security & Transactions Services",
        name: "Internet security & transactions services",
        options: {},
    },
    {
        id: "Internet Service Providers",
        name: "Internet service providers",
        options: {},
    },
    {
        id: "Internet Services",
        name: "Internet services",
        options: {},
    },
    {
        id: "Internet Software/Services",
        name: "Internet software/Services",
        options: {},
    },
    {
        id: "Investment Banks/Brokers",
        name: "Investment banks/Brokers",
        options: {},
    },
    {
        id: "Investment Bankers/Brokers/Service",
        name: "Investment bankers/Brokers/Service",
        options: {},
    },
    {
        id: "Investment Banking & Brokerage Services",
        name: "Investment banking & brokerage services",
        options: {},
    },
    {
        id: "Investment Banking",
        name: "Investment banking",
        options: {},
    },
    {
        id: "Investment Management & Fund Operators",
        name: "Investment management & fund operators",
        options: {},
    },
    {
        id: "Investment Management",
        name: "Investment management",
        options: {},
    },
    {
        id: "Investment Managers",
        name: "Investment managers",
        options: {},
    },
    {
        id: "Investment Support Tools",
        name: "Investment support tools",
        options: {},
    },
    {
        id: "Investment Trusts",
        name: "Investment trusts",
        options: {},
    },
    {
        id: "Investment Trusts/Mutual Funds",
        name: "Investment trusts/Mutual funds",
        options: {},
    },
    {
        id: "Iron Ore Mining",
        name: "Iron ore mining",
        options: {},
    },
    {
        id: "Iron, Steel Mills & Foundries",
        name: "Iron, steel mills & foundries",
        options: {},
    },
    {
        id: "Jeans",
        name: "Jeans",
        options: {},
    },
    {
        id: "Jewelry & Watch Retailers",
        name: "Jewelry & watch retailers",
        options: {},
    },
    {
        id: "Jewelry",
        name: "Jewelry",
        options: {},
    },
    {
        id: "Juvenile Furniture",
        name: "Juvenile furniture",
        options: {},
    },
    {
        id: "Kitchen Appliances",
        name: "Kitchen appliances",
        options: {},
    },
    {
        id: "Kitchen Cabinets",
        name: "Kitchen cabinets",
        options: {},
    },
    {
        id: "Knitwear",
        name: "Knitwear",
        options: {},
    },
    {
        id: "LNG Transportation & Storage",
        name: "LNG transportation & storage",
        options: {},
    },
    {
        id: "Land Division & Submd-layout-itemision",
        name: "Land md-layout-itemision & submd-layout-itemision",
        options: {},
    },
    {
        id: "Laptop & Desktop Computers",
        name: "Laptop & desktop computers",
        options: {},
    },
    {
        id: "Laser Equipment",
        name: "Laser equipment",
        options: {},
    },
    {
        id: "Laundry Supplies",
        name: "Laundry supplies",
        options: {},
    },
    {
        id: "Lead Ore Mining",
        name: "Lead ore mining",
        options: {},
    },
    {
        id: "Leather Goods",
        name: "Leather goods",
        options: {},
    },
    {
        id: "Legal Services",
        name: "Legal services",
        options: {},
    },
    {
        id: "Leisure & Recreation",
        name: "Leisure & recreation",
        options: {},
    },
    {
        id: "Leisure Products Wholesale",
        name: "Leisure products wholesale",
        options: {},
    },
    {
        id: "Life & Health Insurance",
        name: "Life & health insurance",
        options: {},
    },
    {
        id: "Life & Health Reinsurance",
        name: "Life & health reinsurance",
        options: {},
    },
    {
        id: "Life/Health Insurance",
        name: "Life/Health insurance",
        options: {},
    },
    {
        id: "Life Insurance",
        name: "Life insurance",
        options: {},
    },
    {
        id: "Light Trucks",
        name: "Light trucks",
        options: {},
    },
    {
        id: "Lighting Equipment",
        name: "Lighting equipment",
        options: {},
    },
    {
        id: "Lighting Fixtures",
        name: "Lighting fixtures",
        options: {},
    },
    {
        id: "Lingerie",
        name: "Lingerie",
        options: {},
    },
    {
        id: "Local Agencies",
        name: "Local agencies",
        options: {},
    },
    {
        id: "Locomotive Engines & Rolling Stock",
        name: "Locomotive engines & rolling stock",
        options: {},
    },
    {
        id: "Logging & Sawmills",
        name: "Logging & sawmills",
        options: {},
    },
    {
        id: "Lottery Operators",
        name: "Lottery operators",
        options: {},
    },
    {
        id: "Luxury Accessories",
        name: "Luxury accessories",
        options: {},
    },
    {
        id: "Luxury Car Dealers",
        name: "Luxury car dealers",
        options: {},
    },
    {
        id: "Machine Tools",
        name: "Machine tools",
        options: {},
    },
    {
        id: "Magazine Publishing",
        name: "Magazine publishing",
        options: {},
    },
    {
        id: "Maintenance & Repair Services",
        name: "Maintenance & repair services",
        options: {},
    },
    {
        id: "Major Banks",
        name: "Major banks",
        options: {},
    },
    {
        id: "Major Pharmaceuticals",
        name: "Major pharmaceuticals",
        options: {},
    },
    {
        id: "Major Telecommunications",
        name: "Major telecommunications",
        options: {},
    },
    {
        id: "Malt producers",
        name: "Malt producers",
        options: {},
    },
    {
        id: "Managed Health care",
        name: "Managed health care",
        options: {},
    },
    {
        id: "Managed Health Care",
        name: "Managed health care",
        options: {},
    },
    {
        id: "Management Consulting Services",
        name: "Management consulting services",
        options: {},
    },
    {
        id: "Marinas",
        name: "Marinas",
        options: {},
    },
    {
        id: "Marine Cargo Handling Services",
        name: "Marine cargo handling services",
        options: {},
    },
    {
        id: "Marine Freight & Logistics",
        name: "Marine freight & logistics",
        options: {},
    },
    {
        id: "Marine Logistics",
        name: "Marine logistics",
        options: {},
    },
    {
        id: "Marine Passenger Transportation",
        name: "Marine passenger transportation",
        options: {},
    },
    {
        id: "Marine Port Services",
        name: "Marine port services",
        options: {},
    },
    {
        id: "Marine Shipping",
        name: "Marine shipping",
        options: {},
    },
    {
        id: "Market Research",
        name: "Market research",
        options: {},
    },
    {
        id: "Marketing Consulting Services",
        name: "Marketing consulting services",
        options: {},
    },
    {
        id: "Media Buying Agency",
        name: "Media buying agency",
        options: {},
    },
    {
        id: "Media Conglomerates",
        name: "Media conglomerates",
        options: {},
    },
    {
        id: "Medical & Diagnostic Laboratories",
        name: "Medical & diagnostic laboratories",
        options: {},
    },
    {
        id: "Medical Devices & Implants",
        name: "Medical devices & implants",
        options: {},
    },
    {
        id: "Medical Diagnostic & Testing Equipment",
        name: "Medical diagnostic & testing equipment",
        options: {},
    },
    {
        id: "Medical Distributors",
        name: "Medical distributors",
        options: {},
    },
    {
        id: "Medical Equipment Wholesale",
        name: "Medical equipment wholesale",
        options: {},
    },
    {
        id: "Medical Equipment",
        name: "Medical equipment",
        options: {},
    },
    {
        id: "Medical Equipment, Supplies & Distribution",
        name: "Medical equipment, supplies & distribution",
        options: {},
    },
    {
        id: "Medical Imaging Systems",
        name: "Medical imaging systems",
        options: {},
    },
    {
        id: "Medical Monitoring Systems",
        name: "Medical monitoring systems",
        options: {},
    },
    {
        id: "Medical Prosthetics",
        name: "Medical prosthetics",
        options: {},
    },
    {
        id: "Medical Software & Technology Services",
        name: "Medical software & technology services",
        options: {},
    },
    {
        id: "Medical Specialties",
        name: "Medical specialties",
        options: {},
    },
    {
        id: "Medical Supplies",
        name: "Medical supplies",
        options: {},
    },
    {
        id: "Medical/Nursing Services",
        name: "Medical/Nursing services",
        options: {},
    },
    {
        id: "Memory Chips (RAM)",
        name: "Memory chips (RAM)",
        options: {},
    },
    {
        id: "Men's Apparel Retailers",
        name: "Men's apparel retailers",
        options: {},
    },
    {
        id: "Men's Clothing",
        name: "Men's clothing",
        options: {},
    },
    {
        id: "Men's Footwear",
        name: "Men's footwear",
        options: {},
    },
    {
        id: "Merchant Banks",
        name: "Merchant banks",
        options: {},
    },
    {
        id: "Metal Containers & Packaging",
        name: "Metal containers & packaging",
        options: {},
    },
    {
        id: "Metal Fabrication",
        name: "Metal fabrication",
        options: {},
    },
    {
        id: "Metal Merchant Wholesalers",
        name: "Metal merchant wholesalers",
        options: {},
    },
    {
        id: "Metal Service Centers",
        name: "Metal service centers",
        options: {},
    },
    {
        id: "Metallic Rolling & Drawing Products",
        name: "Metallic rolling & drawing products",
        options: {},
    },
    {
        id: "Microfinancing",
        name: "Microfinancing",
        options: {},
    },
    {
        id: "Mining Machinery & Equipment Manufacturing",
        name: "Mining machinery & equipment manufacturing",
        options: {},
    },
    {
        id: "Mining Support Activities",
        name: "Mining support activities",
        options: {},
    },
    {
        id: "Mining Support Services & Equipment",
        name: "Mining support services & equipment",
        options: {},
    },
    {
        id: "Miscellaneous",
        name: "Miscellaneous",
        options: {},
    },
    {
        id: "Miscellaneous Commercial Services",
        name: "Miscellaneous commercial services",
        options: {},
    },
    {
        id: "Miscellaneous Manufacturing",
        name: "Miscellaneous manufacturing",
        options: {},
    },
    {
        id: "Mobile Application Software",
        name: "Mobile application software",
        options: {},
    },
    {
        id: "Mobile Phone Retailers",
        name: "Mobile phone retailers",
        options: {},
    },
    {
        id: "Mobile System Software",
        name: "Mobile system software",
        options: {},
    },
    {
        id: "Mortgage REITs",
        name: "Mortgage REITs",
        options: {},
    },
    {
        id: "Motor Vehicles",
        name: "Motor vehicles",
        options: {},
    },
    {
        id: "Motorcycle Dealers",
        name: "Motorcycle dealers",
        options: {},
    },
    {
        id: "Motorcycle Parts & Accessories",
        name: "Motorcycle parts & accessories",
        options: {},
    },
    {
        id: "Motorcycles & Scooters",
        name: "Motorcycles & scooters",
        options: {},
    },
    {
        id: "Movie Theaters & Movie Products",
        name: "Movie theaters & movie products",
        options: {},
    },
    {
        id: "Movie, TV Production & Distribution",
        name: "Movie, TV production & distribution",
        options: {},
    },
    {
        id: "Movies/Entertainment",
        name: "Movies/Entertainment",
        options: {},
    },
    {
        id: "Multiline Insurance & Brokers",
        name: "Multiline insurance & brokers",
        options: {},
    },
    {
        id: "Multiline Utilities",
        name: "Multiline utilities",
        options: {},
    },
    {
        id: "Multi-Line Insurance",
        name: "Multi-line insurance",
        options: {},
    },
    {
        id: "Municipality",
        name: "Municipality",
        options: {},
    },
    {
        id: "Museums & Historic Places",
        name: "Museums & historic places",
        options: {},
    },
    {
        id: "Music, Music Video Production & Distribution",
        name: "Music, music video production & distribution",
        options: {},
    },
    {
        id: "Musical Instrument Retailers",
        name: "Musical instrument retailers",
        options: {},
    },
    {
        id: "Musical Instruments",
        name: "Musical instruments",
        options: {},
    },
    {
        id: "Mutual Funds",
        name: "Mutual funds",
        options: {},
    },
    {
        id: "National Agency",
        name: "National agency",
        options: {},
    },
    {
        id: "National Agencies",
        name: "National agencies",
        options: {},
    },
    {
        id: "Natural Fabrics",
        name: "Natural fabrics",
        options: {},
    },
    {
        id: "Natural Gas Distribution",
        name: "Natural gas distribution",
        options: {},
    },
    {
        id: "Natural Gas Exploration & Production - Offshore",
        name: "Natural gas exploration & production - offshore",
        options: {},
    },
    {
        id: "Natural Gas Exploration & Production - Onshore",
        name: "Natural gas exploration & production - onshore",
        options: {},
    },
    {
        id: "Natural Gas Pipeline",
        name: "Natural gas pipeline",
        options: {},
    },
    {
        id: "Natural Gas Utilities",
        name: "Natural gas utilities",
        options: {},
    },
    {
        id: "Network Equipment",
        name: "Network equipment",
        options: {},
    },
    {
        id: "New Car Dealers",
        name: "New car dealers",
        options: {},
    },
    {
        id: "News Agencies",
        name: "News agencies",
        options: {},
    },
    {
        id: "Newspaper & Magazine Printing Services",
        name: "Newspaper & magazine printing services",
        options: {},
    },
    {
        id: "Newspaper Publishing",
        name: "Newspaper publishing",
        options: {},
    },
    {
        id: "Newsprint Mills",
        name: "Newsprint mills",
        options: {},
    },
    {
        id: "Nickel Ore Mining",
        name: "Nickel ore mining",
        options: {},
    },
    {
        id: "Non-Alcoholic Beverages",
        name: "Non-alcoholic beverages",
        options: {},
    },
    {
        id: "Non-Paper Containers & Packaging",
        name: "Non-paper containers & packaging",
        options: {},
    },
    {
        id: "Non-ferrous Metal Mining",
        name: "Non-ferrous metal mining",
        options: {},
    },
    {
        id: "Non-ferrous Metal Processing",
        name: "Non-ferrous metal processing",
        options: {},
    },
    {
        id: "Nuclear IPPs",
        name: "Nuclear IPPs",
        options: {},
    },
    {
        id: "Nuclear Utilities",
        name: "Nuclear utilities",
        options: {},
    },
    {
        id: "Nursery & Garden Centers",
        name: "Nursery & garden centers",
        options: {},
    },
    {
        id: "Office Equipment & Supplies Rental",
        name: "Office equipment & supplies rental",
        options: {},
    },
    {
        id: "Office Equipment Wholesale",
        name: "Office equipment wholesale",
        options: {},
    },
    {
        id: "Office Equipment",
        name: "Office equipment",
        options: {},
    },
    {
        id: "Office Equipment/Supplies",
        name: "Office equipment/Supplies",
        options: {},
    },
    {
        id: "Office Furniture",
        name: "Office furniture",
        options: {},
    },
    {
        id: "Office REITs",
        name: "Office REITs",
        options: {},
    },
    {
        id: "Office Real Estate Development",
        name: "Office real estate development",
        options: {},
    },
    {
        id: "Office Real Estate Services",
        name: "Office real estate services",
        options: {},
    },
    {
        id: "Office Supplies & Stationery Stores",
        name: "Office supplies & stationery stores",
        options: {},
    },
    {
        id: "Office Supplies Wholesale",
        name: "Office supplies wholesale",
        options: {},
    },
    {
        id: "Office Supplies",
        name: "Office supplies",
        options: {},
    },
    {
        id: "Office Technology Equipment",
        name: "Office technology equipment",
        options: {},
    },
    {
        id: "Oil & Gas Drilling",
        name: "Oil & gas drilling",
        options: {},
    },
    {
        id: "Oil & Gas Exploration and Production",
        name: "Oil & gas exploration and production",
        options: {},
    },
    {
        id: "Oil & Gas Pipelines",
        name: "Oil & gas pipelines",
        options: {},
    },
    {
        id: "Oil & Gas Production",
        name: "Oil & gas production",
        options: {},
    },
    {
        id: "Oil & Gas Refining and Marketing",
        name: "Oil & gas refining and marketing",
        options: {},
    },
    {
        id: "Oil & Gas Storage",
        name: "Oil & gas storage",
        options: {},
    },
    {
        id: "Oil & Gas Transportation Services",
        name: "Oil & gas transportation services",
        options: {},
    },
    {
        id: "Oil Drilling - Offshore",
        name: "Oil drilling - offshore",
        options: {},
    },
    {
        id: "Oil Drilling - Onshore",
        name: "Oil drilling - onshore",
        options: {},
    },
    {
        id: "Oil Exploration & Production - Offshore",
        name: "Oil exploration & production - offshore",
        options: {},
    },
    {
        id: "Oil Exploration & Production - Onshore",
        name: "Oil exploration & production - onshore",
        options: {},
    },
    {
        id: "Oil Pipeline",
        name: "Oil pipeline",
        options: {},
    },
    {
        id: "Oil Refining/Marketing",
        name: "Oil refining/Marketing",
        options: {},
    },
    {
        id: "Oil Related - Surveying & Mapping Services",
        name: "Oil related - surveying & mapping services",
        options: {},
    },
    {
        id: "Oil Related Equipment",
        name: "Oil related equipment",
        options: {},
    },
    {
        id: "Oil Related Services and Equipment",
        name: "Oil related services and equipment",
        options: {},
    },
    {
        id: "Oil Related Services",
        name: "Oil related services",
        options: {},
    },
    {
        id: "Oilfield Services/Equipment",
        name: "Oilfield services/Equipment",
        options: {},
    },
    {
        id: "Online Job portals",
        name: "Online job portals",
        options: {},
    },
    {
        id: "Optical Goods Stores",
        name: "Optical goods stores",
        options: {},
    },
    {
        id: "Organic & Ecologically Produced Fabric",
        name: "Organic & ecologically produced fabric",
        options: {},
    },
    {
        id: "Organic Fertilizer",
        name: "Organic fertilizer",
        options: {},
    },
    {
        id: "Other Consumer Services",
        name: "Other consumer services",
        options: {},
    },
    {
        id: "Other Consumer Specialties",
        name: "Other consumer specialties",
        options: {},
    },
    {
        id: "Other Metals/Minerals",
        name: "Other metals/Minerals",
        options: {},
    },
    {
        id: "Other Specialty Retailers",
        name: "Other specialty retailers",
        options: {},
    },
    {
        id: "Other Transportation",
        name: "Other transportation",
        options: {},
    },
    {
        id: "Outdoor Advertising",
        name: "Outdoor advertising",
        options: {},
    },
    {
        id: "Outsourcing & Staffing Services",
        name: "Outsourcing & staffing services",
        options: {},
    },
    {
        id: "Packaged Software",
        name: "Packaged software",
        options: {},
    },
    {
        id: "Paint & Coating",
        name: "Paint & coating",
        options: {},
    },
    {
        id: "Paper Mills & Products",
        name: "Paper mills & products",
        options: {},
    },
    {
        id: "Paper Packaging Wholesale",
        name: "Paper packaging wholesale",
        options: {},
    },
    {
        id: "Paper Packaging",
        name: "Paper packaging",
        options: {},
    },
    {
        id: "Paper Product Wholesale",
        name: "Paper product wholesale",
        options: {},
    },
    {
        id: "Paper Products",
        name: "Paper products",
        options: {},
    },
    {
        id: "Parking Lot Operators",
        name: "Parking lot operators",
        options: {},
    },
    {
        id: "Passenger Car rental",
        name: "Passenger car rental",
        options: {},
    },
    {
        id: "Passenger Transportation, Ground & Sea",
        name: "Passenger transportation, ground & sea",
        options: {},
    },
    {
        id: "Pension Funds",
        name: "Pension funds",
        options: {},
    },
    {
        id: "Personal & Car Loans",
        name: "Personal & car loans",
        options: {},
    },
    {
        id: "Personal Care Services",
        name: "Personal care services",
        options: {},
    },
    {
        id: "Personal Legal Services",
        name: "Personal legal services",
        options: {},
    },
    {
        id: "Personal Music Players",
        name: "Personal music players",
        options: {},
    },
    {
        id: "Personal Products",
        name: "Personal products",
        options: {},
    },
    {
        id: "Personal Services",
        name: "Personal services",
        options: {},
    },
    {
        id: "Personnel Services",
        name: "Personnel services",
        options: {},
    },
    {
        id: "Pest Control Services",
        name: "Pest control services",
        options: {},
    },
    {
        id: "Pesticide",
        name: "Pesticide",
        options: {},
    },
    {
        id: "Pet & Pet Supplies Retailers",
        name: "Pet & pet supplies retailers",
        options: {},
    },
    {
        id: "Pet Food Manufacturing",
        name: "Pet food manufacturing",
        options: {},
    },
    {
        id: "Petroleum Product Wholesale",
        name: "Petroleum product wholesale",
        options: {},
    },
    {
        id: "Petroleum Refining",
        name: "Petroleum refining",
        options: {},
    },
    {
        id: "Pharmaceuticals",
        name: "Pharmaceuticals",
        options: {},
    },
    {
        id: "Pharmaceuticals: Generic",
        name: "Pharmaceuticals: generic",
        options: {},
    },
    {
        id: "Pharmaceuticals: Major",
        name: "Pharmaceuticals: major",
        options: {},
    },
    {
        id: "Pharmaceuticals: Other",
        name: "Pharmaceuticals: other",
        options: {},
    },
    {
        id: "Phones & Handheld Devices",
        name: "Phones & handheld devices",
        options: {},
    },
    {
        id: "Phones & Smart Phones",
        name: "Phones & smart phones",
        options: {},
    },
    {
        id: "Photographic Equipment",
        name: "Photographic equipment",
        options: {},
    },
    {
        id: "Photovoltaic Solar Systems & Equipment",
        name: "Photovoltaic solar systems & equipment",
        options: {},
    },
    {
        id: "Plastic Container & Packaging",
        name: "Plastic container & packaging",
        options: {},
    },
    {
        id: "Plastics",
        name: "Plastics",
        options: {},
    },
    {
        id: "Platinum Mining",
        name: "Platinum mining",
        options: {},
    },
    {
        id: "Plays & Concert Production",
        name: "Plays & concert production",
        options: {},
    },
    {
        id: "Plumbing Fixtures & Fittings",
        name: "Plumbing fixtures & fittings",
        options: {},
    },
    {
        id: "Point of Sale Systems",
        name: "Point of sale systems",
        options: {},
    },
    {
        id: "Port Operators",
        name: "Port operators",
        options: {},
    },
    {
        id: "Port Warehousing Services",
        name: "Port warehousing services",
        options: {},
    },
    {
        id: "Portable Motors & Generators",
        name: "Portable motors & generators",
        options: {},
    },
    {
        id: "Portable Satellite Navigation",
        name: "Portable satellite navigation",
        options: {},
    },
    {
        id: "Poultry Farming",
        name: "Poultry farming",
        options: {},
    },
    {
        id: "Precious Metals",
        name: "Precious metals",
        options: {},
    },
    {
        id: "Precious Metals & Minerals",
        name: "Precious metals & minerals",
        options: {},
    },
    {
        id: "Prefabricated Homes",
        name: "Prefabricated homes",
        options: {},
    },
    {
        id: "Primary Aluminum Production",
        name: "Primary aluminum production",
        options: {},
    },
    {
        id: "Private Banks",
        name: "Private banks",
        options: {},
    },
    {
        id: "Private Equity",
        name: "Private equity",
        options: {},
    },
    {
        id: "Processors",
        name: "Processors",
        options: {},
    },
    {
        id: "Professional Information Services",
        name: "Professional information services",
        options: {},
    },
    {
        id: "Professional Sports Venues",
        name: "Professional sports venues",
        options: {},
    },
    {
        id: "Programming Software & Testing Tools",
        name: "Programming software & testing tools",
        options: {},
    },
    {
        id: "Property & Casualty Insurance",
        name: "Property & casualty insurance",
        options: {},
    },
    {
        id: "Property & Casualty Reinsurance",
        name: "Property & casualty reinsurance",
        options: {},
    },
    {
        id: "Property Insurance",
        name: "Property insurance",
        options: {},
    },
    {
        id: "Property-Casualty Insurers",
        name: "Property-casualty insurers",
        options: {},
    },
    {
        id: "Property/Casualty Insurance",
        name: "Property/Casualty insurance",
        options: {},
    },
    {
        id: "Province/State",
        name: "Province/State",
        options: {},
    },
    {
        id: "Public Relations",
        name: "Public relations",
        options: {},
    },
    {
        id: "Public Sport Facilities",
        name: "Public sport facilities",
        options: {},
    },
    {
        id: "Publishing: Books/Magazines",
        name: "Publishing: books/magazines",
        options: {},
    },
    {
        id: "Publishing: Newspapers",
        name: "Publishing: newspapers",
        options: {},
    },
    {
        id: "Pubs, Bars & Night Clubs",
        name: "Pubs, bars & night clubs",
        options: {},
    },
    {
        id: "Pulp Mills",
        name: "Pulp mills",
        options: {},
    },
    {
        id: "Pulp & Paper",
        name: "Pulp & paper",
        options: {},
    },
    {
        id: "Pump & Pumping Equipment",
        name: "Pump & pumping equipment",
        options: {},
    },
    {
        id: "Purification & Treatment Equipment",
        name: "Purification & treatment equipment",
        options: {},
    },
    {
        id: "Quick Service Restaurants",
        name: "Quick service restaurants",
        options: {},
    },
    {
        id: "RFID Systems",
        name: "RFID systems",
        options: {},
    },
    {
        id: "Radio Broadcasting",
        name: "Radio broadcasting",
        options: {},
    },
    {
        id: "Rail Services",
        name: "Rail services",
        options: {},
    },
    {
        id: "Railroads",
        name: "Railroads",
        options: {},
    },
    {
        id: "Railway Construction",
        name: "Railway construction",
        options: {},
    },
    {
        id: "Railway Freight Operators",
        name: "Railway freight operators",
        options: {},
    },
    {
        id: "Rare Earth Minerals",
        name: "Rare earth minerals",
        options: {},
    },
    {
        id: "Rating Agencies",
        name: "Rating agencies",
        options: {},
    },
    {
        id: "Ready-Made Meals",
        name: "Ready-made meals",
        options: {},
    },
    {
        id: "Real Estate Development",
        name: "Real estate development",
        options: {},
    },
    {
        id: "Real Estate Development & Operations",
        name: "Real estate development & operations",
        options: {},
    },
    {
        id: "Real Estate Investment Trusts",
        name: "Real estate investment trusts",
        options: {},
    },
    {
        id: "Real Estate Services",
        name: "Real estate services",
        options: {},
    },
    {
        id: "Recreational Products",
        name: "Recreational products",
        options: {},
    },
    {
        id: "Regional Airlines",
        name: "Regional airlines",
        options: {},
    },
    {
        id: "Regional Banks",
        name: "Regional banks",
        options: {},
    },
    {
        id: "Reinsurance",
        name: "Reinsurance",
        options: {},
    },
    {
        id: "Renewable Energy Equipment & Services",
        name: "Renewable energy equipment & services",
        options: {},
    },
    {
        id: "Renewable Energy Services",
        name: "Renewable energy services",
        options: {},
    },
    {
        id: "Renewable Fuels",
        name: "Renewable fuels",
        options: {},
    },
    {
        id: "Renewable IPPs",
        name: "Renewable IPPs",
        options: {},
    },
    {
        id: "Renewable Utilities",
        name: "Renewable utilities",
        options: {},
    },
    {
        id: "Residential  Real Estate Development",
        name: "Residential  real estate development",
        options: {},
    },
    {
        id: "Residential & Long Term Care",
        name: "Residential & long term care",
        options: {},
    },
    {
        id: "Residential Architectural & Interior Design Services",
        name: "Residential architectural & interior design services",
        options: {},
    },
    {
        id: "Residential Builders - Multifamily Homes",
        name: "Residential builders - multifamily homes",
        options: {},
    },
    {
        id: "Residential Builders - Single Homes",
        name: "Residential builders - single homes",
        options: {},
    },
    {
        id: "Residential REITs",
        name: "Residential REITs",
        options: {},
    },
    {
        id: "Residential Real Estate Services",
        name: "Residential real estate services",
        options: {},
    },
    {
        id: "Resort Operators",
        name: "Resort operators",
        options: {},
    },
    {
        id: "Restaurants",
        name: "Restaurants",
        options: {},
    },
    {
        id: "Restaurants & Bars",
        name: "Restaurants & bars",
        options: {},
    },
    {
        id: "Retail  Real Estate Development",
        name: "Retail  real estate development",
        options: {},
    },
    {
        id: "Retail & Mortgage Banks",
        name: "Retail & mortgage banks",
        options: {},
    },
    {
        id: "Retail - Department Stores",
        name: "Retail - department stores",
        options: {},
    },
    {
        id: "Retail - Drugs with Grocery",
        name: "Retail - drugs with grocery",
        options: {},
    },
    {
        id: "Retail - Drugs without Grocery",
        name: "Retail - drugs without grocery",
        options: {},
    },
    {
        id: "Retail REITs",
        name: "Retail REITs",
        options: {},
    },
    {
        id: "Retail Real Estate Services",
        name: "Retail real estate services",
        options: {},
    },
    {
        id: "Retirement Home Builders",
        name: "Retirement home builders",
        options: {},
    },
    {
        id: "Rock Mining",
        name: "Rock mining",
        options: {},
    },
    {
        id: "Roofing Supplies",
        name: "Roofing supplies",
        options: {},
    },
    {
        id: "Rubber Plantation",
        name: "Rubber plantation",
        options: {},
    },
    {
        id: "Sailing Yachts & Motorboats",
        name: "Sailing yachts & motorboats",
        options: {},
    },
    {
        id: "Sales Promotions & Events Management",
        name: "Sales promotions & events management",
        options: {},
    },
    {
        id: "Sanitary Products",
        name: "Sanitary products",
        options: {},
    },
    {
        id: "Satellite  Systems & Accessories",
        name: "Satellite  systems & accessories",
        options: {},
    },
    {
        id: "Satellite Service Operators",
        name: "Satellite service operators",
        options: {},
    },
    {
        id: "Savings Banks",
        name: "Savings banks",
        options: {},
    },
    {
        id: "Scientific & Precision Equipment",
        name: "Scientific & precision equipment",
        options: {},
    },
    {
        id: "Scientific & Super Computers",
        name: "Scientific & super computers",
        options: {},
    },
    {
        id: "Sea-Borne Tankers",
        name: "Sea-borne tankers",
        options: {},
    },
    {
        id: "Seafood Product Preparation & Packaging",
        name: "Seafood product preparation & packaging",
        options: {},
    },
    {
        id: "Search Engines",
        name: "Search engines",
        options: {},
    },
    {
        id: "Secondary Smelting & Alloying of Aluminum",
        name: "Secondary smelting & alloying of aluminum",
        options: {},
    },
    {
        id: "Securities & Commodity Exchanges",
        name: "Securities & commodity exchanges",
        options: {},
    },
    {
        id: "Security & Surveillance",
        name: "Security & surveillance",
        options: {},
    },
    {
        id: "Security Services",
        name: "Security services",
        options: {},
    },
    {
        id: "Self-Storage REITs",
        name: "Self-storage REITs",
        options: {},
    },
    {
        id: "Semiconductor Equipment & Testing",
        name: "Semiconductor equipment & testing",
        options: {},
    },
    {
        id: "Semiconductor Equipment Wholesalers",
        name: "Semiconductor equipment wholesalers",
        options: {},
    },
    {
        id: "Semiconductor Machinery Manufacturing",
        name: "Semiconductor machinery manufacturing",
        options: {},
    },
    {
        id: "Semiconductor Testing Equipment & Service",
        name: "Semiconductor testing equipment & service",
        options: {},
    },
    {
        id: "Semiconductor Wholesale",
        name: "Semiconductor wholesale",
        options: {},
    },
    {
        id: "Semiconductors",
        name: "Semiconductors",
        options: {},
    },
    {
        id: "Semiprecious Gem Stones",
        name: "Semiprecious gem stones",
        options: {},
    },
    {
        id: "Server & Database Software",
        name: "Server & database software",
        options: {},
    },
    {
        id: "Servers & Systems",
        name: "Servers & systems",
        options: {},
    },
    {
        id: "Services to the Health Industry",
        name: "Services to the health industry",
        options: {},
    },
    {
        id: "Sewage Treatment Facilities",
        name: "Sewage treatment facilities",
        options: {},
    },
    {
        id: "Shell Companies",
        name: "Shell companies",
        options: {},
    },
    {
        id: "Ship Part Manufacturer",
        name: "Ship part manufacturer",
        options: {},
    },
    {
        id: "Ship Repairing & Maintanance",
        name: "Ship repairing & maintanance",
        options: {},
    },
    {
        id: "Shipbuilding",
        name: "Shipbuilding",
        options: {},
    },
    {
        id: "Signs & Advertising Specialty Producers",
        name: "Signs & advertising specialty producers",
        options: {},
    },
    {
        id: "Silver Mining",
        name: "Silver mining",
        options: {},
    },
    {
        id: "Smart Grid & Electrical Transmission",
        name: "Smart grid & electrical transmission",
        options: {},
    },
    {
        id: "Smart Grid & Power Distribution Construction",
        name: "Smart grid & power distribution construction",
        options: {},
    },
    {
        id: "Snack Food & Non-chocolate Confectionary",
        name: "Snack food & non-chocolate confectionary",
        options: {},
    },
    {
        id: "Social Media & Networking",
        name: "Social media & networking",
        options: {},
    },
    {
        id: "Soft Furnishing Retailers",
        name: "Soft furnishing retailers",
        options: {},
    },
    {
        id: "Software",
        name: "Software",
        options: {},
    },
    {
        id: "Sovereign",
        name: "Sovereign",
        options: {},
    },
    {
        id: "Spacecraft Manufacturing",
        name: "Spacecraft manufacturing",
        options: {},
    },
    {
        id: "Special Foods & Welbeing Products",
        name: "Special foods & welbeing products",
        options: {},
    },
    {
        id: "Special Foods & Wellbeing Products",
        name: "Special foods & wellbeing products",
        options: {},
    },
    {
        id: "Specialized Aviation Services",
        name: "Specialized aviation services",
        options: {},
    },
    {
        id: "Specialized Printing Services",
        name: "Specialized printing services",
        options: {},
    },
    {
        id: "Specialized REITs",
        name: "Specialized REITs",
        options: {},
    },
    {
        id: "Specialty & Advanced Pharmaceuticals",
        name: "Specialty & advanced pharmaceuticals",
        options: {},
    },
    {
        id: "Specialty Chemicals Wholesale",
        name: "Specialty chemicals wholesale",
        options: {},
    },
    {
        id: "Specialty Chemicals",
        name: "Specialty chemicals",
        options: {},
    },
    {
        id: "Specialty Insurance",
        name: "Specialty insurance",
        options: {},
    },
    {
        id: "Specialty Insurers",
        name: "Specialty insurers",
        options: {},
    },
    {
        id: "Specialty Mining & Metals Wholesale",
        name: "Specialty mining & metals wholesale",
        options: {},
    },
    {
        id: "Specialty Mining & Metals",
        name: "Specialty mining & metals",
        options: {},
    },
    {
        id: "Specialty Stores",
        name: "Specialty stores",
        options: {},
    },
    {
        id: "Specialty Telecommunications",
        name: "Specialty telecommunications",
        options: {},
    },
    {
        id: "Sporting & Outdoor Goods",
        name: "Sporting & outdoor goods",
        options: {},
    },
    {
        id: "Sporting Goods Stores",
        name: "Sporting goods stores",
        options: {},
    },
    {
        id: "Sports & Outdoor Footwear",
        name: "Sports & outdoor footwear",
        options: {},
    },
    {
        id: "Sports & Outdoors Retailers",
        name: "Sports & outdoors retailers",
        options: {},
    },
    {
        id: "Sportswear & Outdoors Clothing",
        name: "Sportswear & outdoors clothing",
        options: {},
    },
    {
        id: "Starch, Vegetable Fat & Oil Manufacturing",
        name: "Starch, vegetable fat & oil manufacturing",
        options: {},
    },
    {
        id: "State Agency",
        name: "State agency",
        options: {},
    },
    {
        id: "Stationary Fuel Cells",
        name: "Stationary fuel cells",
        options: {},
    },
    {
        id: "Steam & Air-Conditioning Supply",
        name: "Steam & air-conditioning supply",
        options: {},
    },
    {
        id: "Steel",
        name: "Steel",
        options: {},
    },
    {
        id: "Storage Devices",
        name: "Storage devices",
        options: {},
    },
    {
        id: "Sugar & Artificial Sweeteners",
        name: "Sugar & artificial sweeteners",
        options: {},
    },
    {
        id: "Sugarcane Farming",
        name: "Sugarcane farming",
        options: {},
    },
    {
        id: "Supermarkets & Convenience Stores",
        name: "Supermarkets & convenience stores",
        options: {},
    },
    {
        id: "Supranational",
        name: "Supranational",
        options: {},
    },
    {
        id: "Switchgear",
        name: "Switchgear",
        options: {},
    },
    {
        id: "Synthetic Fabrics",
        name: "Synthetic fabrics",
        options: {},
    },
    {
        id: "System Software",
        name: "System software",
        options: {},
    },
    {
        id: "TV & Video",
        name: "TV & video",
        options: {},
    },
    {
        id: "Tablet & Netbook Computers",
        name: "Tablet & netbook computers",
        options: {},
    },
    {
        id: "Tanning & Softening agents",
        name: "Tanning & softening agents",
        options: {},
    },
    {
        id: "Taxi & Limousine",
        name: "Taxi & limousine",
        options: {},
    },
    {
        id: "Technology Consulting & Outsourcing Services",
        name: "Technology consulting & outsourcing services",
        options: {},
    },
    {
        id: "Telecommunication Construction",
        name: "Telecommunication construction",
        options: {},
    },
    {
        id: "Telecommunications Equipment",
        name: "Telecommunications equipment",
        options: {},
    },
    {
        id: "Telecommunications Network Infrastructure",
        name: "Telecommunications network infrastructure",
        options: {},
    },
    {
        id: "Telecommunications Resellers",
        name: "Telecommunications resellers",
        options: {},
    },
    {
        id: "Telemedicine Services",
        name: "Telemedicine services",
        options: {},
    },
    {
        id: "Television Broadcasting",
        name: "Television broadcasting",
        options: {},
    },
    {
        id: "Testing & Measuring Equipment",
        name: "Testing & measuring equipment",
        options: {},
    },
    {
        id: "Testing Laboratories",
        name: "Testing laboratories",
        options: {},
    },
    {
        id: "Testing Services",
        name: "Testing services",
        options: {},
    },
    {
        id: "Textiles & Leather Goods Wholesale",
        name: "Textiles & leather goods wholesale",
        options: {},
    },
    {
        id: "Textiles & Leather Goods",
        name: "Textiles & leather goods",
        options: {},
    },
    {
        id: "Textiles",
        name: "Textiles",
        options: {},
    },
    {
        id: "Theatres & Performing Arts",
        name: "Theatres & performing arts",
        options: {},
    },
    {
        id: "Thermal Solar Systems & Equipment",
        name: "Thermal solar systems & equipment",
        options: {},
    },
    {
        id: "Tile & Paving Material Manufacturing",
        name: "Tile & paving material manufacturing",
        options: {},
    },
    {
        id: "Timber REITs",
        name: "Timber REITs",
        options: {},
    },
    {
        id: "Timber Tract Operations",
        name: "Timber tract operations",
        options: {},
    },
    {
        id: "Tire & Tube Manufacturers",
        name: "Tire & tube manufacturers",
        options: {},
    },
    {
        id: "Tire Dealers",
        name: "Tire dealers",
        options: {},
    },
    {
        id: "Tire Retreading",
        name: "Tire retreading",
        options: {},
    },
    {
        id: "Tires & Rubber Products Wholesale",
        name: "Tires & rubber products wholesale",
        options: {},
    },
    {
        id: "Tires & Rubber Products",
        name: "Tires & rubber products",
        options: {},
    },
    {
        id: "Tobacco",
        name: "Tobacco",
        options: {},
    },
    {
        id: "Tools & Hardware",
        name: "Tools & hardware",
        options: {},
    },
    {
        id: "Tools & Housewares",
        name: "Tools & housewares",
        options: {},
    },
    {
        id: "Toys & Games Retailers",
        name: "Toys & games retailers",
        options: {},
    },
    {
        id: "Toys & Juvenile Products Wholesale",
        name: "Toys & juvenile products wholesale",
        options: {},
    },
    {
        id: "Toys & Juvenile Products",
        name: "Toys & juvenile products",
        options: {},
    },
    {
        id: "Trade & Business Publishing",
        name: "Trade & business publishing",
        options: {},
    },
    {
        id: "Transaction & Payment Services",
        name: "Transaction & payment services",
        options: {},
    },
    {
        id: "Translation & Interpretation Services",
        name: "Translation & interpretation services",
        options: {},
    },
    {
        id: "Travel Agents",
        name: "Travel agents",
        options: {},
    },
    {
        id: "Trucking",
        name: "Trucking",
        options: {},
    },
    {
        id: "Trucks/Construction/Farm Machinery",
        name: "Trucks/Construction/Farm machinery",
        options: {},
    },
    {
        id: "Turbine Manufacturing",
        name: "Turbine manufacturing",
        options: {},
    },
    {
        id: "Unconventional Oil & Gas Drilling",
        name: "Unconventional oil & gas drilling",
        options: {},
    },
    {
        id: "Unconventional Oil & Gas Production",
        name: "Unconventional oil & gas production",
        options: {},
    },
    {
        id: "Uranium Mining",
        name: "Uranium mining",
        options: {},
    },
    {
        id: "Uranium",
        name: "Uranium",
        options: {},
    },
    {
        id: "Used Car Dealers",
        name: "Used car dealers",
        options: {},
    },
    {
        id: "Used Merchandise Stores",
        name: "Used merchandise stores",
        options: {},
    },
    {
        id: "VOIP Equipment & Systems",
        name: "VOIP equipment & systems",
        options: {},
    },
    {
        id: "VOIP Services",
        name: "VOIP services",
        options: {},
    },
    {
        id: "Vegetable, Fruit & Nut Farming",
        name: "Vegetable, fruit & nut farming",
        options: {},
    },
    {
        id: "Vending Machine Providers",
        name: "Vending machine providers",
        options: {},
    },
    {
        id: "Venture Capital",
        name: "Venture capital",
        options: {},
    },
    {
        id: "Veterinary Drugs",
        name: "Veterinary drugs",
        options: {},
    },
    {
        id: "Veterinary Medical Equipment & Supplies",
        name: "Veterinary medical equipment & supplies",
        options: {},
    },
    {
        id: "Veterinary Services",
        name: "Veterinary services",
        options: {},
    },
    {
        id: "Wallpaper",
        name: "Wallpaper",
        options: {},
    },
    {
        id: "Warehousing",
        name: "Warehousing",
        options: {},
    },
    {
        id: "Waste Management, Disposal & Recycling Services",
        name: "Waste management, disposal & recycling services",
        options: {},
    },
    {
        id: "Waste to Energy Systems & Equipment",
        name: "Waste to energy systems & equipment",
        options: {},
    },
    {
        id: "Watches",
        name: "Watches",
        options: {},
    },
    {
        id: "Water & Sewage Construction",
        name: "Water & sewage construction",
        options: {},
    },
    {
        id: "Water Supply & Irrigation Systems",
        name: "Water supply & irrigation systems",
        options: {},
    },
    {
        id: "Water Utilities",
        name: "Water utilities",
        options: {},
    },
    {
        id: "Wave Power Energy Equipment",
        name: "Wave power energy equipment",
        options: {},
    },
    {
        id: "Wealth Management",
        name: "Wealth management",
        options: {},
    },
    {
        id: "Welding & Soldering Equipment",
        name: "Welding & soldering equipment",
        options: {},
    },
    {
        id: "Wholesale Distributors",
        name: "Wholesale distributors",
        options: {},
    },
    {
        id: "Wi-Fi & Wi-Max Providers",
        name: "Wi-Fi & Wi-Max providers",
        options: {},
    },
    {
        id: "Wind Systems & Equipment",
        name: "Wind systems & equipment",
        options: {},
    },
    {
        id: "Wineries",
        name: "Wineries",
        options: {},
    },
    {
        id: "Wired Telecommunications Carriers",
        name: "Wired telecommunications carriers",
        options: {},
    },
    {
        id: "Wireless Telecom",
        name: "Wireless telecom",
        options: {},
    },
    {
        id: "Wireless Telecommunications",
        name: "Wireless telecommunications",
        options: {},
    },
    {
        id: "Wireless Telecommunications Services",
        name: "Wireless telecommunications services",
        options: {},
    },
    {
        id: "Wires & Cables",
        name: "Wires & cables",
        options: {},
    },
    {
        id: "Women's Apparel Retailers",
        name: "Women's apparel retailers",
        options: {},
    },
    {
        id: "Women's Clothing",
        name: "Women's clothing",
        options: {},
    },
    {
        id: "Women's Footwear",
        name: "Women's footwear",
        options: {},
    },
    {
        id: "Wood Container & Packaging",
        name: "Wood container & packaging",
        options: {},
    },
    {
        id: "Wood Product Wholesale",
        name: "Wood product wholesale",
        options: {},
    },
    {
        id: "Wood Products",
        name: "Wood products",
        options: {},
    },
    {
        id: "Yarn Goods",
        name: "Yarn goods",
        options: {},
    },
    {
        id: "Zinc Ore Mining",
        name: "Zinc ore mining",
        options: {},
    },
    {
        id: "Not Classified",
        name: "Not classified",
        options: {},
    },
].map((option) => ({ ...option, headline: option.name, value: option.id }));
const options1 = [
    {
        id: "Basic Materials",
        name: "Basic materials",
        options: {},
    },
    {
        id: "Capital Goods",
        name: "Capital goods",
        options: {},
    },
    {
        id: "Commercial Services",
        name: "Commercial services",
        options: {},
    },
    {
        id: "Communications",
        name: "Communications",
        options: {},
    },
    {
        id: "Conglomerates",
        name: "Conglomerates",
        options: {},
    },
    {
        id: "Consumer Cyclical",
        name: "Consumer cyclical",
        options: {},
    },
    {
        id: "Consumer Cyclicals",
        name: "Consumer cyclicals",
        options: {},
    },
    {
        id: "Consumer Durables",
        name: "Consumer durables",
        options: {},
    },
    {
        id: "Consumer Non-Cyclicals",
        name: "Consumer non-cyclicals",
        options: {},
    },
    {
        id: "Consumer Non-Durables",
        name: "Consumer non-durables",
        options: {},
    },
    {
        id: "Consumer Services",
        name: "Consumer services",
        options: {},
    },
    {
        id: "Consumer/Non-Cyclical",
        name: "Consumer/Non-cyclical",
        options: {},
    },
    {
        id: "Distribution Services",
        name: "Distribution services",
        options: {},
    },
    {
        id: "Electronic Technology",
        name: "Electronic technology",
        options: {},
    },
    {
        id: "Energy",
        name: "Energy",
        options: {},
    },
    {
        id: "Energy Minerals",
        name: "Energy minerals",
        options: {},
    },
    {
        id: "Finance",
        name: "Finance",
        options: {},
    },
    {
        id: "Financial",
        name: "Financial",
        options: {},
    },
    {
        id: "Financials",
        name: "Financials",
        options: {},
    },
    {
        id: "Government",
        name: "Government",
        options: {},
    },
    {
        id: "Health Services",
        name: "Health services",
        options: {},
    },
    {
        id: "Health Technology",
        name: "Health technology",
        options: {},
    },
    {
        id: "Healthcare",
        name: "Healthcare",
        options: {},
    },
    {
        id: "Industrial Services",
        name: "Industrial services",
        options: {},
    },
    {
        id: "Industrials",
        name: "Industrials",
        options: {},
    },
    {
        id: "Miscellaneous",
        name: "Miscellaneous",
        options: {},
    },
    {
        id: "Non-Energy Minerals",
        name: "Non-energy minerals",
        options: {},
    },
    {
        id: "Process Industries",
        name: "Process industries",
        options: {},
    },
    {
        id: "Producer Manufacturing",
        name: "Producer manufacturing",
        options: {},
    },
    {
        id: "Retail Trade",
        name: "Retail trade",
        options: {},
    },
    {
        id: "Services",
        name: "Services",
        options: {},
    },
    {
        id: "Technology",
        name: "Technology",
        options: {},
    },
    {
        id: "Technology Services",
        name: "Technology services",
        options: {},
    },
    {
        id: "Telecommunications Services",
        name: "Telecommunications services",
        options: {},
    },
    {
        id: "Transportation",
        name: "Transportation",
        options: {},
        selected: true,
    },
    {
        id: "Utilities",
        name: "Utilities",
        options: {},
    },
    {
        id: "Not Classified",
        name: "Not classified",
        options: {},
    },
].map((option) => ({ ...option, headline: option.name, value: option.id }));

class DevForm extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <md-layout variant="column">
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="email0" name="email0" type="email"></md-text-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="email1" name="email1" type="email" value="ndiing.inc@gmail.com"></md-text-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="tel2" name="tel2" type="tel"></md-text-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="tel3" name="tel3" type="tel" value="+6281935155404"></md-text-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="text4" name="text4" type="text"></md-text-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="text5" name="text5" type="text" value="text"></md-text-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="url6" name="url6" type="url"></md-text-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="url7" name="url7" type="url" value="https://ndiing.github.io/material/dist/"></md-text-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="file8" name="file8" type="file"></md-text-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-text-field label="file9" name="file9" type="file"></md-text-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-password-field label="password10" name="password10"></md-password-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-password-field label="password11" name="password11" value="password"></md-password-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-number-field label="number12" name="number12"></md-number-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-number-field label="number13" name="number13" value="123456789"></md-number-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-search-field label="search14" name="search14"></md-search-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-search-field label="search15" name="search15" value="material"></md-search-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-date-field label="date16" name="date16"></md-date-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-date-field label="date17" name="date17" value="1990-10-17"></md-date-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-datetime-field label="datetime18" name="datetime18"></md-datetime-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-datetime-field label="datetime19" name="datetime19" value="1990-10-17T20:30"></md-datetime-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-month-field label="month20" name="month20"></md-month-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-month-field label="month21" name="month21" value="1990-10"></md-month-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-time-field label="time22" name="time22"></md-time-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-time-field label="time23" name="time23" value="20:30"></md-time-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-week-field label="week24" name="week24"></md-week-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-week-field label="week25" name="week25" value="1990-W42"></md-week-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-color-field label="color26" name="color26"></md-color-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-color-field label="color27" name="color27" value="#ff0000"></md-color-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-textarea-field label="textarea34" name="textarea34"></md-textarea-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-textarea-field label="textarea35" name="textarea35" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, expedita."></md-textarea-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-select-field required label="select34" name="select34" map='{"label":"name","value":"id"}' .options="${options0}"></md-select-field>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-select-field required label="select35" name="select35" map='{"label":"name","value":"id"}' .options="${options1}"></md-select-field>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-checkbox label="checkbox28" name="checkbox28"></md-checkbox>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-checkbox label="checkbox29" name="checkbox29" checked></md-checkbox>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-radio-button label="radio30" name="radio30"></md-radio-button>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-radio-button label="radio31" name="radio31" checked></md-radio-button>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-switch label="switch32" name="switch32"></md-switch>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-switch label="switch33" name="switch33" checked></md-switch>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-slider label="slider34" name="slider34"></md-slider>
                            </md-layout-item>
                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-slider label="slider35" name="slider35" value="75"></md-slider>
                            </md-layout-item>

                            <md-layout-item expanded="2" medium="2" compact="4">
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            </md-layout-item>
                        </md-layout>
                    </md-form>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-form", DevForm);

export default document.createElement("dev-form");
