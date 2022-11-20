const addresses = [
    {
        id: 'A1',
        receiverName: 'Liễu Minh Vương',
        phoneNumber: '0397638114',
        active: true,
        default: true,
        addr: {
            city: 'Hồ Chí Minh',
            district: 'Thủ Đức',
            ward: 'Linh Trung',
            details: 'Ký túc xá khu A - ĐGQG tp Hồ Chí Minh',
        },
    },
    {
        id: 'A2',
        receiverName: 'Liễu Minh Vương',
        phoneNumber: '0397638114',
        active: false,
        default: false,
        addr: {
            city: 'Hồ Chí Minh',
            district: 'Thủ Đức',
            ward: 'Linh Trung',
            details: 'Ký túc xá khu A - ĐGQG tp Hồ Chí Minh',
        },
    },
    {
        id: 'A3',
        receiverName: 'Liễu Minh Vương',
        phoneNumber: '0397638114',
        active: false,
        default: false,
        addr: {
            city: 'Hồ Chí Minh',
            district: 'Thủ Đức',
            ward: 'Linh Trung',
            details: 'Ký túc xá khu A - ĐGQG tp Hồ Chí Minh',
        },
    },
];

const products = [
    {
        product: {
            id: 'BOOK1',
            title: "Sophie's World (Sofies verden)",
            price: 160000,
            image: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg',
        },
        count: 1,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK2',
            title: 'The Name of the Rose (Il Nome della Rosa)',
            price: 150000,
            image: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg',
        },
        count: 1,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK4',
            title: "Sophie's World (Sofies verden)",
            price: 170000,
            image: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg',
        },
        count: 2,
        isSelected: false,
    },
    {
        product: {
            id: 'BOOK3',
            title: 'How the Steel Was Tempered (Как закалялась сталь))',
            price: 160000,
            image: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg',
        },
        count: 3,
        isSelected: false,
    },
];

export { addresses, products };
