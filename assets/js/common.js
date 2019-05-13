$(function () {

	$('.form__ingidient-button').on('click', function () {
		const template = $(".form__ingidient-wrapper").filter(':hidden')
		const clonedTemplate = template.clone(true)
		const closedIcon = clonedTemplate.find('.form__ingidient-close')
		const container = $(".form__ingridients")
		container.append(clonedTemplate)
		clonedTemplate.show()
		closedIcon.addClass('is-shown')
	});

	$(document).on('click', '.form__ingidient-close', function () {
		const that = $(this)
		const parent = that.closest('.form__ingidient-wrapper')
		parent.remove()
	});

	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$("#form").validate({
		rules: {
			title: "required",
			description: "required",
			imageURL: "required",
			instructions: "required",
			ingredient: "required",
		},
		messages: {
			title: "Please enter title",
			description: "Please enter description",
			imageURL: "Please provide image URL",
			instructions: "Please provide instructions",
			ingredient: "Please provide ingredient",
		}
	});

});