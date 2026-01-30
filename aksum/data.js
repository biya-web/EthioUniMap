const campusData = {
    name: "Aksum University (Main Campus)",
    center: [14.106, 38.709], // Centered near the dorms/admin area
    zoom: 17,
    buildings: [
        {
            id: "20",
            name: "Building 20",
            type: "class", 
            coords: [[14.108478, 38.711255], [14.108935, 38.711507], [14.109232, 38.710750], [14.109008, 38.710616]],
            details: "<b>Building 20 Details</b><br>Main conference hall."
        },
        {
            id: "21",
            name: "Building 21",
            type: "admin",
            coords: [[14.109388, 38.709211], [14.109690, 38.708910], [14.109471, 38.708626], [14.109097, 38.708819]],
            details: "<b>Building 21 Details</b><br>Digital Library."
        },
        {
            id: "32",
            name: "Building 32",
            type: "dorm",
            coords: [[14.106620, 38.707779], [14.106579, 38.707526], [14.106240, 38.707532], [14.106277, 38.707848]],
            details: "<b>Building 32 Details</b><br>Male Dormitory."
        },
        {
            id: "42",
            name: "Building 42",
            type: "dorm",
            coords: [[14.106126, 38.707870], [14.105798, 38.707902], [14.105767, 38.707612], [14.106074, 38.707575]],
            details: "<b>Building 42 Details</b><br>Male Dormitory."
        },
        {
            id: "31",
            name: "Block 31",
            type: "dorm",
            coords: [[14.106651, 38.707339], [14.106969, 38.707296], [14.106932, 38.707054], [14.106615, 38.707103]],
            details: "<b>Block 31 Details</b><br>Male Dormitory."
        },
        {
            id: "84",
            name: "Block 84",
            type: "admin",
            coords: [[14.107926, 38.711845], [14.107723, 38.712134], [14.107609, 38.712075], [14.107796, 38.711770]],
            details: "<b>Block 84 Details</b><br>Registrarial Office."
        },
        {
            id: "76",
            name: "Block 76",
            type: "class",
            coords: [[14.103696, 38.709790], [14.103379, 38.709849], [14.103343, 38.709613], [14.103670, 38.709543]],
            details: "<b>Block 76 Details</b><br>Lecture Classrooms."
        },
        {
            id: "77",
            name: "Block 77",
            type: "class",
            coords: [[14.103696, 38.710021], [14.103400, 38.710075], [14.103426, 38.710289], [14.103728, 38.710262]],
            details: "<b>Block 77 Details</b><br>Lecture Classrooms."
        },
        {
            id: "78",
            name: "Block 78",
            type: "class",
            coords: [[14.103551, 38.709125], [14.103275, 38.709173], [14.103228, 38.708937], [14.103514, 38.708884]],
            details: "<b>Block 78 Details</b><br>Lecture Classrooms."
        },
        {
            id: "59",
            name: "Block 59",
            type: "art",
            coords: [[14.105944, 38.709586], [14.105772, 38.709613], [14.105705, 38.709195], [14.105871, 38.709157]],
            details: "<b>Block 59 Details</b><br>Art Center."
        },
        {
            id: "58",
            name: "Block 58",
            type: "class",
            coords: [[14.106100, 38.709533], [14.106246, 38.709517], [14.106178, 38.709141], [14.106074, 38.709130]],
            details: "<b>Block 58 Details</b><br>ECE Department."
        },
        {
            id: "52",
            name: "Block 52",
            type: "health",
            coords: [[14.107354, 38.709071], [14.107567, 38.709045], [14.107536, 38.708894], [14.107338, 38.708927]],
            details: "<b>Block 52 Details</b><br>University Clinic."
        },
        {
            id: "53",
            name: "Block 53",
            type: "class",
            coords: [[14.107068, 38.709388], [14.107198, 38.709366], [14.107146, 38.708996], [14.107010, 38.709007]],
            details: "<b>Block 53 Details</b><br>Computer Science Lab."
        },
        {
            id: "60",
            name: "Block 60",
            type: "class",
            coords: [[14.106542, 38.709720], [14.106168, 38.709774], [14.106147, 38.709635], [14.106532, 38.709581]],
            details: "<b>Block 60 Details</b><br>Institute of Technology (IOT)."
        },
        {
            id: "16",
            name: "Block 17",
            type: "commercial",
            coords: [[14.110299, 38.706105], [14.110439, 38.706164], [14.110585, 38.705772], [14.110465, 38.705719]],
            details: "<b>Block 17 Details</b><br>Haven Cafe."
        },
        {
            id: "X",
            name: "Block X",
            type: "commercial",
            coords: [[14.109279, 38.708572], [14.109586, 38.708331], [14.109414, 38.708095], [14.109107, 38.708336]],
            details: "<b>Block X Details</b><br>Senior Students Cafe."
        },
        {
            id: "Q",
            name: "Block Q",
            type: "commercial",
            coords: [[14.108816, 38.707945], [14.109045, 38.707746], [14.108821, 38.707451], [14.108587, 38.707628]],
            details: "<b>Block Q Details</b><br>Junior/Fresh Students Cafe."
        },
        {
            id: "50",
            name: "Block 50",
            type: "admin",
            coords: [[14.106782, 38.708744], [14.107005, 38.708696], [14.106964, 38.708556], [14.106756, 38.708583]],
            details: "<b>Block 50 Details</b><br>Conference Room / Meeting Space."
        },
        {
            id: "54",
            name: "Block 54",
            type: "commercial",
            coords: [[14.106839, 38.709023], [14.106704, 38.709045], [14.106761, 38.709442], [14.106912, 38.709425]],
            details: "<b>Block 54 Details</b><br>Staff Lunch/Lounge."
        },
        {
            id: "43",
            name: "Block 43",
            type: "dorm",
            coords: [[14.105268, 38.707510], [14.105585, 38.707462], [14.105554, 38.707215], [14.105236, 38.707258]],
            details: "<b>Block 43 Details</b><br>Male Dormitory."
        },
        {
            id: "28",
            name: "Block 28",
            type: "dorm",
            coords: [[14.107447, 38.707644], [14.107141, 38.707682], [14.107109, 38.707435], [14.107416, 38.707398]],
            details: "<b>Block 28 Details</b><br>Girls Dormitory."
        },
        {
            id: "61",
            name: "Block 61",
            type: "class",
            coords: [[14.106521, 38.709908], [14.106183, 38.709957], [14.106209, 38.710101], [14.106547, 38.710048]],
            details: "<b>Block 61 Details</b><br>Classrooms / Department."
        },
        {
            id: "64",
            name: "Block 64",
            type: "class",
            coords: [[14.106355, 38.710182], [14.106397, 38.710520], [14.106272, 38.710536], [14.106225, 38.710214]],
            details: "<b>Block 64 Details</b><br>Classrooms / Department."
        },
        {
            id: "63",
            name: "Block 63",
            type: "class",
            coords: [[14.106527, 38.710622], [14.106573, 38.710965], [14.106698, 38.710944], [14.106662, 38.710606]],
            details: "<b>Block 63 Details</b><br>Classrooms / Department."
        },
        {
            id: "62",
            name: "Block 62",
            type: "class",
            coords: [[14.106584, 38.710150], [14.106454, 38.710166], [14.106501, 38.710488], [14.106636, 38.710471]],
            details: "<b>Block 62 Details</b><br>Biology laboratory."
        }
    ]
};
