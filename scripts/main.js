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

    // Form ansewer Show hide
    $('input[type="radio"]').click(function () {
        if ($(this).is(':checked')) {
            var value = $(this).val();
            rbselected(value);
        }
    });

    function rbselected(rbsctd) {
        switch (rbsctd) {
            case 'ecYes':
                console.log('Radio button seleccionado: ' + rbsctd);
                break;
            case 'ecNo':
                console.log('Radio button seleccionado: ' + rbsctd);
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