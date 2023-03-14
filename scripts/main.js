$(document).ready(function () {

    $("#mycustomtab li").eq(0).css("background-color", "#DAECDB");
    $("#mycustomtab li").eq(1).css("background-color", "#f7e2fd");
    $("#mycustomtab li").eq(2).css("background-color", "#ffead0");
    $("#OBS").css("background-color", "#DAECDB");
    $("#FIS").css("background-color", "#f7e2fd");
    $("#FPL").css("background-color", "#ffead0");
    $("body").on("focus", "input", function (event) {
        $(this).attr('autocomplete', 'off')
    });

    $('.custom_tab li').click(function (e) {
        tab_selected = $(this).find('a').attr('href');
        switch (tab_selected) {
            case '#OBS':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $('.ui-tabs-active').css("background-color", "#DAECDB");
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#OBS').attr('aria-hidden', 'false');
                $('#OBS').css({
                    'display': 'block'
                });
                break;
            case '#FIS':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $('.ui-tabs-active').css("background-color", "#f7e2fd");
                $(this).addClass('ui-state-active');
                $('.ui-state-activ').css("background-color", "#f7e2fd");
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#FIS').attr('aria-hidden', 'false');
                $('#FIS').css({
                    'display': 'block'
                });
                break;
            case '#FPL':

                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $('.ui-tabs-active').css("background-color", "#ffead0");
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#FPL').attr('aria-hidden', 'false');
                $('#FPL').css({
                    'display': 'block'
                });
                break;
        }
    });

    // Form 
    $("#GBV").on("click", "input[type='radio']", function () {
        if ($(this).is(':checked')) {
            var value = $(this).val();
            //console.log('Radio button seleccionado: ' + value);
            rbselected(value);
        }
    });

    var oneyes = '<div id="oneyes" class="grdTb2-a1s"><div class="l1 lv1">If yes, did your clinic provide emergency contraception to survivors during this reporting period?</div><div class="ans"><input type="radio" name="q2" value="oneyes_y"><label for="Yes">Yes</label><input type="radio" name="q2" value="oneyes_n"><label for="No">No</label></div></div>'

    var oneyes_n = '<div id="oneyes-n" class="grdTb2-a4"><div class="l1 lv1">If no, why is this service not available?</div><div class="ansa"><input type="radio" name="q3" value="oneyes_n1"><label for="q31">National policy does not allow</label></div><div class="ansb"><input type="radio" name="q3" value="oneyes_n2"><label for="q32">No stock available</label></div><div class="ansc"><input type="radio" name="q3" value="oneyes_n3"><label for="q33">No trained staff</label></div><div class="ansd"><input type="radio" name="q3" value="oneyes_n4"><label for="ecnoq34">Other:</label><input /></div></div>'

    var oneno = '<div id="oneno" class="grdTb2-a1s"><div class="l1 lv1">If no, can your clinic support survivors to access emergency contraception elsewhere through a safe referral?</div><div class="ans">      <input type="radio" name="q4" value="onenoyes"><label for="Yes">Yes</label><input type="radio" name="q4" value="onenono"><label for="No">No</label></div></div>'

    var oneno_n = '<div id="oneno-n" class="grdTb2-a2"><div class="l1 lv3">If no, Why?</div><div class="ans1"><input type="radio" name="q5" value="oneno_n1"><label for="q5">No one in the area provides this service</label></div><div class="ans2"><input type="radio" name="q5" value="oneno_n2"><label for="q5">Other:</label><input /></div></div>'


    var twoyes = '<div id="twoyes" class="grdTb2-a1s"><div class="l1 lv1">If yes, did your clinic provide Post-Exposure Prophylaxis for HIV to survivors during this reporting period?</div><div class="ans"><input type="radio" name="q7" value="twoyes_y"><label for="Yes">Yes</label><input type="radio" name="q7" value="twoyes_n"><label for="No">No</label> </div></div>'

    var twoyes_n = '<div id="twoyes-n" class="grdTb2-a4"><div class="l1 lv1">If no, why is this service not available?</div><div class="ansa"> <input type="radio" name="q8" value="twoyes_n1"><label for="q81">National policy does not allow</label></div><div class="ansb"><input type="radio" name="q8" value="twoyes_n2"><label for="q82">No stock available</label></div><div class="ansc"><input type="radio" name="q8" value="twoyes_n3"><label for="q83">No trained staff</label></div><div class="ansd"><input type="radio" name="q8" value="twoyes_n4"><label for="q84">Other:</label><input /></div></div>'

    var twono = '<div id="twono" class="grdTb2-a1"><div class="l1 lv2">If no, can your clinic support survivors to access Post-Exposure Prophylaxis for HIV elsewhere  through a safe referral?</div><div class="ans"><input type="radio" name="q9" value="twono_y"><label for="Yes">Yes</label><input type="radio" name="q9" value="twono_n"><label for="No">No</label></div></div>'

    var twono_n = '<div id="twono-n" class="grdTb2-a2"><div class="l1 lv3">If no, Why?</div><div class="ans1"><input type="radio" name="q10" value="twono_n1"><label for="q10">No one in the area provides this service</label></div><div class="ans2"><input type="radio" name="q10" value="twono_n2"><label for="q10">Other:</label><input /></div></div>'

    function rbselected(rbsctd) {
        switch (rbsctd) {
            // Q1
            case 'oneyes':
                if (!$("#oneyes").length) {
                    $("#oneyes-n").remove();
                    $("#oneyes").remove();
                    $("#oneno").remove();
                    $("#oneno-n").remove();
                    $("#one").after(oneyes)
                    console.log('Radio button seleccionado: oneyes== ' + rbsctd);
                }
                break;
            case 'oneyes_y':
                if ($("#oneyes-n").length) {
                    $("#oneyes-n").remove();
                    $("#oneyes").remove();
                    $("#oneno").remove();
                    $("#oneno-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'oneyes_n':
                if (!$("#oneyes-n").length) {
                    $("#oneyes").after(oneyes_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'oneno':
                if (!$("#oneno").length) {
                    $("#oneyes").remove();
                    $("#oneyes-n").remove();
                    $("#one").after(oneno)
                }
                break;
            case 'onenoyes':
                if ($("#oneno-n").length) {
                    $("#oneno-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'onenono':
                if (!$("#oneno-n").length) {
                    $("#oneno").after(oneno_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            // Q2
            case 'twoyes':
                if (!$("#twoyes").length) {
                    $("#twoyes-n").remove();
                    $("#twoyes").remove();
                    $("#twono").remove();
                    $("#twono-n").remove();
                    $("#two").after(twoyes)
                    console.log('Radio button seleccionado: twoyes== ' + rbsctd);
                }
                break;
            case 'twoyes_y':
                if ($("#twoyes-n").length) {
                    $("#twoyes-n").remove();
                    $("#twono").remove();
                    $("#twono-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twoyes_n':
                if (!$("#twoyes-n").length) {
                    $("#twoyes").after(twoyes_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twono':
                if (!$("#twono").length) {
                    $("#twoyes").remove();
                    $("#twoyes-n").remove();
                    $("#two").after(twono)
                }
                break;
            case 'twono_y':
                if ($("#twono-n").length) {
                    $("#twono-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twono_n':
                if (!$("#twono-n").length) {
                    $("#twono").after(twono_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
        }
    }
});

$(document).off('dhis2.de.event.formLoaded').on('dhis2.de.event.formLoaded', function () {
    if ($("#CustomForm").length > 0) {
        $("#tabs").tabs();
        $("#CustomForm_Content").hide();
        $("#loaderDiv").show();

        new MPHDTranslation(function () {
            $("#loaderDiv").hide();
            $("#CustomForm_Content").show();
        });
    }

    // ============================================================================================================
    // GCACITranslation

    function MPHDTranslation(_exeFunc) {
        var me = this;

        me.exeFunc = _exeFunc;

        me.optionSetTermId = "P88VKdNPi28";

        me.loadedDataSetElementList = false;
        me.loadedOptionSetList = false;

        me.OPTION_KEY = "opt_c";


        // ----------------------------------------------------------------------------------------------
        // URLs

        me.QUERY_URL_TERMS = "../api/optionSets/" + me.optionSetTermId +
            ".json?fields=options[code,displayName]&paging=false";


        // ----------------------------------------------------------------------------------------------
        // HTML Element


        me.tableTag = $("body");

        // ----------------------------------------------------------------------------------------------
        // Init method

        me.init = function () {
            console.log("INIT translation ... ");
            me.translateOptionSetList();
        }

        // ----------------------------------------------------------------------------------------------
        // Supportive methods

        me.translateOptionSetList = function () {
            var url = encodeURI(me.QUERY_URL_TERMS);
            me.loadMetadata(url, function (response) {

                var options = response.options;
                for (var j in options) {
                    var option = options[j];
                    var value = option.displayName;
                    me.tableTag.find("[keyword='" + me.OPTION_KEY + ":" + option.code + "']").html(value);
                }

                me.exeFunc();
            });
        }

        me.loadMetadata = function (url, exeFunc) {
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json;charset=utf-8",
                beforeSend: function (xhr) {
                    //me.hideReportTag();
                },
                success: function (response) {
                    exeFunc(response);
                }
            });

        }


        // ----------------------------------------------------------------------------------------------
        // init

        me.init();

    }
});