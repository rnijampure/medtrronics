

var TrId;
$(document).ready(function () {
    
    tableRe("./json/data.json")

    $('#qtr_status').on('change', function () {
        if ((this.value) == 0) {
            tableRe("./json/data0.json")
        }
        else if ((this.value) == 1) {
            tableRe("./json/data1.json")
        }
        else if ((this.value) == 2) {
            tableRe("./json/data3.json");
        }
        else if ((this.value) == 3) {
            tableRe("./json/data4.json");
        }
        else {
            tableRe("./json/data5.json");
        }
    });   
});
/* PR - Table changes start*/
$(document).ready(function (e) {
    var selectedValues = [];
    $('select.dropdownVal option:selected').each(function () {
        selectedValues.push($(this).text());
    });
    for (i = 0; i < selectedValues.length; i++) {
        if ( selectedValues[i] == "HM") {
            $('select.dropdownVal option[value="HM"]:selected').attr("selected", "selected");
            $('select.dropdownVal option[value="HM"]:selected').parent('select').css('background-color', '#77bc1f');
        }
        else if ( selectedValues[i] == "S") {
            $('select.dropdownVal option[value="S"]:selected').attr("selected", "selected");
            $('select.dropdownVal option[value="S"]:selected').parent('select').css('background-color', '#ffce00');
        }
        else if ( selectedValues[i] == "I") {
            $('select.dropdownVal option[value="I"]:selected').attr("selected", "selected");
            $('select.dropdownVal option[value="I"]:selected').parent('select').css('background-color', '#e35205');
        }
        else if ( selectedValues[i] == "X") {
            $('select.dropdownVal option[value="X"]:selected').attr("selected", "selected");
            $('select.dropdownVal option[value="X"]:selected').parent('select').addClass('white-dropdown');
        } 
    }
});
$(document).on('change', 'select', function () {
    if (this.value == "HM") {
        $(this).closest('td').css("background-color", '#fff');
        $(this).css('background-color', '#77bc1f').css('color','#333');
        $(this).removeClass('white-dropdown');
    }
    else if (this.value == "S") {
        $(this).closest('td').css("background-color", '#fff');
        $(this).css('background-color', '#ffce00').css('color','#333');
        $(this).removeClass('white-dropdown');
    }
    else if (this.value == "I") {
        $(this).closest('td').css("background-color", '#fff');
        $(this).css('background-color', '#e35205').css('color','#333');
        $(this).removeClass('white-dropdown');
    }
    else if (this.value == "X") {
        $(this).closest('td').css("background-color", '#fff');
        // $(this).css('color','#fff').css('background',"#001e46 url('images/down-white-arrow.png') no-repeat 30px center");
        $(this).css('color','#fff');
        $(this).addClass('white-dropdown').siblings().removeClass('white-dropdown');
    }
});
$(document).on('click', '.onclickTrTd', function () {
    if (this.tagName == "TH") {
        return false;
    }
   // window.location.href = "workflow.html"
    opencreateworkflow('Yes')
    TrId = $(this).closest('tr').attr('data-dt-row');
});
/*PR changes end */
function opencreateworkflow(flag)
{
    if(flag=="Yes"){
        window.location.href = "workflow.html?" + flag;
	}else{            
			window.location.href = "workflowCreate.html?" + flag;
		}
} 
function tableRe(dataJson) {
    $('table#tblCurrentQTR').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        destroy: true,
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        searching: false,
        fixedColumns: {
            leftColumns: 6
        },
        ajax: dataJson,
        "columnDefs": [
            {
                "targets": [10, 11],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        //data = '<a href="workflow.html?Yes"><u>' + data + '</u></a>';
						data = data;
                    }
                    return data;
                }
            },
            {
                "targets": [12, 13, 14, 15, 16, 17, 18, 19, 20],
                className: "plan-color",
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                       // data = '<select class="bootstrap-selectdropdown" data-width="auto" id="selectFY"><option>S</option><option>I</option><option>HM</option></select><div id="result"></div>';
                       data = '<select class="bootstrap-selectdropdown" data-width="auto" id="selectFY"><option value="I">I</option><option value="S">S</option><option value="HM">HM</option><option value="X">X</option></select><div id="result"></div>';
                    }
                    return data;
                }
            },
        ],
        columns: [
            {
                "data": "ii",
                className: "noBorder",
                "render": function (data, type, row) {
                    return '<img src="' + data + '" width="20"/>';
                }
            },
            {
                "data": "ID",
                className: "noBorder worlkFlowCls onclickTrTd"
            },
            {
                "data": "BU",
                className: "noBorder buCls onclickTrTd"
            },
            {
                "data": "GROUP",
                className: "noBorder groupCls onclickTrTd"
            },
            {
                "data": "WorkflowName",
                className: "noBorder worlkFlowCls onclickTrTd"
            },
            {
                "data": "LastUpdatedDate",
                className: "noBorder worlkFlowCls onclickTrTd",
            },
            {
                "data": "Q1",
                className: "pastquarter"
            },
            {
                "data": "Q2",
                className: "pastquarter"
            },
            {
                "data": "Q3",
                className: "pastquarter"
            },
            {
                "data": "Q4",
                className: "pastquarter"
            },
            {
                "data": "Q1",
                className: "pastquarter"
            },
            { 	"data": "Q2",
                className: "red-select onclickTrTd" 
			},
            { "data": "Q3" },
            { "data": "Q4" },
            { "data": "Q1" },
            { "data": "Q2" },
            { "data": "Q3" },
            { "data": "Q4" },
            { "data": "FY21" },
            { "data": "FY21" },
            { "data": "FY23" }
        ]
    });
    /* No transaction Table*/
    $('table#tblNoTransition').DataTable({
        destroy: true,
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        searching: false,
        fixedColumns: {
            leftColumns: 6
        },
        ajax: dataJson,
        "columnDefs": [
            {
                "targets": [10],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                       //data = '<a href="workflow.html?Yes"><u>' + data + '</u></a>';
					   data = data ;
                    }
                    return data;
                }
            },
            {
                "targets": [12, 13, 14, 15, 16, 17, 18, 19, 20],
                className: "plan-color",
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                      //  data = '<select class="bootstrap-selectdropdown" data-width="auto" id="selectFY"><option>S</option><option>I</option><option>HM</option></select><div id="result"></div>';
                      data = '<select class="bootstrap-selectdropdown" data-width="auto" id="selectFY"><option value="I">I</option><option value="S">S</option><option value="HM">HM</option><option value="X">X</option></select><div id="result"></div>';
                    }
                    return data;
                }
            },
        ],
        columns: [
            {
                "data": "ii",
                className: "noBorder",
                "render": function (data, type, row) {
                    return '<img src="' + data + '" width="20" />';
                }
            },

            {
                "data": "ID",
                className: "noBorder worlkFlowCls onclickTrTd"
            },
            {
                "data": "BU",
                className: "noBorder buCls onclickTrTd"
            },

            {
                "data": "GROUP",
                className: "noBorder groupCls onclickTrTd"
            },
            {
                "data": "WorkflowName",
                className: "noBorder worlkFlowCls onclickTrTd"
            },
            {
                "data": "LastUpdatedDate",
                className: "noBorder worlkFlowCls onclickTrTd",
            },
            {
                "data": "Q1",
                className: "pastquarter"
            },
            {
                "data": "Q2",
                className: "pastquarter"
            },
            {
                "data": "Q3",
                className: "pastquarter"
            },
            {
                "data": "Q4",
                className: "pastquarter"
            },
            {
                "data": "Q1",
                className: "pastquarter"
            },
            { 	"data": "Q2",
                className: "red-select onclickTrTd" 
			},
            { "data": "Q3" },
            { "data": "Q4" },
            { "data": "Q1" },
            { "data": "Q2" },
            { "data": "Q3" },
            { "data": "Q4" },
            { "data": "FY21" },
            { "data": "FY21" },
            { "data": "FY23" }
        ]
    });
}


