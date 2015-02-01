function toggleChevron(e) {
    $(e.target)
        .prev('h3.contest-rule')
        .find('i.glyphicon')
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
}
$('.collapse').on('hidden.bs.collapse', toggleChevron);
$('.collapse').on('shown.bs.collapse', toggleChevron);
