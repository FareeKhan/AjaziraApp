export const bannerImage = "https://wholesalemeatscoventry.co.uk/wp-content/uploads/2020/11/family_owned_mobile.jpg"
export const innerBannerImage = "https://bytesflow.com/cdn-cgi/image/width=609,height=673,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2024/03/Group-36.png"
export const goatImg = "https://img.goodfon.com/wallpaper/big/5/d4/chiornyi-fon-syroe-miaso-miaso-spetsii.webp"

export const giftImg = "https://s3-alpha-sig.figma.com/img/c86a/bbc5/6200e5ff0398e03795558f8cb1ecfb21?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvgS1f6wDDSFqLEWoGbrOD4ypqj-eyg4S79i6h6UZTRDzYNecZdDRoM16kWddiBXplmZE3PYAFHonl2X2sj1PiIU1Oa9uekQ5xwlkKauAPw5g~zjc1On3mONgOUN6lKCrN0N3elQPS5CGT4cD-u4TgwB3kxt-apA7sUPHOSKEsVNF-ClybYmtc5PngT8vM4UaSN4AyVU-h~GUadE4il8ZcWTSF9P5MamnM8hOoF-oR0xNpLetcHb1Cid9jJBWTFnMz6pIX0Ef0Ysqr3y2PqgXI39zSKSl0jGbAM3v3OzS-CQRRZwgQSaOiJoU8Bu~0mwkgfnjM3tzunFRRU6tD6YFQ__"
export const MeatImage = "https://img.goodfon.com/wallpaper/big/5/d4/chiornyi-fon-syroe-miaso-miaso-spetsii.webp"



import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from './colors'


export const getOnBoardingData = (t) => [
    {
        image: require('../assets/onBoard/onBoard1.png'),
        title: t("firstTitle"),
        subTitle: t("firstSubtitle"),
    },
    {
        image: require('../assets/onBoard/onBoard2.png'),
        title: t("secondTitle"),
        subTitle: t("secondSubTitle"),
    },
    {
        image: require('../assets/onBoard/onBoard1.png'),
        title: t("thirdTitle"),
        subTitle: t("thirdSubTitle"),
    },
];


export const categoryData = (t) => [
    {
        image: require('../assets/category/goat.png'),
        title: t("personal"),
    },
    {
        image: require('../assets/category/chicken.png'),
        title: t("chicken"),
    },
    {
        image: require('../assets/category/meat.png'),
        title: t("meat"),
    },
    {
        image: require('../assets/category/chicken.png'),
        title: t("mutton"),
    },
];



export const productData = (t) => [
    {
        image: "https://wholesalemeatscoventry.co.uk/wp-content/uploads/2020/11/wholesale-meats-mobile.jpg",
        productName: "Raw Gazelle ",
        rating: 4.9,
        distance: "190m",
        discountPrice: 100,
        regularPrice: 120,
        pid: 1,
        CatName:"Chicken",
        catId:1

    },
    {
        image: "https://img.goodfon.com/wallpaper/big/5/a5/fork-meat-wood-roasted.webp",
        productName: "Raw Gazelle",
        rating: 4.9,
        distance: "190m",
        discountPrice: 100,
        regularPrice: 120,
        pid: 2,
        CatName:"Chicken",
        catId:2
    },
    {
        image: "https://duellingpixels.com/wp-content/uploads/2024/11/Butcher_Online_Ordering_DuellingPixels-001A.jpg",
        productName: "Raw Gazell",
        rating: 4.9,
        distance: "190m",
        discountPrice: 100,
        regularPrice: 120,
        pid: 3,
        CatName:"Mutton",
        catId:3
    },
    {
        image: "https://wholesalemeatscoventry.co.uk/wp-content/uploads/2020/11/wholesale-meats-mobile.jpg",
        title: "Raw Gazelle",
        productName: 4.9,
        distance: "190m",
        discountPrice: 100,
        regularPrice: 120,
        pid: 4,
        CatName:"Meat",
        catId:4
    },
];

export const CuttingData = (t) => [
    {
        id: 1,
        piecesNo: "12"
    },
    {
        id: 2,
        piecesNo: "8"
    },
    {
        id: 3,
        piecesNo: "4"
    },
    {
        id: 4,
        piecesNo: "3"
    },
   


];