$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    /*$('.selectpicker').selectpicker({
     noneSelectedText : 'ALL'
    });*/
    $('.selectpicker').selectpicker();
    var table = $('#quarterTable').DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        searching: false,
        fixedColumns: {
            leftColumns: 6
        }
    });
    var table = $('#notranstable').DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        searching: false,
        fixedColumns: {
            leftColumns: 6
        }
    });
    $('#createWorkID').on('click', function (ev) {
        $('#createWorkPopup').modal({
            show: 'true'
        });
    });

    $('#deactivateWorkflowID').on('click', function (ev) {
        $('#deactivateWorkflow').modal({
            show: 'true'
        });
    });

    $('#deleteworkId').on('click', function (ev) {
        $('#deleteworkflowitemConfirmation').modal({
            show: 'true'
        });
    });
});

$(document).ready(function () {
    //Autocomplete sites..
    var availableTags = ["Athlone","Augusta","Boulder","Brescia","Brooklyn park","Cameden","Cheshire","Chicopee","CMS","Crystal Lake","Culvar city","Danvers","Deggendorf",
        "Deland","Eatontown","Empalmme","Fort Worth","Fourmies","Fukuroi","Galway","Gammatron","Goleta", "Mediquip", "Littleton", "Jacksonville"
    ];
    $("#tags, #tags1, #tags2, #tagsCrtWrkFlw").autocomplete({
        source: availableTags
    });
	$("#tags3, #tagsCrtWrkFlw").on('change',function(){
        source: availableTags
    });
	
	//autocomplete onchange..
    $("#tags, #tags1, #tags2").on("autocompleteselect", function (event, ui) {
        console.log(ui.item.value);
        let Disabled = true;
        var selected_item = ui.item.value

        ///if($('#workflow_merged').css('display') == 'none')
        //{
        $('#workflow_merged').css("display", "block");

        //}
        if (selected_item.trim() != '') {
            Disabled = false
        } else {
            Disabled = true;
        }
        if (Disabled) {
            $('.toggle-disabled').prop("disabled", true);
            $('.toggle-disabled').removeClass("btn-primary");
        } else {
            $('.toggle-disabled').addClass("btn-primary");
            $('.toggle-disabled').prop("disabled", false);
        }
        var languages;
        //Multi select two side dropdown...
        if (selected_item == 'Athlone') {
            languages = [
                {
                    "language": "Workflow 1,  DAN100",
                    "value": 122
                },
                {
                    "language": "Workflow 2,  DAN102",
                    "value": 132
                },
                {
                    "language": "Workflow 3,  DAN103",
                    "value": 422
                },
                {
                    "language": "Workflow 4,  DAN04",
                    "value": 232
                }
            ];
        } else if (selected_item == 'Boulder') {
            languages = [
                {
                    "language": "Workflow 1,  DAN245",
                    "value": 122
                },
                {
                    "language": "Workflow 2,  DAN246",
                    "value": 132
                },
                {
                    "language": "Workflow 3,  DAN247",
                    "value": 422
                }
            ];
        } else {
            languages = [
                {
                    "language": "Workflow 1,  DAN345",
                    "value": 122
                },
                {
                    "language": "Workflow 2,  DAN346",
                    "value": 132
                },
                {
                    "language": "Workflow 3,  DAN347",
                    "value": 422
                },
                {
                    "language": "Workflow 4,  DAN348",
                    "value": 232
                },
                {
                    "language": "Workflow 5,  DAN349",
                    "value": 765
                },
                {
                    "language": "Workflow 6,  DAN341",
                    "value": 876
                }
            ];
        }
        var settings = {
            "inputId": "languageInput",
            "data": languages,
            "itemName": "language",
            "container": "transfer",
            "valueName": "value",
            "callable": function (data, names) {
                console.log("Selected ID：" + data)
            }
        };
        Transfer.transfer(settings);
    });

    var default_value = 0;
    var selected_value;
    initialQTRUpdate(default_value);
    initialTransionPlanned(default_value);
    initialWorkflowCount(default_value);
    initialWorkflowmaturity(default_value);

    //Clear-all filter and change graphs default...
    $('.clear-all').click(function () {

        $("#groups,#site,#sub_groups,#flag_test,#reportable").val(0);
        $("#groups,#site,#sub_groups,#flag_test,#reportable").selectpicker("refresh");

        initialQTRUpdate(default_value);
        initialTransionPlanned(default_value);
        initialWorkflowCount(default_value);
        initialWorkflowmaturity(default_value);
        $('.group_name').text("ALL");
    })

    //Group and business-unit selection filter...
    $('#sub_groups').change(function () {
        //selected_value = $(this).find("option:selected").text();
        selected_value = $(this).find("option:selected").val();

        //initialQTRUpdate(selected_value);
        initialTransionPlanned(selected_value);
        initialWorkflowCount(selected_value);
        initialWorkflowmaturity(selected_value);
    });
    //Group and business-unit &site selection filter...
    $('#site').change(function () {
        selected_value = $(this).val();
        initialWorkflowCount(selected_value);
        initialWorkflowmaturity(selected_value);
    });

    $('#qtr_status').change(function () {
        selected_value = $(this).val();
        initialQTRUpdate(selected_value);
    });
    $('#transition_planned').change(function () {
        selected_value = $(this).val();
        initialTransionPlanned(selected_value);
    });


    var optionValues = [];
    $('#sub_groups> option').each(function () {
        optionValues.push($(this).text());
    });
    $("#groups").change(function () {
        if (typeof $(this).data('options') === "undefined") {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#sub_groups option').clone());
        }
        var id = $(this).val();
        console.log(id);

        //initialQTRUpdate(id);
        initialTransionPlanned(id);
        initialWorkflowCount(id);
        initialWorkflowmaturity(id);
        var selected_text = $(this).find("option:selected").text();
        $('.group_name').text(selected_text);
        console.log("selected_text");
        console.log(selected_text);

        if (id != 0) {
            var options = $(this).data('options').filter('[value=' + id + ']');
            $('#sub_groups').html(options);
            $("#sub_groups").prepend('<option value="0" selected>' + "ALL" + '</option>');
            $("#sub_groups").selectpicker("refresh");

        } else {
            console.log("optlenth", optionValues)
            $('#sub_groups').html('')
            for (i = 0; i < optionValues.length; i++) {
                var data = '<option>' + optionValues[i] + '</option>'
                console.log('dataaa', data);
                $('#sub_groups').append(data);
            }
            $('#sub_groups').selectpicker("refresh");
        }

    });
    //$('#groups').trigger('change');

    //Pop-up level dropdown...
    $("#groups_DCF").change(function () {

        if (typeof $(this).data('options') === "undefined") {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#sub_groups_DCF option').clone());

        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');

        $('#sub_groups_DCF').html(options);
        $('#sub_groups_DCF').selectpicker('refresh');

    });
    $("#groups_ACQ").change(function () {
        if (typeof $(this).data('options') === "undefined") {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#sub_groups_ACQ option').clone());

        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');

        $('#sub_groups_ACQ').html(options);
        $('#sub_groups_ACQ').selectpicker('refresh');

    });
    $('#groups_ACQ').trigger('change');

    $("#groups_WF").change(function () {

        if (typeof $(this).data('options') === "undefined") {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#sub_groups_WF option').clone());

        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');

        $('#sub_groups_WF').html(options);
        $('#sub_groups_WF').selectpicker('refresh');

    });
    $('#groups_WF').trigger('change');


    //PDP
    $("#groups_PDP").change(function () {

        if (typeof $(this).data('options') === "undefined") {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#sub_groups_PDP option').clone());

        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[value=' + id + ']');

        $('#sub_groups_PDP').html(options);
        $('#sub_groups_PDP').selectpicker('refresh');

    });
    $('#groups_PDP').trigger('change');

    /*$(".dataTable tbody tr td a").on('click', function () {
        $('#transitionPending').modal({
            show: 'true'
        });
    });*/

    $('#opt-item').on('change', function () {

        if (this.value == "") {
            $("#businessDeactivate").hide();
        } else {
            $("#businessDeactivate").show();
        }
    });

    //Enable/disable on submit button...
    let Disabled = true;
    $("#transferred_workflow").on('change', function () {
        let value = this.value;

        if (value.trim() != '') {
            Disabled = false
        } else {

            Disabled = true;
            //return false
        }
        if (Disabled) {
            $('.toggle-disabled').prop("disabled", true);
            $('.toggle-disabled').removeClass("btn-primary");
        } else {
            $('.toggle-disabled').addClass("btn-primary");
            $('.toggle-disabled').prop("disabled", false);
        }
    });

    //After close modal in and out reset all field...
    $('#deactivateWorkFlow').on('hidden.bs.modal', function (e) {
        $("#businessDeactivate").hide();
        $(this)
            .find("input,textarea,select")
            .val('')
            .end()
            .find("input[type=checkbox], input[type=radio]")
            .prop("checked", "")
            .end();
    });


    //end//    
})

//Activateflow
$(document).ready(function () {
    $('#opt-itemworkflow').on('change', function () {
        if (this.value == '1') {
            $("#businessAqisition").show();
			//$("#showHideOnReasonCode").hide();
        }else {
            $("#businessAqisition").hide();
			//$("#showHideOnReasonCode").hide();
        }
    });
});
$(document).ready(function () {
    $('#opt-itemworkflow').on('change', function () {
        if (this.value == '2' || this.value == '4' || this.value == '5' ) {
            $("#businessSRT").show();
			//$("#showHideOnReasonCode").show();
        }else {
            $("#businessSRT").hide();
			//$("3showHideOnReasonCode").hide();
        }
    });
}); 
$(document).ready(function () {
    $('#opt-itemworkflow').on('change', function () {
        if (this.value == '0') {
            $("#PDP").hide();
        }else {
            $("#PDP").hide();
        }
    });
});
$(document).ready(function () {
    $('#opt-itemworkflow').on('change', function () {
        if (this.value == '3') {
            $("#WFmerger").show();
        }else {
            $("#WFmerger").hide();
        }
    });
});
function callDeactivate(){
	$('#deactivateWorkFlowConfirmation').modal({
            show: 'true'
            });
}

$(document).ready(function () {
  $('#confirmDeactivate').on('click', function () {
		$('#deactivateWorkFlowConfirmation').hide();
		$('#deactivateSuccessful').modal({
            show: 'true'
          });
    });
});
 
 $(document).ready(function () {
	//$("div").find("#text_resonCode").val('');
	//$("div").find("#count_message_reasoncode").val('');
    $('#selectedReasonCode').on('change', function () {
        if (this.value == '3' || this.value == '1') {
            $("#business").show();
			$("#resonCodeCommnet").hide();
        }
        else if (this.value == '2' || this.value == '4'){
            $("#business").hide();
			$("#resonCodeCommnet").show();	
			$("div").find("#text_resonCode").val('');
			$("div").find("#text_resonCode").val('');
			$('#count_message_reasoncode').html(0 + ' / ' + 140);
        }
    });
});
    

