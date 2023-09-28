const navigationMenu =[
    {
        text: 'الرئيسية',
        href: 'index.html',
        icon: 'bi bi-house-fill',
        children: null,
    },
    {
        text: 'التقارير',
        href: 'javascript:',
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
                href: 'pages/reports/payments.html',
            },
        ],
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
                ${sideItem.children===null ? '' : `<i class='angle fs-6 fw-bold bi bi-chevron-left'></i>`}
                </a>
                ${sideItem.children===null ? '' : `<ul class='slide-menu'>
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

