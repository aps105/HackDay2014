// jobdata.js

var getUserId = function() {
  return $.trim($('#email a').text()).split('@')[0];
}

var addJobData = function(jobData) {
  if(typeof(jobData) == "undefined" || jobData == null) { return; }
  $('#name').append('<span>('+jobData.job_level+')</span>');
  $('#title').append('<span>Hacking for ' + jobData.years + ' years, ' + jobData.months + ' months</span>');
}


var loadJobData = function() {
  var userId = getUserId();
  chrome.extension.sendRequest({'action' : 'fetchJobData', 'userId': userId}, addJobData);
}

loadJobData();
