const navigationMenu =[

    {
        text: 'الرئيسية',
        href: 'hamePage/index.html',
        icon: 'bi bi-house-fill',
        children: false,
    },
    
    {
        text: 'نقاط البيع',
        href: 'pages/pos/index.html',
        icon: 'bi bi-ui-checks-grid',
        children: false,
    },
    {
        text: 'المنتجات',
        href: 'javascript:void(0)',
        icon: 'bi bi-file-earmark-ppt-fill',
        children: [
            {
                text: 'قائمة المنتجات',
                href: 'pages/products/list.html',
            },
            {
                text: 'إضافة منتج',
                href: 'pages/products/add.html',
            },
            {
                text: 'إستيراد منتجات',
                href: 'pages/products/import.html',
            },
            {
                text: 'طباعة باركود',
                href: 'pages/products/barcode.html',
            },
            {
                text: 'طباعة ملصق',
                href: 'pages/products/stuck.html',
            },
        ],
    },
    {
        text: 'الفئات',
        href: 'javascript:void(0)',
        icon: 'bi bi-folder-fill',
        children: [
            {
                text: 'قائمة الفئات',
                href: 'pages/categories/list.html',
            },
            {
                text: 'إضافة فئة',
                href: 'pages/categories/add.html',
            },
            {
                text: 'إستيراد فئات',
                href: 'pages/categories/import.html',
            },
        ],
    },
    {
        text: 'المبيعات',
        href: 'javascript:void(0)',
        icon: 'bi bi-cart-plus-fill',
        children: [
            {
                text: 'قائمة المبيعات',
                href: 'pages/sales/list.html',
            },
            {
                text: 'الفواتير المفتوحة',
                href: 'pages/sales/opened.html',
            },
        ],
    },
    {
        text: 'المشتريات',
        href: 'javascript:void(0)',
        icon: 'bi bi-bag-check-fill',
        children: [
            {
                text: 'قائمة المشتريات',
                href: 'pages/purchases/list.html',
            },
            {
                text: 'إضافة مشتريات',
                href: 'pages/purchases/add.html',
            },
            {
                text: 'قائمة المصروفات',
                href: 'pages/purchases/expenses.html',
            },
            {
                text: 'إضافة مصروفات',
                href: 'pages/purchases/addExpense.html',
            },
        ],
    },
    {
        text: 'بطاقات الهدايا',
        href: 'javascript:void(0)',
        icon: 'bi bi-gift-fill',
        children: [
            {
                text: 'قائمة البطاقات',
                href: 'pages/giftCards/list.html',
            },
            {
                text: 'إضافة بطاقة',
                href: 'pages/giftCards/add.html',
            },
        ],
    },
    {
        text: 'الموظفين',
        href: 'javascript:void(0)',
        icon: 'bi bi-person-vcard-fill',
        children: [
            {
                text: 'قائمة الموظفين',
                href: 'pages/users/list.html',
            },
            {
                text: 'إضافة موظف',
                href: 'pages/users/add.html',
            },
        ],
    },
    {
        text: 'العملاء',
        href: 'javascript:void(0)',
        icon: 'bi bi-people-fill',
        children: [
            {
                text: 'قائمة العملاء',
                href: 'pages/customers/list.html',
            },
            {
                text: 'إضافة عميل',
                href: 'pages/customers/add.html',
            },
        ],
    },
    {
        text: 'الموردين',
        href: 'javascript:void(0)',
        icon: 'bi bi-person-fill-up',
        children: [
            {
                text: 'قائمة الموردين',
                href: 'pages/suppliers/list.html',
            },
            {
                text: 'إضافة مورد',
                href: 'pages/suppliers/add.html',
            },
        ],
    },
    {
        text: 'المتاجر',
        href: 'javascript:void(0)',
        icon: 'bi bi-shop',
        children: [
            {
                text: 'عرض المتاجر',
                href: 'pages/stores/all.html',
            },
            {
                text: 'إضافة متجر',
                href: 'pages/stores/add.html',
            },
        ],
    },
    {
        text: 'الإعدادت',
        href: 'javascript:void(0)',
        icon: 'bi bi-gear-fill',
        children: [
            {
                text: 'إعدادات النظام',
                href: 'pages/settings/index.html',
            },
            {
                text: 'الطابعات',
                href: 'pages/settings/printers.html',
            },
            {
                text: 'إضافة طابعة',
                href: 'pages/settings/add-printer.html',
            },
            {
                text: 'النسخ الاحتياطي',
                href: 'pages/settings/backups.html',
            },
        ],
    },
    {
        text: 'التقارير',
        href: 'javascript:void(0)',
        icon: 'bi bi-pie-chart-fill',
        children: [
            {
                text: 'المبيعات اليومية',
                href: 'pages/reports/daily_sales.html',
            },
            {
                text: 'المبيعات الشهرية',
                href: 'pages/reports/monthly_sales.html',
            },
            {
                text: 'تقرير المبيعات',
                href: 'pages/reports/sales.html',
            },            
            {
                text: 'تقرير المدفوعات',
                href: 'pages/reports/payments.html',
            },
            {
                text: 'تقارير السجلات',
                href: 'pages/reports/registers.html',
            },
            {
                text: 'أفضل المنتجات',
                href: 'pages/reports/top_products.html',
            },
            {
                text: 'تقارير المنتجات',
                href: 'pages/reports/products.html',
            },
        ],
    },
    {
        text: 'تسجيل الخروج',
        href: 'logout.html',
        icon: 'bi bi-box-arrow-left',
        children: false,
    },
]
function menuFunction(){
    return(
        navigationMenu.map((sideItem)=>{
            return(
                `
                <li class='slide'>
                <a class='side-menu__item' data-bs-toggle='slide' href='${sideItem.href}'>
                <i class='side-menu__icon ${sideItem.icon}'></i>
                <span class='side-menu__label'>${sideItem.text}</span>
                ${sideItem.children===false ? '' : `<i class='angle fs-6 fw-bold bi bi-chevron-left'></i>`}
                </a>
                ${sideItem.children===false ? '' : `<ul class='slide-menu'>
                <li class='side-menu-label1'><a href='javascript:void(0)'>${sideItem.text}</a></li>
                ${sideItem.children.map((childItem)=> `<li><a href='${childItem.href}' class='slide-item'>${childItem.text}</a></li>`).join('')}
                </ul>
                `}
                </li>
                `
            )
        }).join('')
    )
}
document.querySelector('#side-menu-ul').innerHTML= menuFunction();


// const myfunction = ()=> {
//     target.href === navigationMenu[0].href ? true : false;
// }

