/*Rain Machine Code for JS Starts*/
$( document ).ready(function() {
   

	function runLightning(){
		$('#one, #two, #three, #four, #five, #six, #seven, body, body.dusk').addClass('bolt-active');
		
	}

	function resetLightning(){
		$('#one, #two, #three, #four, #five, #six, #seven, body, body.dusk').removeClass('bolt-active');
		$('.lightning-button').prop('disabled', false);
	}

	$('.lightning-button').on('click', function(){
		runLightning();
		setTimeout(resetLightning, 5000);
		$(this).prop('disabled', true);
	})

	$('#no-rain-radio').on('click', function(){
		$('#svg_1, #svg_2, #svg_3, #svg_4, #svg_5, #svg_6, #svg_7, #svg_8, #svg_9, #svg_10, #svg_11, #svg_12, #svg_13, #svg_14, #svg_15, #svg_16, #svg_17, #svg_18, #svg_19, #svg_20, #svg_21').removeClass('animated');
		$('#light-rain-radio')
	});

	$('#light-rain-radio').on('click', function(){
		$('#rain-back #svg_1, #rain-back #svg_2, #rain-back #svg_3, #rain-back #svg_4, #rain-back #svg_5, #rain-back #svg_6, #rain-back #svg_7, #rain-back #svg_8, #rain-back #svg_9, #rain-back #svg_10, #rain-back #svg_11, #rain-back #svg_12, #rain-back #svg_13, #rain-back #svg_14, #rain-back #svg_15, #rain-back #svg_16, #rain-back #svg_17, #rain-back #svg_18, #rain-back #svg_19, #rain-back #svg_20, #rain-back #svg_21, #rain-middle #svg_1, #rain-middle #svg_2, #rain-middle #svg_3, #rain-middle #svg_4, #rain-middle #svg_5, #rain-middle #svg_6, #rain-middle #svg_7, #rain-middle #svg_8, #rain-middle #svg_9, #rain-middle #svg_10, #rain-middle #svg_11, #rain-middle #svg_12, #rain-middle #svg_13, #rain-middle #svg_14, #rain-middle #svg_15, #rain-middle #svg_16, #rain-middle #svg_17').addClass('animated');
		$('#rain-forward #svg_1, #rain-forward #svg_2, #rain-forward #svg_3, #rain-forward #svg_4, #rain-forward #svg_5, #rain-forward #svg_6, #rain-forward #svg_7, #rain-forward #svg_8, #rain-forward #svg_9, #rain-forward #svg_10, #rain-forward #svg_11, #rain-forward #svg_12, #rain-forward #svg_13, #rain-forward #svg_14, #rain-forward #svg_15, #rain-forward #svg_16, #rain-forward #svg_17').removeClass('animated');
	});

	$('#heavy-rain-radio').on('click', function(){
		$('#svg_1, #svg_2, #svg_3, #svg_4, #svg_5, #svg_6, #svg_7, #svg_8, #svg_9, #svg_10, #svg_11, #svg_12, #svg_13, #svg_14, #svg_15, #svg_16, #svg_17, #svg_18, #svg_19, #svg_20, #svg_21').addClass('animated');
	$('#label-night').removeClass('highlighted');
		$('#label-dusk').addClass('highlighted');
		$('body').addClass('dusk');});

	$('#no-rain-radio').on('click', function(){
		$('#label-light-rain, #label-heavy-rain').removeClass('highlighted');
		$('#label-no-rain').addClass('highlighted');
	});

	$('#light-rain-radio').on('click', function(){
		$('#label-no-rain, #label-heavy-rain').removeClass('highlighted');
		$('#label-light-rain').addClass('highlighted');
	});

	$('#heavy-rain-radio').on('click', function(){
		$('#label-no-rain, #label-light-rain').removeClass('highlighted');
		$('#label-heavy-rain').addClass('highlighted');
	});

	$('#light-night').on('click', function(){
		$('#label-dusk').removeClass('highlighted');
		$('#label-night').addClass('highlighted');
		$('body').removeClass('dusk');
	});

	$('#light-dusk').on('click', function(){
		$('#label-night').removeClass('highlighted');
		$('#label-dusk').addClass('highlighted');
		$('body').addClass('dusk');
	});
});
/*Rain Machine Code for JS Ends*/