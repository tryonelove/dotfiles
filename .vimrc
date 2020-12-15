call plug#begin(expand('~/.vim/plugged'))
Plug 'arcticicestudio/nord-vim'
Plug 'vim-airline/vim-airline'
call plug#end()

colorscheme nord
set number
let g:airline_powerline_fonts = 1
