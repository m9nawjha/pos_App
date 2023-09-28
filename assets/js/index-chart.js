// 
function chartFunction(labels , values , title , type){
    return(
        {
            type: type ==='line'? 'line' : 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                label: title,
                data: values,
                borderWidth:  1,
                borderColor: type ==='line'? '#0A1931' : '#fff',
                backgroundColor: ['#4c70f0' , '#0A1931'],
              }]
            },
            options:{
              plugins:{
                legend: {
                  display: type ==='line'? true : false,
                }
              },
              animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
            },
        }
    )
};

// enter your data chart here
const dataCharts ={

    chart_5: {
      label : ['السبت', 'الأحد', 'الإثنين',  'الثلاتاء', 'الأربعاء', 'الخميس', 'الجمعة'],
      value : [8 , 10 , 4, 7, 9, 11 , 2]
    }
};
//
const chartIndex = [
    document.querySelector('#chart-5'),
];
//
new Chart(chartIndex[0], chartFunction(dataCharts.chart_5.label , dataCharts.chart_5.value , 'المبيعات في أسبوع' , 'line'));






