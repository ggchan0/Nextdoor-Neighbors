//initial hidden elements that will be faded in later on
$(document).ready(function(){
	$("#step3-4").hide();
	$("#second").hide();
	$("#country-select").hide();
	$("#menu").hide();
	$("#refresh").hide();
	$("#moxtra_link").hide();
});

//After clicking the first button
$(document).ready(function(){
   $("#rules").click(function(){
      $("#rules").addClass("disabled");
      $("#step3-4").fadeToggle('slow');
   });
});

//After picking a country and agreeing to EULA
$(document).ready(function(){
	$("#step3-4").click(function(){
		appendChosen();
		$("#row").fadeToggle('slow');
		$('#first').hide();
		$("#second").fadeToggle('slow');
		$("#country-select").fadeToggle('slow');
	});
});

//US button click
$(document).ready(function()
{
	$('#US_button').click(function()
	{
		$('.btn').addClass('hidden');
		$('#refresh').fadeToggle("slow");
		var from = getChosen();
		var headline = "<h3 style = 'padding-top: 2em'>Click to connect from " + from + " to the United States.</p>";
		$('#moxtra_link').append(headline);
		var open_moxtra = "<h3><a id='getToken' href='javascript:start_meet();'>Moxtra Meet</a></h3>";
		var div_container = "<div id='meet-container'></div>";
		$('#moxtra_link').append(open_moxtra);
		$('#moxtra_link').append(div_container);
		$('#intro-line').addClass('hidden');
		$('#moxtra_link').fadeToggle('slow');
	});
});

//MEX button click
$(document).ready(function()
{
	$('#MEX_button').click(function()
	{
		$('.btn').addClass('hidden');
		$('#refresh').fadeToggle("slow");
		var from = getChosen();
		var headline = "<h3 style = 'padding-top: 2em'>Click to connect from " + from + " to Mexico.</p>";
		$('#moxtra_link').append(headline);
		var open_moxtra = "<h3><a id='getToken' href='javascript:start_meet();'>Moxtra Meet</a></h3>";
		var div_container = "<div id='meet-container'></div>";
		$('#moxtra_link').append(open_moxtra);
		$('#moxtra_link').append(div_container);
		$('#intro-line').addClass('hidden');
		$('#moxtra_link').fadeToggle('slow');
	});
});

//CAN button click
$(document).ready(function()
{
	$('#CAN_button').click(function()
	{
		$('.btn').addClass('hidden');
		$('#refresh').fadeToggle("slow");
		var from = getChosen();
		var headline = "<h3 style = 'padding-top: 2em'>Click to connect from " + from + " to Canada.</p>";
		$('#moxtra_link').append(headline);
		var open_moxtra = "<h3><a id='getToken' href='javascript:start_meet();'>Moxtra Meet</a></h3>";
		var div_container = "<div id='meet-container'></div>";
		$('#moxtra_link').append(open_moxtra);
		$('#moxtra_link').append(div_container);
		$('#intro-line').addClass('hidden');
		$('#moxtra_link').fadeToggle('slow');
	});
});

//JP button click
$(document).ready(function()
{
	$('#JP_button').click(function()
	{
		$('.btn').addClass('hidden');
		$('#refresh').fadeToggle("slow");
		var from = getChosen();
		var headline = "<h3 style = 'padding-top: 2em'>Click to connect from " + from + " to Japan.</p>";
		$('#moxtra_link').append(headline);
		var open_moxtra = "<h3><a id='getToken' href='javascript:start_meet();'>Moxtra Meet</a></h3>";
		var div_container = "<div id='meet-container'></div>";
		$('#moxtra_link').append(open_moxtra);
		$('#moxtra_link').append(div_container);
		$('#intro-line').addClass('hidden');
		$('#moxtra_link').fadeToggle('slow');
	});
});

//CN button click
$(document).ready(function()
{
	$('#CN_button').click(function()
	{
		$('.btn').addClass('hidden');
		$('#refresh').fadeToggle("slow");
		var from = getChosen();
		var headline = "<h3 style = 'padding-top: 2em'>Click to connect from " + from + " to China.</p>";
		$('#moxtra_link').append(headline);
		var open_moxtra = "<h3><a id='getToken' href='javascript:start_meet();'>Moxtra Meet</a></h3>";
		var div_container = "<div id='meet-container'></div>";
		$('#moxtra_link').append(open_moxtra);
		$('#moxtra_link').append(div_container);
		$('#intro-line').addClass('hidden');
		$('#moxtra_link').fadeToggle('slow');
	});
});



function appendChosen()
{
	var e = document.getElementById("choice");
    var strUser = e.options[e.selectedIndex].text;
    var newp = "<p style = 'color: #FFFFFF; padding-top: 2em'>You are chatting from " + strUser + ".</p>";
    $("#second").append(newp);
}
function getChosen()
{
	var e = document.getElementById("choice");
    var strUser = e.options[e.selectedIndex].text;
    return strUser;
}

function start_meet() {
            var meet_options = {
                iframe: true, //To open the meet in the same window within an iFrame.
                // tab: true, //To open the meet in a new browser tab, N/A if iframe option is set to true.
                tagid4iframe: "meet-container", //ID of the HTML tag within which the Meet window will show up. Refer https://developer.grouphour.com/moxo/docs-js-sdk/#meet
                iframewidth: "640px",
                iframeheight: "480px",
                extension: { 
                    "show_dialogs": { "meet_invite": true } 
                },
                start_meet: function(event) {
                    console.log("Meet Started - session_id: "+event.session_id+"session_key: "+event.session_key);
                    //Your application server can upload files to meet using the session_id and session_key
                },
                error: function(event) {
                    console.log("error code: " + event.error_code + " message: " + event.error_message);
                },
                end_meet: function(event) {
                    console.log("Meet Ended");
                }
            };
            Moxtra.meet(meet_options);
        };