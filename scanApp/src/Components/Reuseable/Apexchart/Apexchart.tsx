import React, { useState } from 'react'
import Charts from "react-apexcharts"
import './Chart.css'

const Apexchart = (props:any) => {
  const {series, type, title} = props

  const [chartinfo, setChartinfo] = useState<any>({
    series: [{
      name: 'Chart',
      data: series.series
    },
    {
      name: '',
      data: [] 
    } 
  ],
  toolbar: {
    show: false
  },
  options: {
    chart: {
      height: '100%',
      width: '350px',
      id: 'area',
      toolbar: {
        show: false,
        tools: {
          zoom:false,
          pan: false,
          reset: false,
          zoomin: false,
        }
      }
    },
    legend: {
          position: 'top'
        },
    markers: {
      size: 5,
      hover: {
        size: 9
      }
    },
    dataLabels: {
      enabled: true
    },

    grid: {
      show: false,
      padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 15
    },
    },
    
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'Months',
      categories: series.labels
    },
    tooltip: {
      x: {
        format: 'Commits'
      },
    },
    
  }
  })

  // const options = {
  //   chart: {
  //     height: '100%',
  //     id: 'chart',
  //     toolbar: {
  //       show: 'false',
  //       tools: {
  //         zoom: false,
  //         pan: false,
  //         reset: false,
  //         zoomin: false
  //       }
  //     },
  //     datalabels: {
  //       enabled: true
  //     },
  //     xaxis: {
  //       categories: series.labels
  //     },
  //     yaxis: [
  //       {
  //         labels: {
  //           formatter: function (val){
  //             return parseFloat(val).toFixed(0)
  //           }
  //         }
  //       }
  //     ],
  //     stroke: 'smooth'
  //   },
  //   fill: {
  //     opacity: 0.5
  //   },
  //   markers: {
  //     size: 5,
  //     hover: {
  //       size: 9
  //     }
  //   },
  //   legend: {
  //     position: 'bottom'
  //   },
  //   grid: {
  //     show: false,
  //     padding: {
  //       top: 10,
  //       right: 0,
  //       bottom: 0,
  //       left: 15
  //     }
  //   },
  //   responsive: [{
  //     breakpoint: 100,
  //     options: {
  //       chart: {
  //         width: '100%',
  //         height: '100%'
  //       }
  //     }
  //   }]
  // }

  return (
    <div className="chart">
      <section className="typescontainer">
        <h3>{title}</h3>
      </section>
      <Charts 
      options={chartinfo.options} 
      series={chartinfo.series} 
      type={'area'} />
    </div>
  )
}
export default Apexchart