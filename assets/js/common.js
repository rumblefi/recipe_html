$(function() {

	$('.form').on('submit', function (event) {
		event.preventDefault()
	});	

	$('.form__ingidient-button').on('click', function () {
		const template = $(".form__ingidient-wrapper").filter(':hidden')
		const clonedTemplate = template.clone(true)
		const closedIcon = clonedTemplate.find('.form__ingidient-close')
		const container = $(".form__ingridients")
		container.append( clonedTemplate )
		clonedTemplate.show()
		closedIcon.addClass('is-shown')
	});

	$(document).on('click','.form__ingidient-close',function () {
		const that = $(this)
		const parent = that.closest('.form__ingidient-wrapper')
		parent.remove()
	});

});
