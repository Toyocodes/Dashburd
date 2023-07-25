
//LINE CHART

new Chart(document.getElementById("line-chart"), {
  type : 'line',
  data : {
    labels : [ "Jul'22", "Aug'22", "02 Aug", "03 Aug", "04 Aug", "05 Aug","06 Aug", "07 Aug", "08 Aug", " "],
    datasets : [
        {
          data : [ 0, 3, 2, 9, 10, 5, 20, 50, 100, 0],
          borderColor : "#FF5403",
          backgroundColor: "rgba(255, 221, 205, 0.6)",
          tension: 0,
          // pointRadius: 0, 
        }]
  },
  
  options : {
    // responsive: true,
    // maintainAspectRatio: false,
    scales: {  
      xAxes: [{
        gridLines: {
          display: false // Set this to false to remove the vertical grid lines
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
          callback: function(value, index, values) {
            return value;
          }
        },
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 20,
        scaleStartValue: 0
      }]
    },
    legend: {
      display: false
  },
    tooltips: {
      intersect: false,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        label: function(tooltipItem, data) {
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          var value = tooltipItem.yLabel;
          return datasetLabel + ': ' + value;
        }
      }
    }
  }
});





//CHART 1 BEGINS
var ctx = document.getElementById("myChart")

var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [
    "Nigeria (34%)", "Germany (19%)", "Ghana (25%)", "Finland (20%)", "United Kingdom (2%)"
		],
		datasets: [
			{
				data: [68, 37, 50, 40, 4],
				backgroundColor: ["#599EEA","#844FF6","#0FB77A", "#FAB70A","#F09468"],
				hoverBackgroundColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"],
        borderWidth: 0,
        scaleFontColor: "#000",
			}
		]
	},
	options: {
    title: {
      display: true,
      text: ""
    },
      legend:{
        position:'left',
        // align: 'end',
        rtl: true,
        labels:{
          usePointStyle: true,        
          pointStyle: 'circle',
          padding: 15,
          fontColor: "black",
          fontWeight: "900",
          fontSize: 16
        }
      },
    cutoutPercentage: 65, 
		// tooltips: {
		// 	callbacks: {
		// 		label: function(tooltipItem, data) {
		// 			var allData = data.datasets[tooltipItem.datasetIndex].data;
		// 			var tooltipLabel = data.labels[tooltipItem.index];
		// 			var tooltipData = allData[tooltipItem.index];
		// 			var total = 0;
		// 			for (var i in allData) {
		// 				total += allData[i];
		// 			}
		// 			var tooltipPercentage = Math.round((tooltipData / total) * 100);
		// 			return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
		// 		}
		// 	}
		// }
	}
});

//CHART 1 ENDS



//CHART 2 BEGINS
var ctx = document.getElementById("myChart2")

var chart = new Chart(ctx, {
  scaleFontColor: "black",
	type: 'doughnut',
	data: {
		labels: [
    "google (26%)", "instagram (31%)", "facebook (21%)", "linkedin (22%)"
		],
		datasets: [
			{
				data: [50, 58, 40, 41],
				backgroundColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A"],
        hoverBackgroundColor: ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A"],
        borderWidth: 0,
			}
		]
	},
	options: {
    title: {
      display: true,
      text: ""
    },
      legend:{
        position:'left',
        rtl: true,
        labels:{
          usePointStyle: true,        
          pointStyle: 'circle',
          padding: 15,
          fontColor: "black",
          fontWeight: "900",
          fontSize: 16
        }
      },
    cutoutPercentage: 65, 
		// tooltips: {
		// 	callbacks: {
		// 		label: function(tooltipItem, data) {
		// 			var allData = data.datasets[tooltipItem.datasetIndex].data;
		// 			var tooltipLabel = data.labels[tooltipItem.index];
		// 			var tooltipData = allData[tooltipItem.index];
		// 			var total = 0;
		// 			for (var i in allData) {
		// 				total += allData[i];
		// 			}
		// 			var tooltipPercentage = Math.round((tooltipData / total) * 100);
		// 			return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
    //       // return {text: label + ' (' + tooltipPercentage + '%)'}
		// 		}
		// 	}
		// }
	}
});

//GREETINGS
var greeting = document.getElementById("greeting");
var icon = document.getElementById("icon");

var currentTime = new Date();
var currentHour = currentTime.getHours();

if (currentHour >= 6 && currentHour < 12) {
  // Morning
  greeting.innerHTML = "Good morning! Toyosi";
  icon.src = "images/sunrise.png";
} else if (currentHour >= 12 && currentHour < 16) {
  // Afternoon
  greeting.innerHTML = "Good afternoon! Toyosi";
  icon.src = "images/sun1.png";
} else {
  // Evening
  greeting.innerHTML = "Good evening! Toyosi";
  icon.src = "images/half-moon.png";
}

//FILTER BUTTON BEGINS

var buttons = document.getElementsByClassName("filter-btn");
var daysChange = document.getElementById("daysChange");

    function handleClick(event) {
      var clickedButton = event.target;
      var buttonText = clickedButton.innerHTML;
      daysChange.innerHTML = buttonText;
    }

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", handleClick);
    }



//FILTER BUTTONS DONE AND DUSTED 
var buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});


//MENUBAR SECTION

// document.getElementById('menubar').addEventListener('click', function() {
//   document.getElementById('sidebar').classList.toggle('mobile-menu');
// });

var menuToggle = document.getElementById('menubar');
var sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
  if (sidebar.style.left === '-272px') {
    sidebar.style.left = '0';
    document.body.classList.add('sidebar-open');
  } else {
    sidebar.style.left = '-272px';
    document.body.classList.remove('sidebar-open');
  }
});