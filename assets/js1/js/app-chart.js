//هذا الشهر
var chart = c3.generate({
  bindto: '#chartp-products1', // id of chart wrapper
  data: {
      columns: [
          // each columns data
          ['data1', 11, 8, 35, 18, 19, 17]
      ],
      type: 'bar', // default type of chart
      colors: {
          data1: '#4c70f0'
      },
      names: {
          // name of each serie
          'data1': 'Maximum'
      }
  },
  axis: {
      x: {
          type: 'category',
          // name of each category
          categories: ['شاي' , 'قهوة' , 'سكر', 'شاي' , 'قهوة' , 'سكر']
      },
  },
  bar: {
      width: 30
  },
  legend: {
      show: false, //hide legend
  },
  padding: {
      bottom: 0,
      top: 0
  },
});


//#آخر شهر 
var chart = c3.generate({
  bindto: '#chartp-products2', // id of chart wrapper
  data: {
      columns: [
          // each columns data
          ['data1', 11, 8, 35, 18, 19, 17]
      ],
      type: 'bar', // default type of chart
      colors: {
          data1: '#4c70f0'
      },
      names: {
          // name of each serie
          'data1': 'Maximum'
      }
  },
  axis: {
      x: {
          type: 'category',
          // name of each category
          categories: ['شاي' , 'قهوة' , 'سكر', 'شاي' , 'قهوة' , 'سكر']
      },
  },
  bar: {
      width: 30
  },
  legend: {
      show: false, //hide legend
  },
  padding: {
      bottom: 0,
      top: 0
  },
});


//آخر ثلاثة أشهر
var chart = c3.generate({
  bindto: '#chartp-products3', // id of chart wrapper
  data: {
      columns: [
          // each columns data
          ['data1', 11, 8, 35, 18, 19, 17]
      ],
      type: 'bar', // default type of chart
      colors: {
          data1: '#4c70f0'
      },
      names: {
          // name of each serie
          'data1': 'Maximum'
      }
  },
  axis: {
      x: {
          type: 'category',
          // name of each category
          categories: ['شاي' , 'قهوة' , 'سكر', 'شاي' , 'قهوة' , 'سكر']
      },
  },
  bar: {
      width: 30
  },
  legend: {
      show: false, //hide legend
  },
  padding: {
      bottom: 0,
      top: 0
  },
});

//آخر 12 شهر
var chart = c3.generate({
  bindto: '#chartp-products4', // id of chart wrapper
  data: {
      columns: [
          // each columns data
          ['data1', 11, 8, 35, 18, 19, 17]
      ],
      type: 'bar', // default type of chart
      colors: {
          data1: '#4c70f0'
      },
      names: {
          // name of each serie
          'data1': 'Maximum'
      }
  },
  axis: {
      x: {
          type: 'category',
          // name of each category
          categories: ['شاي' , 'قهوة' , 'سكر', 'شاي' , 'قهوة' , 'سكر']
      },
  },
  bar: {
      width: 30
  },
  legend: {
      show: false, //hide legend
  },
  padding: {
      bottom: 0,
      top: 0
  },
});

var chart = c3.generate({
    bindto: '#chartp-products5', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 11, 8, 35, 18, 19, 17]
        ],
        type: 'bar', // default type of chart
        colors: {
            data1: '#4c70f0'
        },
        names: {
            // name of each serie
            'data1': 'Maximum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['شاي' , 'قهوة' , 'سكر', 'شاي' , 'قهوة' , 'سكر']
        },
    },
    bar: {
        width: 30
    },
    legend: {
        show: false, //hide legend
    },
    padding: {
        bottom: 0,
        top: 0
    },
  });