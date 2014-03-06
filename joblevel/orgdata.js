// orgdata.js

var loadJobData = function() {
  var userNodes = $('b a[href^="/phone/phone.mhtml/?type=uid&query="]');
  userNodes.each(function(index) {
    var userId = $(this).text();
    var oThis = this;
    chrome.extension.sendRequest({'action': 'fetchJobData', 'userId': userId}, function(jobData) { 
      if(typeof(jobData) == "undefined" || jobData == null) { return; }
      $(oThis).parent().append('<br/>(' + jobData.job_level + ') ');
    });
  });
}

loadJobData();