export const weightData = (t) => [
    {
        weight: "8-10 KG",
        year: "3 Years",
        price: "AED 1600",
        id: 1

    },
    {
        weight: "12-14 KG",
        year: "5 Years",
        price: "AED 3600",
        id: 2

    },
    {
        weight: "12-14 KG",
        year: "5 Years",
        price: "AED 3600",
        id: 3

    },
];


export const PackagingData = (t) => [
    {
        packing: t("cartoonIce"),
        price: "Free",
        id: 1

    },
    {
        packing: t("foamWithIce"),
        price: "AED 10",
        id: 2
    },

];


export const orderIncludes = (t) => [
    {
        title: t("head"),
        status: t("included"),
        id: 1

    },
    {
        title: t("guts"),
        status: t("notIncluded"),
        id: 2

    },
    {
        title: t("belly"),
        status: t("included"),
        id: 3

    },

];


export const CartData = (t) => [
    {
        image: "https://img.goodfon.com/wallpaper/big/5/d4/chiornyi-fon-syroe-miaso-miaso-spetsii.webp",
        title: "Nuaimi Sheep Gift",
        price: "AED 120",
        id: 1

    },
    {
        image: "https://wholesalemeatscoventry.co.uk/wp-content/uploads/2020/11/family_owned_mobile.jpg",
        title: "Raw Gazelle",
        price: "AED 120",
        id: 2

    },

]

export const PaymentMethod = (t) => [
    {
        title: t("applePay"),
        icon: <AntDesign name={'apple1'} color={colors.black} size={13} />,
        id: 1

    },
    {
        title: t("creditCard"),
        id: 2

    },
    {
        title: t("cash"),
        icon: <FontAwesome name={'money'} color={'#D3D4A9'} size={30} />,
        id: 3

    },

]






export const notificationData = (t) => [
    {
        day: t("today"),
        data: [
            {
                title: "30% Special Discount!",
                subTitle: "Special promotion only valid today ",
                icon: <MaterialCommunityIcons name={'brightness-percent'} color={colors.red} size={20} />,
                id: 1

            },
            {
                title: "Your Order Has Been Taken by the Driver",
                subTitle: "Recentyl  dsadasd das da sd as da sd sadaas dasdas dasd",
                icon: <Octicons name={'check-circle-fill'} color={colors.secondary} size={20} />,
                id: 2

            },
            {
                title: "Your Order Has Been Canceled",
                subTitle: "Your Order Has",
                icon: <MaterialCommunityIcons name={'close-circle'} color={colors.red} size={22} />,
                id: 3
            },
        ],
    },
    {
        day: t("yesterday"),
        data: [
            {
                title: "30% Special Discount!",
                subTitle: "Special promotion only valid today",
                icon: <Feather name={'mail'} color={colors.black} size={20} />,
                id: 1

            },
            {
                title: "Account Setup Successfull!",
                subTitle: "Special promotion only valid today",
                icon: <Entypo name={'user'} color={colors.black} size={20} />,
                id: 2

            },
        ],
    }
]



export const OrderData = (t) => [

    {
        orderID: "N25564845",
        status: 1,
        orderDate: "02, Oct, 2024",
        images: [
            MeatImage,
            MeatImage,
            MeatImage
        ],
        price: "250 AED",
        id: 1

    },
    {
        orderID: "N25564844",
        status: 2,
        orderDate: "03, Oct, 2024",
        images: [
            MeatImage,
            MeatImage,
            MeatImage
        ],
        price: "300 AED",
        id: 2

    },

    {
        orderID: "N25564841",
        status: 1,
        orderDate: "04, Oct, 2024",
        images: [
            MeatImage,
            MeatImage,
            MeatImage
        ],
        price: "310 AED",
        id: 3

    },


]



export const gender = (t) => [

    {
        label: t("male"),
        id: 1
    },
    {
        label: t("feMale"),
        id: 2
    }


]


export const timeData = (t) => [

    {
        label: "04:00 PM - 06:00 PM",
        id: 1
    },
    {
        label: "11:00 AM - 12:00 PM",
        id: 2
    },
    {
        label: "02:00 PM - 04:00 PM",
        id: 3
    }


]











