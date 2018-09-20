$(document).ready(function(){
    $('.required-text').blur(function (){  //whenever you click off an input element
        console.log('blur cursor');
    enabelButton();
    if (!$(this).val()) 
        $(this).closest('.input-box').addClass('field-required');
    else 
        $(this).closest('.input-box').removeClass('field-required');
    });
    $('.required-text').keyup(function (){  //whenever you click off an input element
        console.log('KeyUp cursor');
        enabelButton();
        if (!$(this).val()) 
            $(this).closest('.input-box').addClass('field-required');
        else 
            $(this).closest('.input-box').removeClass('field-required');
        });
    /**
     *  Email validation
     */
    $('.required-email').blur(function ()  //whenever you click off an input element
    {
        if (!$(this).val() || !checkEmail()) //if it is blank. 	
            $(this).closest('.input-box').addClass('field-required');
     
        else {
            $('.email-error').css({ opacity: 0 });
            $(this).closest('.input-box').removeClass('field-required');
        }
    });
    /**
     * Age validation : between 15 and 60 
     * MaxLength 2 
     */
    $("#txtAge").keyup(function () {
        if ($('#txtAge').val() < 15 || $('#txtAge').val() > 60) {
            $(this).closest('.input-box').addClass('field-required');
        }
        else {
            $(this).closest('.input-box').removeClass('field-required');
        }
    });
    $('#txtAge').keydown(function(e) {
        if (this.value.length > 1) 
            if ( !(e.which == '46' || e.which == '8' || e.which == '13') ) // backspace/enter/del
                e.preventDefault();
    });
    $(".faq-menu").click(function(){
     //  $(".faq-list").css({'display':'block'});
       var x = document.getElementById("faq-list");
    if (x.style.display === "none") {
        x.style.display = "block";
      
    } else {
        x.style.display = "none";
    }
   });
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  /*  $('.header').height($(window).height());
    $(".navbar a").click(function(){
        $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)    
    });-*/

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
           // $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');


    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});