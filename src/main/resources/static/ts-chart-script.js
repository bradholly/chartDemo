var TUTORIAL_SAVVY ={
          
  /*Makes the AJAX calll (synchronous) to load a Student Data*/
  loadStudentData : function(){
   
   var formattedstudentListArray =[];
    
    $.ajax({
      
      async: false,
       
      url: "StudentJsonDataServlet",
       
      dataType:"json",
       
      success: function(studentJsonData) {
  
    console.log(studentJsonData);
      
     $.each(studentJsonData,function(index,aStudent){
        
      formattedstudentListArray.push([aStudent.mathematicsMark,aStudent.computerMark,aStudent.historyMark,aStudent.litratureMark,aStudent.geographyMark]);
     });
      }
    });
   return formattedstudentListArray;
  },
  /*Crate the custom Object with the data*/
  createChartData : function(jsonData){
    
  console.log(jsonData);
    
   
   return {
     
    labels : ["Mathematics", "Computers", "History","Literature", "Geography"],
     
    datasets : [
     {
      fillColor : "rgba(255,0,0,0.3)",
       
      strokeColor : "rgba(0,255,0,1)",
       
      pointColor : "rgba(0,0,255,1)",
       
      pointStrokeColor : "rgba(0,0,255,1)",
       
      /*As Ajax response data is a multidimensional array, we have 'student' data in 0th position*/
      data : jsonData[0]
     }
    ]
   };
  },
  /*Renders the Chart on a canvas and returns the reference to chart*/
  renderStudenrRadarChart:function(radarChartData){
  
   var context2D = document.getElementById("canvas").getContext("2d"),
    
	var options = {
		maintainAspectRatio: true,
		spanGaps: false,
		elements: {
			line: {
				tension: 0.000001
			}
		}	};
   
//    myRadar = new Chart(context2D).
//     
//            Radar(radarChartData,{
//              
//               scaleShowLabels : false,
//                
//               pointLabelFontSize : 10
      
	myRadar = new Chart(context2D, {
		type: 'radar',
		data: radarChartData,
		options: options
        });
             
         
    return myRadar;
  },
  /*Initalization Student render chart*/
  initRadarChart : function(){
     
   var studentData = TUTORIAL_SAVVY.loadStudentData();
    
    chartData = TUTORIAL_SAVVY.createChartData(studentData);
     
    radarChartObj = TUTORIAL_SAVVY.renderStudenrRadarChart(chartData);
     
  }
};
 
 
$(document).ready(function(){
   
 TUTORIAL_SAVVY.initRadarChart();
});