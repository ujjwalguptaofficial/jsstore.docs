var SearchData = [];

function onPageLoaded() {
    $('#btnMenuToggle').click(function () {
        $('#divMenuContainer').addClass('show-menu').animate({
            left: '0px'
        }, 300);
        $('body').css('overflow', 'hidden').
        append('<div id="sidenav-overlay" style="opacity: 1;" class=""></div>');

    }).addClass('hide-on-large-only').removeClass('hide');
    $('body').on('click', '#sidenav-overlay', function () {
        $('#divMenuContainer').animate({
            left: '-300px'
        }, 300, function () {
            $(this).removeClass('show-menu');
            $('#sidenav-overlay').remove();
            $('body').css('overflow', 'auto')
        });
    });
    var ActiveElement = $('#hidActiveLink').val();
    $('#divMenuContainer ul li').each(function () {
        if ($(this).text().toLowerCase() == ActiveElement) {
            $(this).addClass('link-active');
            return false;
        }
    });

    $('.btnNext').click(function () {
        var NextElement = $('#divMenuContainer ul li.link-active').next();
        if (NextElement.length > 0) {
            window.location.href = NextElement.find('a').attr('href');
        }
    });

    var MenuList = $('#divMenuContainer ul'),
        ContentContainer = $('#divTutorialContent');
    if (ContentContainer.height() > MenuList.height()) {
        MenuList.height(ContentContainer.height());
    }

    $('#txtSearch').keyup(function () {
        var Text = $(this).val().toLowerCase();
        if (Text.length > 0) {
            var FilterData = SearchData.filter(function (item) {
                    return item.Text.indexOf(Text) >= 0;
                }),
                Html = '';
            FilterData.forEach(function (item) {
                Html += '<a href=' + item.Value + '>' + item.Text + '</a>';
            })
        }
        $('.search-results').html(Html);
    });
    $('#divMenuContainer ul li a').each(function () {
        var Element = $(this);
        SearchData.push({
            Text: Element.text().toLowerCase(),
            Value: Element.attr('href')
        });
    });
}