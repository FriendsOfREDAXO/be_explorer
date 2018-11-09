<?php
  
  if (rex::isBackend() && rex_be_controller::getCurrentPage() == 'be_explorer/explorer') { 

    rex_view::addCssFile( $this->getAssetsUrl('css/tinyfilemanager.css') );

    rex_view::addJsFile( $this->getAssetsUrl('js/tinyfilemanager.js') );    

  }
      
?>