window.onload = function(){
        	doughnut(5,4,6);
        	line(1,10,2,6,0);
        	bar();
}
function togglenav(){
    if($('#mySidenav').width()==0){
        $('#mySidenav').width(260);
        $('.menu_container').css('display','block');
    }
    else{
        $('#mySidenav').width(0);
        $('.menu_container').css('display','none');
    }
}
function line(m1,m2,m3,m4,m5){
    Chart.defaults.scale.gridLines.display = false;
    var ctx = $('#line');
    
    var config = {
        type:'line',
        data:{
            labels:['April','May','June','July','Aug'],
            datasets:[{
                label:['remove'],
                data:[m1,m2,m3,m4,m5],
                backgroundColor:'rgb(149, 74, 248)',
                borderColor:'rgb(149, 74, 248)',
                fill:false,
            }]
        },
        options:{
            
            legend: {
                    display:false,
            },
            scales: {
                xAxes: [{
                  gridLines: {
                    drawBorder: false,
                  },
                  
                }],
                yAxes: [{
                  gridLines: {
                    drawBorder: false,
                  },
                   ticks: {
                        display: false //this will remove only the label
                    }
                }]
            },
            responsive:true,
        }
    }
    var myLine = new Chart(ctx,config);
}
function doughnut(closed,pending,rejected){
    Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = $('#doughnut');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Closed","Pending", "Rejected"],
                datasets: [{
                
                    data: [closed,pending,rejected],

                    backgroundColor: [
                        'rgb(74, 137, 246)',
                        'rgb(250, 189, 11)',
                        'rgb(250, 81, 97)',
                        
                    ],
                    
                    borderWidth: 0,
                    
                }],
                
            },
            options: {
                legend: {
                    position: 'bottom',
                },
                responsive:true,
                cutoutPercentage:80
            }
        });
}
function bar(){
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.scale.gridLines.display = false;
    var ctx = $('#bar');

        var barChartData = {
          labels: [
            "2017",
            "2018"
          ],
          datasets: [
            {
              label: "Premium",
              backgroundColor: "#1ad1cc",
              borderColor: "#1ad1cc",
              data: [9, 6]
            },
            {
              label: "No.of policies sold",
              backgroundColor: "#f2b33b",
              borderColor: "#f2b33b",
              data: [6, 8]
            },
            
          ]
        };
        var chartOptions = {
          responsive: true,
            
          legend: {
            position: "bottom",
          },
             title: {
                display: true,
                text: 'Fresh',
                
            },
        
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                display:false
              },
              gridLines: {
                    drawBorder: false,
            },
            }],
            xAxes:[{
             barPercentage: 0.6,
              categoryPercentage: 0.3,
              gridLines: {
                    drawBorder: false,
                },
            }],
            
          },
          
        }

        var myBar = new Chart(ctx, {
            type: "bar",
            data: barChartData,
            options: chartOptions
        });
}


$(document).ready(function(){
   $('.business_list').on('click','a',function(){
        $('.business_list a.active').removeClass('active');
        $(this).addClass('active');
        bar();  
   });

   $('.commission_list').on('click','a',function(){
        $('.commission_list a.active').removeClass('active');
        $(this).addClass('active');
        line(1,10,2,6,0);
   });

   $('.claims_list').on('click','a',function(){
        $('.claims_list a.active').removeClass('active');
        $(this).addClass('active');
        doughnut(5,4,6);
   });
});
