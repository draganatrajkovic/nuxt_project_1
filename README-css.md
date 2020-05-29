COLORS
1) $mainColor (violet #2e2b3d)
2) $lightColor (yellow #ffd86a)
3) $neutralColor (gray #b6b8bc)
4) $darkColor (dark viiolet #191723)

BOX
1) box
    i) box - (img left, text right)
    ii) box--reverse (img right, text left)
2) box--column (flex-direction: column;)

BOX SECTION
1) box__section (flex-direction: column)
2) box__section--inline (flex-direction: row)
3) box__img

TITLES
1) title 
    i) title (45px, mainColor, CircularStd-Med, bold)
    ii) title--white (white)
    iii) title--cover (56px)
    iiii) title--cover--white (white, 50px)
2) section-title
    i) 

TEXT
1) text 
    i) text (Lato, light, 20px, mainColor)
    ii) text--white (white)
    iii) text--bold (bold)

BUTTONS
1) btn 
    i) btn - (bg-color: mainColor, color: white, 14px, uppercase, Lato font, icon:'plus', icon-position: left)
    ii) btn btn--squares-icon (icon: 'squares', icon-position: left)
    iii) btn btn--no-bg (bg-color: transparent, icon-position: left)
    iiii) btn btn--reverse-icon (icon-position: right)

LINKS
1) nav-link
    i) nav-link - (Lato, bold, 14px, mainColor, uppercase, no-border)
    ii) nav-link :hover (border-specific)
2) link
    i) link (Lato, regular, 14px, mainColor)
    ii) link :hover - (underline)
    iii) link--white -  (white)

DROP DOWN
    2) drop-down (icon + text + arrow + bored-bottom)
        i) drop-down (Lato, bold, 20px, mainColor, border-bottom: default)
        ii) drop-down :hover (border-bottom: specific-modified)
    1) drop-down--nav

LISTS
1) list (block)

1) list-element (Lato, regular, 20px, mainColor, bullets: yellow circle)
2) list-element--no-bullets 
    i) list-element--no-bullets  (neutralColor, CircularStd-Med, 26px, bg-color: transparent, border-bottom)
    ii) list-element--no-bullets :selected (mainColor, bg-color: lightColor, border-bottom: none)

BORDER-BOTTOM
1) border-bottom (mainColor, 1px, border-bottom)
2) border-bottom--spec
    i) border-bottom--spec (3px, gradient(orange, white, blue))
    ii) border-bottom--spec--arrow (buttom/under arrow)

PAGINATION
1) pagination (arrows black, circle black, dots between, color: neutralColor)
    i) pagination :hover (arrows black - circle colorful)
    ii) pagination :selected page (color: mainColor)
2) pagination--white (arrows white, circles white )
    i) pagination--white :hover (circles colorful)
    ii) pagination--white :selected (dot white)
2) pagination--numbers (numbers between)


//////////////////////////////////////////////////////////
HEADER
1) bg-color: #eff2f4
2) text - ...............with other-links regular setting
3) .link

NAV
1) logo
2) .btn .btn--squares-icon
3) .nav-link
4) search icon

COVER PAGE
1) bg-image
2) .title
3) .btn

YOUR PROJECT PAGE
1) .box--column
2) .title
3) .text
4) .drop-down

DESIGNED TO
1) .box--reverse
2) ....................title 36px
3) .text
4) .list-element 
5) ....................title 22px bold
6) ....................text 22px regular
7) .btn .btn--reverse-icon

ABOUT ASL PAGE
1) .box
2) img
3) .title
4) .text

OUR STORY PAGE
1) .box--column
2) .title--white
3) img
4) ....................subtitle - title 24xp
5) .text
6) .pagination--white
7) bg-color - $darkColor

THE LUMINARIES PAGE
1) .box
2) .title 
3) .pagination
4) .text
5) img
6) .list-element--no-bullets 
7) .text

TEAM PAGE
1) .title 
2) img
3) ....................title 30px
4) ....................text 18px

EXPERIENCE DESIGN PAGE
1) bg-color - $lightColor
2) bg-image
3) .title 
4) .text
5) .btn .btn--reverse-icon

FOOTER
1) bg-color - $darkColor
2) img
3) 
