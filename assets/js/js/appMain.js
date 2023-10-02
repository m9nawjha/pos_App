
const importJS =(dir)=>{
    let scriptElement = document.createElement('script');
    scriptElement.src = dir;
    document.body.appendChild(scriptElement);
}
const importCSS =(dir)=>{
    let styleElement = document.createElement('link');
    styleElement.href = dir;
    styleElement.rel = 'stylesheet';
    document.head.appendChild(styleElement);
}

// import JS files

importJS('assets/js/jquery.min.js');
importJS('assets/library/bootstrap/js/popper.min.js');
importJS('assets/library/bootstrap/js/bootstrap.min.js');
importJS('assets/library/charts-c3/d3.v5.min.js');
importJS('assets/library/charts-c3/c3-chart.js');
importJS('assets/library/input-mask/jquery.mask.min.js');
importJS('assets/js/SideBar.js');
importJS('assets/js/tooltip&popover.js');
importJS('assets/library/sidemenu/sidemenu.js');
importJS('assets/library/bootstrap5-typehead/autocomplete.js');
importJS('assets/js/typehead.js');
importJS('assets/js/charts.js');
importJS('assets/js/app-chart.js');
importJS('assets/library/select2/select2.full.min.js');
importJS('assets/library/datatable/js/jquery.dataTables.min.js');
importJS('assets/library/datatable/js/dataTables.bootstrap5.js');
importJS('assets/library/datatable/js/dataTables.buttons.min.js');
importJS('assets/library/datatable/js/buttons.bootstrap5.min.js');
importJS('assets/library/datatable/js/jszip.min.js');
importJS('assets/library/datatable/pdfmake/pdfmake.min.js');
importJS('assets/library/datatable/pdfmake/vfs_fonts.js');
importJS('assets/library/datatable/js/buttons.html5.min.js');
importJS('assets/library/datatable/js/buttons.print.min.js');
importJS('assets/library/datatable/js/buttons.colVis.min.js');
importJS('assets/library/datatable/dataTables.responsive.min.js');
importJS('assets/library/datatable/responsive.bootstrap5.min.js');
importJS('assets/js/table-data.js');
importJS('assets/js/autofill-table.js');
importJS('assets/library/sidebar/sidebar.js');
importJS('assets/library/p-scroll/perfect-scrollbar.js');
importJS('assets/library/p-scroll/pscroll.js');
importJS('assets/library/p-scroll/pscroll-1.js');
importJS('assets/library/wysiwyag/jquery.richtext.js');
importJS('assets/library/wysiwyag/wysiwyag.js');
importJS('assets/js/themeColors.js');
importJS('assets/js/sticky.js');
importJS('assets/js/custom.js');


// import style css


// date & time
const timeDate ='<i class="bi bi-stopwatch fs-6 mx-1 text-blue"></i>' + new Date().toLocaleString('ar-SA' , {dateStyle: 'short' , timeStyle:'short'});
document.getElementById('date_time').innerHTML = timeDate;

