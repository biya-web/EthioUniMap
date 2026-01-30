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
        },
        {
            id: "52",
            name: "Block 52L",
            type: "class",
            coords: [[14.105991, 38.708691], [14.106022, 38.708841], [14.105809, 38.708878], [14.105783, 38.708723]],
            details: "<b>Block 52L Details</b><br>Lecture Hall."
        },
        {
            id: "44",
            name: "Block 44",
            type: "dorm",
            coords: [[14.104165, 38.708058], [14.103847, 38.708106], [14.103800, 38.707843], [14.104123, 38.707811]],
            details: "<b>Block 44 Details</b><br>Male Dormitory."
        },
        {
            id: "45",
            name: "Block 45",
            type: "dorm",
            coords: [[14.103863, 38.707623], [14.104191, 38.707575], [14.104144, 38.707333], [14.103832, 38.707371]],
            details: "<b>Block 45 Details</b><br>Male Dormitory."
        },
        {
            id: "46",
            name: "Block 46",
            type: "dorm",
            coords: [[14.104035, 38.707151], [14.103712, 38.707205], [14.103686, 38.706942], [14.103993, 38.706904]],
            details: "<b>Block 46 Details</b><br>Male Dormitory."
        },
        {
            id: "47",
            name: "Block 47",
            type: "dorm",
            coords: [[14.103519, 38.706818], [14.103202, 38.706851], [14.103171, 38.706582], [14.103488, 38.706555]],
            details: "<b>Block 47 Details</b><br>Male Dormitory."
        },
        {
            id: "Main Gate",
            name: "Main Gate",
            type: "commercial",
            coords: [[14.110730, 38.712285], [14.110605, 38.712574], [14.110444, 38.712462], [14.110559, 38.712258]],
            details: "<b>Main Gate Details</b><br>The primary entrance to the university campus."
        },
        {
            id: "34",
            name: "Block 34",
            type: "dorm",
            coords: [[14.106214, 38.707398], [14.106324, 38.707392], [14.106298, 38.707092], [14.106178, 38.707108]],
            details: "<b>Block 34 Details</b><br>Male Dormitory."
        },
        {
            id: "39",
            name: "Block 39",
            type: "dorm",
            coords: [[14.106480, 38.706915], [14.106178, 38.706952], [14.106131, 38.706695], [14.106438, 38.706663]],
            details: "<b>Block 39 Details</b><br>Male Dormitory."
        },
        {
            id: "41",
            name: "Block 41",
            type: "dorm",
            coords: [[14.106048, 38.707414], [14.105965, 38.707424], [14.105913, 38.707129], [14.106012, 38.707119]],
            details: "<b>Block 41 Details</b><br>Male Dormitory."
        },
        {
            id: "40",
            name: "Block 40",
            type: "dorm",
            coords: [[14.105970, 38.706963], [14.105663, 38.707001], [14.105616, 38.706727], [14.105939, 38.706695]],
            details: "<b>Block 40 Details</b><br>Male Dormitory."
        },
        {
            id: "57",
            name: "Block 57",
            type: "class",
            coords: [[14.106386, 38.709479], [14.106532, 38.709458], [14.106475, 38.709082], [14.106329, 38.709109]],
            details: "<b>Block 57 Details</b><br>Classrooms and Department Offices."
        },
        {
            id: "x",
            name: "Block x",
            type: "class",
            coords: [[14.107104, 38.709962], [14.107026, 38.710284], [14.106901, 38.710262], [14.106969, 38.709935]],
            details: "<b>Block x Details</b><br>Chemistry Laboratory."
        },
        {
            id: "55",
            name: "Block 55",
            type: "class",
            coords: [[14.106964, 38.709849], [14.107120, 38.709828], [14.107062, 38.709495], [14.106922, 38.709522]],
            details: "<b>Block 55 Details</b><br>Physics Laboratory."
        },
        {
            id: "Court",
            name: "Basketball Court",
            type: "commercial",
            coords: [[14.105070, 38.705300], [14.104466, 38.705391], [14.104409, 38.704978], [14.105028, 38.704892]],
            details: "<b>Basketball Court Details</b><br>Recreational Area."
        },
        {
            id: "Football Field",
            name: "Football Field",
            type: "commercial",
            coords: [[14.106475, 38.703551], [14.104518, 38.703530], [14.104591, 38.704710], [14.106475, 38.704758]],
            details: "<b>Football Field Details</b><br>Main sports ground."
        },
        {
            id: "27",
            name: "Block 27",
            type: "class",
            coords: [[14.107089, 38.708272], [14.107323, 38.708229], [14.107307, 38.708095], [14.107068, 38.708138]],
            details: "<b>Block 27 Details</b><br>Classrooms and Offices."
        },
        {
            id: "22",
            name: "Block 22",
            type: "class",
            coords: [[14.109019, 38.707162], [14.109253, 38.707253], [14.109320, 38.707113], [14.109092, 38.707028]],
            details: "<b>Block 22 Details</b><br>Classrooms and Offices."
        },
        {
            id: "94",
            name: "Block 94",
            type: "admin",
            coords: [[14.108857, 38.707231], [14.108998, 38.707408], [14.108899, 38.707478], [14.108764, 38.707296]],
            details: "<b>Block 94 Details</b><br>Administrative Offices."
        },
        {
            id: "35",
            name: "Block 35",
            type: "dorm",
            coords: [[14.106568, 38.706604], [14.106584, 38.706722], [14.106870, 38.706673], [14.106854, 38.706566]],
            details: "<b>Block 35 Details</b><br>Male Dormitory."
        },
        {
            id: "38",
            name: "Block 38",
            type: "dorm",
            coords: [[14.106495, 38.706169], [14.106532, 38.706464], [14.106443, 38.706470], [14.106402, 38.706180]],
            details: "<b>Block 38 Details</b><br>Male Dormitory."
        },
        {
            id: "Green Cafe",
            name: "Green Cafe",
            type: "commercial",
            coords: [[14.105647, 38.708240], [14.105725, 38.708631], [14.106032, 38.708556], [14.106017, 38.708192]],
            details: "<b>Green Cafe Details</b><br>Student cafe and lounge area."
        },
        {
            id: "71",
            name: "Block 71",
            type: "class",
            coords: [[14.104196, 38.708814], [14.104253, 38.709238], [14.104113, 38.709243], [14.104061, 38.708841]],
            details: "<b>Block 71 Details</b><br>Journalism Department."
        },
        {
            id: "73",
            name: "Block 73",
            type: "class",
            coords: [[14.103993, 38.709957], [14.104336, 38.709903], [14.104342, 38.710032], [14.104024, 38.710085]],
            details: "<b>Block 73 Details</b><br>Classrooms."
        },
        {
            id: "68",
            name: "Block 68",
            type: "class",
            coords: [[14.104581, 38.709871], [14.104596, 38.709999], [14.104929, 38.709957], [14.104914, 38.709817]],
            details: "<b>Block 68 Details</b><br>Classrooms."
        },
        {
            id: "69",
            name: "Block 69",
            type: "class",
            coords: [[14.104628, 38.710182], [14.104950, 38.710134], [14.104976, 38.710284], [14.104643, 38.710337]],
            details: "<b>Block 69 Details</b><br>Drawing Classrooms."
        },
        {
            id: "Social Library",
            name: "Social Library",
            type: "commercial",
            coords: [[14.109180, 38.706657], [14.109013, 38.706598], [14.109164, 38.706223], [14.109326, 38.706282]],
            details: "<b>Social Library Details</b><br>Main student study and resource center."
        },
        {
            id: "Natural Library",
            name: "Natural Library",
            type: "commercial",
            coords: [[14.109315, 38.705794], [14.109492, 38.705842], [14.109612, 38.705472], [14.109456, 38.705424]],
            details: "<b>Natural Library Details</b><br>Resource center for science and natural history topics."
        },
        {
            id: "23",
            name: "Block 23",
            type: "class",
            coords: [[14.109028, 38.706936], [14.109111, 38.706710], [14.109002, 38.706678], [14.108924, 38.706909]],
            details: "<b>Block 23 Details</b><br>College of Business and Economics."
        },
        {
            id: "21",
            name: "Block 21",
            type: "class",
            coords: [[14.109627, 38.706657], [14.109684, 38.706512], [14.109497, 38.706431], [14.109439, 38.706549]],
            details: "<b>Block 21 Details</b><br>Classrooms."
        },
        {
            id: "20",
            name: "Block 20",
            type: "class",
            coords: [[14.109767, 38.706823], [14.109871, 38.706871], [14.109996, 38.706576], [14.109892, 38.706528]],
            details: "<b>Block 20 Details</b><br>Classrooms."
        },
        {
            id: "19",
            name: "Block 19",
            type: "class",
            coords: [[14.110022, 38.706941], [14.110126, 38.706989], [14.110241, 38.706678], [14.110132, 38.706624]],
            details: "<b>Block 19 Details</b><br>Classrooms."
        },
        {
            id: "18",
            name: "Block 18",
            type: "class",
            coords: [[14.110152, 38.706517], [14.110272, 38.706217], [14.110152, 38.706179], [14.110043, 38.706485]],
            details: "<b>Block 18 Details</b><br>Classrooms."
        },
        {
            id: "15",
            name: "Block 15",
            type: "class",
            coords: [[14.110163, 38.706088], [14.110064, 38.706050], [14.110179, 38.705744], [14.110277, 38.705787]],
            details: "<b>Block 15 Details</b><br>Classrooms."
        },
    ]
};
