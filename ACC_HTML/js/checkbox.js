 

 $(document).ready(function(){$(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green",});$("#external-events div.external-event").each(function(){var d={title:$.trim($(this).text())};$(this).data("eventObject",d);$(this).draggable({zIndex:999,revert:true,revertDuration:0})});
});
 	
 
 	